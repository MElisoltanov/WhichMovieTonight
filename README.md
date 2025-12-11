
---

# Stage 1 Report — Team Formation, Brainstorming & MVP Definition

---

## Introduction

We're a two-person team: **Flora Salanson** and **Moussa Elisoltanov**. We've already worked together on several technical projects, so we know each other’s strengths and work well together. Flora is in charge of the **backend**, handling APIs, databases, and the core logic. Moussa manages the **frontend**, making sure the app is intuitive, clean, and responsive.

For this portfolio project, we chose to build **WhichMovieTonight**, a web application that helps users quickly find a movie without wasting time browsing across multiple streaming platforms. The goal is simple: gather everything in one place—movie info, user reviews, and streaming availability—to make the movie-picking process easier and faster.

Below is the Table of Contents that walks through the different parts of our Stage 1 report.

---

## Table of Contents

1. [Team Formation & Roles](#1-team-formation--roles)
2. [Brainstorming & Idea Evaluation](#2-brainstorming--idea-evaluation)

   * [Idea 1 — WhichMovieTonight (Selected)](#idea-1--whichmovietonight-selected)
   * [Idea 2 — Medical Collaboration Platform (Instructor-Proposed)](#idea-2--medical-collaboration-platform-instructor-proposed)
   * [Idea 3 — Gym Facility Management Software (Instructor-Proposed)](#idea-3--gym-facility-management-software-instructor-proposed)
3. [Final Decision & MVP Refinement](#3-final-decision--mvp-refinement)

   * [Problem Statement](#problem-statement)
   * [Proposed Solution](#proposed-solution)
   * [Target Users](#target-users)
   * [Application Type](#application-type)
4. [MVP Key Features (SMART-Aligned)](#4-mvp-key-features-smart-aligned)
5. [Detailed MVP Features — Feasibility Overview](#5-detailed-mvp-features--feasibility-overview)
6. [Project Scope](#6-project-scope)
7. [Risks & Mitigation](#7-risks--mitigation)
8. [Expected Outcome](#8-expected-outcome)
9. [Stage 2 — Planning and Technical Architecture](#9-stage-2--planning-and-technical-architecture)

---

## 1. Team Formation & Roles

### Team Members

**Flora Salanson — Backend Developer**

* Experienced in backend architecture, APIs, and database design.

**Moussa Elisoltanov — Frontend Developer**

* Specializes in responsive UI/UX, frontend logic, and integration with backend APIs.

### Team Strengths

* Previously collaborated on Binary Trees, Simple Shell, and Hbnb.
* Complementary skill sets.
* Efficient coordination during previous projects.

### Collaboration Strategy

* In-person meetings when possible.
* Daily communication via WhatsApp & Slack.
* Shared documentation on Notion / Google Docs.
* Decision-making through discussion and consensus.

### Stakeholders

* No external stakeholders at this stage.

---

## 2. Brainstorming & Idea Evaluation

### Idea 1 — WhichMovieTonight (Selected)

A mobile-first platform that helps users quickly find a movie using:

* Community-driven reviews
* Streaming availability information
* Movie metadata (genres, synopsis, cast, etc.)
* Simple community chat (future enhancement)

**Risk:** Reliance on an unofficial JustWatch API, which may change without notice.

---

### Idea 2 — Medical Collaboration Platform (Instructor-Proposed)

A platform connecting medical professionals with scientific writers for co-authoring medical publications.

**Reason for rejection:**

* Highly specialized domain
* Requires strict data protection
* Complex multi-role workflows
* Not aligned with team interests

---

### Idea 3 — Gym Facility Management Software (Instructor-Proposed)

Tool for managing gym rooms, equipment inventory, schedules, and user access.

**Reason for rejection:**

* Requires admin-heavy role management
* Too broad for a short MVP timeline
* Less appealing than a cinema-oriented project

---

## 3. Final Decision & MVP Refinement

### Problem Statement

Users spend too much time browsing multiple platforms just to find a movie they want to watch.

### Proposed Solution

A centralized web application that:

* Aggregates movie information
* Displays streaming availability
* Shows commentary and ratings
* Helps users choose a movie faster and more easily

### Target Users

* Movie lovers
* Casual viewers
* Streaming platform users
* Anyone looking for quick movie recommendations

### Application Type

* Responsive Web Application
* Mobile-first
* Accessible across all devices

---

## 4. MVP Key Features (SMART-Aligned)

1. **Movie Catalog** — At least 200 films with title, synopsis, genre, and average rating.
2. **User Accounts** — Secure registration and login with proper authentication.
3. **Ratings & Comments** — Authenticated users can publish ratings and comment on movies.
4. **Availability Information** — API integration to show streaming or library access for each movie.

---

## 5. Detailed MVP Features — Feasibility Overview (Color-Coded)

| Feature                        | Feasibility | Comment                                            | Status |
| ------------------------------ | ----------- | -------------------------------------------------- | ------ |
| Movie Catalog                  | High        | Data pulled from API + cached locally              | 🟢     |
| User Accounts                  | High        | Standard signup/login                              | 🟢     |
| Ratings & Comments             | High        | Core social feature                                | 🟢     |
| Streaming Availability         | Medium      | Requires fallback system                           | 🟢     |
| Community Forum / Chat         | Medium-Low  | Optional, implemented last                         | 🟡     |
| Geolocation of Media Libraries | Medium      | Optional feature                                   | 🟡     |
| Badge System                   | Medium      | Optional: users can earn badges by posting reviews | 🟡     |
| Movie Trailers                 | Medium-Low  | Data pulled from YouTube API                       | 🟡     |
| Wallpaper                      | Medium      | Optional, for immersion                            | 🟡     |
| AI Recommendations             | Low         | Abandoned, not enough time or technical skills     | 🔴     |
| One-to-One Chat                | Low         | Abandoned, not enough time                         | 🔴     |
| User Likes on Reviews          | Medium      | Optional enhancement                               | 🟡     |
| Add to Favorites               | Medium      | Optional enhancement                               | 🟡     |

**Color Legend:**
🟢 **Green** = MVP (mandatory)
🟡 **Yellow** = Optional / extra features
🔴 **Red** = Not feasible / abandoned

---

## 6. Project Scope

### In Scope

* Movie catalog
* User login & registration
* Rating and comment system
* Streaming availability
* Basic chat/forum (if timeline allows)

### Out of Scope

* AI recommendations
* Friend system / user profiles
* Watchlists / playlists
* Private messaging

---

## 7. Risks & Mitigation

| Risk                        | Impact                              | Likelihood | Mitigation Strategy                             |
| --------------------------- | ----------------------------------- | ---------- | ----------------------------------------------- |
| Unofficial API instability  | Missing or broken availability data | Medium     | Cache data locally; add abstraction layer       |
| Scope creep                 | MVP not delivered on time           | High       | Strict feature prioritization; freeze new ideas |
| Learning curve on new tools | Potential slowdowns                 | Medium     | Pair programming + learning sessions            |
| Chat feature complexity     | Delays core features                | Medium     | Implement only at the end; keep chat minimal    |
| Data integrity issues       | Incorrect ratings/comments          | Low        | Add backend validation + database constraints   |

---

## 8. Expected Outcome

By the end of Stage 1, the team has:

* A validated MVP concept
* Clear collaboration structure
* Documented brainstorming and alternative ideas
* Identified major risks with mitigation plans
* A consistent technical and planning foundation

---

## 9. Stage 2 — Planning and Technical Architecture

### Project Planning Summary

This document presents a structured timeline outlining the major phases and milestones of the project, from initial ideation to final closure. Each stage highlights the key deliverables necessary to ensure smooth progress and alignment with project goals. The plan provides a clear overview of the project’s current position—having completed the Idea Development phase and now progressing through Project Planning—while also mapping out the upcoming stages, including Technical Documentation, MVP Development, and Project Closure.

For a detailed view of the complete schedule, you can consult the project timeline directly through the Notion link:

[Project Timeline on Notion](https://www.notion.so/Project-Timeline-2c4a5dedfa2d808d8cb2ed0d910455e4?source=copy_link)

---
