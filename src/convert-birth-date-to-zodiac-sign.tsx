import { Icon, List } from "@raycast/api";
import { useState, useMemo } from "react";
import { getZodiacSign, parseDate, formatDateRange } from "./utils";
import { elementColor, SignDetail, SignActions } from "./sign-detail";

export default function Command() {
  const [searchText, setSearchText] = useState("");

  const { zodiac, date, isEmpty } = useMemo(() => {
    const trimmed = searchText.trim();
    const empty = trimmed === "";
    const parsed = parseDate(searchText);
    const zodiac = parsed ? getZodiacSign(parsed.getMonth() + 1, parsed.getDate()) : null;
    return {
      zodiac,
      date: parsed ?? null,
      isEmpty: empty,
    };
  }, [searchText]);

  const emptyView = isEmpty ? (
    <List.EmptyView
      icon={Icon.Calendar}
      title="Enter a birth date"
      description="Try: March 21 · 3/21 · 21 March · today · yesterday"
    />
  ) : (
    <List.EmptyView
      icon={Icon.ExclamationMark}
      title="Unrecognized date format"
      description="Try: March 21, 3/21, 21 March, or 2024-03-21"
    />
  );

  const formattedDate = date
    ? date.toLocaleDateString(undefined, { month: "short", day: "numeric" })
    : undefined;

  return (
    <List
      onSearchTextChange={setSearchText}
      searchBarPlaceholder="Enter a birth date (e.g. March 21)"
      throttle
      isShowingDetail={!!zodiac}
    >
      {zodiac ? (
        <List.Item
          icon={{ source: Icon.Stars, tintColor: elementColor(zodiac.element) }}
          title={`${zodiac.symbol}  ${zodiac.name}`}
          subtitle={formatDateRange(zodiac)}
          accessories={[
            { tag: { value: zodiac.element, color: elementColor(zodiac.element) } },
            ...(formattedDate ? [{ icon: Icon.Calendar, text: formattedDate }] : []),
          ]}
          detail={<SignDetail sign={zodiac} />}
          actions={<SignActions sign={zodiac} />}
        />
      ) : (
        emptyView
      )}
    </List>
  );
}
