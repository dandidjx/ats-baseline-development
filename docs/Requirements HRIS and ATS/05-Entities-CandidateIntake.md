# Entity: Candidate Intake

## Description

**Candidate Intake** captures raw, early candidate profiles before they are fully processed.

## Purpose

Candidate Intake serves as a triage/entry point for new candidate information:
- Captures raw candidate data
- Allows for review and enrichment
- Can be promoted to full Candidate records

## Lifecycle

### Conversion to Candidate

Once reviewed or enriched, Candidate Intake profiles can be **promoted to Candidates** (Talent Pool).

When a candidate intake is deemed relevant for a specific job opening:
1. A Candidate is created in Talent Pool
2. When relevant, an Application is created between the newly created candidate and a Job Opening (directly in recruitment pipeline)
3. From this point forward, the candidate is treated the same as any applicant who applied directly to this job opening

## Key Features

- **Quick capture**: Minimal required fields for fast entry
- **Bulk import**: Support for importing multiple candidates
- **Source tracking**: Track where candidates came from
- **Conversion workflow**: Easy promotion to full Candidate records

## Important Note

A Candidate Intake can be allocated to **more than one job opening**.

## Relationships

```
Candidate Intake → Candidate → Application → Job Opening
```

### Conversion Flow

```
Candidate Intake == "Convert to" ==> Candidate
Candidate --"0,n"--> Application --"1,1"--> Job Opening
```

## Data Sources

Candidate Intake can be populated from:
- Manual entry
- Email parsing
- Resume imports (PDF/Word)
- LinkedIn profiles
- Career page submissions
- Job board feeds
- Referrals

## Base Type Reference

This entity is similar to the `Lead` type defined in technical principles, with ATS-specific workflow.
