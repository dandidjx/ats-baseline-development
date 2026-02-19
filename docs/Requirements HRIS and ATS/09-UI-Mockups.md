# UI Mockups and Wireframes

## Overview

This document describes the user interface design for the HRIS/ATS system.

---

## Main Recruitment Interface

![Recruitment Management System Interface](image-5.png)

**Caption:** Recruitment Management System Interface - Job Openings and Recruitment Pipeline

---

## Layout Structure

### Top Section: Job Opening Kanban Board

A Kanban board view showing all Job Openings organized by status:

| Column | Description |
|--------|-------------|
| **Draft** | Job openings being created, not yet submitted |
| **Submitted** | Awaiting approval |
| **Approved** | Approved and ready for recruitment |
| **Recruitment In Progress** | Active recruitment |

**Card Information Displayed:**
- Job Title
- Organization Name
- Number of hires
- Status badge
- Monetary value (total compensation)

**Metrics Displayed:**
- Nb Application per status in recruitment pipeline
- Total Candidates Rejected

**Actions:**
- Create new Job Opening
- Drag and drop between columns
- Click to open Job Opening details

---

### Bottom Section: Job Opening Form (Detail View)

When a Job Opening is selected, a detailed form appears below the Kanban board.

#### Tabbed Interface

| Tab | Content |
|-----|---------|
| **Recruitment Pipeline** | Kanban view of applications for this job |
| **Details** | Job opening fields and information |
| **Applicants** | List view of all applicants |
| **Activity** | Activity log and notes |

---

## Recruitment Pipeline Kanban

### Stages

| Stage | Description |
|-------|-------------|
| **HR Screening** | Initial HR screening |
| **Assessment / Test** | Skills or psychological assessment |
| **Interviews** | One or more interview rounds |
| **Due Diligence** | Reference checks, background checks |
| **Offer Preparation** | Preparing offer details |
| **Offer Sent** | Offer has been sent to candidate |
| **Closed** | Final state (Hired, Rejected, Withdrawn) |

### Application Card

Each application in the pipeline displays:

**Candidate Information:**
- Name (e.g., "Sang Delattre")
- Current job title
- Years of experience
- Key skills

**Application Information:**
- Application source
- Application date
- Current stage
- Overall rating (if assigned)
- Screening score

**Quick Actions:**
- Move to next stage
- Reject
- Add feedback
- View full profile
- Schedule interview

---

## Key UI Features

### 1. Dual Kanban Layout

**Why:** Allows recruiters to see both:
- All job openings and their status (top)
- Applications for a selected job opening (bottom)

**Benefit:** No need to navigate between pages - everything is visible at once.

### 2. Metrics Dashboard

Real-time metrics displayed prominently:
- Number of applications per stage
- Total candidates rejected
- Time in each stage
- Conversion rates

### 3. Quick Actions

Common actions available without leaving the view:
- Move candidates between stages
- Add quick feedback
- Send emails
- Schedule interviews
- Update status

### 4. List with Preview (Applicant Triage)

For high-volume screening:
- List view of all applicants
- Side panel with candidate preview
- Quick approve/reject buttons
- Bulk actions available

---

## Responsive Design

### Desktop
- Full dual Kanban layout visible
- Side panels for detailed information
- Rich visualizations and metrics

### Tablet
- Single Kanban view with tabs
- Collapsible side panels
- Simplified metrics

### Mobile
- Single column view
- Swipe between stages
- Card-based layout
- Essential actions only

---

## Visual Design Principles

Based on technical principles:
- **Beautiful UI** - Attractive and appealing
- **User Friendly** - A 5-year-old child can understand
- **No Documentation Required** - Intuitive and self-explanatory
- **Mobile First** - All features available on mobile
- **Teams Integration** - Seamless integration with Teams look and feel
- **Dark Mode Support** - Adapts to Teams Night theme
- **Font Scaling** - Follows mobile app font size definitions

---

## Accessibility

- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Clear visual hierarchy
- Descriptive labels and instructions

---

## Performance Requirements

Based on technical principles:
- Initial page load: < 3 seconds
- Subsequent page loads: < 3 seconds
- Progressive display of UI components
- Optimized data loading
- Caching for frequently accessed data
