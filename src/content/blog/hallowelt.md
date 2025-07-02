---
title: "Mein erster Blog-Beitrag"
description: "Ein Beispiel für einen Blog-Post mit Astro 5 und Content Collections"
pubDate: 2025-06-30
image: "/blog/ashes_cover.webp"
draft: false
---

# Willkommen zu meinem Blog!

Das ist mein erster Beitrag, erstellt mit **Astro 5** und den neuen Content Collections.

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