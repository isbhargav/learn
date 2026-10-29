# Learn

A collection of topic-based learning sessions. Each topic has its own
workspace containing lessons, references, source material, notes, and learning
records.

[Browse the published learning sessions](https://isbhargav.github.io/learn/).

## Sessions

- [DynamoDB distributed locking](dynamodb-distributed-locking/)

## Repository structure

```text
learn/
├── index.html
└── <topic>/
    ├── MISSION.md
    ├── RESOURCES.md
    ├── NOTES.md
    ├── resources/
    ├── lessons/
    ├── reference/
    ├── learning-records/
    └── assets/
```

Topic directories use dash-case names. Raw source material belongs in
`resources/`, while `RESOURCES.md` provides its curated index.

When a lesson is added, removed, or renamed, the corresponding links in
`index.html` are updated in the same change.
