# Entities Description

## HRIS / ATS Core Entities

### Talent Acquisition (ATS)

---

## Organization

> **"An Organization represents a legal or operational entity involved in the recruitment process."**

### Types of Organizations

**A) End-User Organization (Direct Hiring)**

An End-User Organization uses the ATS to manage recruitment for its own internal hiring needs.

In this scenario:
- The Organization entity represents the hiring organization
- The organization is both:
  - The customer of the ATS
  - The employer for all job openings
- The Organization entity will typically be a single, unique value in the system

**B) Headhunter / Recruitment Agency**

A Headhunter company uses the ATS to manage recruitment on behalf of multiple client organizations.

In this scenario:
- The ATS customer is the headhunter company
- The Organization entity represents the headhunter's client companies (the hiring organizations)

### Important Note

- The Organization entity **always represents the hiring organization**
- Job openings are always associated with an Organization Entity
- Candidates are managed by the hiring team and assigned to a job opening

---

## Contact

> **"A Contact represents an individual who participates in the recruitment process on behalf of an organization."**

- A Contact is always associated with **exactly one** Organization

---

## Job Opening

> *"Similar to Opportunity Entity in CRM"*

HR, hiring managers or Head hunter create a Job opening.

### Field Definition

| Field Name | Type | Description | Comment |
|------------|------|-------------|---------|
| **Job Title** | Text | Name of the position (e.g., Senior Backend Engineer) | |
| **Job Reference / Code** | Text | Internal or external reference ID | |
| **Department** | Dropdown list | HR, Finance, Sales, Marketing, Engineering, Product, Operations, Customer Support, IT, Legal | |
| **Number of Hires** | Number | Total number of hires planned for this job | |
| **Hiring Organization** | Link to other entity | Link to Organization (the company hiring) | |
| **Recruitment Contact** | Link to other entity | Primary business contact for this job. Can link to a Contact (external) or a Tenant User (internal). | |
| **Other Participants** | Link to other entity | Additional Contacts involved (e.g., client stakeholders, external reviewers). | |
| **Collaborators** | Link to other entity | Tenant Users collaborating internally on the job (recruiters, HR team members). | |

**Participants and Collaborators can have a role:** Hiring Manager, Recruiter, Interviewer, HR Partner, Recruitment Coordinator, Decision Maker. This list can be amended by ATS Owner.

### Job Description

| Field Name | Type | Description |
|------------|------|-------------|
| Executive summary / Introduction | Text area | |

### Job Classification

| Field Name | Type | Description |
|------------|------|-------------|
| Job Category | Drop-down list | e.g., Engineering, Sales, Marketing, HR, Finance, Operations |
| Job Level | Drop-down list | e.g., Intern, Junior, Mid-level, Senior, Lead, Manager, Director |
| Employment Type | Drop-down list | Full-time, Part-time, Contract, Freelance, Internship |
| Contract Duration | Text | e.g., 6 months, 12 months, Permanent |

### Location & Work Mode

| Field Name | Type | Description |
|------------|------|-------------|
| Work Location | Text | City / region |
| Country | Drop-down list | List of supported countries <= default value to tenant country |
| Work Mode | Drop-down list | On-site, Hybrid, Remote |

### Skills & Requirements

| Field Name | Type | Description |
|------------|------|-------------|
| Required Skills | Multi-select list | Skills taxonomy (e.g., Java, React, Azure, Leadership) |
| Nice-to-have Skills | Multi-select list | Same list as above |
| Minimum Experience | Numeric | |
| Maximum Experience | Numeric | |
| Education Level | Drop-down list | High School, Bachelor, Master, PhD |
| Language Requirements | Multi-select list | e.g., English, French, German <= for each language, should be able to choose the level: Intermediate, Professional, Fluent |

### Compensation & Benefits

| Field Name | Type | Description |
|------------|------|-------------|
| Salary Range (Min) | Number | Lower bound of compensation |
| Salary Range (Max) | Number | Upper bound of compensation |
| Salary Currency | Drop-down list | ISO currency codes (USD, EUR, SGD, etc.) |
| Compensation Type | Drop-down list | Monthly, Yearly, Hourly |
| Benefits Summary | Text Area | High-level benefits information |

### Important Notes

- Fields can be added and removed (Is there some mandatory fields?)
- All drop-down lists are configurable, not hard-coded
- (How to make section and field flexible?)
- Note: capability to upload word / pdf job description and populate the fields

### Job Opening Lifecycle (Kanban)

A Job Opening can be in one of the following states:

- **Draft**
- **Submitted**
- **Approved**
- **In Progress**
- **Closed**
  - Filled
  - Partially Filled
  - Not Filled
- **Cancelled**

---

## Candidate

> *"Similar to Contact Entity in CRM"*

> **"A Candidate represents an individual who may be considered for one or more job opportunities."**

The Candidate entity is **job-agnostic** and **long-lived**:
- It exists independently of any specific Job Opening
- It can be linked to multiple Applications over time
- It remains reusable even after hiring, rejection, or withdrawal
- The All Candidates DB is called the **Talent Pool**

The Candidate is a strategic asset, especially for headhunter and recruitment organizations.

### Field Definition

#### Personal Information

| Field Name | Type | Description |
|------------|------|-------------|
| First Name | Text | Legal or preferred first name |
| Last Name | Text | Legal or preferred last name |
| Emails | List of emails | |
| Phone Numbers | List of Phone numbers | |
| Location | Text | City / region |
| Country | Drop-down list | Configurable list of supported countries |

#### Professional Profile

| Field Name | Type | Description |
|------------|------|-------------|
| Current Job Title | Text | Most recent or current role |
| Current Employer | Text | Current or last employer |
| Years of Experience | Drop-down list | 0–1, 2–4, 5–7, 8–10, 10+ |
| Seniority Level | Drop-down list | Intern, Junior, Mid-level, Senior, Lead, Manager, Director |
| Professional Summary | Text Area | High-level career overview |

#### Skills & Expertise

| Field Name | Type | Description |
|------------|------|-------------|
| Core Skills | Multi-select list | Skills taxonomy (e.g., Java, React, Sales, Project Management) |
| Secondary Skills | Multi-select list | Optional or complementary skills |
| Industry Experience | Multi-select list | Finance, Healthcare, SaaS, Manufacturing, etc. |
| Certifications | Tag | AWS, Azure, PMP, Scrum Master, etc. |

#### Education & Languages

| Field Name | Type | Description |
|------------|------|-------------|
| Highest Education Level | Drop-down list | High School, Bachelor, Master, PhD, Not Required |
| Education Details | Text Area | Institutions, degrees, dates |
| Languages | Multi-select list | Language list |
| Language Proficiency | Drop-down list (per language) | Basic, Conversational, Fluent, Native |

**To be completed…**

*(Shouldn't the candidate form be shared with Job opening?)*

**Capability to populate candidate information from:** PDF/Word, Linkedin URL

---

## Candidate Intake

> *"Similar to Lead in CRM"*

> **"Candidate Intake captures raw, early candidate profiles"**

Once reviewed or enriched, these profiles can be promoted to **Candidates** (Talent Pool).

### Conversion Flow

In addition, when a candidate intake is deemed relevant for a specific job opening:
- A Candidate is created in Talent Pool
- When relevant, an application between the newly created candidate and a Job Opening is created (directly in recruitment pipeline)
- From this point forward, the candidate is treated the same as any applicant who applied directly to this job opening.

---

## Application

> *"Similar to Lead / Opportunity Entity in CRM"*
>
> *"Recruitment Pipeline is similar to Opportunity Pipeline"*

An **Application** represents a candidate's candidacy for a specific Job Opening.

### Application Entry Points

Applications can either enter first an **Applicants Triage**, similar to Leads in CRM.

*Example:* When applicant are coming from Email. Recruiter need to first review the relevancy of this candidate before it enter the Recruitment Pipeline.

**Alternatively** candidates can Join directly the **Recruitment Pipeline**.

*Example:* Candidates are coming from talent pool and are added to a Job Opening. Head hunter can choose to skip the Applicant Triage.

### Field Definition

#### Application Information

| Field Name | Type | Description |
|------------|------|-------------|
| Candidate | Link to Candidate entity | |
| Job Opening | Link to Job Opening Entity | |
| Application Source | Drop-down list | Job Board, Referral, Direct Sourcing, Career Page, Agency |
| Source Details | Text | Job board name, referral name, campaign |
| Application Date | Date | When application was created |

#### Evaluation & Feedback

| Field Name | Type | Description |
|------------|------|-------------|
| Screening Score | Number | Initial screening score |
| Overall Rating | Drop-down list | Poor, Average, Good, Very Good, Excellent |
| Interview Feedback | TBD | Evaluation / feedback records |
| Assessment Results | TBD | Test or assessment outcomes |
| Decision Notes | Text Area | Final decision rationale |

*(Applicant information - TBD)*

---

## Applicant Triage

> **List with preview**

**Objective:** Decide whether this application is worth spending time on.

This is a fast triage stage focused on **relevance**, not suitability.

What happens here:
- High-level scan of the profile
- Minimal effort, high volume
- Decision is binary: **Proceed** or **Stop**

---

## Recruitment Pipeline

> **Kanban**

### Pipeline Stages

- **HR Screening**
- **Assessment / Test**
- **Interviews**
- **Due Diligence**
- **Offer Preparation**
- **Offer Sent**
- **Closed**
  - Hired
  - Rejected
  - Withdrawn

**Select Candidates from DB and create application for job opening**
