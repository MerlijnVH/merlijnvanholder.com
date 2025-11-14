---
date: '2025-11-14'
draft: false
title: 'Hello World'
categories:
- Personal
---

I've been wanting to bring my website back for a while now, having been less active on social media these years. In an era of brain rot, the time has come we return to the personal website & blog.

The annual bill for my webhosting was substantial, leading me to cancel it at some point. My previous websites were usually made with Wordpress, which provides a nice back-end for managing content. However, the requirement for PHP, a MySQL database, and ideally frequent updates to keep everything secure always felt too bloated for me.

I've now moved over to [Hugo](https://gohugo.io/), a static site generator. All your assets are pre-compiled locally before it goes online, which means even your [GitHub](https://github.com/) repository can now be your webhost. Simple _and_ free. I'll be moving some of my old content over gradually.

If you're using Windows, all it takes is a few commands through PowerShell.

```PowerShell {style=catppuccin-frappe}
> winget install Hugo.Hugo
> hugo new site my-website
> cd my-website
> hugo new content/posts/hello-world.md
> hugo server # Starts a server at localhost:1313
```

Hugo's local server provides hot reloading, allowing you to see changes without having to refresh your browser. A huge (hugo?) W.

Being able to write content in [Markdown](https://www.markdownguide.org/cheat-sheet/) was one of the main attraction points to me. Simple, clean, and no metadata gunking up your files from WYSIWYG editors. VSCode and most other IDE's can preview it, too.

One thing you learn getting older is that simplicity beats complexity, any day of the week. Sure, big frameworks are fun. If you have many of them however, maintaining and updating them all, is not.

That's why I hope to show some of my work and write more about [Godot](https://godotengine.org/) in the future, the simple yet powerful game engine that rekindled my love for game development.

See you around, stranger. 👋