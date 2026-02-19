SECTION 1: Technology Principles 
 

Teams and M365 First 

 

Our focus is to develop an app that works seamless in Teams (Desktop, web and mobile) and can leverage M365 (outlook email/calendar/contact, sharepoint storage, …) 
 
API, Webhook and JSON Driven 

 

Apps must provide API for all key features. Some API will be securely available for use outside of the app. 

Use JSON format to store all App information. 

 

Benchmark: Stripe 

Stripe provide access to comprehensive API that covers all events and features of the app 

 

 

Highly configurable App 

 

Build highly configurable Apps. Change in workflow, form, business rules, settings should be configuration rather than coding 

 

Do not reinvent the wheel and leverage existing components 

 

Look for modules that are already available AND proven robust. Develop only if we don’t find something suitable. 

 

Code Once - Reuse Many! 

 

Develop modules that can be (re)used in many Apps / projects:  

 

User Interface (UI) Components: Build a library of reusable UI components, such as responsive layout, buttons, forms, menus, and dialog boxes, that can be used across multiple projects to ensure consistency in the user interface. 

Utility Functions: Develop a collection of utility functions or helper classes that provide commonly used functionalities, such as string manipulation, date/time handling, mathematical operations, or input validation. 

CSS: Systematically use pre-defined CSS. Ensure CSS will automatically adapt to Teams (Night) style AND font size will follow size definition  in mobile App 

 

Good Performance 

 

Besides initial loading, pages must load in < 3 secs. Limit repetitive access to data, reduce expensive computation, too many calls, … Use progressive display of UI components, database design that focus on data loading, compression, cache, etc.  

 

Beautiful UI and User Friendly App 

 

Develop App that: 

Look attractive / appealing 

A 5 years old children can understand 

does not require to go through a user documentation 

 

Mobile first 

 

Except few exceptions, all App features must be available on mobile version. When designing UI, always consider the Mobile App user experience. 

 

Log important events / information 

 

Systematic logs of important events, relevant information from  the application. All API Call and Answers must be logged 

 

 

 

 SECTION 2: Data Types 
 type User = { 

  id: string; 

  name: string; 

  email: string;   

} 

 

 

type Organization = { 

  id: string;             // Unique identifier of the organization. 

  index: number;          // Easy to read index of the item, partitioned by instance 

  name: string;           // Name of the organization. 

  isArchived: boolean;    // Indicates if the lead is archived. 

  createdOn: DateTime;        // Date when the organization was created. 

  updatedOn: DateTime;        // Date when the organization was last updated. 

  address: string;        // Address of the organization. 

  owner: User;        // Unique identifier of the organization's owner. 

  creator: User;      // Unique identifier of the user who created the organization. 

  instanceId: string;   // Optional unique identifier for the organization's instance. 

  tenantId: string;       // Unique identifier of the tenant to which the organization belongs. 

  customFields: {[customFieldId: string]: any}[];  // Custom fields associated with the organization 

  followers: User[]  // List of users with view only access to the Organization   

}; 

 

 

type People = { 

  id: string;             // Unique identifier of the person. 

  index: number;          // Easy to read index of the item, partitioned by instance 

  phone: { 

    value: string;        // Phone number value. 

    label: string;        // Label for the phone number. 

    primary: boolean;    // Indicates if this is the primary phone number. 

  }[]; 

  email: { 

    value: string;        // Email address value. 

    label: string;        // Label for the email address. 

    primary: boolean;    // Indicates if this is the primary email address. 

  }[]; 

  isArchived: boolean;    // Indicates if the lead is archived. 

  firstName: string;      // First name of the person. 

  lastName: string;       // Last name of the person. 

  createdOn: DateTime;        // Date when the person was created. 

  updatedOn: DateTime;        // Date when the person was last updated. 

  owner: User;        // Unique identifier of the person's owner. 

  creator: User;      // Unique identifier of the user who created the person. 

  organizationId?: string;  // Optional unique identifier for the person's organization. 

  instanceId: string;     // Optional unique identifier for the person's instance. 

  tenantId: string;       // Unique identifier of the tenant to which the person belongs. 

  followers: User[]  // List of users with view only access 

  customFields: {[customFieldId: string]: any}[]  // Custom fields associated with the person. 

}; 

 

 

type Lead = { 

  id: string;             // Unique identifier of the lead. 

  index: number;          // Easy to read index of the item, partitioned by instance 

  title: string;          // Title of the lead. 

  isArchived: boolean;    // Indicates if the lead is archived. 

  isConverted: boolean;    // Indicates if the lead has been converted to an opportunity. 

  owner: User;        // Unique identifier of the lead's owner. 

  creator: User;      // Unique identifier of the user who created the lead. 

  createdOn: DateTime;        // Date when the lead was created. 

  updatedOn: DateTime;        // Date when the lead was last updated. 

  organizationId?: string;  // Optional unique identifier for the lead's organization. 

  peopleId?: string;      // Optional unique identifier for the lead's associated person. 

  participants?: string[];    // Optional list of id of the lead's associated person. 

  value: { 

    amount: number;       // Amount associated with the lead. 

    currency: string;     // Currency for the lead's value. 

  }; 

  instanceId?: string;   // Optional unique identifier for the lead's instance. 

  tenantId: string;       // Unique identifier of the tenant to which the lead belongs. 

  customFields: {[customFieldId: string]: any}[]  // Custom fields associated with the lead. 

  followers: User[]  // List of users with view only access to the Organization 

}; 

 

 

 

 

type Opportunity = { 

  id: string;             // Unique identifier of the lead. 

  index: number;          // Easy to read index of the item, partitioned by instance 

  title: string;          // Title of the lead. 

  status: "open" | "won" | "lost";    // The status of the opportunity  

  stage: string;            // The current stage of the opportunity in the pipeline, fill with the stage id 

  pipelineId: string;       // The ID of the pipeline this opportunity uses 

  pipelineVersion: number   // The version of the pipeline 

  owner: User;        // Unique identifier of the lead's owner. 

  creator: User;      // Unique identifier of the user who created the lead. 

  createdOn: DateTime;        // Date when the lead was created. 

  updatedOn: DateTime;        // Date when the lead was last updated. 

  organizationId?: string;  // Optional unique identifier for the lead's organization. 

  peopleId?: string;      // Optional unique identifier for the lead's associated person. 

  participants?: string[];    // Optional list of id of the lead's associated person. 

  value: { 

    amount: number;       // Amount associated with the lead. 

    currency: string;     // Currency for the lead's value. 

  }; 

  instanceId?: string;   // Optional unique identifier for the lead's instance. 

  tenantId: string;       // Unique identifier of the tenant to which the lead belongs. 

  customFields: {[customFieldId: string]: any}[]  // Custom fields associated with the lead. 

  followers: User[]  // List of users with view only access to the Organization 

}; 

 

 

type Pipeline = { 

  id: string; 

  label: string; 

  stage: { 

    key: string, 

    label: string, 

    Data?: object | any, 

  }[]; 

  version: number; 

 

 

  owner: User; 

  creator: User; 

  createdOn: DateTime; 

  updatedOn: DateTime; 

 

 

  instanceId: string;     // Optional unique identifier for the person's instance. 

  tenantId: string;       // Unique identifier of the tenant to which the person belongs. 

} 

 

 

type Case = { 

  id: string;               // Unique identifier of the case. 

  index: number;          // Easy to read index of the item, partitioned by instance 

  status: string;           // Status of the case. 

  title: string;            // Title of the case. 

  isArchived: boolean;    // Indicates if the lead is archived. 

  description: string;      // Description of the case. 

  peopleId?: string;        // Unique identifier of the person associated with the case. 

  organizationId?: string;  // Unique identifier of the organization associated with the case. 

  assignee: User[];     // Unique identifier of the case's assignee. 

  owner: User;          // Unique identifier of the case's owner. 

  creator: User;        // Unique identifier of the user who created the case. 

  createdOn: DateTime;          // Date when the case was created. 

  updatedOn: DateTime;          // Date when the case was last updated. 

  instanceId: string;       // Optional unique identifier for the case's instance. 

  tenantId: string;         // Unique identifier of the tenant to which the case belongs. 

  customFields: {[customFieldId: string]: any}[]  // Custom fields associated with the case. 

 

 

 

 

  typeId: string; 

  formVersion: number; 

  workflow?: object;         // The workflow of the case, contains the available status and transitions of the case 

 }; 

 

 

type CaseType = { 

  id: string; 

  label: string; 

  workflow: { 

    status: ReactFlow.Node[], 

    transitions: ReactFlow.Edge[], 

  }; 

  form: Fields[]; 

  version: number; 

 

 

  owner: User; 

  creator: User; 

  createdOn: DateTime; 

  updatedOn: DateTime; 

 

 

  instanceId: string;     // Optional unique identifier for the person's instance. 

  tenantId: string;       // Unique identifier of the tenant to which the person belongs. 

} 

 

 

 

 

Field type is the same for People's Field, Organization's Field, Case's Field etc. 

type Field = { 

  id: string;              // Unique identifier of the field. 

  label: string; 

  category: 'default' | 'custom'; 

  type: 'text' | 'number' | 'date' | 'dropdown' | etc; 

  defaultValue: any;       // Default value of the field if any. 

  options?: object[];       // List of options, used for 'dropdown' | 'tags' | etc. 

  multiSelect?: boolean;    // Whether users can select multiple values for the field, used for 'dropdown' | 'tags' | etc. 

  deleted: boolean; 

  deletedOn: Date; 

} 

 

 

 SECTION 3: Core Modules 
 All core modules should allow "easy" configuration of their state, business rules, etc using a JSON File, example: fields in a form, what step in a workflow, who can do what in a App, what subscription / plan give access to what 

 

Form Builder and Custom Field 

Custom Workflow 

List / Table / Kanban View / Calendar View 

 

Messaging and Event System: Create a module that facilitates communication and event handling between different components or systems, enabling loose coupling and scalability. 

Alert & Notification: Each App will provide its own setting panel so user can configure if notification should be send to Teams (Chatbot) and/or email and/or user UI and/or external webhook .. Each option being a listener to event(s) ?! 

Scheduler: Independent component to submit alert and notification at pre-defined date to pre-designed recipient. Scheduler does know about original app (loose coupling) 

UI Notification: UI will be displayed on top of user screen no matter what the user is currently looking at. UI Notification should in any case not have any impact on the user current screen. UI Notifications can stack. UI Notification are display during a pre-defined time. User can manually close notification or let it become obsolet.  

Adhoc notification might be displayed until user decide to close this notification 

Build chat tool, that look like a chat tool, allow "@", emoticon, etc.. <= see opportunity to reuse chat (GraphAPI), and / or chat panel  

 

 

Configuration 

Logging and Error Handling: Develop an error handling module that can be easily integrated into different applications. 

 

 

 

Internationalization and Localization: Design a module that supports multiple languages and time zone. 

Subscription: User can subscribe to more than 1 apps but all will be managed under same subscription management umbrella. Subscription schema (per seat, volume or other) is not yet defined 

 

 

User management 

If within Teams option to synch from Teams channel 

In any case, option to register and login using an email 

Authentication and Authorization: SSO & CodeFlow 

SECTION 4: Form Builder and Custom fields 
Form Builder: Build a form builder component that allows users to create custom forms by dragging and dropping various types of fields (text fields, checkboxes, dropdowns, etc.) onto a canvas. The form builder should provide an intuitive user interface and generate the necessary code or configuration for rendering the form. 

Field Components: Develop a library of reusable field components that represent different types of form fields. Each component should have configurable properties to customize its appearance, validation rules, and data binding options. 

Text and Text Area 

Dropdown list 

Checkbox 

Date picker 

People picker 

File and Link Attachment: Component can be added to Form. Multiple instances of this component can be added to a Form. Setting could be set so that Attachment is necessary to submit a Form. File name is encoded and original file name used when downloading. Preview without downloading of standard IMG, VIDEO and Office files. User should be able to guess a file URL and do not store a complete file URL 

Original file name: subscription.jpg 

Unique Id file stored at transaction: file_[XXXXXXXXXXXXXXXXXXXX] 

 

Validation Engine: Implement a validation engine or module that can handle validation logic for the custom form fields. This engine should support various validation rules (required fields, data format validation, custom validation functions) and provide feedback to the user when validation errors occur. 

Data Binding: Create a mechanism to bind the form fields to data sources, such as an object model or database. This allows for seamless data input, retrieval, and persistence. 

Conditional Fields: Include support for conditional fields, where the visibility or availability of certain fields depends on the values or selections made in other fields. This helps create dynamic and responsive forms. 

Form Renderer: Develop a form renderer component that takes the form configuration or code generated by the form builder and renders the form on the user interface. The renderer should handle field layout, styling, and user interactions. 

Persistence and Submission: Implement functionality to handle form submissions and persist the entered data. This could involve sending the form data to a server, saving it to a database, or triggering custom actions based on the submitted data. 

Localization and Internationalization: Consider incorporating localization and internationalization support into the form components, allowing for translations of field labels, validation messages, and other form-related content. 

Error Handling and Feedback: Provide a mechanism to handle and display errors or validation messages to the user in a clear and user-friendly manner. This could include inline error messages, tooltips, or summary error messages at the top of the form. 

Audit trail: Log and display all key event, data changes happening on a form 

Theming and Customization: Allow users to customize the look and feel of the form components by providing theming options or CSS customization hooks. This ensures the forms can adapt to different visual styles and branding requirements. 

 

 

Benchmark 

https://bpmn.io/toolkit/form-js/ 

https://form.io/ 

https://formsflow.ai/ 

pipedrive 

 

 

 

 

 

<<form.json>>
 

 SECTION 5;Custom workflows 
 Workflow Designer: Build a visual workflow designer that allows users to create, modify, and visualize workflows using a drag-and-drop interface. The designer should provide a palette of workflow elements (e.g., tasks, conditions, branches) that users can assemble to define the flow and logic of their workflows. 

Workflow Engine: Implement a workflow engine that can interpret and execute the workflows defined by users. The engine should provide capabilities for managing the state of workflows, executing tasks or actions, handling branching logic, and managing transitions between workflow steps. 

Task Components: Develop a library of reusable task components that represent the actions or steps within a workflow. Each task component should be configurable, allowing users to define the specific behavior, input parameters, and output results for that task. 

Condition Components: Include condition components that allow users to define branching logic within the workflows. These components should support various types of conditions (e.g., comparisons, boolean operations) and provide flexible configuration options for defining the conditions. 

Integration Points: Provide integration points or connectors to external systems or services, allowing users to incorporate external actions or triggers within their workflows. This could involve integrating with APIs, webhooks, or other types of communication channels. 

Variables and Data Binding: Implement a mechanism for users to define and manage variables within workflows. Users should be able to bind variables to input data, store and retrieve values, and use them for decision-making or passing data between tasks. 

Event Handling: Enable users to define event-driven workflows by allowing them to subscribe to events and trigger workflow execution based on event occurrences. This could involve integrating with event brokers, message queues, or other event-driven architectures. 

Error Handling and Logging: Include features for error handling and logging within the workflow engine. This ensures that users can identify and troubleshoot issues within their workflows, and provides visibility into the execution and history of workflow instances. 

Notification and Escalation: Provide capabilities for sending notifications or escalating tasks within the workflows. This allows users to receive alerts or take action when specific conditions or deadlines are met. 

Versioning and Workflow Lifecycle Management: Implement versioning and workflow lifecycle management features that allow users to manage different versions of their workflows, track changes, and control the deployment and activation of workflows in production environments. 

 

 

Benchmark: 

https://bpmn.io/toolkit/bpmn-js/ 

https://marketplace.visualstudio.com/items?itemName=bpmn-io.vs-code-bpmn-io 

Pipedrive (kanban view) 

SECTION 6: Localization (Multi-Languages) 
Localization Manager: Create a localization manager component that handles the management and retrieval of localized resources. This component should provide methods to load and store language-specific content, such as translations or localized strings. 

Resource Files: Use resource files or resource bundles to store language-specific content. These files should be organized based on language and contain key-value pairs representing the localized strings or resources. 

Language Switcher: Develop a language switcher component that allows users to switch between different languages at runtime. This component should update the user interface and reload the appropriate language-specific resources when a language is changed. 

Locale Detection: Implement a mechanism to automatically detect the user's preferred language or locale based on their browser settings or user preferences. This can help set the initial language for the user interface. 

Date and Time Localization: Provide localization support for date and time formats. The software should be able to display dates, times, and calendars in the user's preferred language and format. 

Pluralization and Grammatical Rules: Handle language-specific pluralization and grammatical rules. Some languages have complex rules for plural forms, gender agreement, or sentence structure. Develop a component that can handle these language-specific rules when generating or displaying content. 

Translation Workflow: Establish a translation workflow to manage the translation process efficiently. This involves development of a tool for tracking translation progress, and mechanisms for updating translations when the software evolves. 

User Interface Localization: Ensure that the user interface elements, such as buttons, labels, menus, and error messages, can be easily localized. Use resource keys or identifiers for these elements, allowing the language-specific content to be dynamically loaded and displayed. 

 
 SECTION 7: Configuration driven 
 Configuration Files: Use configuration files (JSON) to store the configurations. These files can be easily read and parsed by the application during startup or when needed. Configuration files provide flexibility and can be version-controlled for easy management. 

Key-Value Stores: Use key-value stores to persist configurations. 

Environment Variables: Use environment variable to persist global information needed at run time: dev/test/prod environment related info 

SECTION 8: JSON 
Unique ID for each event object 

First characters define the object 


"customer": "cus_NpIAPzQ2aos4kr",

"id": "price_1MeeB1HDd3VLw7kRy9knDQsS",

"product": "prod_NG6C6swUamzIlQ"


 

 

Version of the "object" 

Datetime in GMT + Timezone 

Date in epoch / unix format?! 
 

Standardize error type of message 

 

 

 

Benchmark 

https://developer.monday.com/apps/docs/mondayapi 

https://stripe.com/docs/api 

https://developers.pipedrive.com/docs/api/v1 

 

<<form.json>>
 