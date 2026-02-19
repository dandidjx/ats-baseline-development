# Form Builder Module

## Overview

Drag-and-drop form builder with custom fields, validation, conditional logic, and dynamic rendering. Configuration-driven via JSON.

## Field Types

| Type | Description |
|------|-------------|
| Text / TextArea | Single-line and multi-line text input |
| Dropdown | Single or multi-select from options |
| Checkbox | Boolean toggle |
| Date Picker | Date selection |
| People Picker | User/contact selection |
| File/Link Attachment | File uploads with preview |

## File Attachments

- Multiple attachment fields per form
- Required attachments option
- Encoded filename, original name on download
- Preview without download (IMG, VIDEO, Office files)
- Short URLs (user-guessable file IDs)

**Example:**
- Original: `subscription.jpg`
- Stored: `file_[XXXXXXXXXXXXXXXXXXXX]`

## Core Components

### Form Builder
- Drag-and-drop canvas
- Visual field configuration
- Generates JSON schema

### Field Components
- Reusable, configurable properties
- Appearance, validation, data binding

### Validation Engine
- Required fields
- Data format validation
- Custom validation functions
- User-friendly error feedback

### Data Binding
- Bind to object model/database
- Seamless input, retrieval, persistence

### Conditional Fields
- Show/hide based on other field values
- Dynamic, responsive forms

### Form Renderer
- Renders JSON schema to UI
- Handles layout, styling, interactions

### Audit Trail
- Log all data changes and key events

## Additional Features

- **Localization:** Translatable labels and messages
- **Theming:** CSS customization hooks
- **Persistence:** Server submit, database save, custom actions

## Benchmarks

- [bpmn.io form-js](https://bpmn.io/toolkit/form-js/)
- [form.io](https://form.io/)
- [formsflow.ai](https://formsflow.ai/)
- [Pipedrive forms](https://developers.pipedrive.com/docs/api/v1)
