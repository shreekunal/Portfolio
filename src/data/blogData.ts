import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "build-workzone",
    slug: "build-workzone",
    title: "Architecting Unified Digital Workspaces with SAP Build Work Zone",
    subtitle: "Integrating business applications, multi-system launchpads, and role-based experiences on SAP BTP.",
    excerpt: "A consultant's guide to unifying disparate enterprise systems into a cohesive, high-performance launchpad experience using SAP Build Work Zone.",
    date: "Nov 2026",
    readTime: "5 min read",
    category: "Digital Workplace",
    tags: ["SAP Build Work Zone", "SAP BTP", "Launchpad", "XSUAA"],
    sections: [
      {
        heading: "The Enterprise Fragmentation Challenge",
        paragraphs: [
          "In large-scale enterprise environments, business users frequently juggle multiple disconnected systems: on-premise SAP S/4HANA instances, custom SAP BTP extension applications, third-party SaaS portals, and legacy microservices.",
          "Without a unified access layer, context switching degrades user productivity and creates administrative overhead for authorization governance. SAP Build Work Zone addresses this by providing a single, role-tailored digital workspace across hybrid landscapes.",
        ],
        keyPoints: [
          "Centralized access across on-premise and cloud business suites",
          "Seamless Single Sign-On (SSO) driven by BTP Destination service and XSUAA",
          "Reduced cognitive friction with unified notifications and task federation",
        ],
      },
      {
        heading: "Standard vs. Advanced Edition Architecture",
        paragraphs: [
          "When architecting Work Zone solutions on SAP BTP, choosing between standard launchpad functionality and the advanced digital workplace edition is critical.",
          "SAP Build Work Zone, standard edition focuses on federated launchpad capabilities: dynamic app tiles, visual catalogs, space-and-page layout hierarchies, and direct SAPUI5/Fiori app hosting.",
          "The advanced edition elevates this into an interactive collaborative workspace, supporting interactive CMS cards, workspace creation for cross-functional teams, document repositories, and integrated Joule generative AI conversational agents.",
        ],
      },
      {
        heading: "Configuring BTP Destination Bindings & Spaces",
        paragraphs: [
          "Integrating custom SAP Cloud Application Programming Model (CAP) applications into Work Zone begins with declarative MTA deployment. By binding your HTML5 Application Repository service and configuring approuter routes, applications register automatically into the BTP Launchpad Service portal.",
          "Ensure destination descriptors utilize OAuth2UserTokenExchange or SAPSystem authentication to propagate user contexts securely without manual re-authentication prompts.",
        ],
        code: `// mta.yaml destination service configuration snippet
- name: my-workzone-dest-srv
  type: org.cloudfoundry.managed-service
  parameters:
    service: destination
    service-plan: lite
    config:
      HTML5Runtime_enabled: true
      init_data:
        instance:
          destinations:
            - Name: s4h-cloud-core
              Authentication: OAuth2UserTokenExchange
              URL: https://my-s4h-instance.sap
              Type: HTTP
              ProxyType: Internet`,
      },
      {
        heading: "Production Optimization & Consultant Advice",
        paragraphs: [
          "Prioritize lean Space and Page hierarchies. Rather than overwhelming users with dozens of static tiles, leverage dynamic data badges and semantic object intent navigation (e.g. #PurchaseOrder-manage).",
          "Regularly audit content provider federation syncs to ensure changed roles in upstream backend systems update seamlessly without user session invalidation.",
        ],
      },
    ],
  },
  {
    id: "build-process-automation",
    slug: "build-process-automation",
    title: "Automating Enterprise Decisions & Workflows with SAP Build Process Automation",
    subtitle: "Modernizing business logic with low-code orchestration, decision tables, and event triggers on SAP BTP.",
    excerpt: "How to orchestrate complex approval processes, configure business decision tables, and trigger CAP microservices without accumulating technical debt.",
    date: "Nov 2026",
    readTime: "6 min read",
    category: "Workflow Automation",
    tags: ["Process Automation", "SAP CAP", "Business Rules", "BTP"],
    sections: [
      {
        heading: "Modernizing Classical Workflow Management",
        paragraphs: [
          "Traditional custom approval engines often relied on complex ABAP workflow templates or custom-coded state machines in Node.js. While flexible, they carry high ongoing maintenance costs whenever business policy changes.",
          "SAP Build Process Automation unifies visual workflow modeling, business rules decision tables, and robotic process automation (RPA) into a cloud-native, serverless engine hosted natively on SAP BTP.",
        ],
        keyPoints: [
          "Decoupled workflow execution from backend core ERP systems",
          "Auditable decision tables that business teams can adjust without redeploying code",
          "Automated context persistence with built-in audit trails and SLA timers",
        ],
      },
      {
        heading: "Designing Decision Tables and Business Rules",
        paragraphs: [
          "A major strength of Build Process Automation is its decision logic engine. Instead of nested if/else statements scattered across backend controllers, policies are structured in declarative tabular format.",
          "For instance, vendor approval thresholds (e.g., invoices < $10k routed to Department Head, >= $10k routed to CFO) are evaluated as a discrete step within the process pipeline, returning structured outcomes that dictate subsequent workflow branches.",
        ],
      },
      {
        heading: "Orchestrating SAP CAP Microservices via API Triggers",
        paragraphs: [
          "To trigger a process instance from an external CAP microservice, use the SAP Build Process Automation REST API or SAP Event Mesh. When an entity reaches a specific state, emit a POST request to the process execution endpoint with the payload schema.",
        ],
        code: `// Triggering a process instance from SAP CAP custom handler
this.on('submitForApproval', 'PurchaseOrders', async (req) => {
  const { ID, TotalAmount, Requester } = req.data;
  const spaService = await cds.connect.to('SPA_API_DEST');

  const response = await spaService.post('/workflow/rest/v1/workflow-instances', {
    definitionId: 'my.tenant.purchaseApprovalProcess',
    context: {
      orderId: ID,
      amount: TotalAmount,
      requestedBy: Requester,
      submittedDate: new Date().toISOString()
    }
  });

  return { status: 'Triggered', instanceId: response.id };
});`,
      },
      {
        heading: "Key Takeaways for Enterprise Implementations",
        paragraphs: [
          "Always design for idempotency. If an external service retry triggers duplicate workflow calls, enforce unique correlation keys to prevent multiple concurrent approval instances.",
          "Take advantage of standard My Inbox integration so business executives can approve tasks on mobile devices without needing direct access to backend systems.",
        ],
      },
    ],
  },
  {
    id: "fiori-elements",
    slug: "fiori-elements",
    title: "Accelerating Enterprise UI Development with SAP Fiori Elements & OData v4",
    subtitle: "Building scalable, accessible, and maintenance-free SAPUI5 applications using metadata-driven annotations.",
    excerpt: "Best practices for pairing SAP CAP Core Data Services (CDS) UI annotations with SAP Fiori Elements floorplans for rapid enterprise delivery.",
    date: "Nov 2026",
    readTime: "5 min read",
    category: "Enterprise Frontend",
    tags: ["Fiori Elements", "SAPUI5", "CDS Annotations", "OData v4"],
    sections: [
      {
        heading: "The Power of Annotation-Driven Development",
        paragraphs: [
          "Handcrafting freestyle SAPUI5 views often means writing hundreds of lines of repetitive XML and controller boilerplate for search fields, filter bars, table columns, and detail page layouts.",
          "SAP Fiori Elements changes this paradigm completely. By expressing the UI layout directly through OData annotations in Core Data Services (CDS), the framework generates responsive, accessible, and theme-compliant floorplans automatically.",
        ],
        keyPoints: [
          "Zero frontend layout boilerplate for standard CRUD and analytical floorplans",
          "Guaranteed adherence to official SAP Fiori design guidelines and accessibility standards",
          "Automatic performance optimizations including lazy loading and pagination",
        ],
      },
      {
        heading: "Core CDS UI Annotations You Need to Master",
        paragraphs: [
          "The three foundational annotations in Fiori Elements are @UI.LineItem (table columns), @UI.SelectionFields (filter bar inputs), and @UI.HeaderInfo (object page headers).",
          "By defining these in your service definition CDS files, the List Report and Object Page assemble themselves dynamically at runtime.",
        ],
        code: `// CDS UI Annotation Example for List Report
annotate CatalogService.Products with @(
  UI.HeaderInfo: {
    TypeName: 'Product',
    TypeNamePlural: 'Products',
    Title: { Value: name }
  },
  UI.SelectionFields: [ category_code, supplier_ID ],
  UI.LineItem: [
    { $Type: 'UI.DataField', Value: ID, Label: 'Product ID' },
    { $Type: 'UI.DataField', Value: name, Label: 'Product Name' },
    { $Type: 'UI.DataField', Value: price, Label: 'Net Price' },
    { $Type: 'UI.DataField', Value: stock, Criticality: criticality }
  ]
);`,
      },
      {
        heading: "Extensibility Without Framework Lock-In",
        paragraphs: [
          "When business requirements demand unique interactive logic not covered by standard floorplans, Fiori Elements supports Flexible Programming Model (FPM) extensions.",
          "You can embed custom page sections, controller extensions, and action buttons without sacrificing the speed and consistency of the standard framework.",
        ],
      },
      {
        heading: "Architectural Recommendations",
        paragraphs: [
          "Adopt OData v4 as the default protocol for all new Greenfield projects. V4 delivers significantly leaner payload structures, batch request optimizations, and cleaner draft handling compared to OData v2.",
          "Decouple UI annotations from the core database domain layer by keeping annotations in separate service-specific CDS files.",
        ],
      },
    ],
  },
];
