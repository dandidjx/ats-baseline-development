# Architecture Overview

## Technology Principles

| Principle | Description |
|-----------|-------------|
| **Teams & M365 First** | Seamless integration with Teams (desktop/web/mobile) and M365 services (Outlook, SharePoint) |
| **API-Driven** | All features accessible via API; JSON for all data storage |
| **Configuration over Code** | Workflow, forms, business rules, and settings are configuration, not code |
| **Reusable Components** | Build once, use across many apps (UI components, utilities, CSS system) |
| **Performance** | Pages load in < 3 secs; minimize repetitive data access and expensive computation |
| **Mobile First** | All features available on mobile; design with mobile UX in mind |
| **Intuitive UX** | Simple enough for a 5-year-old; no user documentation required |
| **Comprehensive Logging** | Log all important events and API calls/responses |

## Core Modules

| Module | Purpose |
|--------|---------|
| **Form Builder** | Drag-and-drop custom forms with validation, conditional fields, data binding |
| **Custom Workflow** | Visual workflow designer with drag-and-drop tasks and conditions |
| **Views** | List/Table/Kanban/Calendar views for data display |
| **Messaging & Events** | Event-driven communication between components (loose coupling) |
| **Alerts & Notifications** | Configurable notifications via Teams, email, UI, webhooks |
| **Scheduler** | Independent component for timed notifications (app-agnostic) |
| **UI Notifications** | Overlay toasts/notifications that stack and auto-dismiss |
| **Chat Tool** | Full chat functionality with @mentions, emoticons |
| **User Management** | Teams sync or email-based registration |
| **Authentication** | SSO & OAuth2 Code Flow |
| **Subscription** | Multi-app subscription management (per seat, volume, etc.) |
| **Logging & Error Handling** | Centralized error handling and event logging |
| **Localization** | Multi-language and timezone support |

## Benchmarks

- **API Design:** [Stripe API](https://stripe.com/docs/api)
- **Forms:** [form.io](https://form.io/), [bpmn.io form-js](https://bpmn.io/toolkit/form-js/)
- **Workflows:** [bpmn.io bpmn-js](https://bpmn.io/toolkit/bpmn-js/)
- **CRM/ATS:** [Pipedrive](https://developers.pipedrive.com/docs/api/v1), [Monday.com](https://developer.monday.com/apps/docs/mondayapi)
