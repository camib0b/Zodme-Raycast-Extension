import { Icon, List, Color } from "@raycast/api";
import { useState, useMemo } from "react";
import { ZODIAC_SIGNS, formatDateRange } from "./utils";
import { elementColor, SignDetail, SignActions } from "./sign-detail";

// This file is basically a filterable catalog of the 12 signs.

export default function command() {
    // searchText holds whatever the user types in the search bar
    const [searchText, setSearchText] = useState("");


    // filteredSigns recalculates whenever the search text changes
    const filteredSigns = useMemo(() => {
        const query = searchText.trim().toLowerCase();
        if (!query) return ZODIAC_SIGNS; // no search → show all

        return ZODIAC_SIGNS.filter((sign) => {
            // Build a big string of everything searchable
            const haystack = [
            sign.name,
            sign.element,
            sign.modality,
            sign.rulingPlanet,
            ...sign.traits,
            ...sign.compatible,
            ].join(" ").toLowerCase();
            return haystack.includes(query); // keep only matches
        });
        }, [searchText]);

    return (
        <List
            onSearchTextChange={setSearchText}
            searchBarPlaceholder="Filter by name, element, planet, traits…"
            throttle
            isShowingDetail // always show the right-hand detail panel
        >
            {filteredSigns.length == 0 ?
                (
                    <List.EmptyView
                        icon={Icon.MagnifyingGlass}
                        title="No matching signs"
                        description="Try a different name, element, or trait"
                    />
                ) :
                (
                    filteredSigns.map((sign) => (
                        <List.Item
                        key={sign.name}
                        icon={{ source: Icon.Stars, tintColor: elementColor(sign.element) }}
                        title={`${sign.symbol}  ${sign.name}`}
                        subtitle={formatDateRange(sign)}
                        accessories={[
                            { tag: { value: sign.element, color: elementColor(sign.element) } },
                            { tag: { value: sign.modality, color: Color.SecondaryText } },
                        ]}
                        detail={<SignDetail sign={sign} />}
                        actions={<SignActions sign={sign} />}
                        />
                    ))
                )}
        </List>
    );
}
