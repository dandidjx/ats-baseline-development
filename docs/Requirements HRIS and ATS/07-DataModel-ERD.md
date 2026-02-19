# Entity-Relationship Diagram

## Overview

This document describes the relationships between core entities in the HRIS/ATS system.

---

## Relationship 1: Organization → Contacts

**Description:** Contacts represent people associated with an organization (HR, managers, interviewers, external stakeholders).

```
Contact --"0,1"--> Belongs --"0,n"--> Organization
```

**Cardinality:**
- One Contact belongs to zero or one Organization
- One Organization has zero or many Contacts

```mermaid
flowchart LR
    Contact[Contact]
    Belongs(Belongs)
    Org[Organization]

    Contact ---|"0,1"| Belongs
    Belongs ---|"0,n"| Org

    style Contact fill:#ed7d31,stroke:#a55621,stroke-width:2px,color:white
    style Org fill:#ed7d31,stroke:#a55621,stroke-width:2px,color:white
    style Belongs fill:#4472c4,stroke:#2f528f,stroke-width:2px,color:white,rx:10,ry:10
```

---

## Relationship 2: Organization → Job Openings

**Description:** Each Job Opening belongs to one Hiring Organization.

**Important:** The organization represents:
- The hiring company (end-user case), OR
- The client company being recruited for (headhunter case)

```
Job Opening --"1,1"--> Is Hiring Company --"0,n"--> Organization
```

**Cardinality:**
- One Job Opening belongs to exactly one Organization
- One Organization has zero or many Job Openings

---

## Relationship 3: Job Opening → Recruitment Contact

**Description:** Each Job Opening has one Recruitment Contact that can be either a Tenant User or a Contact.

```
Job Opening --"1,1"--> Is Recruitment Contact --"0,n"--> User
                                            |
                                            +--"0,n"--> Contact
```

**Cardinality:**
- One Job Opening has exactly one Recruitment Contact
- One User can be Recruitment Contact for zero or many Job Openings
- One Contact can be Recruitment Contact for zero or many Job Openings

```mermaid
flowchart LR
    Job[Job Opening]
    Recruit(Is Recruitment Contact)
    User[User]
    Contact[Contact]
    Belongs(Belongs)
    Org[Organization]
    Hiring(Is Hiring Company)

    Job -- "1,1" --- Recruit
    Recruit -- "0,n" --- User
    Recruit --- Contact

    Contact -- "0,1" --- Belongs
    Belongs -- "0,n" --- Org

    Job -- "1,1" --- Hiring
    Hiring -- "0,n" --- Org

    classDef entity fill:#ed7d31,stroke:#a55621,stroke-width:2px,color:white;
    classDef relation fill:#4472c4,stroke:#2f528f,stroke-width:2px,color:white,rx:10,ry:10;

    class Job,User,Contact,Org entity;
    class Recruit,Belongs,Hiring relation;
```

---

## Relationship 4: Contacts ↔ Job Openings (Participants)

**Description:** Contacts participate in Job Openings with a role. This information is used in the application.

**Roles:** Hiring Manager, Recruiter, Interviewer, HR Partner, Recruitment Coordinator, Decision Maker

```
Job Opening --"0,n"--> Is Participant --"0,n"--> Contact
```

**Cardinality:**
- One Job Opening has zero or many Participants (Contacts)
- One Contact participates in zero or many Job Openings

---

## Relationship 5: Users ↔ Job Openings (Collaborators)

**Description:** Users collaborate on Job Openings with a role. Roles are contextual to the Job Opening.

**Roles:** Hiring Manager, Recruiter, Interviewer, HR Partner, Recruitment Coordinator, Decision Maker

```
Job Opening --"0,n"--> Is Collaborator --"0,n"--> User
```

**Cardinality:**
- One Job Opening has zero or many Collaborators (Users)
- One User collaborates on zero or many Job Openings

```mermaid
flowchart LR
    Job[Job Opening]
    User[User]
    Contact[Contact]
    Org[Organization]

    Collab(Is Collaborator)
    Recruit(Is Recruitment Contact)
    Partic(Is Participant)
    Hiring(Is Hiring Company)
    Belongs(Belongs)

    Job -- "0,n" --- Collab
    Collab -- "0,n" --- User

    Job -- "1,1" --- Recruit
    Recruit -- "0,n" --- User
    Recruit --- Contact

    Job -- "0,n" --- Partic
    Partic -- "0,n" --- Contact

    Job -- "1,1" --- Hiring
    Hiring -- "0,n" --- Org

    Contact -- "0,1" --- Belongs
    Belongs -- "0,n" --- Org

    classDef entity fill:#ed7d31,stroke:#a55621,stroke-width:2px,color:white;
    classDef relation fill:#4472c4,stroke:#2f528f,stroke-width:2px,color:white,rx:10,ry:10;

    class Job,User,Contact,Org entity;
    class Collab,Recruit,Partic,Hiring,Belongs relation;
```

---

## Relationship 6: Candidate Intake → Candidate → Application → Job Opening

**Description:** Candidate Intake can be allocated to more than one job opening. Once converted, it becomes a Candidate and can have Applications.

```
Candidate Intake == "Convert to" ==> Candidate
Candidate --"0,n"--> Application --"1,1"--> Job Opening
```

**Cardinality:**
- One Candidate Intake converts to one Candidate
- One Candidate has zero or many Applications
- One Application belongs to exactly one Job Opening
- One Job Opening has zero or many Applications

```mermaid
flowchart LR
    Cand[Candidate]
    App(Application)
    Job[Job Opening]
    Intake[Candidate Intake]
    Link(is linked to)

    Cand -- "0,n" --- App
    App -- "1,1" --- Job

    Cand -- "0,n" --- Link
    Link -- "0,1" --- Intake

    Intake == "Convert to" ==> App

    style Cand fill:#ed7d31,stroke:#a55621,stroke-width:2px,color:white
    style Job fill:#ed7d31,stroke:#a55621,stroke-width:2px,color:white
    style Intake fill:#ed7d31,stroke:#a55621,stroke-width:2px,color:white
    style App fill:#ed7d31,stroke:#a55621,stroke-width:2px,color:white,rx:10,ry:10
    style Link fill:#4472c4,stroke:#2f528f,stroke-width:2px,color:white,rx:10,ry:10
```

---

## Summary of All Relationships

| From | Relationship | To | Cardinality |
|------|--------------|-----|-------------|
| Contact | Belongs | Organization | 0,1 → 0,n |
| Job Opening | Is Hiring Company | Organization | 1,1 → 0,n |
| Job Opening | Is Recruitment Contact | User | 1,1 → 0,n |
| Job Opening | Is Recruitment Contact | Contact | 1,1 → 0,n |
| Job Opening | Is Participant | Contact | 0,n → 0,n |
| Job Opening | Is Collaborator | User | 0,n → 0,n |
| Candidate | Is Linked To | Candidate Intake | 0,n → 0,1 |
| Candidate | Application | Job Opening | 0,n → 0,n |
| Candidate Intake | Convert To | Application | - |

---

## Shared Entities (from CRM)

The following entities are shared with the CRM system:
- **Organization** - Same as CRM Organization
- **Contact** - Same as CRM Contact (People entity)
- **User** - Tenant User (internal)
- **Candidate** - Similar to CRM Contact
- **Candidate Intake** - Similar to CRM Lead
- **Application** - Similar to CRM Lead/Opportunity
