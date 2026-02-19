# Entity: Application

## Description

An **Application** represents a candidate's candidacy for a specific Job Opening.

## Key Concepts

An Application is the link between a **Candidate** and a **Job Opening**:
- It tracks the candidate's progress through the recruitment pipeline
- It stores evaluation data and feedback
- It can enter either Applicant Triage or go directly to Recruitment Pipeline

## Entry Paths

### Path 1: Applicant Triage (Similar to Leads in CRM)

Applications enter a triage stage for initial review.

**Use Case:** When applicants come from Email or other sources where the recruiter needs to review relevance before the candidate enters the Recruitment Pipeline.

**Process:**
1. Application created in "Applicant Triage" status
2. Recruiter performs high-level scan of profile
3. Binary decision: Proceed or Stop
4. If Proceed: Moves to Recruitment Pipeline

### Path 2: Direct Recruitment Pipeline

Applications go directly to the Recruitment Pipeline.

**Use Case:** Candidates from Talent Pool who are added to a Job Opening by a headhunter. The triage step can be skipped.

## Fields

### Core Information

| Field | Type | Description |
|-------|------|-------------|
| Candidate | Link | Link to Candidate entity |
| Job Opening | Link | Link to Job Opening entity |
| Application Source | Dropdown | Job Board, Referral, Direct Sourcing, Career Page, Agency |
| Source Details | Text | Job board name, referral name, campaign |
| Application Date | Date | When application was created |

### Evaluation & Feedback

| Field | Type | Description |
|-------|------|-------------|
| Screening Score | Number | Initial screening score |
| Overall Rating | Dropdown | Poor, Average, Good, Very Good, Excellent |
| Interview Feedback | TBD | Evaluation/feedback records |
| Assessment Results | TBD | Test or assessment outcomes |
| Decision Notes | Text Area | Final decision rationale |

## Pipelines

### Applicant Triage (List with Preview)

**Objective:** Decide whether this application is worth spending time on.

**Characteristics:**
- Fast triage stage focused on relevance, not suitability
- High-level scan of the profile
- Minimal effort, high volume
- Binary decision: **Proceed** or **Stop**

### Recruitment Pipeline (Kanban)

| Stage | Description |
|-------|-------------|
| HR Screening | Initial HR screening |
| Assessment / Test | Skills or psychological assessment |
| Interviews | One or more interview rounds |
| Due Diligence | Reference checks, background checks |
| Offer Preparation | Preparing offer details |
| Offer Sent | Offer has been sent to candidate |
| Closed | Final state |
| - Hired | Candidate accepted offer |
| - Rejected | Candidate was rejected |
| - Withdrawn | Candidate withdrew from consideration |

## Relationships

```
Candidate --"0,n"--> Application --"1,1"--> Job Opening
```

### Candidate → Applications

A Candidate can have multiple Applications for different Job Openings.

### Job Opening → Applications

A Job Opening can have multiple Applications from different Candidates.

## Workflow Features

- **Select Candidates from DB and create application for job opening**
- **Drag-and-drop between stages**
- **Automatic stage transitions**
- **Stage-specific requirements and validation**
- **Collaborative feedback collection**
- **Notification triggers on stage changes**

## Base Type Reference

This entity is similar to the `Lead` / `Opportunity` type defined in technical principles, with ATS-specific pipeline stages.
