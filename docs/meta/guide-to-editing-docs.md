---
layout: default
title: Guide to Editing Docs
parent: Meta
nav_order: 1
permalink: /docs/meta/guide-to-editing-docs
---

# Guide to Editing Docs

This page explains how to contribute to the HardLight Development Wiki.

## Prerequisites

- A [GitHub](https://github.com) account
- Basic familiarity with [Markdown](https://www.markdownguide.org/)
- (Optional) A local Ruby + Jekyll setup for previewing changes

## Editing on GitHub

The simplest way to contribute is directly through the GitHub web interface:

1. Navigate to the page you want to edit.
2. Click **Edit this page** in the footer (if enabled), or find the file in the repository.
3. Make your changes in the Markdown editor.
4. Scroll down and click **Propose changes**.
5. Open a Pull Request describing what you changed and why.

## Running Locally

To preview docs locally before submitting:

```bash
# Clone the repo
git clone https://github.com/okdamsam/hardlight-docs.git
cd hardlight-docs

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve
```

Then open `http://localhost:4000` in your browser.

## Page Front Matter

Every page must have a YAML front matter block at the top:

```yaml
---
layout: default
title: My Page Title
parent: Parent Section   # optional, for nested pages
nav_order: 1             # controls order in the sidebar
permalink: /docs/section/my-page
---
```

## Adding a New Page

1. Create a `.md` file in the appropriate `docs/` subfolder.
2. Add the front matter block (see above).
3. Write your content in Markdown below the front matter.
4. Add it to the sidebar by setting the correct `parent` and `nav_order`.

## Style Guidelines

- Use **sentence case** for headings (not Title Case).
- Keep pages focused on a single topic.
- Use callout blocks for important notes:

```markdown
{: .note }
This is a note callout.

{: .warning }
This is a warning callout.

{: .important }
This is an important callout.
```

{: .note }
When in doubt, look at existing pages for formatting examples.
