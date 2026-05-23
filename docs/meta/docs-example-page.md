---
layout: default
title: Docs Example Page
parent: Meta
nav_order: 2
permalink: /docs/meta/docs-example-page
---

# Docs Example Page

This page demonstrates the Markdown and formatting features available in these docs.

## Headings

Use `#` for H1, `##` for H2, `###` for H3, and so on. H1 is for the page title only; use H2 and below for sections.

## Text Formatting

- **Bold** — `**bold**`
- *Italic* — `*italic*`
- `Inline code` — `` `inline code` ``
- ~~Strikethrough~~ — `~~strikethrough~~`

## Callouts

{: .note }
This is a **note** callout. Use it for supplementary information.

{: .warning }
This is a **warning** callout. Use it for things that might break something.

{: .important }
This is an **important** callout. Use it for critical information.

## Code Blocks

~~~csharp
// C# example
public class MyComponent : Component
{
    [DataField]
    public int Value = 0;
}
~~~

~~~yaml
# YAML example
- type: MyComponent
  value: 42
~~~

## Tables

| Column A | Column B | Column C |
|:---------|:--------:|----------:|
| Left     | Center   | Right     |
| foo      | bar      | baz       |

## Lists

Unordered:
- Item one
- Item two
  - Nested item

Ordered:
1. First step
2. Second step
3. Third step

## Links

- Internal: `[Guide to Editing Docs](guide-to-editing-docs)`
- External: `[Markdown Guide](https://www.markdownguide.org/)`
