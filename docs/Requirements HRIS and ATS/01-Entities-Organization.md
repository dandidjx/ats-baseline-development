# Entity: Organization

## Description

An **Organization** represents a legal or operational entity involved in the recruitment process.

## Organization Types

### A) End-User Organization (Direct Hiring)

An End-User Organization uses the ATS to manage recruitment for its own internal hiring needs.

**Characteristics:**
- The Organization entity represents the hiring organization
- The organization is both:
  - The customer of the ATS
  - The employer for all job openings
- The Organization entity will typically be a single, unique value in the system

### B) Headhunter / Recruitment Agency

A Headhunter company uses the ATS to manage recruitment on behalf of multiple client organizations.

**Characteristics:**
- The ATS customer is the headhunter company
- The Organization entity represents the headhunter's client companies (the hiring organizations)

## Key Principles

> **Important Note:**
> - The Organization entity **always represents the hiring organization**
> - Job openings are always associated with an Organization entity
> - Candidates are managed by the hiring team and assigned to a job opening

## Relationships

```
1 Organization → 0..N Contacts
1 Organization → 0..N Job Openings
```

### Organization → Contacts

Contacts represent people associated with an organization (HR, managers, interviewers, external stakeholders).

```
Contact --"0,1"--> Belongs --"0,n"--> Organization
```

### Organization → Job Openings

Each Job Opening belongs to one Hiring Organization.

- The organization represents:
  - The hiring company (end-user case), OR
  - The client company being recruited for (headhunter case)

## Base Type Definition

This entity extends the base `Organization` type defined in the technical principles:

```typescript
type Organization = {
  id: string;
  index: number;
  name: string;
  isArchived: boolean;
  createdOn: DateTime;
  updatedOn: DateTime;
  address: string;
  owner: User;
  creator: User;
  instanceId: string;
  tenantId: string;
  customFields: {[customFieldId: string]: any}[];
  followers: User[];
};
```
