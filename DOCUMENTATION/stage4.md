# Stage 4 – MVP Development 

## Sprint Planning & Execution Plan

## Overview

This document describes the sprint planning strategy used for the **MVP development phase** of the *WhichMovieTonight* project.  
The goal is to divide the development into **short, manageable sprints**, following an Agile-inspired approach, in order to deliver a **functional and stable MVP** by **March 6th**.

- **Methodology:** Agile / Scrum (adapted for small team)
- **Sprint duration:** 2 weeks
- **Total duration:** January 12 – March 6
- **Team:** Moussa Elisoltanov and Flora Salanson 
- **Repository status:** Initialized
- **Backend:** Django (installed)
- **Frontend:** React + Vite (installed)

---

## Global MVP Timeline

| Sprint | Dates | Focus |
|------|------|------|
| Sprint 0 | Jan 12 – Jan 16 | Initial setup & alignment |
| Sprint 1 | Jan 17 – Jan 30 | Core foundation |
| Sprint 2 | Jan 31 – Feb 13 | User interaction |
| Sprint 3 | Feb 14 – Feb 27 | Streaming & UX polish |
| Buffer | Feb 28 – Mar 06 | Testing & deployment |

---

## Sprint 0 – Initial Setup (Completed)

**Duration:** January 12 – January 16  
**Status:** ✅ Completed

### Objectives
- Prepare development environments
- Establish project structure and collaboration workflow

### Completed Tasks (Must Have)

- Git repository creation
- Branching strategy (`main`, `dev`, `backend/ or frontend/*`)
- Django project initialization (backend)
- React + Vite initialization (frontend)
- Basic project folder structure

### Deliverable
✔ Functional development environment ready for implementation

---

## Sprint 1 – Core Foundation

**Duration:** January 17 – January 30  
**Sprint Goal:** Enable authentication and movie browsing

### Must Have Tasks

| Task | Dependency | Responsibility |
|----|-----------|---------------|
| Database schema (User, Movie, Rating, Comment) | Sprint 0 | Backend |
| JWT authentication (register, login, logout) | Database | Backend |
| Movie API (GET list, GET detail) | Database | Backend |
| Admin permissions | Auth | Backend |
| React routing setup | Setup | Frontend |
| Movie catalog UI (MovieCard, grid) | API | Frontend |
| Navbar and navigation | Routing | Frontend |

### Sprint 1 Deliverable
✔ User authentication  
✔ Movie catalog page  
✔ Basic movie detail view  

---

## Sprint 2 – User Interaction

**Duration:** January 31 – February 13  
**Sprint Goal:** Allow users to interact with movies

### Must Have Tasks

| Task | Dependency | Responsibility |
|----|-----------|---------------|
| Rating API (create, update, delete) | Auth | Backend |
| Average rating calculation | Ratings | Backend |
| Comment CRUD API | Auth | Backend |
| Movie detail enhancement | Movie API | Frontend |
| Rating UI (star component) | Ratings API | Frontend |
| Comment section UI | Comments API | Frontend |

### Should Have Tasks

- Add to favorites
- Trailer embed on movie detail page

### Sprint 2 Deliverable
✔ Ratings system  
✔ Comments system  
✔ Fully interactive movie detail page  

---

## Sprint 3 – Streaming & UX Polish

**Duration:** February 14 – February 27  
**Sprint Goal:** Complete MVP features and improve user experience

### Should Have Tasks

| Task | Dependency | Responsibility |
|----|-----------|---------------|
| Streaming availability data | Movie model | Backend |
| Streaming platform links | API | Frontend |
| Responsive UI improvements | Existing UI | Frontend |
| Loading and error states | API | Frontend |

### Could Have Tasks

- Immersive theming / background
- Review likes

### Won’t Have Tasks

- AI-based recommendations
- Private user-to-user chat

### Sprint 3 Deliverable
✔ Streaming availability per movie  
✔ Polished and responsive UI  
✔ Feature-complete MVP  

---

## Final Buffer – Testing & Deployment

**Duration:** February 28 – March 6  
**Sprint Goal:** Stabilize and deliver the application

### Tasks

- End-to-end functional testing
- Bug fixing and optimization
- Security checks
- Backend & frontend deployment
- README and documentation updates
- Final demo preparation

### Final Deliverable
🚀 Deployed and stable MVP

---

## Team Responsibilities

| Team Member | Main Focus |
|-----------|-----------|
| FLORA | Backend (Django, APIs, database, authentication) |
| MOUSSA| Frontend (React, UI, UX, integration) |

---

## Conclusion

This sprint plan ensures:
- Clear prioritization using the MoSCoW method
- Respect of task dependencies
- Incremental delivery of features
- Alignment with academic Agile principles
- A realistic timeline for MVP completion

The plan provides a structured roadmap from setup to deployment, ensuring the successful delivery of the *WhichMovieTonight* MVP.
