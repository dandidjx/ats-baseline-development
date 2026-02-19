# Component Registry
> **Rule**: Check this list before creating new components in `/client-app/components/`

## Structure
- **Base Path**: `/client-app/components/`
- **Import Pattern**: `@/components/[component-name]`

<!-- COMPONENT LIST START -->

| Component | Path | Usage Context | Labels |
|-----------|------|---------------|--------|
| **Button** | `/button` | Form submissions, CTAs, actions | atomic, interaction |
| **Card** | `/card` | Content containers, previews | layout, container |
| **Input** | `/input` | Form fields, text entry | atomic, form |
| **Modal** | `/modal` | Dialogs, confirmations, overlays | overlay, interaction |
| **DataTable** | `/data-table` | Tabular data >5 rows, sorting/filtering | data-display, complex |
| **Sidebar** | `/sidebar` | Navigation layout, dashboard structure | layout, navigation |
| **[COMPONENT-NAME]** | `/[folder-name]` | [When to use this] | [labels] |

<!-- COMPONENT LIST END -->

## Labels Glossary
- `atomic`: Single element (button, input)
- `composite`: Multiple atoms combined (search-bar, form-group)
- `layout`: Structure containers (grid, sidebar, stack)
- `page-specific`: Business logic tied (user-profile-card)
- `form`: Input-related components
- `data-display`: Lists, tables, cards showing data
- `overlay`: Modals, tooltips, popovers
- `interaction`: Click handlers, state changes

## Quick Decision Rules
1. **Need a button?** → Use `Button` (don't create new)
2. **Form + validation?** → Use `Form` composite (wraps Input, Button)
3. **Table with >10 rows?** → Use `DataTable` (not Card list)
4. **Page layout?** → Use `PageContainer` or `Sidebar`
5. **Unique business feature?** → Create new in `/components/`, add row above

## File Paths Reference
```
/client-app
├── /components
│   ├── /button
│   ├── /card
│   ├── /data-table
│   └── /[your-components-here]
└── /page
    ├── /page-1
    └── /page-2
```