---
title: "kSync"
slug: project-ksync
order: 4
year: "2024–2025"
short_desc: "An open-source platform that keeps walls of displays frame-locked on affordable Raspberry Pi hardware — with sub-10ms accuracy, show control, and 24/7 exhibition reliability."
medium: "Distributed Media Synchronization<br>and Show Control"
icon: "▷"
thumb: assets/images/ksync/installation-view1.jpg
hero_image: assets/images/ksync/installation-view1.jpg
hero_alt: "Multi-screen synchronized video installation at Berlin exhibition."
meta:
  - "Medium: Open-source Media Synchronization and Automation"
  - "Role: Founder & Lead Developer"
  - "Context: Field-proven in 24/7 public Berlin art exhibitions"
  - "Sync accuracy: sub-10ms across all displays, on standard network hardware"
  - "Show control: one timeline drives video, DMX lighting, MIDI, motors, and WebSockets"
  - "Cost: roughly 70% cheaper over 3 years than proprietary sync hardware"
link:
  url: https://github.com/prismspecs/kitchenSync
  text: github.com/prismspecs/ksync
images:
  - src: assets/images/ksync/installation-view2.jpg
    alt: "kSync synchronized 11 displays and coordinated kinetic rotations via serial motor control."
    caption: "kSync synchronized 11 displays and coordinated kinetic rotations via serial motor control."
  - src: assets/images/ksync/pi-case.jpg
    alt: "The kSync hardware node, an optimized Raspberry Pi in a custom enclosure."
    caption: "The kSync hardware node, an optimized Raspberry Pi in a custom enclosure."
  - src: assets/images/ksync/installation-view-vertical.jpg
    alt: "Vertical display synchronization in a gallery environment."
    caption: "Vertical display synchronization in a gallery environment."
---

Galleries that want a wall of screens playing in perfect sync usually face an ugly choice: proprietary media servers that cost more than the artwork, or fragile DIY scripts that drift out of alignment mid-exhibition. kSync is my answer to that problem — an open-source media synchronization and automation platform running on a custom Embedded Linux distribution for Raspberry Pi hardware, built for artists and institutions that need frame-accurate playback without the enterprise price tag.

The software engine uses GStreamer for video processing and implements a multi-tier synchronization strategy. A central Leader node broadcasts UDP sync packets while Collaborator nodes calculate temporal deviation using an exponentially weighted moving average filter to compensate for network latency. Minor offsets are corrected by a proportional controller that gently adjusts playback rate; larger deviations trigger accurate flushing seeks. The result is sub-10ms alignment with no visible stutter.

Beyond video, kSync conducts entire physical environments from a single protocol-agnostic timeline: DMX lighting, MIDI audio, serial motor control, and WebSocket messaging, all scheduled against the media clock. Deployment is deliberately gallery-proof — provisioning a node means inserting a USB drive with the media and a config file, so no specialized IT staff is needed on site. The system has run 24/7 in public Berlin exhibitions, in one case synchronizing 11 displays while coordinating kinetic sculpture rotations over serial motor control.
