import type { ReactNode } from "react";
import { siteConfig } from "./config";

// Tiny inline markup used across lib/config.ts text fields:
//   **bold**, _italic_, __underline__, [label](https://example.com)
// Also expands the {name} token to siteConfig.name, so your name only has
// to be typed once (in siteConfig.name) even though it shows up in every
// publication's author list.
const INLINE_PATTERN =
  /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|__([^_]+)__|_([^_]+)_/g;

export function renderInline(rawText: string): ReactNode[] {
  const text = rawText.replaceAll("{name}", siteConfig.name);
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  INLINE_PATTERN.lastIndex = 0;
  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const [, linkLabel, linkHref, bold, underline, italic] = match;
    if (linkLabel !== undefined) {
      nodes.push(
        <a key={key++} href={linkHref}>
          {linkLabel}
        </a>,
      );
    } else if (bold !== undefined) {
      nodes.push(<b key={key++}>{bold}</b>);
    } else if (underline !== undefined) {
      nodes.push(<u key={key++}>{underline}</u>);
    } else if (italic !== undefined) {
      nodes.push(<i key={key++}>{italic}</i>);
    }

    lastIndex = INLINE_PATTERN.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
