---
title: "Jurassic Park"
slug: project-jurassic-park
order: 0
year: "2025"
short_desc: "A participatory cinematic performance where an AI director guides the audience through a live remake of Jurassic Park."
medium: "Interactive AI-Cinema<br>Performance"
icon: "◉"
thumb: assets/images/jurassic-park/actors-on-stage-4-cropped.jpg
hero_image: assets/images/jurassic-park/performance.jpg
hero_video: assets/images/jurassic-park/performance.mp4
hero_alt: "Documentation from the Jurassic Park AI-cinema performance."
meta:
  - "Medium: Interactive AI-Cinema Performance"
  - "Context: Center for Performance Research, New York City"
  - "Format: A real-time collaboration between audience members and an AI director named Mr. Neural."
  - "Technical stack: fully custom software for computer vision, state management, text to speech, and robot movement control."
  - "Production system: synchronous FFmpeg-based scene editing with alpha-channel layering during the live performance."
  - "Audience system: a phone-based actor onboarding tool for line practice, emotion scoring, selfie capture, and random actor selection."
link:
  url: https://vimeo.com/1152501645
  text: View on Vimeo
images:
  - src: assets/images/jurassic-park/actors-on-stage-4-cropped.jpg
    alt: "Documentation from the AI-directed cinematic performance."
    caption: "Documentation from AI-directed cinematic performance"
  - src: assets/images/jurassic-park/robot-eye.jpg
    alt: "The robot director's camera system."
    caption: "A 4K webcam acting as the robot director's eye, feeding a custom computer vision system used to track performers and drive the live directing workflow."
  - src: assets/images/jurassic-park/discussion.jpg
    alt: "Grayson Earle discussing the project in New York City at the Centre for Performance Research with Tal Linzen, Johannes Büttner, and Kay Matschullat."
    caption: "Grayson Earle discussing the project in New York City at the Centre for Performance Research with Tal Linzen, Google Scholar and Associate Professor of Linguistics and Data Science at New York University, collaborator Johannes Büttner, and Kay Matschullat, artistic director of Media Art Exploration."
  - src: assets/images/jurassic-park/actors-on-stage-1-cropped.jpg
    alt: "Performers called to the stage by the AI director for the first scene."
    caption: "The actors have just been called to the stage by the AI director for their first scene"
  - src: assets/images/jurassic-park/new_grid.jpg
    alt: "Video stills from the robot director's audience renditions of Jurassic Park."
    caption: "Video stills captured from the robot director's audience renditions of Jurassic Park"
---

Jurassic Park is a participatory cinematic performance that reimagines the film through a real-time collaboration between audience members and an AI director named Mr. Neural. Staged at the Center for Performance Research in New York City, the project merges motion tracking, live cinema, and robotic direction to invert the typical AI art dynamic: instead of humans prompting machines, the AI prompts the humans. Mr. Neural directs participants through voice commands, lighting cues, and robot movement, orchestrating a hybrid film shoot in which the audience becomes cast and crew. The experience culminates in a screening of an uncanny live-edited remix of the movie.

The technical system was 100 percent custom software. I built the computer vision pipeline, the state management system coordinating the performance logic, the text to speech voice system, and the movement controller for the physical robot. I also built a synchronous video editing system around FFmpeg that assembled scenes as they were directed, including alpha-channel compositing for layered video output.

At the beginning of the experience, audience members used a phone-based actor onboarding app that let them practice lines while performing the correct emotions. A JavaScript facial and emotion recognition library scored those performances, captured a selfie, and added each participant to an actor database that the director could call from at random during the show. That onboarding system tied the audience directly into the live performance logic rather than treating participation as a separate layer.
