# Agents

## Purpose

This directory contains all of my learning sessions, one directory per topic.

## Teaching

Whenever I ask to learn something, be taught something, or say anything like "teach me X", use the **teach** skill from Matt Pocock. Do not improvise a teaching approach.

## Session Structure

Each topic gets its own session directory at the workspace root, named in dash-case after the topic (e.g. `rust-ownership/`, `bouldering-technique/`).

Before teaching, create the session directory if it doesn't exist and treat it as the teaching workspace for the teach skill. All of the skill's files (`MISSION.md`, `RESOURCES.md`, `NOTES.md`, `lessons/`, `reference/`, `learning-records/`, `assets/`) live inside the session directory, not at the workspace root.

Each session directory must contain a `resources/` directory for storing raw resource material — downloaded articles, PDFs, papers, transcripts, screenshots, code samples, anything gathered from external sources. The skill's `RESOURCES.md` is the curated index; `resources/` holds the actual material it points to.

Example layout:

```
learn/
  agents.md
  <topic>/
    MISSION.md
    RESOURCES.md
    NOTES.md
    resources/          # raw resource material for this session
    lessons/
    reference/
    learning-records/
    assets/
```

If I return to an existing topic, resume its session directory rather than creating a new one.
