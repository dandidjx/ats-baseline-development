# Entity: Job Opening

## Description

A **Job Opening** represents a position to be filled. It is similar to the `Opportunity` entity in CRM.

HR, hiring managers, or headhunters create Job Openings to formalize hiring needs.

## Lifecycle

A Job Opening moves through the following stages (Kanban view):

| Stage | Description |
|-------|-------------|
| **Draft** | Initial creation, not yet submitted for approval |
| **Submitted** | Awaiting approval |
| **Approved** | Approved and ready for recruitment |
| **In Progress** | Active recruitment |
| **Closed** | No longer active |
| - Filled | All positions filled |
| - Partially Filled | Some positions filled |
| - Not Filled | No positions filled |
| **Cancelled** | Cancelled before completion |

## Fields

### Basic Information

| Field | Type | Description |
|-------|------|-------------|
| Job Title | Text | Name of the position (e.g., Senior Backend Engineer) |
| Job Reference / Code | Text | Internal or external reference ID |
| Department | Dropdown | HR, Finance, Sales, Marketing, Engineering, Product, Operations, Customer Support, IT, Legal |
| Number of Hires | Number | Total number of hires planned for this job |

### Stakeholders

| Field | Type | Description |
|-------|------|-------------|
| Hiring Organization | Link | Link to Organization (the company hiring) |
| Recruitment Contact | Link | Primary business contact for this job. Can link to a Contact (external) or a Tenant User (internal) |
| Other Participants | Link | Additional Contacts involved (e.g., client stakeholders, external reviewers) |
| Collaborators | Link | Tenant Users collaborating internally on the job (recruiters, HR team members) |

**Participant and Collaborator Roles:**
- Hiring Manager
- Recruiter
- Interviewer
- HR Partner
- Recruitment Coordinator
- Decision Maker

> This list can be amended by ATS Owner

### Job Description

| Field | Type | Description |
|-------|------|-------------|
| Executive Summary | Text Area | Introduction to the role |

### Job Classification

| Field | Type | Description |
|-------|------|-------------|
| Job Category | Dropdown | Engineering, Sales, Marketing, HR, Finance, Operations |
| Job Level | Dropdown | Intern, Junior, Mid-level, Senior, Lead, Manager, Director |
| Employment Type | Dropdown | Full-time, Part-time, Contract, Freelance, Internship |
| Contract Duration | Text | e.g., 6 months, 12 months, Permanent |

### Location & Work Mode

| Field | Type | Description |
|-------|------|-------------|
| Work Location | Text | City / region |
| Country | Dropdown | List of supported countries (default: tenant country) |
| Work Mode | Dropdown | On-site, Hybrid, Remote |

### Skills & Requirements

| Field | Type | Description |
|-------|------|-------------|
| Required Skills | Multi-select | Skills taxonomy (e.g., Java, React, Azure, Leadership) |
| Nice-to-have Skills | Multi-select | Same list as above |
| Minimum Experience | Numeric | Years |
| Maximum Experience | Numeric | Years |
| Education Level | Dropdown | High School, Bachelor, Master, PhD |
| Language Requirements | Multi-select | e.g., English, French, German (with level: Intermediate, Professional, Fluent) |

### Compensation & Benefits

| Field | Type | Description |
|-------|------|-------------|
| Salary Range (Min) | Number | Lower bound of compensation |
| Salary Range (Max) | Number | Upper bound of compensation |
| Salary Currency | Dropdown | ISO currency codes (USD, EUR, SGD, etc.) |
| Compensation Type | Dropdown | Monthly, Yearly, Hourly |
| Benefits Summary | Text Area | High-level benefits information |

## Important Notes

- **Fields can be added and removed** (subject to mandatory field requirements)
- **All drop-down lists are configurable**, not hard-coded
- Capability to **upload Word/PDF job description** and populate the fields automatically
- Section and field structure must be flexible

## Relationships

```
1 Organization → 0..N Job Openings
1 Contact/User → 0..N Job Openings
```

### Job Opening → Organization

```
Job Opening --"1,1"--> Is Hiring Company --"0,n"--> Organization
```

### Job Opening → Recruitment Contact

The Recruitment Contact can be either a Tenant User OR a Contact.

```
Job Opening --"1,1"--> Is Recruitment Contact --"0,n"--> User
                                           |
                                           +--"0,n"--> Contact
```

### Job Opening → Participants (Contacts)

```
Job Opening --"0,n"--> Is Participant --"0,n"--> Contact
```

### Job Opening → Collaborators (Users)

```
Job Opening --"0,n"--> Is Collaborator --"0,n"--> User
```

## Base Type Reference

This entity is similar to the `Opportunity` type defined in technical principles.
