# Standards & Conventions

## Localization (Multi-Language)

### Components

| Component | Purpose |
|-----------|---------|
| **Localization Manager** | Load/store language resources |
| **Resource Files** | Key-value pairs per language |
| **Language Switcher** | Runtime language switching |
| **Locale Detection** | Auto-detect from browser/settings |
| **Date/Time Localization** | Localized formats |
| **Pluralization** | Language-specific rules |
| **Translation Workflow** | Track translation progress |

### UI Localization

- All UI elements use resource keys
- Buttons, labels, menus, errors dynamically loaded
- Support complex grammar rules (gender, pluralization)

## Configuration Management

### Approach

| Method | Use Case |
|--------|----------|
| **JSON Files** | App configuration, version-controlled |
| **Key-Value Store** | Runtime configuration |
| **Environment Variables** | Global/dev/test/prod settings |

### Configuration-Driven

- Forms fields
- Workflow steps
- User permissions
- Subscription/plan access

## JSON Standards

### Unique IDs

Prefix-based object identification:

```json
"customer": "cus_NpIAPzQ2aos4kr",
"id": "price_1MeeB1HDd3VLw7kRy9knDQsS",
"product": "prod_NG6C6swUamzIlQ"
```

### Object Versioning

Every object includes a `version` field.

### Timestamps

- Format: GMT + timezone
- Consider: Epoch/unix format

### Error Messages

Standardized error type and format across all APIs.

## API Benchmarks

- [Stripe API](https://stripe.com/docs/api) - comprehensive, event-driven
- [Monday.com API](https://developer.monday.com/apps/docs/mondayapi) - config-driven
- [Pipedrive API](https://developers.pipedrive.com/docs/api/v1) - CRM patterns
