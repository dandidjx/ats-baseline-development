# Entity: Contact

## Description

A **Contact** represents an individual who participates in the recruitment process on behalf of an organization.

A Contact is always associated with **exactly one** Organization.

## Use Cases

Contacts can participate in Job Openings in various ways:
- **Recruitment Contact**: Primary business contact for a job
- **Participant**: Additional stakeholder (client stakeholder, external reviewer)
- **Interviewer**: Conducts candidate interviews
- **Decision Maker**: Has authority to make hiring decisions

## Roles

Contacts can have the following roles on a Job Opening:
- Hiring Manager
- Recruiter
- Interviewer
- HR Partner
- Recruitment Coordinator
- Decision Maker

> This list can be amended by ATS Owner

## Relationships

```
1 Organization → 0..N Contacts
0..N Contacts ↔ 0..N Job Openings
```

### Organization → Contact

```
Contact --"0,1"--> Belongs --"0,n"--> Organization
```

### Contacts ↔ Job Openings

Contacts participate in Job Openings with a role. This information is used in the application.

```
Job Opening --"0,n"--> Is Participant --"0,n"--> Contact
```

## Base Type Definition

This entity is the same as the `People` type defined in the technical principles:

```typescript
type People = {
  id: string;
  index: number;
  phone: {
    value: string;
    label: string;
    primary: boolean;
  }[];
  email: {
    value: string;
    label: string;
    primary: boolean;
  }[];
  isArchived: boolean;
  firstName: string;
  lastName: string;
  createdOn: DateTime;
  updatedOn: DateTime;
  owner: User;
  creator: User;
  organizationId?: string;
  instanceId: string;
  tenantId: string;
  followers: User[];
  customFields: {[customFieldId: string]: any}[];
};
```
