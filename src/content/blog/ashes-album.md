---
title: "Ashes"
description: "My new album Ashes will be released this July"
pubDate: 2025-06-30
image: "/blog/ashes_cover.webp"
draft: false
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2120639838&color=%238b8080&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/logic-moon" title="Logic Moon" target="_blank" style="color: #cccccc; text-decoration: none;">Logic Moon</a> · <a href="https://soundcloud.com/logic-moon/ascent-chitra" title="Ascent" target="_blank" style="color: #cccccc; text-decoration: none;">Ascent</a></div>

## Was macht Astro besonders?

Astro bietet mehrere Vorteile:

- Ultraschnelle Performance durch statische HTML-Generierung
- Islands-Architektur für selektive Hydration
- Unterstützung für verschiedene Frontend-Frameworks
- Integrierte Content Collections für typsichere Inhalte

## Code-Beispiel

```javascript
const posts = await getCollection('blog');
const sortedPosts = posts.sort((a, b) => 
  b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);
```

## Nächste Schritte

In kommenden Beiträgen werde ich weitere Features von Astro erkunden und zeigen, wie man moderne Websites damit erstellt.

> Diese Website nutzt Astro 5 mit Content Collections für eine optimale Entwicklererfahrung!