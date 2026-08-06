---
title: "Blender Map Scraper"
slug: blender-map-scraper
order: 0.1
year: "2024"
short_desc: "A Blender addon that imports Google 3D cities, OpenStreetMap data, and terrain, allowing users to convert terrain into 3D printable objects."
medium: "Blender Addon<br>Python"
icon: "✦"
thumb: assets/images/project-blender-map-scraper/bms2.jpg
hero_video: assets/images/project-blender-map-scraper/output.mp4
hero_image: assets/images/project-blender-map-scraper/bms2.jpg
hero_alt: "A 3D city imported into Blender."
meta:
  - "Medium: Blender Addon"
  - "Role: Lead Developer"
images:
  - src: assets/images/project-blender-map-scraper/bms.webp
    alt: "Convert terrain into 3D printable objects."
    caption: "Convert terrain into 3D printable objects."
  - src: assets/images/project-blender-map-scraper/bms1.png
    alt: "Imported roads, paths, and railways."
    caption: "Imported roads, paths, and railways represented by Blender curves."
  - src: assets/images/project-blender-map-scraper/bms2.jpg
    alt: "A large imported 3D city."
    caption: "A large imported 3D city using OpenStreetMap data."
---

Blender Map Scraper is a Blender addon that imports Google 3D cities, OpenStreetMap data, and terrain. It provides global coverage and allows users to convert terrain into 3D printable objects.

The software imports buildings directly from OpenStreetMap. It uses building height and floor count data to construct the final 3D scene. The tool processes composition into 3D parts for buildings with complex structures and supports multiple roof shapes. When terrain data is provided, the software automatically places buildings onto the topography.

The addon downloads and imports real-world terrain data at a 30-meter resolution. Users can apply geometry nodes to OSM footprints to generate realistic 3D buildings. The tool imports GPX tracks, projecting them directly onto the terrain. It imports rivers, lakes, forests, and vegetation as polygons, projecting them onto the terrain surface. Imported roads, paths, and railways retain width data and are represented by Blender curves with profile objects that conform to the terrain.
