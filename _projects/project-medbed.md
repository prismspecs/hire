---
title: "MedBed"
slug: project-medbed
order: 5
year: "2024"
short_desc: "Engineering for Johannes Büttner's kinetic sculpture at KW Institute: industrial motors, LEDs, and multichannel audio choreographed in sync with film."
medium: "Custom Software<br>and Hardware"
icon: "✚"
thumb: assets/images/medbed/installation-view-front.jpg
hero_image: assets/images/medbed/installation-view-front.jpg
hero_alt: "MedBed installation at KW Institute for Contemporary Art."
meta:
  - "Medium: Custom Software and Hardware"
  - "Role: Software Engineer & Technical Developer"
  - "Context: Artwork by Johannes Büttner, KW Institute for Contemporary Art, Berlin"
  - "Exhibited in \"Amid the Alien Corn\" at KW Institute for Contemporary Art, Berlin.<br>Curator: Sofie Krogh Christensen."
  - "Technical implementation:<br>Custom software for synchronized video playback and multichannel audio.<br>Arduino microcontroller integration controlling RGB LEDs.<br>2 high voltage DC motors and 1 high precision stepper motor.<br>Motors programmed to tilt the bed, open doors, and perform scanning motions."
  - "Collaborators:<br>CAD and 3D printing: Benjamin Zuber.<br>Sound design: Johannes Klingebiel.<br>Upholstery: Grete Gehrke.<br>Photography: Frank Sperling."
link:
  url: https://www.instagram.com/p/C1owOw2IFxv/?img_index=8
  text: View on Instagram
# To display a client quote on this page, uncomment and fill in:
# testimonial:
#   quote: "Working with Grayson was..."
#   name: "Johannes Büttner"
#   role: "Artist"
images:
  - src: assets/images/medbed/installation-view-side.jpg
  - src: assets/images/medbed/installation-view-detail.jpg
  - src: assets/images/medbed/med-bed-in-action.mp4
    alt: "MedBed in action."
    caption: "MedBed in action, with three industrial motors controlled via OSC signals synced to the video timeline, alongside independent LED animations."
---

When artist Johannes Büttner was preparing his exhibition *Amid the Alien Corn* at KW Institute for Contemporary Art, he needed a sculpture that could perform: a bed that tilts, opens its doors, and scans its occupant in choreographed sync with a film. He brought me on as software engineer and technical developer to make that happen on an institutional deadline — and to make it robust enough to run for the length of a museum exhibition.

MedBed is inspired by the conspiracy myth of a medical device that can heal all illnesses and extend life; the QAnon movement claims such devices are kept by elite deep state members. In Büttner's sculptural paraphrase, the bed becomes a dark, sardonic form — programmed to move in sync with scenes from the accompanying film, hinting at the deception of conspiracy propagandists.

The technical build coupled two high-voltage DC motors and a high-precision stepper motor to a video timeline via OSC, so every tilt, door movement, and scanning pass lands exactly on its cue in the film. Custom software handled synchronized video playback and multichannel audio, while an Arduino drove independent RGB LED animations. This is the kind of collaboration that makes up much of my freelance practice: an artist with a strong concept, a museum with a fixed opening date, and a machine that has to behave perfectly in public.
