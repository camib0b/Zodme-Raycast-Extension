import { ActionPanel, Action, List, Color } from "@raycast/api";
import { formatDateRange, type ZodiacSign, type Element } from "./utils";

export function elementColor(element: Element): Color {
  switch (element) {
    case "Fire":
      return Color.Red;
    case "Earth":
      return Color.Green;
    case "Air":
      return Color.Blue;
    case "Water":
      return Color.Purple;
  }
}

export function buildMarkdown(sign: ZodiacSign): string {
  const traits = sign.traits.map((t) => `\`${t}\``).join("  ");
  const strengths = sign.strengths.map((s) => `• ${s}`).join("\n");
  const challenges = sign.challenges.map((c) => `• ${c}`).join("\n");
  const compatible = sign.compatible.join(" · ");
  const challenging = sign.challenging.join(" · ");

  return `
# ${sign.symbol} ${sign.name}

${sign.description}

---

### Personality Traits
${traits}

### Strengths
${strengths}

### Challenges
${challenges}

### Compatibility
**Best with:** ${compatible}
**More challenging with:** ${challenging}
`.trim();
}

export function SignDetail({ sign }: { sign: ZodiacSign }) {
  return (
    <List.Item.Detail
      markdown={buildMarkdown(sign)}
      metadata={
        <List.Item.Detail.Metadata>
          <List.Item.Detail.Metadata.Label title="Sign" text={`${sign.symbol} ${sign.name}`} />
          <List.Item.Detail.Metadata.Label title="Date Range" text={formatDateRange(sign)} />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.TagList title="Element">
            <List.Item.Detail.Metadata.TagList.Item text={sign.element} color={elementColor(sign.element)} />
          </List.Item.Detail.Metadata.TagList>
          <List.Item.Detail.Metadata.Label title="Modality" text={sign.modality} />
          <List.Item.Detail.Metadata.Label title="Ruling Planet" text={sign.rulingPlanet} />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.TagList title="Best Matches">
            {sign.compatible.map((s) => (
              <List.Item.Detail.Metadata.TagList.Item key={s} text={s} />
            ))}
          </List.Item.Detail.Metadata.TagList>
          <List.Item.Detail.Metadata.TagList title="More Challenging">
            {sign.challenging.map((s) => (
              <List.Item.Detail.Metadata.TagList.Item key={s} text={s} color={Color.SecondaryText} />
            ))}
          </List.Item.Detail.Metadata.TagList>
        </List.Item.Detail.Metadata>
      }
    />
  );
}

export function SignActions({ sign }: { sign: ZodiacSign }) {
  return (
    <ActionPanel>
      <Action.CopyToClipboard title="Copy Sign Name" content={`${sign.symbol} ${sign.name}`} />
      <Action.CopyToClipboard title="Copy Full Profile" content={buildMarkdown(sign)} />
      <Action.CopyToClipboard title="Copy Description" content={sign.description} />
      <Action.CopyToClipboard title="Copy Date Range" content={formatDateRange(sign)} />
    </ActionPanel>
  );
}
