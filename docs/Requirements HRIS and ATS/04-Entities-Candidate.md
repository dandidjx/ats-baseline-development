# Entity: Candidate

## Description

A **Candidate** represents an individual who may be considered for one or more job opportunities.

## Key Characteristics

The Candidate entity is **job-agnostic** and **long-lived**:
- It exists independently of any specific Job Opening
- It can be linked to multiple Applications over time
- It remains reusable even after hiring, rejection, or withdrawal
- The collection of all Candidates is called the **Talent Pool**

## Business Value

The Candidate database represents a **strategic business asset**, especially for headhunter and recruitment organizations. Its value grows with:
- Quality of information
- Historical interactions
- Proven placements
- Trust built over time

## Benefits of Effective Candidate Management

- Reuse talent instead of restarting searches
- Reduce hiring time and cost
- Improve candidate experience
- Make better-informed decisions

## Fields

### Personal Information

| Field | Type | Description |
|-------|------|-------------|
| First Name | Text | Legal or preferred first name |
| Last Name | Text | Legal or preferred last name |
| Emails | List | Multiple email addresses with labels |
| Phone Numbers | List | Multiple phone numbers with labels |
| Location | Text | City / region |
| Country | Dropdown | Configurable list of supported countries |

### Professional Profile

| Field | Type | Description |
|-------|------|-------------|
| Current Job Title | Text | Most recent or current role |
| Current Employer | Text | Current or last employer |
| Years of Experience | Dropdown | 0–1, 2–4, 5–7, 8–10, 10+ |
| Seniority Level | Dropdown | Intern, Junior, Mid-level, Senior, Lead, Manager, Director |
| Professional Summary | Text Area | High-level career overview |

### Skills & Expertise

| Field | Type | Description |
|-------|------|-------------|
| Core Skills | Multi-select | Skills taxonomy (e.g., Java, React, Sales, Project Management) |
| Secondary Skills | Multi-select | Optional or complementary skills |
| Industry Experience | Multi-select | Finance, Healthcare, SaaS, Manufacturing, etc. |
| Certifications | Tag | AWS, Azure, PMP, Scrum Master, etc. |

### Education & Languages

| Field | Type | Description |
|-------|------|-------------|
| Highest Education Level | Dropdown | High School, Bachelor, Master, PhD, Not Required |
| Education Details | Text Area | Institutions, degrees, dates |
| Languages | Multi-select | Language list |
| Language Proficiency | Dropdown (per language) | Basic, Conversational, Fluent, Native |

## Important Features

- **Capability to populate candidate information from:**
  - PDF/Word resume
  - LinkedIn URL

## Relationships

```
0..N Candidates → 0..N Applications → Job Openings
0..N Candidates → Candidate Intake
```

### Candidate → Application

A Candidate can have multiple Applications for different Job Openings.

```
Candidate --"0,n"--> Application --"1,1"--> Job Opening
```

### Candidate → Candidate Intake

A Candidate can be linked to a Candidate Intake record.

```
Candidate --"0,n"--> Is Linked To --"0,1"--> Candidate Intake
```

## Base Type Reference

This entity is similar to the `People` type defined in technical principles, with additional HR/ATS-specific fields.
