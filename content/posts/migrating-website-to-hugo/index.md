---
date: '2025-11-14'
draft: false
title: 'Migrating Website To Hugo'
categories:
- Personal
---

I've wanted to bring my website back for a while, especially as I've become less active on social media. In an era of endless feeds and brain rot, returning to a personal website and blog feels right.

The annual web hosting bill added up, so I eventually cancelled it. I used to run WordPress, which does offer a nice back-end for managing content. But needing PHP, a MySQL database, and frequent updates to keep things secure always felt too heavy for my needs.

![Hugo](media/hugo-logo-wide.svg)

I've moved to [Hugo](https://gohugo.io/), a static site generator. Assets are precompiled locally before deployment, and a [GitHub](https://github.com/) repository can host the site. Simple _and_ free. I'll gradually move some of my old blog posts over.

If you're on Windows, it takes just a few PowerShell commands:

```powershell {style=catppuccin-frappe}
winget install Hugo.Hugo
hugo new site my-website
cd my-website
hugo new content/posts/hello-world/index.md
hugo server # Starts a server at http://localhost:1313
```

Hugo's local server provides hot reloading, so you can see changes without refreshing your browser. A huge (hugo?) win.

Writing in [Markdown](https://www.markdownguide.org/cheat-sheet/) is one of the main draws: simple, clean, and no WYSIWYG metadata cluttering the install. Visual Studio Code and most other IDEs can preview it, too.

One thing you learn as you get older: simplicity beats complexity. Big frameworks are fun; maintaining a pile of them is not.

I plan to share more of my work and write about [Godot](https://godotengine.org/), the simple yet powerful game engine that rekindled my love for making games.

See you around, stranger. 👋