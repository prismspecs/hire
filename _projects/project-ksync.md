---
title: "kSync"
slug: project-ksync
order: 4
year: "2024–2025"
short_desc: "kSync is an enterprise-grade media synchronization and automation platform running on a custom Embedded Linux distribution for Raspberry Pi hardware."
medium: "Distributed Media Synchronization<br>and Show Control"
icon: "▷"
thumb: assets/images/ksync/installation-view1.jpg
hero_image: assets/images/ksync/installation-view1.jpg
hero_alt: "Multi-screen synchronized video installation at Berlin exhibition."
meta:
  - "Medium: Open-source Media Synchronization and Automation"
  - "Role: Founder & Lead Developer"
  - "Context: Field-proven in 24/7 public Berlin art exhibitions"
  - "Technical: Distributed Leader-Collaborator architecture via UDP Broadcast"
  - "Sync Strategy: EWMA-smoothed filter and P-controller (Kp=0.25) for sub-10ms accuracy"
  - "Automation: Protocol-agnostic timeline supporting DMX, Art-Net, OSC, MIDI, and WebSockets"
  - "Economic Impact: 70% reduction in 3-year TCO compared to proprietary hardware"
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

kSync is an enterprise-grade media synchronization and automation platform running on a custom Embedded Linux distribution for Raspberry Pi hardware. The system architecture utilizes a distributed leader-collaborator model to coordinate multi-node video playback and physical environment automation over local networks. By eliminating the high costs associated with proprietary exhibition hardware, kSync provides a versatile alternative for artists and institutions requiring sub-10ms synchronization accuracy.

The software engine uses GStreamer for video processing and implements a multi-tier synchronization strategy to manage oscillator variance. A central Leader node broadcasts UDP sync packets while Collaborator nodes calculate temporal deviation using an exponentially weighted moving average filter to compensate for network latency. For minor offsets between 10ms and 500ms, the system employs a proportional controller with a gain of 0.25 to adjust the playback rate. Larger deviations trigger accurate flushing seeks to maintain alignment without visual stutter.

kSync operates as a master conductor for physical environments via a protocol-agnostic timeline. The system triggers external events through a unified scheduler that supports DMX lighting, MIDI audio, serial motor control, and WebSocket messaging. This automation capability coordinates kinetic sculptures and spatial audio with digital content. Deployment follows a plug-and-play model where users provision nodes by inserting a USB drive containing media and a configuration file. This approach removes the requirement for specialized IT personnel in gallery settings.
