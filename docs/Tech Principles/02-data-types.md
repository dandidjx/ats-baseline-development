# Data Types

All types use JSON schema with: unique ID (prefix-based), versioning, GMT timestamps.

## Core Types

```typescript
type User = {
  id: string;
  name: string;
  email: string;
}

type Field = {
  id: string;
  label: string;
  category: 'default' | 'custom';
  type: 'text' | 'number' | 'date' | 'dropdown' | etc;
  defaultValue: any;
  options?: object[];           // for dropdown, tags, etc
  multiSelect?: boolean;
  deleted: boolean;
  deletedOn: Date;
}
```

## Base Entity Pattern

All entities share these common fields:
- `id` - unique identifier
- `index` - human-readable number, partitioned by instance
- `isArchived` - soft delete flag
- `owner` - User who owns the record
- `creator` - User who created it
- `createdOn` / `updatedOn` - DateTime
- `instanceId` - instance identifier
- `tenantId` - tenant identifier
- `customFields` - `{[customFieldId: string]: any}[]`
- `followers` - `User[]` (view-only access)

## Domain Entities

```typescript
type Organization = {
  /* Base fields */
  name: string;
  address: string;
}

type People = {
  /* Base fields */
  firstName: string;
  lastName: string;
  phone: { value: string; label: string; primary: boolean; }[];
  email: { value: string; label: string; primary: boolean; }[];
  organizationId?: string;
}

type Lead = {
  /* Base fields */
  title: string;
  isConverted: boolean;
  organizationId?: string;
  peopleId?: string;
  participants?: string[];
  value: { amount: number; currency: string; };
}

type Opportunity = {
  /* Base fields */
  title: string;
  status: "open" | "won" | "lost";
  stage: string;               // stage ID from pipeline
  pipelineId: string;
  pipelineVersion: number;
  organizationId?: string;
  peopleId?: string;
  participants?: string[];
  value: { amount: number; currency: string; };
}

type Pipeline = {
  id: string;
  label: string;
  stage: {
    key: string;
    label: string;
    Data?: object | any;
  }[];
  version: number;
  /* Base fields: owner, creator, createdOn, updatedOn, instanceId, tenantId */
}

type Case = {
  /* Base fields */
  status: string;
  title: string;
  description: string;
  peopleId?: string;
  organizationId?: string;
  assignee: User[];
  typeId: string;
  formVersion: number;
  workflow?: object;           // status transitions
}

type CaseType = {
  id: string;
  label: string;
  workflow: {
    status: ReactFlow.Node[];
    transitions: ReactFlow.Edge[];
  };
  form: Fields[];
  version: number;
  /* Base fields: owner, creator, createdOn, updatedOn, instanceId, tenantId */
}
```
