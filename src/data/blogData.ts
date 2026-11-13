import { BlogPost } from "../types";

export const BLOG_POSTS: BlogPost[] = [
  {
    "id": "getting-started-with-sap-build-process-automation",
    "slug": "getting-started-with-sap-build-process-automation",
    "title": "Getting Started with SAP Build Process Automation: Complete  Mission Guide",
    "subtitle": "An exhaustive, step-by-step masterclass with  matching screenshots, form field tables, and exact click instructions for all 5 tutorial groups.",
    "excerpt": "Follow the complete SAP Developers mission with  precision: each numbered action step features its exact matching screenshot, field table, and click guidance directly beneath the instruction.",
    "date": "Nov 2026",
    "readTime": "45 min read",
    "category": "Process Automation",
    "tags": [
      "SAP Build Process Automation",
      "SAP BTP",
      "Workflow",
      "Business Rules",
      "Forms & Approvals",
      "Conditions",
      "My Inbox",
      "Process Visibility",
      "SAP CAP",
      "SAPUI5",
      "SAP Cloud SDK"
    ],
    "sources": [
      {
        "title": "SAP Help Portal: What is SAP Build Process Automation?",
        "url": "https://help.sap.com/docs/build-process-automation/sap-build-process-automation/what-is-sap-build-process-automation",
        "badge": "SAP Help Documentation"
      },
      {
        "title": "SAP Developers Mission: Build Your First Business Process with SAP Build Process Automation (All 5 Groups)",
        "url": "https://developers.sap.com/tutorials/mission-build-your-first-business-process-with-sap-build-process-automation",
        "badge": "SAP Developers 5-Part Mission"
      },
      {
        "title": "GitHub: CAPM Backend - BPA Workflow Trigger & Service Task Callback (triggerWorkflow)",
        "url": "https://github.com/shreekunal/SAPBackEndConcepts/tree/main/triggerWorkflow",
        "badge": "GitHub Repo: CAPM"
      },
      {
        "title": "GitHub: SAPUI5 Frontend - BPA Workflow Trigger Application (ui5_trigger_bpa)",
        "url": "https://github.com/shreekunal/SAPBackEndConcepts/tree/main/ui5_trigger_bpa",
        "badge": "GitHub Repo: UI5"
      },
      {
        "title": "SAP Community: Trigger SAP Build Process Automation Workflow from Fiori Application",
        "url": "https://community.sap.com/t5/technology-blog-posts-by-members/trigger-sap-build-process-automation-workflow-from-fiori-application/ba-p/14418167",
        "badge": "SAP Community Tutorial"
      }
    ],
    "groups": [
      {
        "id": "group-overview",
        "title": "Overview: SAP Clean Core & Architecture Foundations",
        "subtitle": "Core concepts, architectural pillars, and unified capabilities from the SAP Help Portal documentation.",
        "badge": "Foundations",
        "sections": [
          {
            "heading": "What is SAP Build Process Automation?",
            "paragraphs": [
              "SAP Build Process Automation is SAP's unified citizen-developer and professional low-code cloud solution for composing, orchestrating, and automating enterprise workflows across SAP and non-SAP landscapes.",
              "Delivered natively on SAP Business Technology Platform (BTP), it unifies four foundational pillars into a cohesive visual studio: graphical Process Builder, Decision Management (Business Rules), Embedded Automations (RPA bots via Desktop Agent), and end-to-end Process Visibility dashboards.",
              "By decoupling business processes from the ERP core (SAP Clean Core strategy), organizations can adapt workflows rapidly to operational updates without modifying underlying S/4HANA systems."
            ],
            "keyPoints": [
              "Unifies Workflow Management, RPA bots, and Decision Services into one studio",
              "Adheres to SAP Clean Core principles by keeping extensions outside ERP transactional cores",
              "Includes hundreds of pre-packaged industry processes in the SAP Build Store",
              "Integrates natively with SAP Build Work Zone and SAP Task Center for universal approvals"
            ]
          }
        ]
      },
      {
        "id": "group-spa-subscribe-booster",
        "title": "Group 1: Subscribe to SAP Build Process Automation & Security Roles",
        "subtitle": "Provision the service in SAP BTP Cockpit and configure required role collections for developers and users.",
        "badge": "Group 1",
        "sections": [
          {
            "heading": "Group 1: Subscribe to SAP Build Process Automation & Security Roles \u2014 Learning Objectives",
            "paragraphs": [
              "Activate the SAP Build Process Automation service",
              "Follow the complete step-by-step  action workflow below with matching screenshots."
            ],
            "keyPoints": [
              "How to activate SAP Build Process Automation in SAP BTP Free Trial or SAP BTP Free Tier account"
            ]
          },
          {
            "heading": "Subscribe to SAP Build Process Automation",
            "paragraphs": [
              "\n Make sure to create an account in US East (VA) - AWS trial region"
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "After successful creation of SAP BTP account using Free Trial, click on your trial sub account.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_049a.png",
                "imageCaption": "Step 1: Trial"
              },
              {
                "stepNumber": 2,
                "instruction": "Select **Services**",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_001.png",
                "imageCaption": "Step 2: Trial",
                "note": "**Service Marketplace**. In the search field, type **SAP Build Process Automation** and select the tile."
              },
              {
                "stepNumber": 3,
                "instruction": "Choose **Create** button.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_002.png",
                "imageCaption": "Step 3: Trial"
              },
              {
                "stepNumber": 4,
                "instruction": "In the **New Instance or Subscription** window, as **Plan**, choose the **free subscription** and select **Create** button.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_003freeplan.png",
                "imageCaption": "Step 4: Trial"
              },
              {
                "stepNumber": 5,
                "instruction": "In the **Creation in Progress** pop-up, select **View Subscription**.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_003creation.png",
                "imageCaption": "Step 5: Trial"
              },
              {
                "stepNumber": 6,
                "instruction": "Check if it is processed and created successfully. The status should be set to **Subscribed**.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_004c.png",
                "imageCaption": "Step 6: Trial"
              },
              {
                "stepNumber": 7,
                "instruction": "In order to have access, you will have to assign the role collections to your user."
              },
              {
                "stepNumber": 8,
                "instruction": "Go to **Users** tab, under **Security**, and select your user."
              },
              {
                "stepNumber": 9,
                "instruction": "In **Role Collections** section, choose **Assign Role Collection**.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_005.png",
                "imageCaption": "Step 9: Trial"
              },
              {
                "stepNumber": 10,
                "instruction": "In the **Assign Role Collection** window, in the search bar, type **process** to find Process Automation Roles."
              },
              {
                "stepNumber": 11,
                "instruction": "Select 3 roles: `ProcessAutomationAdmin`, `ProcessAutomationDeveloper` and `ProcessAutomationParticipant`."
              },
              {
                "stepNumber": 12,
                "instruction": "Choose **Assign Role Collection** button.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_006.png",
                "imageCaption": "Step 12: Trial"
              },
              {
                "stepNumber": 13,
                "instruction": "After assigning roles, your **Role Collections** section should look like this:",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_007.png",
                "imageCaption": "Step 13: Trial"
              },
              {
                "stepNumber": 14,
                "instruction": "Navigate to **Instances and Subscriptions** and choose the **Go to Application** icon.\n\nThis will launch your SAP Build Process Automation application.\n\nYou have successfully subscribed to SAP Build Process Automation.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_008.png",
                "imageCaption": "Step 14: Trial"
              }
            ]
          }
        ]
      },
      {
        "id": "group-spa-create-process",
        "title": "Group 2: Create a Business Process Project in SAP Build Lobby",
        "subtitle": "Set up a new business process project, explore the visual Process Builder, and define process context variables.",
        "badge": "Group 2",
        "sections": [
          {
            "heading": "Group 2: Create a Business Process Project in SAP Build Lobby \u2014 Learning Objectives",
            "paragraphs": [
              "Create a Business Project and Process to build and extend business processes",
              "Follow the complete step-by-step  action workflow below with matching screenshots."
            ],
            "keyPoints": [
              "How to create a SAP Build Process Automation project",
              "How to create a process that automates sales order creation and approval"
            ]
          },
          {
            "heading": "Create a business process project",
            "paragraphs": [
              "Perform the following configuration actions on your tenant:"
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "In the **Lobby**, click on **Create**. Then choose **Create**.",
                "image": "/images/blogs/bpa/all/spa-create-process_006.png",
                "imageCaption": "Step 1: Lobby",
                "note": "The lobby is a central page for creating, accessing, and managing your projects in SAP Build. You can access business application processes, company configured templates, and other resources for your end-to-end business process."
              },
              {
                "stepNumber": 2,
                "instruction": "Pick **Automated Process**, then choose **Next**.",
                "image": "/images/blogs/bpa/all/spa-create-process_002.png",
                "imageCaption": "Step 2: Create a Project"
              },
              {
                "stepNumber": 3,
                "instruction": "Select **Process**, and then choose **Next**.",
                "image": "/images/blogs/bpa/all/spa-create-process_003.png",
                "imageCaption": "Step 3: Create a Project",
                "note": "Business Process Projects are a collection of skills in SAP Build Process Automation. Projects are part of the internal business processes of a company and are defined based on business scenarios. A project can contain a set of processes, forms, automations and decisions, which are reusable artifacts."
              },
              {
                "stepNumber": 4,
                "instruction": "In the **Create Project** dialog box, do the following:\n   \n    - Enter a **Project Name**: Sales Orders Management\n    - Enter a **Short Description**: Sales Orders Management Project\n    - Choose **Review**",
                "image": "/images/blogs/bpa/all/spa-create-process_004.png",
                "imageCaption": "Step 4: Project information"
              },
              {
                "stepNumber": 5,
                "instruction": "In the **Create Project** dialog box, choose **Create**:",
                "image": "/images/blogs/bpa/all/spa-create-process_004b.png",
                "imageCaption": "Step 5: Project information"
              },
              {
                "stepNumber": 6,
                "instruction": "If a **Disclaimer** page appears after the project is created, click on **Accept**.",
                "image": "/images/blogs/bpa/all/spa-create-process_007.png",
                "imageCaption": "Step 6: Disclaimer"
              }
            ]
          },
          {
            "heading": "Create a business process",
            "paragraphs": [
              "Perform the following configuration actions on your tenant:"
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "A new tabs opens with the newly created project."
              },
              {
                "stepNumber": 2,
                "instruction": "In the **Create Process** dialog box, provide the following:\n   \n    - Enter a **Name**: Order Processing\n    - Enter a **Description** for your process: A process to handle sales orders\n    - Choose **Create**\n\n    \n\n    \n\n    \n\n\n---",
                "image": "/images/blogs/bpa/all/spa-create-process_005.png",
                "imageCaption": "Step 2: Create Process",
                "note": "Inside a project, you can create a process. This process is equivalent to a workflow in any business scenario. You can create this process from different skills such as forms, decisions, automations."
              }
            ]
          }
        ]
      },
      {
        "id": "group-spa-create-forms",
        "title": "Group 3: Create and Configure Start, Approval & Notification Forms",
        "subtitle": "Design responsive drag-and-drop input forms, manager approval forms, and automated completion notifications.",
        "badge": "Group 3",
        "sections": [
          {
            "heading": "Group 3: Create and Configure Start, Approval & Notification Forms \u2014 Learning Objectives",
            "paragraphs": [
              "Add forms to start the business process, send tasks for approvals and notify business users",
              "Follow the complete step-by-step  action workflow below with matching screenshots."
            ],
            "keyPoints": [
              "How to add interactive forms to the process",
              "How to design the form with layout and input fields using drag-and-drop approach",
              "How to configure the forms as the process steps"
            ]
          },
          {
            "heading": "Create a form to trigger a business process",
            "paragraphs": [
              "First, you will create a trigger form that will start the business process. For that, you have to open your process in the process builder and add a new form."
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "Choose **Add a Trigger** in the Trigger settings.",
                "image": "/images/blogs/bpa/all/spa-create-forms_001a.png",
                "imageCaption": "Step 1: Form"
              },
              {
                "stepNumber": 2,
                "instruction": "Choose **Submit a Form**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_001b.png",
                "imageCaption": "Step 2: Form"
              },
              {
                "stepNumber": 3,
                "instruction": "Choose **Blank form**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_001c.png",
                "imageCaption": "Step 3: Form"
              },
              {
                "stepNumber": 4,
                "instruction": "In the pop-up window for new form:\n\n    - Enter the Name: **Order Processing Form**\n    - Enter a Description: **Form to collect order details**\n    - Choose **Create**.\n\n    \n\n    The form will be added as the **Start Trigger**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_002.png",
                "imageCaption": "Step 4: Form"
              },
              {
                "stepNumber": 5,
                "instruction": "To design the form, choose the three dots and select **Open Editor**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_003.png",
                "imageCaption": "Step 5: Form"
              },
              {
                "stepNumber": 6,
                "instruction": "You will now design the **Form** with available layout and input fields options. First, drag-and-drop the form layout fields and enter the given names and field settings as below:",
                "image": "/images/blogs/bpa/all/spa-create-forms_004.png",
                "imageCaption": "Step 6: Form",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Headline 1",
                      "Order Approval Request Form"
                    ],
                    [
                      "Paragraph",
                      "Please provide the necessary information of your order and submit for approvals."
                    ]
                  ]
                }
              },
              {
                "stepNumber": 7,
                "instruction": "Now, add **Input Fields**, enter the labels and select the **Required** checkbox.",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Text",
                      "Customer Name"
                    ],
                    [
                      "Text",
                      "Order Number"
                    ],
                    [
                      "Number",
                      "Order Amount"
                    ],
                    [
                      "Date",
                      "Order Date"
                    ],
                    [
                      "Text",
                      "Shipping Country"
                    ],
                    [
                      "Date",
                      "Expected Delivery Date"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 8,
                "instruction": "The trigger form is ready. Save the form using the **Save** button on the top-right corner of the screen.\n\n    \n\n    Now, you will design the process with more activities related to approval of the sales order.",
                "image": "/images/blogs/bpa/all/spa-create-forms_005.png",
                "imageCaption": "Step 8: Form"
              }
            ]
          },
          {
            "heading": "Create an approval form",
            "paragraphs": [
              "The approval form will be used to get faster and easier approvals from the business users, to take informed decisions, and get rid of sending emails. These approval forms could be about approving or rejecting sales orders, invoices, onboarding, IT requests, etc. The forms are then converted into tasks in an automated workflow which will appear in the **My Inbox** of the user.\n\nYou can create these different forms using the **Form Builder** embedded in the process builder using different form field options. You can design and modify them without any coding."
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "Go to the **Order Processing** process and choose **+** below the Trigger.",
                "image": "/images/blogs/bpa/all/spa-create-forms_008a.png",
                "imageCaption": "Step 1: Approval"
              },
              {
                "stepNumber": 2,
                "instruction": "Choose **Approval**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_008b.png",
                "imageCaption": "Step 2: Approval"
              },
              {
                "stepNumber": 3,
                "instruction": "Choose **Blank Approval**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_008c.png",
                "imageCaption": "Step 3: Approval"
              },
              {
                "stepNumber": 4,
                "instruction": "In the **Create Approval** dialog box, do the following:\n    - In the Name field enter: **Approval Form**\n    - In the Description field enter: **Form to approve or reject the sales order**\n    - Choose **Create**",
                "image": "/images/blogs/bpa/all/spa-create-forms_009.png",
                "imageCaption": "Step 4: Approval"
              },
              {
                "stepNumber": 5,
                "instruction": "Choose **Open Editor** of the Approval Form.",
                "image": "/images/blogs/bpa/all/spa-create-forms_010.png",
                "imageCaption": "Step 5: Approval"
              },
              {
                "stepNumber": 6,
                "instruction": "Design the **Approval Form** in the form builder by dragging-and-dropping fields into the form editor and configuring respective field settings.",
                "image": "/images/blogs/bpa/all/spa-create-forms_011.png",
                "imageCaption": "Step 6: Approval",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Headline 1",
                      "Approve Sales Order"
                    ],
                    [
                      "Paragraph",
                      "A new order has been received. Please review and confirm whether the requirements can be met or not."
                    ],
                    [
                      "Paragraph",
                      "Sales Order Details:"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 7,
                "instruction": "Add **Input Fields**, enter the labels and select the **Read Only** checkbox.",
                "image": "/images/blogs/bpa/all/spa-create-forms_012.png",
                "imageCaption": "Step 7: Approval",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Text",
                      "Customer Name"
                    ],
                    [
                      "Text",
                      "Order Number"
                    ],
                    [
                      "Number",
                      "Order Amount"
                    ],
                    [
                      "Date",
                      "Order Delivery Date"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 8,
                "instruction": "Add **Input Fields** and enter **only** the labels.",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Paragraph",
                      "Supplier Acknowledgment"
                    ],
                    [
                      "Checkbox",
                      "I acknowledge that we have received your order and will process it based on the availability"
                    ],
                    [
                      "Text Area",
                      "Message to buyer:"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 9,
                "instruction": "**Save** the form.",
                "image": "/images/blogs/bpa/all/spa-create-forms_036.png",
                "imageCaption": "Step 9: Approval"
              }
            ]
          },
          {
            "heading": "Configure an approval form",
            "paragraphs": [
              "Perform the following configuration actions on your tenant:"
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "Go back to the process builder to map the process content with the form input fields."
              },
              {
                "stepNumber": 2,
                "instruction": "Select the **Approval Form** to configure the **General** information section.",
                "image": "/images/blogs/bpa/all/spa-create-forms_014.png",
                "imageCaption": "Step 2: Approval"
              },
              {
                "stepNumber": 3,
                "instruction": "In the **Subject** field, do the following:\n   \n    - Enter **Review and approve order**\n    - Select **Order Number** from Order Processing Form (Trigger)\n    - Enter **from**\n    - Select **Customer Name** from Order Processing Form (Trigger)\n    - Enter **company**",
                "image": "/images/blogs/bpa/all/spa-create-forms_015a.png",
                "imageCaption": "Step 3: Approval",
                "note": "The Subject configuration of the form will be shown when this task appears in the `MyInbox`."
              },
              {
                "stepNumber": 4,
                "instruction": "In the **Recipients** section, under **Users** select **Process Started By** from Process Metadata.",
                "image": "/images/blogs/bpa/all/spa-create-forms_016.png",
                "imageCaption": "Step 4: Approval",
                "note": "This form will appear as the task in the `MyInbox` of the given Recipients to take action."
              },
              {
                "stepNumber": 5,
                "instruction": "In the **Due Date** section:\n    - Select **Static Duration** as **type of due date**\n    - Enter **2 Days** as the duration\n\n    \n    \n\n    \n\n    As the task appears in the `MyInbox`, there will be duration information shown to the recipients like Overdue if the task was not completed in 2 days, or within 1 day if the task is supposed to be completed in 1 day etc.",
                "image": "/images/blogs/bpa/all/spa-create-forms_017.png",
                "imageCaption": "Step 5: Approval",
                "note": "### What is going on?"
              },
              {
                "stepNumber": 6,
                "instruction": "Similarly, go to the **Inputs** section and map the different input fields, which were marked as read-only in the approval form, by selecting the respective **Process Content** entry.",
                "table": {
                  "headers": [
                    "Form Input Fields",
                    "Process Content Entry"
                  ],
                  "rows": [
                    [
                      "Customer Name",
                      "Customer Name"
                    ],
                    [
                      "Order Delivery Date",
                      "Expected Delivery Date"
                    ],
                    [
                      "Order Amount",
                      "Order Amount"
                    ],
                    [
                      "Order Number",
                      "Order Number"
                    ]
                  ]
                },
                "note": "The process content will highlight the entries with the same data type of the input field. For example: if the input field is of Number type then Process Content will show only number-type entries."
              },
              {
                "stepNumber": 7,
                "instruction": "**Save** the process. \n\n    \n\n    The process should look like the following:",
                "image": "/images/blogs/bpa/all/spa-create-forms_018.png",
                "imageCaption": "Step 7: Approval"
              }
            ]
          },
          {
            "heading": "Create and configure form for notifications",
            "paragraphs": [
              "After the user approves or rejects the request, the next step is to create notifications. These notifications will inform the requester whether their sales order is approved or rejected, and will be sent either via an email or through the form. They will appear in the inbox of the requester as a task."
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "To add a confirmation to the process, select **+** below the **Approve** option.",
                "image": "/images/blogs/bpa/all/spa-create-forms_021a.png",
                "imageCaption": "Step 1: Notifications"
              },
              {
                "stepNumber": 2,
                "instruction": "Choose **Form**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_021b.png",
                "imageCaption": "Step 2: Notifications"
              },
              {
                "stepNumber": 3,
                "instruction": "Choose **Blank Form**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_021c.png",
                "imageCaption": "Step 3: Notifications"
              },
              {
                "stepNumber": 4,
                "instruction": "In the **Create Form** dialog box, do the following:\n   \n    - In the Name field, enter **Order Confirmation Form**\n    - In the Description field, enter **Notification form to inform whether the sales order is approved by the supplier**\n    - Choose **Create**",
                "image": "/images/blogs/bpa/all/spa-create-forms_022.png",
                "imageCaption": "Step 4: Notifications"
              },
              {
                "stepNumber": 5,
                "instruction": "Choose **Open Editor** of the form.",
                "image": "/images/blogs/bpa/all/spa-create-forms_023.png",
                "imageCaption": "Step 5: Notifications"
              },
              {
                "stepNumber": 6,
                "instruction": "In the form builder, design the form to notify the requester of the order confirmation. Add the following **Layout Fields**:",
                "image": "/images/blogs/bpa/all/spa-create-forms_024.png",
                "imageCaption": "Step 6: Notifications",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Headline 1",
                      "Order Confirmation"
                    ],
                    [
                      "Paragraph",
                      "Your order has been received and accepted for delivery. We will send you the details as soon as the order is shipped. You can find the details of your order below, please review and verify your request:"
                    ],
                    [
                      "Text Area",
                      "Message from the supplier:"
                    ],
                    [
                      "Paragraph",
                      "Your Sales Order Details:"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 7,
                "instruction": "Add below **Input Fields**, enter the labels and select the **Read Only** checkbox.",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Text",
                      "Order Number"
                    ],
                    [
                      "Number",
                      "Order Amount"
                    ],
                    [
                      "Date",
                      "Expected Delivery Date"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 8,
                "instruction": "**Save** the form.",
                "image": "/images/blogs/bpa/all/spa-create-forms_037.png",
                "imageCaption": "Step 8: Notifications"
              },
              {
                "stepNumber": 8,
                "instruction": "Go back to the process builder to map the process content with the form input fields."
              },
              {
                "stepNumber": 9,
                "instruction": "Select the **Order Confirmation Form** to configure the **General** information section."
              },
              {
                "stepNumber": 10,
                "instruction": "In the **Subject** field, do the following:\n    \n    - Enter **Your order**\n    - Select **Order Number** from Order Processing Form\n    - Enter **has been successfully received**"
              },
              {
                "stepNumber": 11,
                "instruction": "In the **Users** section, under **Recipients**, select **Process Started By** from Process Metadata.",
                "image": "/images/blogs/bpa/all/spa-create-forms_026.png",
                "imageCaption": "Step 11: Notifications"
              },
              {
                "stepNumber": 12,
                "instruction": "Go to the **Inputs** section and map the different input fields, which were marked as read-only, with the respective process content entries.",
                "table": {
                  "headers": [
                    "Form Input Fields",
                    "Process Content Entry"
                  ],
                  "rows": [
                    [
                      "Order Number",
                      "Order Number"
                    ],
                    [
                      "Message from the supplier",
                      "Message to buyer"
                    ],
                    [
                      "Expected Delivery Date",
                      "Expected Delivery Date"
                    ],
                    [
                      "Order Amount",
                      "Order Amount"
                    ]
                  ]
                },
                "note": "The process content will highlight the entries with same data type of the input field. For example: if the input field is of Number type then Process Content will show only number-type entries."
              },
              {
                "stepNumber": 13,
                "instruction": "**Save** the process. \n\n      \n\n    With this you completed designing and configuring the confirmation notification form.",
                "image": "/images/blogs/bpa/all/spa-create-forms_027.png",
                "imageCaption": "Step 13: Notifications",
                "note": "You can copy the same form to create another form to send a rejection notification to the requester. If copy is not available then create the form in the same way and modify the texts wherever relevant as shown below."
              },
              {
                "stepNumber": 14,
                "instruction": "To add the new rejection form, you will use the **Duplicate** feature. Select the **Overview**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_028.png",
                "imageCaption": "Step 14: Notifications",
                "note": "**Duplicate** feature is used to copy artifacts within the Business Process whereas **Copy** feature is used to copy artifacts across the Business Processes."
              },
              {
                "stepNumber": 15,
                "instruction": "Find **Order Confirmation Form** under the Artifacts section and choose **Duplicate**."
              },
              {
                "stepNumber": 16,
                "instruction": "In the Duplicate Artifact pop-up window, change the name to **Order Rejection Form** and select **Duplicate**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_030.png",
                "imageCaption": "Step 16: Notifications"
              },
              {
                "stepNumber": 17,
                "instruction": "The form is automatically opened in the form builder. Change the order rejection form in the form builder to reflect the data for rejection case.",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Headline 1",
                      "Order Rejection"
                    ],
                    [
                      "Paragraph",
                      "We are sorry to inform you that your order cannot be accepted. Any inconvenience caused due to the refusal of the order is regretted. You can find the reason of the rejection and the details of your order below, please confirm the request:"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 18,
                "instruction": "Position the following field after **Expected Delivery Date**.",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Paragraph",
                      "Please press the SUBMIT button to acknowledge the order status."
                    ]
                  ]
                }
              },
              {
                "stepNumber": 19,
                "instruction": "**Save** the form.",
                "image": "/images/blogs/bpa/all/spa-create-forms_031a.png",
                "imageCaption": "Step 19: Notifications"
              },
              {
                "stepNumber": 20,
                "instruction": "Go back to the process builder and add the order rejection notification form to the process. Select **+** below the **Reject** option.",
                "image": "/images/blogs/bpa/all/spa-create-forms_032a.png",
                "imageCaption": "Step 20: Notifications"
              },
              {
                "stepNumber": 21,
                "instruction": "Choose **Form**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_032b.png",
                "imageCaption": "Step 21: Notifications"
              },
              {
                "stepNumber": 22,
                "instruction": "Choose **Order Rejection Form**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_032c.png",
                "imageCaption": "Step 22: Notifications"
              },
              {
                "stepNumber": 24,
                "instruction": "Configure the **Order Rejection Form**. In the General section configure in the **Subject** box:\n\n    - Enter **Your order**\n    - Select **Order Number** from the Order Processing Form\n    - Enter **is rejected by the supplier**"
              },
              {
                "stepNumber": 25,
                "instruction": "Under Priority, select **High**."
              },
              {
                "stepNumber": 26,
                "instruction": "Under Recipients, for **Users**, select **Process Started By**.",
                "image": "/images/blogs/bpa/all/spa-create-forms_033.png",
                "imageCaption": "Step 26: Notifications"
              },
              {
                "stepNumber": 27,
                "instruction": "Configure the **Inputs** section.",
                "image": "/images/blogs/bpa/all/spa-create-forms_034.png",
                "imageCaption": "Step 27: Notifications",
                "table": {
                  "headers": [
                    "Form Input Fields",
                    "Process Content Entry"
                  ],
                  "rows": [
                    [
                      "Expected Delivery Date",
                      "Expected Delivery Date"
                    ],
                    [
                      "Message from the supplier",
                      "Message to buyer"
                    ],
                    [
                      "Order Amount",
                      "Order Amount"
                    ],
                    [
                      "Order Number",
                      "Order Number"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 28,
                "instruction": "**Save** your work.\n\n    With this you have completed the process design of your business process. You have experienced building a process in a completely no-code environment and with no technical know-how. You used the process builder to create a one-step approval process with trigger form, approval form and notification forms.\n    \n    \n\n---",
                "image": "/images/blogs/bpa/all/spa-create-forms_038.png",
                "imageCaption": "Step 28: Notifications"
              }
            ]
          }
        ]
      },
      {
        "id": "group-spa-create-process-condition",
        "title": "Group 4: Create Process Conditions & Branching Decision Rules",
        "subtitle": "Configure exclusive gateways and condition rules to route orders automatically or trigger managerial approval.",
        "badge": "Group 4",
        "sections": [
          {
            "heading": "Group 4: Create Process Conditions & Branching Decision Rules \u2014 Learning Objectives",
            "paragraphs": [
              "Create a process condition to route the process based on business criteria",
              "Follow the complete step-by-step  action workflow below with matching screenshots."
            ],
            "keyPoints": [
              "How to create and configure a process condition",
              "How to define different process flows for each conditional criteria"
            ]
          },
          {
            "heading": "Create process condition",
            "paragraphs": [
              "Once the process with forms is designed, define which process flow should run based on if/else condition criteria."
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "To add a condition to a process open the **Process Builder**. Choose **+** below the Trigger.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_001a.png",
                "imageCaption": "Step 1: Process Condition"
              },
              {
                "stepNumber": 2,
                "instruction": "Choose **Controls and Events**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_001b.png",
                "imageCaption": "Step 2: Process Condition"
              },
              {
                "stepNumber": 3,
                "instruction": "Choose **Condition**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_001c.png",
                "imageCaption": "Step 3: Process Condition"
              },
              {
                "stepNumber": 4,
                "instruction": "To configure the condition, choose **Open Condition Editor**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_002.png",
                "imageCaption": "Step 4: Process Condition",
                "note": "Process content will contain a list of attributes that have been defined in previous skills. For example: in the screenshot below, you can see attributes from the trigger form. You will use this process content to configure different skills during business process modelling."
              },
              {
                "stepNumber": 5,
                "instruction": "Edit your branch condition:\n   \n    - Set **Order Amount** from the process content\n    - Select **is less than**\n    - Enter **100000** as the value\n\n    \n\n    You have configured your **if** branch to: **if Order Amount is less than 100000**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_003.png",
                "imageCaption": "Step 5: Process Condition"
              },
              {
                "stepNumber": 6,
                "instruction": "Similarly, add one more condition. Select  **Add Group**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_015.png",
                "imageCaption": "Step 6: Add Groupe"
              },
              {
                "stepNumber": 7,
                "instruction": "In the group section select **Any** to make it **OR** conditional group. Select conditions:",
                "table": {
                  "headers": [
                    "Item",
                    "Condition",
                    "Value"
                  ],
                  "rows": [
                    [
                      "Shipping Country",
                      "is equal to",
                      "India"
                    ],
                    [
                      "Shipping Country",
                      "is equal to",
                      "Germany"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 8,
                "instruction": "Choose **Apply** to add the condition to the business process.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_004.png",
                "imageCaption": "Step 8: Process Condition",
                "note": "You can expand the **Summary** section to see how the process conditions are designed"
              },
              {
                "stepNumber": 9,
                "instruction": "Both **If** and **Default** link branches are connected to the **Approval Form**.\n\n    \n\n    With this process condition, only the sales order above a specific amount will be sent for approval and the rest will be auto-approved. \n    \n    You have to add a notification form in the **If** connection to notify the requester of the auto-approval and terminate the process.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_006.png",
                "imageCaption": "Step 9: Process Condition"
              },
              {
                "stepNumber": 10,
                "instruction": "To create the new form, choose **+** below the **If**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_008a.png",
                "imageCaption": "Step 10: Process Condition"
              },
              {
                "stepNumber": 11,
                "instruction": "Choose **Form**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_008b.png",
                "imageCaption": "Step 11: Process Condition"
              },
              {
                "stepNumber": 12,
                "instruction": "Choose **Blank form**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_008c.png",
                "imageCaption": "Step 12: Process Condition"
              },
              {
                "stepNumber": 13,
                "instruction": "In the **Create Form** window:\n\n    - Enter the Name: **Auto Approval Notification**\n    - Enter a Description: **Notification form to inform auto approval of the sales order**\n    - Choose **Create**",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_009.png",
                "imageCaption": "Step 13: Process Condition"
              },
              {
                "stepNumber": 14,
                "instruction": "Select **Open Editor** of the form.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_009c.png",
                "imageCaption": "Step 14: Process Condition"
              },
              {
                "stepNumber": 15,
                "instruction": "Design the notification form, the same way as in the previous chapter, to send another notification to the requester about auto-approval. Add **Layout fields**:",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_009a.png",
                "imageCaption": "Step 15: Process Condition",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Headline 1",
                      "Automatic Order Confirmation"
                    ],
                    [
                      "Paragraph",
                      "Your order has been received and we will send you the details as soon as the order is shipped. You can find the details of your order below, please review and verify your request:"
                    ],
                    [
                      "Paragraph",
                      "Your Sales Order Details:"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 16,
                "instruction": "For all below **Input Fields**, enter the labels and select the **Read Only** checkbox.",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Text",
                      "Order Number"
                    ],
                    [
                      "Number",
                      "Order Amount"
                    ],
                    [
                      "Date",
                      "Expected Delivery Date"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 17,
                "instruction": "Add **Layout field**:",
                "table": {
                  "headers": [
                    "Form Fields",
                    "Field Settings with Label"
                  ],
                  "rows": [
                    [
                      "Paragraph",
                      "Please press the SUBMIT button to acknowledge the order status."
                    ]
                  ]
                }
              },
              {
                "stepNumber": 18,
                "instruction": "**Save** your work.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_009b.png",
                "imageCaption": "Step 18: Process Condition"
              }
            ]
          },
          {
            "heading": "Configure auto-approval form",
            "paragraphs": [
              "Perform the following configuration actions on your tenant:"
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "Go back to the process builder and configure the **Auto Approval Notification**."
              },
              {
                "stepNumber": 2,
                "instruction": "Select the **Auto Approval Notification** to configure the **General** section."
              },
              {
                "stepNumber": 3,
                "instruction": "In the **Subject** field, do the following:\n   \n    - Enter: **Your order**\n    - Choose: **Order Number** from Order Processing Form\n    - Enter: **has been successfully received**"
              },
              {
                "stepNumber": 4,
                "instruction": "In the **Users** section, under **Recipients** select **Process Started By** from Process Metadata.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_011.png",
                "imageCaption": "Step 4: Process Condition"
              },
              {
                "stepNumber": 5,
                "instruction": "Select **Inputs** section and configure the following inputs:",
                "table": {
                  "headers": [
                    "Form Input Fields",
                    "Process Content Entry"
                  ],
                  "rows": [
                    [
                      "Order Number",
                      "Order Number"
                    ],
                    [
                      "Order Amount",
                      "Order Amount"
                    ],
                    [
                      "Expected Delivery Date",
                      "Expected Delivery Date"
                    ]
                  ]
                }
              },
              {
                "stepNumber": 6,
                "instruction": "Choose **Save**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_012.png",
                "imageCaption": "Step 6: Process Condition"
              },
              {
                "stepNumber": 7,
                "instruction": "Below **Auto Approval Notification**, select **+**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_013a.png",
                "imageCaption": "Step 7: Process Condition"
              },
              {
                "stepNumber": 8,
                "instruction": "Choose **Controls and Events**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_013b.png",
                "imageCaption": "Step 8: Process Condition"
              },
              {
                "stepNumber": 9,
                "instruction": "Choose **End**.",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_013c.png",
                "imageCaption": "Step 9: Process Condition"
              },
              {
                "stepNumber": 10,
                "instruction": "**Save** your work.\n\n     \n\n   This completes the process design with condition criteria that will decide what process flow is executed and whether there will be an auto-approval or a one-step approval route.\n\n---",
                "image": "/images/blogs/bpa/all/spa-create-process-condition_016.png",
                "imageCaption": "Step 10: Process Condition"
              }
            ]
          }
        ]
      },
      {
        "id": "group-spa-run-process",
        "title": "Group 5: Release, Deploy, Execute & Monitor the Business Process",
        "subtitle": "Release immutable project versions, deploy to SAP BTP Cloud Foundry, process My Inbox tasks, and monitor execution.",
        "badge": "Group 5",
        "sections": [
          {
            "heading": "Group 5: Release, Deploy, Execute & Monitor the Business Process \u2014 Learning Objectives",
            "paragraphs": [
              "Release, deploy and run the business process",
              "Follow the complete step-by-step  action workflow below with matching screenshots."
            ],
            "keyPoints": [
              "How to release and deploy the process",
              "How to run the process",
              "How to monitor the process",
              "How to access the tasks",
              "How to retrieve the sample project from the Store"
            ]
          },
          {
            "heading": "Release business process project",
            "paragraphs": [
              "To run the process you have to first release and then deploy the business process project.\n\nReleasing a project creates a version or snapshot of the changes and deploying the project makes it available in runtime to be consumed. You can only deploy a released version of the project, and at a given time there can be multiple deployed versions of the same project."
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "In the Process Builder, to release a project, choose the **Release** button on the top-right corner of the screen and provide a description.",
                "image": "/images/blogs/bpa/all/spa-run-process_001.png",
                "imageCaption": "Step 1: Run",
                "note": "Version have x.y.z format where x is a major version number, y is minor and z is the patch number. Every time you release, a new version will be created. Version is incremented automatically based on how you want to store the changes in the repository like major or minor update or just as a patch."
              },
              {
                "stepNumber": 2,
                "instruction": "If you are releasing for the first time, then the version will start with 1.0.0. Next time you release, the version numbers will be automatically updated.",
                "image": "/images/blogs/bpa/all/spa-run-process_003.png",
                "imageCaption": "Step 2: Run"
              }
            ]
          },
          {
            "heading": "Deploy released project",
            "paragraphs": [
              "Perform the following configuration actions on your tenant:"
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "If you do not have an environment already, go to **Control Tower** **-",
                "image": "/images/blogs/bpa/all/spa-run-process_101.png",
                "imageCaption": "Step 1: Run",
                "note": "** **Environments** and create one."
              },
              {
                "stepNumber": 2,
                "instruction": "Once the project is released successfully, change to the released version and choose **Deploy** in the top-right corner of the screen.",
                "image": "/images/blogs/bpa/all/spa-run-process_004.png",
                "imageCaption": "Step 2: Run"
              },
              {
                "stepNumber": 3,
                "instruction": "Choose the environment and select **Deploy**.",
                "image": "/images/blogs/bpa/all/spa-run-process_100.png",
                "imageCaption": "Step 3: Run",
                "note": "Deploy will take a couple of seconds/minutes depending upon how big your project is and how many different artifacts it has. Any errors during the deployment will be shown in the Design Console."
              },
              {
                "stepNumber": 4,
                "instruction": "Once the deployment is successful, you will see a changed status. You can also see all your deployed and/or released project versions from the project status list next to the project name.\n\n    \n\n    \n\n    You have successfully deployed your project. It is time to run the process and see the results.",
                "image": "/images/blogs/bpa/all/spa-run-process_005.png",
                "imageCaption": "Step 4: Run",
                "note": "You cannot edit released or deployed projects. To continue working on your project, you need to select the Editable option."
              }
            ]
          },
          {
            "heading": "Run business process",
            "paragraphs": [
              "Perform the following configuration actions on your tenant:"
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "Open the process builder of the deployed version, and choose **Order Processing Form** to get the form URL which can be directly opened from the web browser.",
                "image": "/images/blogs/bpa/all/spa-run-process_006.png",
                "imageCaption": "Step 1: Run"
              },
              {
                "stepNumber": 2,
                "instruction": "When you open the form in the browser, you will have all the input fields as you have defined in the process trigger form. Fill the form and choose **Submit**.",
                "image": "/images/blogs/bpa/all/spa-run-process_007.png",
                "imageCaption": "Step 2: Run"
              },
              {
                "stepNumber": 3,
                "instruction": "After you select the submit button, you will be notified that the form has been successfully submitted. This means that the workflow has been triggered and the approval process has started.",
                "image": "/images/blogs/bpa/all/spa-run-process_008.png",
                "imageCaption": "Step 3: Run"
              }
            ]
          },
          {
            "heading": "Monitoring the process flow",
            "paragraphs": [
              "Monitoring business process is one of the key aspect of the automated processes. Technical monitoring is an administrator job where a process admin proactively and consistently monitors the process performance, identifies any issues in the process and takes necessary actions to ensure business process continuity.\n\n**SAP Build** provides different applications to monitor and manage different process artifacts."
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "Choose the SAP logo to go to the lobby.",
                "image": "/images/blogs/bpa/all/spa-run-process_010a.png",
                "imageCaption": "Step 1: Run"
              },
              {
                "stepNumber": 2,
                "instruction": "Choose Monitoring.",
                "image": "/images/blogs/bpa/all/spa-run-process_010b.png",
                "imageCaption": "Step 2: Run"
              },
              {
                "stepNumber": 3,
                "instruction": "To monitor all the running instances of the process, you have to go to Monitor then **Process and Workflow Instances**.\n\n    \n\n    In there, you will see all the running, erroneous and canceled process instances. Use the filter bar to get a more customized view of the process instances based on different statutes like running, completed, canceled, erroneous etc.",
                "image": "/images/blogs/bpa/all/spa-run-process_009.png",
                "imageCaption": "Step 3: Run"
              },
              {
                "stepNumber": 4,
                "instruction": "Choose your process instance that was just triggered via the start form."
              },
              {
                "stepNumber": 5,
                "instruction": "As you can see the process is waiting for the task to be completed. These tasks are generated from the forms that are added in the process and can be accessed via the **My Inbox** application. In logs, you can see the entire trace of how the process has been progressing with some basic runtime information of each activity.",
                "image": "/images/blogs/bpa/all/spa-run-process_011.png",
                "imageCaption": "Step 5: Run",
                "note": "Notice the **Recipients** list. This is the same as configured in the **General** section of the **Approval Form**. The task will go into the inboxes of all the recipients."
              },
              {
                "stepNumber": 6,
                "instruction": "Observe the process context which is the actual process data flowing across different activities in the process. This option contains the information that you entered in the **Order Approval Request Form**.",
                "image": "/images/blogs/bpa/all/spa-run-process_012.png",
                "imageCaption": "Step 6: Run"
              }
            ]
          },
          {
            "heading": "Accessing the tasks",
            "paragraphs": [
              "Perform the following configuration actions on your tenant:"
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "Choose the **My Inbox** icon from the lobby.",
                "image": "/images/blogs/bpa/all/spa-run-process_012a.png",
                "imageCaption": "Step 1: Run"
              },
              {
                "stepNumber": 2,
                "instruction": "Tasks are the request for the users to participate in an approval or review process. These tasks appear in the **My Inbox** application shipped with **SAP Build**. User can claim, approve and reject the task from their inbox.",
                "image": "/images/blogs/bpa/all/spa-run-process_013.png",
                "imageCaption": "Step 2: Run"
              },
              {
                "stepNumber": 3,
                "instruction": "Once you **approve/reject** the approval task, **refresh** the inbox again to get the final notification based on action taken. Once you acknowledge the notification sent via the approval process, the process will be completed.",
                "image": "/images/blogs/bpa/all/spa-run-process_014.png",
                "imageCaption": "Step 3: Run"
              }
            ]
          },
          {
            "heading": "Retrieve sample project from the store (Optional)",
            "paragraphs": [
              "> The entire project is available in the SAP Build Store as a sample and you can follow the below steps to retrieve the project and use it for reference.\n\nThis sample project can be downloaded from the SAP Build Store.\n\nTo retrieve this sample, please follow these steps:"
            ],
            "actionSteps": [
              {
                "stepNumber": 1,
                "instruction": "From the SAP Build Lobby, navigate to Store."
              },
              {
                "stepNumber": 2,
                "instruction": "Search for the sample project: **Sales Order Management (MI01)**."
              },
              {
                "stepNumber": 3,
                "instruction": "Choose **Create from Template** to retrieve the sample and save it as a new project in your lobby.",
                "image": "/images/blogs/bpa/all/spa-run-process_store.png",
                "imageCaption": "Step 3: Store"
              },
              {
                "stepNumber": 4,
                "instruction": "Choose **Create**.\n\n    \n\n    Your project gets created in editable version. You may release and deploy it and run the project.",
                "image": "/images/blogs/bpa/all/spa-run-process_create.png",
                "imageCaption": "Step 4: Create"
              },
              {
                "stepNumber": 5,
                "instruction": "Navigate back to the lobby by clicking on the SAP logo.\n  \n    \n\n    You can see your project is available in the lobby.\n  \n    \n\n\n---",
                "image": "/images/blogs/bpa/all/spa-run-process_project.png",
                "imageCaption": "Step 5: Project"
              }
            ]
          }
        ]
      },
      {
        "id": "group-programmatic-trigger-cap-ui5",
        "title": "Programmatic Integration: Triggering BPA from SAP CAPM & SAPUI5",
        "subtitle": "Complete production blueprint from the SAP Community & GitHub: Service Key extraction, BTP Destination setup, SAP Cloud SDK in CAP Node.js, and SAPUI5 OData V4 Action binding.",
        "badge": "CAP & UI5 Integration",
        "sections": [
          {
            "heading": "Architecture & Prerequisites: Service Key & API Trigger Setup",
            "paragraphs": [
              "In real-world enterprise architectures, business processes are frequently initiated programmatically from transactional backends (SAP CAP / S/4HANA) or custom SAPUI5 applications following events such as purchase order approvals, supplier onboarding, or inventory threshold alerts.",
              "To establish this integration securely without hardcoding credentials, SAP BTP uses a decoupled architecture powered by **Service Keys** and the **SAP BTP Destination Service**.",
              "**Phase 1: Configure the API Trigger in SAP Build Lobby:**",
              "1. Open your process in SAP Build Process Automation and click the **Start Event** on the canvas.",
              "2. Switch the start trigger type to **API Trigger**.",
              "3. Define the input parameters context schema (e.g., `orderId`, `orderno`, `amount`, `currency`, `status`).",
              "4. **Release and Deploy** the project to your subaccount runtime.",
              "5. Navigate to the **Monitoring** or **Control Tower** tab -> **Process and Workflow Definitions** and copy your deployed **Definition ID** (format: `<subaccount_subdomain>.<project_name>.<process_name>`, e.g., `us10.f0a22d8ftrial.orderapprovalworkflow.orderProcessing`).",
              "**Phase 2: Generate Service Key in BTP Cockpit:**",
              "1. In your SAP BTP Subaccount, navigate to **Services > Instances and Subscriptions**.",
              "2. Under Instances, locate your `SAP Build Process Automation` (or `process-automation-service`) instance, click `...` and choose **Create Service Key**.",
              "3. Name the service key (e.g. `bpa-api-key`) and click **Create**.",
              "4. View the generated JSON and note four critical properties: `endpoints.api`, `uaa.clientid`, `uaa.clientsecret`, and `uaa.url`."
            ],
            "keyPoints": [
              "The Definition ID is unique per deployment and required in the POST request body",
              "The Service Key provides OAuth2 client credentials for automated machine-to-machine authentication",
              "SAP Community Guide Reference: https://community.sap.com/t5/technology-blog-posts-by-members/trigger-sap-build-process-automation-workflow-from-fiori-application/ba-p/14418167",
              "GitHub Backend Repo: https://github.com/shreekunal/SAPBackEndConcepts/tree/main/triggerWorkflow",
              "GitHub Frontend Repo: https://github.com/shreekunal/SAPBackEndConcepts/tree/main/ui5_trigger_bpa"
            ],
            "figures": [
              {
                "url": "/images/blogs/bpa/community/bpa-dest-10-definition-id.jpg",
                "caption": "SAP Build Control Tower: Deployed Workflow Definition ID ('myworkflow') in Public Environment"
              },
              {
                "url": "/images/blogs/bpa/community/bpa-dest-1-service-instance.jpg",
                "caption": "SAP BTP Cockpit: Service Instance for sap_processautomation (Standard Plan) in Cloud Foundry Space"
              },
              {
                "url": "/images/blogs/bpa/community/bpa-dest-2-credentials-key.jpg",
                "caption": "SAP BTP Cockpit: Service Key Credentials Dialog with endpoints.api, html5-apps-repo, and sap.cloud.service"
              }
            ]
          },
          {
            "heading": "Step-by-Step BTP Destination Configuration (sap_build_process_automation)",
            "paragraphs": [
              "Following the enterprise standard documented in the SAP Community tutorial, configure a BTP HTTP destination (e.g. 'sap_build_process_automation' or 'spa_process_destination') to route workflow creation requests. This shields frontend and middleware code from token negotiation, client secret exposure, and CORS restrictions.",
              "**Step-by-Step Destination Setup in BTP Cockpit:**",
              "1. Go to **BTP Cockpit > Connectivity > Destinations > New Destination** (choose **From Scratch**).",
              "2. Fill in the primary connection parameters as defined in the table below.",
              "3. Add the **Additional Properties** (mandatory for SAP Cloud SDK and Approuter discovery).",
              "4. Save the destination and click **Check Connection**. BTP will test connectivity to the token service and return `200 OK: Connection established`."
            ],
            "tables": [
              {
                "caption": "Primary BTP Destination Parameters (sap_build_process_automation)",
                "headers": ["Field Name", "Value / Syntax", "Description"],
                "rows": [
                  ["Name", "sap_build_process_automation", "Exact destination identifier referenced by Approuter (xs-app.json) & CAP HTTP client"],
                  ["Type", "HTTP", "Standard HTTP connection protocol"],
                  ["Description", "Destination for triggering SAP Build Process Automation workflow", "Descriptive label for BTP administrators"],
                  ["URL", "https://spa-api-gateway-bpi-ap-prod.cfapps.<region>.hana.ondemand.com", "Base BPA API gateway endpoint extracted from endpoints.api"],
                  ["Proxy Type", "Internet", "Public SAP BTP SaaS endpoint"],
                  ["Authentication", "OAuth2JWTBearer / OAuth2ClientCredentials", "OAuth2 token exchange without manual user interaction"],
                  ["Client ID", "<credentials.uaa.clientid>", "Client ID extracted from the BPA Service Key"],
                  ["Client Secret", "<credentials.uaa.clientsecret>", "Client Secret extracted from the BPA Service Key"],
                  ["Token Service URL", "<credentials.uaa.url>/oauth/token", "UAA OAuth2 token generation endpoint ending with /oauth/token"]
                ]
              },
              {
                "caption": "Mandatory Additional Properties for SAP Cloud Integration & Fiori Discovery",
                "headers": ["Property Key", "Value", "Function"],
                "rows": [
                  ["HTML5.DynamicDestination", "true", "Enables dynamic route dispatching in SAP BTP HTML5 Application Repository"],
                  ["WebIDEEnabled", "true", "Allows SAP Business Application Studio / Web IDE tooling discovery"],
                  ["WebIDEUsage", "odata_gen", "Allows service catalog generation and metadata modeling"],
                  ["sap.cloud.service", "com.sap.spa.processautomation", "Binds the destination to the official SAP BPA cloud service identifier"],
                  ["sap.cloud.service.alias", "spa", "Convenience alias for SAP Build Process Automation services"]
                ]
              }
            ],
            "keyPoints": [
              "Ensure Token Service URL ends strictly with `/oauth/token`",
              "Verify the connection via Cockpit 'Check Connection' button prior to application deployment",
              "Refer to the SAP Community blueprint: https://community.sap.com/t5/technology-blog-posts-by-members/trigger-sap-build-process-automation-workflow-from-fiori-application/ba-p/14418167"
            ],
            "figures": [
              {
                "url": "/images/blogs/bpa/community/bpa-dest-3-create-destination.jpg",
                "caption": "SAP BTP Cockpit: Connectivity > Destinations > Create New Destination 'From Scratch'"
              },
              {
                "url": "/images/blogs/bpa/community/bpa-dest-4-destination-details.jpg",
                "caption": "SAP BTP Cockpit: Destination Configuration ('sap_build_process_automation') with OAuth2 and Token URL"
              },
              {
                "url": "/images/blogs/bpa/community/bpa-dest-5-additional-properties.jpg",
                "caption": "SAP BTP Cockpit: Destination Additional Properties (endpoints, html5-apps-repo, saasregistryenabled, sap.cloud.service)"
              }
            ]
          },
          {
            "heading": "CAPM Backend Implementation: Trigger & Closed-Loop Callback (triggerWorkflow)",
            "paragraphs": [
              "The GitHub repository `triggerWorkflow` implements a clean CAP ApplicationService pattern that combines transaction logging, workflow triggering via the SAP Cloud SDK, and a closed-loop callback endpoint.",
              "**1. Transactional Integrity:** When `triggerWorkflow` is invoked, it first saves the incoming order to SAP HANA Cloud with `Status: 'PENDING'`. Only after the record is persisted does it trigger BPA.",
              "**2. Workflow Invocation via SAP Cloud SDK:** It calls `@sap-cloud-sdk/http-client`'s `executeHttpRequest`, passing `{ destinationName: 'spa_process_destination' }`. The SDK handles OAuth bearer token acquisition and cache management automatically.",
              "**3. Closed-Loop Callback (`updateOrderStatus`):** When the manager approves the task in SAP Build Process Automation, a **Service Task** in the workflow executes an HTTP POST to `/odata/v4/catalog/updateOrderStatus` with `{ orderId }`, updating the database record to `Status: 'APPROVED'`."
            ],
            "codeBlocks": [
              {
                "filename": "srv/cat-service.cds",
                "language": "cds",
                "code": `using {my.orders} from '../db/schema';

@odata
service CatalogService {

  // Expose Orders table (BPA will update status here)
  entity Orders as projection on orders.Orders;

  // Triggers a SAP Build Process Automation workflow for order processing
  action triggerWorkflow(orderId: Integer, orderNo: String, amount: Integer, currency: String) returns String;

  // Called by SAP BPA Service Task after approval
  action updateOrderStatus(orderId: Integer)                                                  returns String;

}`
              },
              {
                "filename": "srv/cat-service.js",
                "language": "javascript",
                "code": `const cds = require('@sap/cds');
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');

module.exports = class CatalogService extends cds.ApplicationService {
  async init() {

    // =======================
    // TRIGGER BPA WORKFLOW
    // =======================
    this.on('triggerWorkflow', async (req) => {
      const { orderId, orderNo, amount, currency } = req.data;

      if (!orderId && orderId !== 0) {
        return req.error(400, 'orderId is required');
      }

      // Save order to DB with PENDING status before triggering BPA
      const { Orders } = cds.entities('CatalogService');
      const db = await cds.connect.to('db');
      await db.run(
        UPSERT.into(Orders).entries({
          ID: orderId,
          OrderNo: orderNo || '',
          Amount: amount || 0,
          Currency: currency || 'USD',
          Status: 'PENDING'
        })
      );
      console.log(\`Order \${orderId} saved to DB with status PENDING\`);

      const oPayload = {
        definitionId: 'us10.f0a22d8ftrial.orderapprovalworkflow.orderProcessing',
        context: {
          id: orderId,
          orderno: orderNo || '',
          amount: amount || 0,
          currency: currency || '',
          status: ''
        }
      };

      console.log('Triggering BPA Workflow with payload:', JSON.stringify(oPayload, null, 2));

      try {
        const response = await executeHttpRequest(
          { destinationName: 'spa_process_destination' },
          {
            method: 'POST',
            url: '/',
            data: oPayload,
            headers: { 'Content-Type': 'application/json' },
            fetchCsrfToken: false
          }
        );

        console.log('Workflow triggered successfully. Instance ID:', response.data?.id);
        return response.data?.id;
      } catch (error) {
        console.error('Error triggering workflow:', error.response?.data || error.message);
        return req.error(500, \`Failed to trigger workflow: \${error.message}\`);
      }
    });

    // =======================
    // UPDATE ORDER STATUS
    // Called by SAP BPA Service Task after Approve decision
    // POST /odata/v4/catalog/updateOrderStatus
    // Body: { "orderId": <integer> }
    // =======================
    this.on('updateOrderStatus', async (req) => {
      console.log('req.data    :', JSON.stringify(req.data));
      console.log('req.params  :', JSON.stringify(req.params));

      const orderId = req.data?.orderId ?? req.data?.id ?? req.params?.[0]?.orderId;

      if (!orderId && orderId !== 0) {
        console.warn('No orderId found in the request');
        return 'No orderId received';
      }

      console.log(\`Updating Order \${orderId} → status: APPROVED\`);

      const { Orders } = cds.entities('CatalogService');
      const db = await cds.connect.to('db');

      const updated = await db.run(
        UPDATE(Orders)
          .set({ Status: 'APPROVED' })
          .where({ ID: orderId })
      );

      if (!updated) {
        return req.error(404, \`Order \${orderId} not found\`);
      }

      console.log(\`Order \${orderId} status updated to APPROVED\`);
      return \`Order \${orderId} status updated to APPROVED\`;
    });

    return super.init();
  }
}`
              },
              {
                "filename": "db/schema.cds",
                "language": "cds",
                "code": `namespace my.orders;

entity Orders {
  key ID       : Integer;
      OrderNo  : String(50);
      Amount   : Integer;
      Currency : String(5);
      Status   : String(20); // PENDING, APPROVED, REJECTED
}`
              },
              {
                "filename": "mta.yaml (Binding Destination & Auth Services)",
                "language": "yaml",
                "code": `modules:
  - name: triggerWorkflow-srv
    type: nodejs
    path: gen/srv
    provides:
      - name: srv-api
        properties:
          srv-url: \${default-url}
    requires:
      - name: triggerWorkflow-db
      - name: triggerWorkflow-auth
      - name: triggerWorkflow-destination

resources:
  - name: triggerWorkflow-destination
    type: org.cloudfoundry.managed-service
    parameters:
      service: destination
      service-plan: lite
  - name: triggerWorkflow-auth
    type: org.cloudfoundry.managed-service
    parameters:
      service: xsuaa
      service-plan: application
      path: ./xs-security.json`
              }
            ],
            "keyPoints": [
              "Exact GitHub Repository: https://github.com/shreekunal/SAPBackEndConcepts/tree/main/triggerWorkflow",
              "Uses `fetchCsrfToken: false` in executeHttpRequest because OAuth2 client credentials bearer token authenticates directly against the BPA endpoint",
              "Ensures transactional idempotency by persisting initial entity state prior to external network requests",
              "BPA Service Task invokes `/updateOrderStatus` via BTP destination pointing back to the CAP application URL"
            ]
          },
          {
            "heading": "Frontend Implementation: SAPUI5 OData V4 Action & Direct Fiori Trigger Patterns",
            "paragraphs": [
              "Depending on your enterprise architecture, you can trigger SAP Build Process Automation from SAPUI5 in two ways:",
              "**Pattern A: Via CAP Backend (`ui5_trigger_bpa`) - Recommended for Transactional Data:** The UI5 app interacts with the CAP OData V4 service using `oModel.bindContext(\"/triggerWorkflow(...)\")`. This pattern ensures that database records are logged, validated, and statefully maintained.",
              "**Pattern B: Direct from Fiori via Managed Approuter (SAP Community Tutorial):** If you don't need a CAP backend service, the Fiori application can trigger BPA directly by proxying through the Approuter using `xs-app.json` and a standard jQuery/Fetch AJAX request with CSRF token negotiation."
            ],
            "codeBlocks": [
              {
                "filename": "Pattern A: webapp/controller/View1.controller.js (CAP OData V4 Action)",
                "language": "javascript",
                "code": `sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5triggerbpa.controller.View1", {

        onInit() {
        },

        onTriggerBPA: function () {
            var oView = this.getView();
            var oModel = oView.getModel(); // default OData V4 model → /odata/v4/catalog/
            var oResultText = oView.byId("bpaResultText");

            var sOrderId = oView.byId("orderIdInput").getValue();
            var sOrderNo = oView.byId("orderNoInput").getValue();
            var sAmount = oView.byId("amountInput").getValue();
            var sCurrency = oView.byId("currencyInput").getValue();

            if (!sOrderId) {
                MessageToast.show("Please enter an Order ID");
                return;
            }

            var iOrderId = parseInt(sOrderId, 10);
            if (isNaN(iOrderId)) {
                MessageToast.show("Please enter a valid numeric Order ID");
                return;
            }

            oResultText.setText("Triggering workflow...");

            // Bind to OData V4 Action: /triggerWorkflow(...)
            var oActionBinding = oModel.bindContext("/triggerWorkflow(...)");
            oActionBinding.setParameter("orderId", iOrderId);
            oActionBinding.setParameter("orderNo", sOrderNo);
            oActionBinding.setParameter("amount", parseInt(sAmount, 10) || 0);
            oActionBinding.setParameter("currency", sCurrency || "USD");

            oActionBinding.execute()
                .then(function () {
                    var oContext = oActionBinding.getBoundContext();
                    var oResult = oContext.getObject();
                    oResultText.setText("Workflow Instance ID: " + oResult.value);
                    MessageToast.show("Workflow Initiated!");
                })
                .catch(function (oError) {
                    oResultText.setText("Error triggering workflow");
                    MessageToast.show("Error triggering BPA");
                    console.error(oError);
                });
        }

    });
});`
              },
              {
                "filename": "Pattern A: webapp/view/View1.view.xml (Responsive Input Form)",
                "language": "xml",
                "code": `<mvc:View controllerName="ui5triggerbpa.controller.View1"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    xmlns:l="sap.ui.layout">
    <Page id="page" title="{i18n>title}">
        <content>
            <VBox id="bpaBox" class="sapUiSmallMargin">
                <Title id="bpaTitle" text="Trigger BPA Workflow" level="H2" />

                <Label id="lblOrderId" text="Order ID" class="sapUiSmallMarginTop" />
                <Input id="orderIdInput" placeholder="e.g. 1004" width="300px" />

                <Label id="lblOrderNo" text="Order No" class="sapUiSmallMarginTop" />
                <Input id="orderNoInput" placeholder="e.g. OD-1001" width="300px" />

                <Label id="lblAmount" text="Amount" class="sapUiSmallMarginTop" />
                <Input id="amountInput" placeholder="e.g. 1500" width="300px" type="Number" />

                <Label id="lblCurrency" text="Currency" class="sapUiSmallMarginTop" />
                <Input id="currencyInput" placeholder="e.g. USD" value="USD" width="300px" />

                <HBox id="bpaButtonBox" class="sapUiSmallMarginTop">
                    <Button id="btnTriggerBPA" text="Trigger Workflow" type="Emphasized"
                        icon="sap-icon://initiative" press=".onTriggerBPA" />
                </HBox>

                <Text id="bpaResultText" text="" class="sapUiSmallMarginTop" />
            </VBox>
        </content>
    </Page>
</mvc:View>`
              },
              {
                "filename": "Pattern B: Direct App Router Route (xs-app.json)",
                "language": "json",
                "code": `{
  "welcomeFile": "/index.html",
  "authenticationMethod": "route",
  "routes": [
    {
      "source": "^/workflow/(.*)$",
      "target": "/public/workflow/rest/$1",
      "service": "html5-apps-repo-rt",
      "authenticationType": "xsuaa"
    },
    {
      "source": "^/workflow/(.*)$",
      "target": "/public/workflow/rest/$1",
      "destination": "sap_build_process_automation",
      "authenticationType": "xsuaa",
      "csrfProtection": false
    },
    {
      "source": "^(.*)$",
      "target": "$1",
      "service": "html5-apps-repo-rt",
      "authenticationType": "xsuaa"
    }
  ]
}`
              },
              {
                "filename": "Pattern B: Fiori XML View (webapp/view/View1.view.xml)",
                "language": "xml",
                "code": `<mvc:View controllerName="project2.controller.View1"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m">
    <Page id="page" title="{i18n>title}">
        <content>
            <Button text="Start WF" press="onstartWF" />
        </content>
    </Page>
</mvc:View>`
              },
              {
                "filename": "Pattern B: Fiori AJAX Controller (webapp/controller/View1.controller.js)",
                "language": "javascript",
                "code": `sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit: function () {
        },

        onstartWF: function () {
            var startContext = {
                "name": "mahesh"
            };
            var workflowArgs = {
                definitionId: "myworkflow",
                context: startContext
            };
            $.ajax({
                url: this._getWorkflowRuntimeBaseURL() + "/workflow-instances",
                method: "POST",
                async: false,
                contentType: "application/json",
                headers: {
                    "X-CSRF-Token": this._fetchToken()
                },
                data: JSON.stringify(workflowArgs),
                success: function (result, status, xhr) {
                    MessageToast.show("Workflow started successfully...");
                },
                error: function (result, status, xhr) {
                    MessageToast.show("Error starting workflow...");
                }
            });
        },

        _getWorkflowRuntimeBaseURL: function () {
            var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
            var appPath = appId.replaceAll(".", "/");
            var appModulePath = jQuery.sap.getModulePath(appPath);
            return appModulePath + "/workflow/rest/v1";
        },

        _fetchToken: function () {
            var token;
            $.ajax({
                url: this._getWorkflowRuntimeBaseURL() + "/xsrf-token",
                method: "GET",
                async: false,
                headers: {
                    "X-CSRF-Token": "Fetch"
                },
                success: function (result, xhr, data) {
                    token = data.getResponseHeader("X-CSRF-Token");
                }
            });
            return token;
        }
    });
});`
              }
            ],
            "keyPoints": [
              "Exact UI5 GitHub Repo: https://github.com/shreekunal/SAPBackEndConcepts/tree/main/ui5_trigger_bpa",
              "Exact CAPM GitHub Repo: https://github.com/shreekunal/SAPBackEndConcepts/tree/main/triggerWorkflow",
              "SAP Community Reference Post: https://community.sap.com/t5/technology-blog-posts-by-members/trigger-sap-build-process-automation-workflow-from-fiori-application/ba-p/14418167",
              "App Router proxies prevent Cross-Origin Resource Sharing (CORS) blocks in browser environments"
            ],
            "figures": [
              {
                "url": "/images/blogs/bpa/community/bpa-dest-6-app-preview.jpg",
                "caption": "SAP Business Application Studio: Local Preview of the Fiori Application on Port 8080"
              },
              {
                "url": "/images/blogs/bpa/community/bpa-dest-7-xs-app-routing.jpg",
                "caption": "App Router Configuration (xs-app.json): Route ^/workflow/(.*)$ dispatched to destination sap_build_process_automation"
              },
              {
                "url": "/images/blogs/bpa/community/bpa-dest-8-view-xml.jpg",
                "caption": "SAPUI5 View (webapp/view/View1.view.xml): Button triggering onstartWF event handler"
              },
              {
                "url": "/images/blogs/bpa/community/bpa-dest-9-controller-js.jpg",
                "caption": "SAPUI5 Controller (webapp/controller/View1.controller.js): AJAX POST with definitionId ('myworkflow') and context payload"
              },
              {
                "url": "/images/blogs/bpa/community/bpa-dest-11-terminal-deploy.jpg",
                "caption": "Cloud Foundry Terminal: Building MTA Archive (mbt build) and Deploying to BTP (cf deploy project2_0.0.1.mtar)"
              },
              {
                "url": "/images/blogs/bpa/community/bpa-dest-12-workflow-triggered.jpg",
                "caption": "Running SAP Fiori Application: 'Start WF' triggered with MessageToast confirmation"
              }
            ]
          }
        ]
      },
      {
        "id": "group-best-practices",
        "title": "Best Practices: Production Standards for BTP Consultants",
        "subtitle": "Enterprise architecture advice, error handling patterns, and SAP Task Center integration.",
        "badge": "Consultant Best Practices",
        "sections": [
          {
            "heading": "Production Recommendations & Architectural Takeaways",
            "paragraphs": [
              "Deploying enterprise-grade automations requires disciplined software engineering standards even in low-code environments:",
              "\u2022 Decouple Business Logic into Decision Tables: Avoid embedding complex nested condition rules directly on the process canvas; use Decision Tables for frequently changing business policies.",
              "\u2022 Unified Approvals with SAP Task Center: Connect your BTP tenant to SAP Task Center to unify approvals across SAP S/4HANA, SuccessFactors, Fieldglass, and custom CAP applications.",
              "\u2022 Robust Error Handling: Implement dedicated error boundary events and fallback escalation forms so that unexpected API failures do not leave processes stuck in an unrecoverable state."
            ],
            "keyPoints": [
              "Always test low and high-value condition branches before production release",
              "Maintain clear semantic naming conventions for forms, data types, and conditions",
              "Leverage SAP Desktop Agent attended bots for manual desktop data entry workflows",
              "Set up automated email notifications to keep business stakeholders informed at each milestone"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mastering-sap-fiori-elements-cap-odata-v4",
    "slug": "mastering-sap-fiori-elements-cap-odata-v4",
    "title": "Mastering SAP Fiori Elements: Metadata-Driven Development with CAP OData V4 and the Flexible Programming Model",
    "subtitle": "A comprehensive engineering handbook for enterprise SAP developers: from architectural decision matrices and standard floorplans to advanced CAP OData V4 annotations, side effects, and FPM building blocks.",
    "excerpt": "Learn when and how to leverage SAP Fiori Elements to cut development costs by up to 70%: covers List Report, Object Page, Analytical List Page, CAP CDS annotations, draft handling, side effects, and Flexible Programming Model building blocks.",
    "date": "Nov 2026",
    "readTime": "35 min read",
    "category": "Fiori & UI5",
    "tags": [
      "SAP Fiori Elements",
      "SAP CAP",
      "OData V4",
      "Flexible Programming Model",
      "Building Blocks",
      "CDS Annotations",
      "SAPUI5",
      "FPM Explorer"
    ],
    "sources": [
      {
        "title": "Learning.sap: Developing an SAP Fiori Elements App Based on a CAP OData V4 Service",
        "url": "https://learning.sap.com/courses/developing-an-sap-fiori-elements-app-based-on-a-cap-odata-v4-service",
        "badge": "Official Learning Course"
      },
      {
        "title": "SAP Community: When to Use Fiori Elements to Reduce Development Time and Costs",
        "url": "https://community.sap.com/t5/technology-blog-posts-by-sap/when-to-use-fiori-elements-to-reduce-development-time-and-costs/ba-p/13396528",
        "badge": "SAP Community Guide"
      },
      {
        "title": "SAP Design System: Frameworks & Smart Templates",
        "url": "https://www.sap.com/design-system/fiori-design-web/v1-154/discover/frameworks/sap-fiori-elements",
        "badge": "Design System Specification"
      },
      {
        "title": "SAP UI5 Flexible Programming Model Explorer: Building Blocks",
        "url": "https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/buildingBlocks",
        "badge": "FPM Explorer Demo Kit"
      }
    ],
    "groups": [
      {
        "id": "fiori-foundations",
        "title": "Architectural Foundations & Decision Matrix",
        "subtitle": "Why metadata-driven UI beats freestyle development for 80% of enterprise business use cases.",
        "badge": "Architecture & ROI",
        "sections": [
          {
            "heading": "The Enterprise UI Dilemma: Fiori Elements vs. Freestyle SAPUI5",
            "paragraphs": [
              "For years, enterprise development teams routinely built custom freestyle SAPUI5 applications for every business requirement. However, maintaining hundreds of bespoke XML views, custom controllers, and manual data bindings introduces massive technical debt, prolonged regression cycles during SAP upgrades, and skyrocketing Total Cost of Ownership (TCO).",
              "This master engineering guide serves as an enterprise companion to the official course **[Official Learning Course] Learning.sap: Developing an SAP Fiori Elements App Based on a CAP OData V4 Service**, synthesizing curriculum units into production-ready implementation patterns for enterprise teams.",
              "SAP Fiori elements completely shifts this paradigm from manual imperative coding to metadata-driven declarative design. The application UI is generated dynamically at runtime from OData annotations (OData V2 or V4). Developers no longer write repetitive XML layout code or JavaScript event handlers for standard enterprise features.",
              "By decoupling the user interface from manual code, Fiori elements delivers out-of-the-box responsive design across mobile and desktop, built-in accessibility (screen reader compliance), unified internationalization (i18n), and automatic alignment with SAP latest design system updates."
            ],
            "keyPoints": [
              "Reduces UI development time and implementation costs by 50% to 70%",
              "Eliminates maintenance overhead: UI upgrades adapt automatically with UI5 framework releases",
              "Enforces UX consistency out of the box across enterprise application suites",
              "Enables developers to focus 100% on domain modeling and core business logic"
            ],
            "image": "/images/blogs/fiori/official/fe-vs-freestyle-userflow.png",
            "imageCaption": "Official SAP Fiori Tools Architecture: Declarative Fiori Elements vs. Imperative Freestyle Development Flows"
          },
          {
            "heading": "The Decision Framework: When to Choose Fiori Elements",
            "paragraphs": [
              "When advising clients or evaluating architecture for new enterprise projects, use this decision criteria to choose between Fiori Elements and Freestyle SAPUI5:",
              "Choose SAP Fiori Elements when: your business data is served via OData protocols (V2/V4); your workflow fits standard patterns (list searches, item details, analytical dashboards); and you require standard CRUD, draft editing, or multi-field filtering.",
              "Choose Freestyle SAPUI5 only when: your application requires non-standard custom layouts (e.g., interactive floorplan maps, visual warehouse slotting), highly custom touch gestures, or complete offline data storage (mobile offline store)."
            ],
            "tables": [
              {
                "caption": "Strategic Decision Matrix: Fiori Elements vs. Freestyle SAPUI5",
                "headers": [
                  "Evaluation Criterion",
                  "SAP Fiori Elements",
                  "Freestyle SAPUI5"
                ],
                "rows": [
                  [
                    "Development Effort",
                    "Low (declarative OData annotations)",
                    "High (manual XML, Controllers, CSS)"
                  ],
                  [
                    "Maintenance & Upgrades",
                    "Zero-effort runtime adaptation by SAP",
                    "Manual regression testing & refactoring"
                  ],
                  [
                    "UX Standard Compliance",
                    "100% compliant by design",
                    "Requires strict manual UX governance"
                  ],
                  [
                    "Draft & Concurrency Handling",
                    "Native out-of-the-box support",
                    "Requires complex manual state code"
                  ],
                  [
                    "Custom UI Flexibility",
                    "Extensible via Flexible Programming Model",
                    "Unlimited from scratch"
                  ]
                ]
              }
            ],
            "image": "/images/blogs/fiori/official/fiorielements_freestyle.png",
            "imageCaption": "Figure 1: Strategic Decision Matrix \u2014 SAP Fiori Elements vs. Freestyle SAPUI5 Evaluation (Effort, TCO, UX Governance, and Draft Concurrency)"
          }
        ]
      },
      {
        "id": "fiori-floorplans",
        "title": "Standard Smart Templates & Floorplans",
        "subtitle": "Deep-dive into List Report, Object Page, Overview Page, and Analytical List Page.",
        "badge": "Template Floorplans",
        "sections": [
          {
            "heading": "1. List Report & Object Page (The Core Master-Detail Workhorse)",
            "paragraphs": [
              "The combination of a List Report and an Object Page represents the foundational backbone of enterprise software. It allows users to filter, sort, group, and trigger batch actions across large datasets, then drill down into detailed record views.",
              "List Report: Hosts a smart filter bar (single-field or multi-field search) paired with a responsive, analytical, or grid table. Supports multi-views (tabbed segmentation by status or category) and toolbar actions.",
              "Object Page: Displays comprehensive information for a single business entity. It features a rich header area (with KPI tags, micro-charts, and status badges), followed by collapsible sections, subsections, and embedded line-item child tables."
            ],
            "keyPoints": [
              "Supports Single-Selection and Multi-Selection batch operations",
              "Features dynamic table column personalization and export to Microsoft Excel natively",
              "Object Page header supports micro-charts (Bullet, Harvester, Radial) driven by annotations"
            ],
            "figures": [
              {
                "url": "/images/blogs/fiori/official/lr-floorplan.png",
                "caption": "Official SAP Fiori Elements: List Report Floorplan with FilterBar and Responsive Table"
              },
              {
                "url": "/images/blogs/fiori/official/op-floorplan.png",
                "caption": "Official SAP Fiori Elements: Object Page Floorplan with Header Facets and Form Sections"
              }
            ]
          },
          {
            "heading": "2. Analytical List Page (ALP) & Overview Page (OVP)",
            "paragraphs": [
              "For operational analytics and executive dashboards, SAP Fiori elements provides two purpose-built analytical floorplans:",
              "Analytical List Page (ALP): Merges high-level chart visualizations with detailed transactional data. Users can interact with visual chart filters (bar charts, line graphs) to slice and dice table records dynamically without typing filter criteria.",
              "Overview Page (OVP): A card-based dashboard layout organizing disparate data domains onto a single screen. Cards can be configured as Analytical Cards (KPIs and charts), List Cards, Table Cards, or QuickView Cards."
            ],
            "keyPoints": [
              "ALP visual filters provide instant visual feedback on data distribution",
              "OVP cards support role-based filtering from a global filter bar",
              "Both floorplans support direct semantic navigation into operational Object Pages"
            ],
            "figures": [
              {
                "url": "/images/blogs/fiori/official/alp-floorplan.png",
                "caption": "Official SAP Fiori Elements: Analytical List Page (ALP) with Visual Filter Cards and Hybrid Chart-Table View"
              },
              {
                "url": "/images/blogs/fiori/official/ovp-floorplan.png",
                "caption": "Official SAP Fiori Elements: Overview Page (OVP) Multi-Card Dashboard with Analytical Donut/Bar Cards and Quick Links"
              }
            ]
          }
        ]
      },
      {
        "id": "fiori-cap-integration",
        "title": "CAP CDS Modeling with OData V4 Annotations",
        "subtitle": "Configuring CDS annotations, entity definitions, and UI layout tags in SAP Cloud Application Programming Model.",
        "badge": "CAP CDS & OData V4",
        "sections": [
          {
            "heading": "Separation of Concerns: The Clean Annotations Architecture",
            "paragraphs": [
              "In modern SAP CAP projects, enterprise architects enforce a strict separation of concerns: core domain logic lives in db/schema.cds, service exposure lives in srv/service.cds, and UI layout annotations live in a dedicated app/annotations.cds file.",
              "This separation prevents presentation metadata from polluting core database definitions and keeps the architecture clean and modular.",
              "Below is a production-grade CAP service definition with essential SAP Fiori elements annotations driving a complete List Report and Object Page flow:"
            ],
            "figures": [
              {
                "url": "/images/blogs/fiori/official/editing-annotations.png",
                "caption": "Official SAP Fiori Tools: Annotation Modeler in Business Application Studio and VS Code"
              },
              {
                "url": "/images/blogs/fiori/official/fe-cap-guided-dev.png",
                "caption": "Official SAP Developers: Guided Development for CAP CDS OData V4 UI Annotations"
              }
            ],
            "codeBlocks": [
              {
                "filename": "srv/incident-service.cds",
                "language": "cds",
                "code": "using { sap.capire.incidents as my } from '../db/schema';\n\nservice IncidentService {\n  @odata.draft.enabled\n  entity Incidents as projection on my.Incidents actions {\n    @(\n      cds.odata.bindingparameter.name : '_it',\n      Common.SideEffects : {\n        TargetProperties : ['_it/status_code']\n      }\n    )\n    action closeIncident() returns Incidents;\n  };\n  \n  @readonly entity Customers as projection on my.Customers;\n}"
              },
              {
                "filename": "app/annotations.cds",
                "language": "cds",
                "code": "annotate IncidentService.Incidents with @(\n  UI.HeaderInfo : {\n    TypeName : 'Incident',\n    TypeNamePlural : 'Incidents',\n    Title : { Value : title },\n    Description : { Value : customer.name }\n  },\n  UI.SelectionFields : [\n    status_code,\n    urgency_code,\n    customer_ID\n  ],\n  UI.LineItem : [\n    { Value : identifier, Label : 'Incident ID' },\n    { Value : title, Label : 'Subject' },\n    { Value : customer.name, Label : 'Customer' },\n    { \n      Value : urgency_code, \n      Label : 'Urgency',\n      Criticality : urgency.criticality\n    },\n    { \n      Value : status_code, \n      Label : 'Status',\n      Criticality : status.criticality\n    },\n    {\n      $Type : 'UI.DataFieldForAction',\n      Action : 'IncidentService.closeIncident',\n      Label : 'Close Incident'\n    }\n  ],\n  UI.Facets : [\n    {\n      $Type : 'UI.ReferenceFacet',\n      ID : 'GeneralInformationFacet',\n      Label : 'General Information',\n      Target : '@UI.FieldGroup#GeneralInformation'\n    },\n    {\n      $Type : 'UI.ReferenceFacet',\n      ID : 'LineItemsFacet',\n      Label : 'Conversation History',\n      Target : 'conversations/@UI.LineItem'\n    }\n  ],\n  UI.FieldGroup #GeneralInformation : {\n    Data : [\n      { Value : title, Label : 'Subject' },\n      { Value : urgency_code, Label : 'Urgency' },\n      { Value : status_code, Label : 'Status' },\n      { Value : customer_ID, Label : 'Customer ID' }\n    ]\n  }\n);"
              }
            ]
          }
        ]
      },
      {
        "id": "fiori-advanced-logic",
        "title": "Drafts, Dynamic Field Control & Side Effects",
        "subtitle": "Mastering state management, field validation, and responsive recalculation.",
        "badge": "State & Interactions",
        "sections": [
          {
            "heading": "1. Native Draft Handling (@odata.draft.enabled)",
            "paragraphs": [
              "In enterprise business applications, users frequently need to edit complex forms over extended periods without losing progress if their network drops or browser closes. Traditional freestyle applications required months of complex code to handle drafts, concurrency locks, and temporary tables.",
              "In SAP CAP + Fiori Elements, enabling complete draft support requires literally one line of code: @odata.draft.enabled.",
              "When active, the framework automatically generates draft tables in SAP HANA, stores partial unsaved edits transparently, provides optimistic concurrency locks, and adds standard Save, Cancel, and Discard Draft action buttons."
            ],
            "keyPoints": [
              "Zero custom backend code required for draft storage and persistence",
              "Automatic multi-user locking prevents conflicting concurrent edits",
              "Users can continue edits seamlessly across multiple sessions or devices"
            ],
            "image": "/images/blogs/fiori/official/draft-feature-map.jpg",
            "imageCaption": "Official SAP Documentation: Draft Handling Feature Map and Transactional State Model"
          },
          {
            "heading": "2. Dynamic Field Control & Side Effects",
            "paragraphs": [
              "Enterprise requirements frequently demand dynamic field behaviors: fields that become read-only once a record is submitted, or discount percentages that automatically recalculate total prices without manual page reloads.",
              "Dynamic Field Control: Using @Common.FieldControl annotations bound to a property or virtual status attribute, fields can transition between Hidden (0), Read-Only (1), Optional (3), and Mandatory (7) states dynamically.",
              "Side Effects (@Common.SideEffects): Tells the Fiori elements runtime that when a specific property or entity is altered by the user, specific dependent target properties or child tables must be re-requested from the backend automatically."
            ],
            "code": "// Side Effect example: recalculating gross amount when discount changes\nannotate IncidentService.OrderItems with @(\n  Common.SideEffects #DiscountChanged : {\n    SourceProperties : [ discountPercentage ],\n    TargetProperties : [ netAmount, taxAmount, grossAmount ]\n  }\n);",
            "image": "/images/blogs/fiori/official/draft-toggle.png",
            "imageCaption": "Official SAP UI5: Runtime Display and Toggling between Saved Active Entity and Draft Entity"
          }
        ]
      },
      {
        "id": "fiori-fpm-building-blocks",
        "title": "Flexible Programming Model & Building Blocks",
        "subtitle": "Bridging the gap between standard Fiori Elements and custom UI requirements using UI5 Building Blocks.",
        "badge": "Flexible Programming Model",
        "sections": [
          {
            "heading": "Breaking the Template Barrier with Building Blocks",
            "paragraphs": [
              "Historically, developers faced a painful binary choice: use 100% rigid Fiori elements, or build 100% freestyle SAPUI5. If a business user needed even one non-standard custom chart or customized visual layout, developers had to abandon Fiori elements entirely.",
              "The Flexible Programming Model (FPM) completely eliminates this compromise. It allows developers to seamlessly embed high-level Building Blocks (reusable OData V4 XML controls) into custom XML views, custom sections, or completely custom pages within a Fiori elements app.",
              "Building blocks provide the best of both worlds: they are driven entirely by OData metadata and annotations (handling draft states, side effects, sorting, and filtering automatically), while allowing full layout freedom inside standard UI5 XML views."
            ],
            "keyPoints": [
              "Integrates custom XML views alongside standard List Reports and Object Pages",
              "Building blocks inherit standard draft handling and batch operations natively",
              "Explorable interactively via the official SAP UI5 FPM Explorer"
            ],
            "image": "/images/blogs/fiori/official/custom-section-building-block.png",
            "imageCaption": "Official SAP Fiori Tools: Integrating UI5 Building Block <macros:Table> inside an Object Page Custom Section"
          },
          {
            "heading": "Core Building Blocks Catalog & Usage",
            "paragraphs": [
              "The SAP Fiori elements Flexible Programming Model provides five core reusable building blocks accessible via the `sap.fe.core.buildingBlocks` (or `sap.fe.macros`) XML namespace. Each building block is metadata-driven, fully accessible, and easily embedded into custom XML views and extension sections:"
            ],
            "code": "<!-- Custom XML Section embedding FPM Building Blocks -->\n<mvc:View\n  xmlns:mvc=\"sap.ui.core.mvc\"\n  xmlns=\"sap.m\"\n  xmlns:macros=\"sap.fe.macros\"\n  controllerName=\"my.app.ext.controller.CustomSection\">\n\n  <VBox class=\"sapUiMediumMargin\">\n    <Title text=\"Custom Extension Section\" level=\"H4\" class=\"sapUiSmallMarginBottom\" />\n    \n    <!-- Intelligent Metadata-Driven Building Block -->\n    <macros:Table \n      id=\"customConversationTable\" \n      metaPath=\"conversations/@UI.LineItem\" \n      readOnly=\"false\" />\n  </VBox>\n</mvc:View>",
            "image": "/images/blogs/fiori/official/fpm-chart-building-block.png",
            "imageCaption": "Official SAP FPM Codejam: <macros:Chart> Building Block Embedded into a Custom Flexible Programming Model Page",
            "buildingBlocks": [
              {
                "tag": "<macros:Table>",
                "name": "Metadata-Driven Table",
                "annotation": "@UI.LineItem",
                "description": "A complete metadata-driven table component with built-in search, sorting, grouping, and personalization."
              },
              {
                "tag": "<macros:FilterBar>",
                "name": "Intelligent Filter Bar",
                "annotation": "@UI.SelectionFields",
                "description": "An intelligent filter bar generating input controls automatically from entity metadata."
              },
              {
                "tag": "<macros:Form>",
                "name": "Responsive Form Container",
                "annotation": "@UI.FieldGroup",
                "description": "A responsive form container rendering field groups and labels from @UI.FieldGroup annotations."
              },
              {
                "tag": "<macros:Field>",
                "name": "Smart Field Control",
                "annotation": "@Common.Text & ValueList",
                "description": "A smart field rendering formatted text, input validation, value-helps, and status badges."
              },
              {
                "tag": "<macros:Chart>",
                "name": "Visual Analytical Chart",
                "annotation": "@UI.Chart",
                "description": "A visual charting component rendering interactive analytical charts directly from @UI.Chart."
              }
            ]
          }
        ]
      },
      {
        "id": "fiori-best-practices",
        "title": "Production Standards for Enterprise Consultants",
        "subtitle": "Key architectural guidelines, performance optimizations, and pitfalls to avoid.",
        "badge": "Consultant Best Practices",
        "sections": [
          {
            "heading": "Architectural Guidelines for Scalable Enterprise Apps",
            "paragraphs": [
              "To ensure your Fiori elements applications remain high-performing, maintainable, and resilient across multi-year lifecycles, follow these proven enterprise standards:",
              "1. Maintain Clean Core Separation: Never mix UI layout annotations into database schema files. Keep all UI layout definitions in app/annotations.cds so backend models remain presentation-agnostic.",
              "2. Minimize Side Effects Scope: Overusing blanket side effects forces full page re-queries on every keystroke. Always define granular TargetProperties to minimize backend payload overhead.",
              "3. Utilize Guided Development in SAP Fiori Tools: Leverage SAP Fiori tools in VS Code or Business Application Studio to generate annotation code snippets visually, reducing syntax errors and accelerating delivery."
            ],
            "keyPoints": [
              "Always test apps with realistic data volumes using pagination and server-side filtering",
              "Adopt the Flexible Programming Model before attempting to rewrite apps in freestyle",
              "Ensure value-help entities use @Search.defaultSearchElement for fast client-side searching",
              "Verify Draft Garbage Collection jobs are scheduled on your SAP HANA HDI container"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "deploying-sapui5-apps-to-sap-build-work-zone",
    "slug": "deploying-sapui5-apps-to-sap-build-work-zone",
    "title": "Deploying SAPUI5 Applications to SAP Build Work Zone: End-to-End Guide",
    "subtitle": "A complete, production-tested masterclass on SAP BTP role assignments, Business Application Studio MTA build & deployment, HTML5 Application Repository channel sync, and custom Fiori Launchpad site exposure.",
    "excerpt": "Master deploying custom SAPUI5/Fiori apps to SAP Build Work Zone standard edition on SAP BTP: from Launchpad_Admin role assignment, BAS mta.yaml building and CF deployment, to Channel Manager syncing, Content Explorer app addition, and Launchpad group publishing.",
    "date": "Nov 2026",
    "readTime": "25 min read",
    "category": "SAP BTP & Work Zone",
    "tags": [
      "SAP Build Work Zone",
      "SAPUI5",
      "SAP BTP",
      "Cloud Foundry",
      "Business Application Studio",
      "Launchpad Admin",
      "HTML5 Apps Repo",
      "MTA Build & Deploy",
      "Fiori Launchpad",
      "Content Manager"
    ],
    "sources": [
      {
        "title": "SAP Community: Deploying SAPUI5 Apps to SAP Build Work Zone",
        "url": "https://community.sap.com/t5/technology-blog-posts-by-members/deploying-sapui5-apps-to-sap-build-work-zone/ba-p/14464858",
        "badge": "SAP Community Blueprint"
      },
      {
        "title": "SAP Help Portal: SAP Build Work Zone, standard edition",
        "url": "https://help.sap.com/docs/build-work-zone-standard-edition",
        "badge": "Official SAP Documentation"
      }
    ],
    "groups": [
      {
        "id": "group-wz-security-prerequisites",
        "title": "Phase 1: BTP Security Roles & Authorizations Setup",
        "subtitle": "Assigning Launchpad_Admin and BuildApps role collections in the SAP BTP Cockpit.",
        "badge": "Security & Entitlements",
        "sections": [
          {
            "heading": "SAP BTP Role Collections: Authorizations & Administration Access",
            "paragraphs": [
              "SAP Build Work Zone (standard edition) acts as the central entry point and enterprise digital workplace for SAP BTP applications, business processes, and third-party solutions. Before creating digital launchpad sites or exposing applications, administrators must ensure their BTP subaccount user is properly authorized.",
              "Without the appropriate platform role collections assigned, attempts to access Work Zone administrative tools (such as the **Site Directory**, **Content Manager**, and **Channel Manager**) will result in missing menus or HTTP 403 Forbidden errors.",
              "**Mandatory Role Collections for Work Zone Administration:**",
              "• **Launchpad_Admin:** The primary administrative role collection granting full rights to create and manage digital sites, configure content providers in the Channel Manager, build and edit launchpad groups and catalogs, and assign applications to business roles.",
              "• **BuildApps_Administrator / BuildApps_Developer:** Role collections that authorize administrative and development access across the SAP Build visual development suite.",
              "**Step-by-Step Assignment Procedure:**",
              "1. Log in to the **SAP BTP Cockpit** and navigate to your subaccount (e.g. `trial` or enterprise subaccount).",
              "2. In the left-hand navigation menu, expand **Security** and select **Users**.",
              "3. Search for your user account (email address) and click the user row to expand the user details panel.",
              "4. Select the **Role Collections** tab in the right-side detail pane and click **Assign Role Collection**.",
              "5. In the dialog, search and check `Launchpad_Admin`, `BuildApps_Administrator`, and `BuildApps_Developer`.",
              "6. Click **Assign Role Collection** to persist the changes. Log out and log back in to refresh your OAuth session token with the newly assigned scopes."
            ],
            "tables": [
              {
                "caption": "Essential SAP BTP Role Collections for SAP Build Work Zone",
                "headers": ["Role Collection Name", "Description", "Required For"],
                "rows": [
                  ["Launchpad_Admin", "Launchpad Administrator role collection", "Full administrative access to Work Zone Site Directory, Content Manager, and Channel Manager"],
                  ["BuildApps_Administrator", "BuildApps administrator role collection", "Managing SAP Build visual workspace settings, users, and deployment targets"],
                  ["BuildApps_Developer", "BuildApps developer role collection", "Designing and testing applications within the SAP Build visual editor"]
                ]
              }
            ],
            "keyPoints": [
              "Always assign Launchpad_Admin in the BTP Subaccount Security menu prior to launching Work Zone",
              "Changes to BTP role collections require logging out and logging back in for new OAuth scopes to take effect",
              "Community Blueprint Reference: https://community.sap.com/t5/technology-blog-posts-by-members/deploying-sapui5-apps-to-sap-build-work-zone/ba-p/14464858"
            ],
            "figures": [
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-1-btp-users-roles.jpg",
                "caption": "SAP BTP Cockpit: Security > Users — Accessing Subaccount User Role Assignment Panel"
              },
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-2-assign-role-collections.jpg",
                "caption": "SAP BTP Cockpit: Assigning Launchpad_Admin, BuildApps_Administrator, and BuildApps_Developer Role Collections"
              }
            ]
          }
        ]
      },
      {
        "id": "group-wz-site-creation",
        "title": "Phase 2: Digital Workplace Site Creation in Site Directory",
        "subtitle": "Creating and provisioning a digital workplace portal instance in SAP Build Work Zone.",
        "badge": "Site Directory",
        "sections": [
          {
            "heading": "Creating a Digital Workplace Site from the Site Directory",
            "paragraphs": [
              "In SAP Build Work Zone, a **Site** represents an independent, branded digital portal and Fiori Launchpad environment. A subaccount can host multiple sites tailored for distinct business departments (e.g., Procurement, Sales, HR) or external supplier portals.",
              "Each site encapsulates its own navigation layout (Spaces & Pages or Classic Groups), visual theme, user profile settings, and content channels.",
              "**Step-by-Step Site Creation:**",
              "1. In your SAP BTP Subaccount, navigate to **Services > Instances and Subscriptions**.",
              "2. Under **Subscriptions**, locate **SAP Build Work Zone, standard edition** and click the **Go to Application** icon.",
              "3. In the Work Zone administration cockpit, select **Site Directory** from the left navigation menu.",
              "4. Click the blue **Create Site** button at the top-right corner of the Site Directory canvas.",
              "5. In the **Create Site** modal dialog, enter your desired **Site Name\*** (e.g., `demo_site`).",
              "6. Click **Create**. The site is instantly provisioned and appears as an active site tile in the directory, complete with its unique launchpad URL, settings gear icon, and edit controls."
            ],
            "keyPoints": [
              "A single BTP subaccount can host multiple isolated sites with customized branding and role access",
              "The site acts as the runtime container that renders tiles, groups, and spaces configured in Content Manager",
              "Each site is assigned a unique generated Site ID and URL ending with #Shell-home"
            ],
            "figures": [
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-3-create-site.jpg",
                "caption": "SAP Build Work Zone: Site Directory — Creating a New Digital Workplace Site ('demo_site')"
              }
            ]
          }
        ]
      },
      {
        "id": "group-wz-ui5-mta-deployment",
        "title": "Phase 3: SAPUI5 Application Development & MTA Deployment",
        "subtitle": "Developing in SAP Business Application Studio, packaging the Multi-Target Application archive, and deploying to Cloud Foundry.",
        "badge": "BAS & Cloud Foundry",
        "sections": [
          {
            "heading": "SAPUI5 Frontend Implementation & mta.yaml Configuration",
            "paragraphs": [
              "To deploy a custom SAPUI5 frontend application to SAP Build Work Zone, the project must be packaged as a **Multi-Target Application (MTA)**. The MTA descriptor (`mta.yaml`) defines how the application's static artifacts are bundled and pushed to the SAP BTP **HTML5 Application Repository** service (`html5-apps-repo`).",
              "Below is the complete implementation of the sample application (`project1`) demonstrated in the tutorial, featuring a responsive view with a button and a controller handler displaying a confirmation `MessageToast` upon click.",
              "Crucially, the `webapp/manifest.json` file must contain a `crossNavigation` inbound definition specifying a **Semantic Object** and **Action**. This allows the SAP Fiori Launchpad intent-based routing engine to discover and navigate to the application."
            ],
            "codeBlocks": [
              {
                "filename": "webapp/view/View1.view.xml",
                "language": "xml",
                "code": `<mvc:View controllerName="project1.controller.View1"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m">
    <Page id="page" title="{i18n>title}">
        <content>
            <Button text="Click Me" press="onPress" type="Emphasized" class="sapUiSmallMargin" />
        </content>
    </Page>
</mvc:View>`
              },
              {
                "filename": "webapp/controller/View1.controller.js",
                "language": "javascript",
                "code": `sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {
        },

        onPress: function () {
            MessageToast.show("Button Pressed");
        }
    });
});`
              },
              {
                "filename": "webapp/manifest.json (Cross-Navigation Inbound Intent)",
                "language": "json",
                "code": `{
  "_version": "1.59.0",
  "sap.app": {
    "id": "project1",
    "type": "application",
    "title": "App Title",
    "description": "An SAP Fiori application.",
    "crossNavigation": {
      "inbounds": {
        "project1-display": {
          "semanticObject": "project1",
          "action": "display",
          "title": "simple app1",
          "signature": {
            "parameters": {},
            "additionalParameters": "allowed"
          }
        }
      }
    }
  }
}`
              },
              {
                "filename": "mta.yaml (HTML5 Application Deployer Module)",
                "language": "yaml",
                "code": `_schema-version: '3.2'
ID: project1
version: 0.0.1
parameters:
  enable-parallel-deployments: true

modules:
  - name: project1-app-content
    type: com.sap.application.content
    path: .
    requires:
      - name: project1_html_repo_host
        parameters:
          content-target: true
    build-parameters:
      build-result: resources
      requires:
        - artifacts:
            - project1.zip
          name: project1
          target-path: resources/

  - name: project1
    type: html5
    path: .
    build-parameters:
      build-result: dist
      builder: custom
      commands:
        - npm install
        - npm run build
      supported-platforms: []

resources:
  - name: project1_html_repo_host
    type: org.cloudfoundry.managed-service
    parameters:
      service: html5-apps-repo
      service-name: project1-html5-app-host-service
      service-plan: app-host

  - name: project1_destination_service
    type: org.cloudfoundry.managed-service
    parameters:
      service: destination
      service-plan: lite`
              }
            ],
            "keyPoints": [
              "The manifest.json crossNavigation inbounds definition is mandatory for Fiori Launchpad intent resolution",
              "The mta.yaml binds the application content module directly to the html5-apps-repo app-host service plan",
              "Right-click mta.yaml in SAP Business Application Studio and choose Build MTA Project to trigger packaging"
            ],
            "figures": [
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-4-bas-build-mta.jpg",
                "caption": "SAP Business Application Studio: Context Menu — Right-Click mta.yaml and Select 'Build MTA Project'"
              }
            ]
          },
          {
            "heading": "Deploying the MTA Archive to BTP Cloud Foundry Space",
            "paragraphs": [
              "Once the Cloud MTA Build Tool (`mbt`) completes packaging, a new archive folder named `mta_archives/` is generated in the workspace containing `project1_0.0.1.mtar`.",
              "Deploying this archive pushes the static webapp bundle into the SAP BTP HTML5 Application Repository Host service instance and provisions the service bindings in your Cloud Foundry space.",
              "**Deployment Procedure in BAS:**",
              "1. In the BAS Project Explorer, expand the `mta_archives/` folder.",
              "2. Right-click the generated archive: `project1_0.0.1.mtar`.",
              "3. Select **Deploy MTA Archive** from the context menu.",
              "4. BAS opens the integrated terminal and initiates the Cloud Foundry deployment process (`cf deploy mta_archives/project1_0.0.1.mtar`).",
              "5. Once the process prints `Process finished. Application deployed successfully`, the application is hosted in the subaccount HTML5 repository and ready for Work Zone consumption."
            ],
            "keyPoints": [
              "BAS handles Cloud Foundry authentication and target space routing automatically",
              "The deployer pushes UI5 artifacts into the managed HTML5 application repository without requiring custom node server hosting",
              "You can verify deployed applications anytime via the CF CLI command: cf html5-list"
            ],
            "figures": [
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-5-bas-deploy-mtar.jpg",
                "caption": "SAP Business Application Studio: Context Menu — Deploying project1_0.0.1.mtar to BTP Cloud Foundry Space"
              }
            ]
          }
        ]
      },
      {
        "id": "group-wz-content-exposure",
        "title": "Phase 4: Content Channel Synchronization & App Addition",
        "subtitle": "Syncing the HTML5 Application Repository channel and importing the application to My Content.",
        "badge": "Content Manager",
        "sections": [
          {
            "heading": "Synchronizing the HTML5 Apps Content Channel",
            "paragraphs": [
              "SAP Build Work Zone standard edition uses the **Common Data Model (CDM)** to federate and consume application content across different providers. Content providers are managed under the **Channel Manager**.",
              "By default, every BTP subaccount includes an auto-configured channel named **HTML5 Apps** (ID: `saas_approuter`), which represents the subaccount's HTML5 Application Repository.",
              "**Why Synchronization is Essential:** Newly deployed HTML5 applications do not automatically appear in the Work Zone Content Explorer until the HTML5 Apps channel is refreshed. Triggering synchronization causes Work Zone to query the repository service and catalog newly published apps.",
              "**Channel Sync Procedure:**",
              "1. In SAP Build Work Zone, click **Channel Manager** in the left-hand navigation menu.",
              "2. In the **Content Channels** table, locate the channel titled **HTML5 Apps** (ID: `saas_approuter`).",
              "3. In the **Actions** column on the far right, click the **Refresh / Sync Content** circular arrow icon.",
              "4. Work Zone will synchronize with BTP. The **Status** column will display a green **Updated** badge, indicating that all newly deployed apps are now available for content authoring."
            ],
            "keyPoints": [
              "The HTML5 Apps channel acts as the content bridge between BTP Cloud Foundry and Work Zone",
              "Always click the Refresh / Sync icon in Channel Manager after every new application deployment or update",
              "A green Updated status confirms successful discovery of newly deployed MTA content"
            ],
            "figures": [
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-6-channel-manager-refresh.jpg",
                "caption": "SAP Build Work Zone: Channel Manager — Refreshing and Syncing the 'HTML5 Apps' Content Channel"
              }
            ]
          },
          {
            "heading": "Adding Deployed App from Content Explorer to My Content",
            "paragraphs": [
              "Once the channel is synchronized, the application exists in the Work Zone catalog but must be explicitly imported into **My Content** before it can be assigned to launchpad groups or business roles.",
              "**Content Explorer Import Workflow:**",
              "1. In the left navigation menu, select **Content Manager**.",
              "2. At the top of the canvas, select the **Content Explorer** tab/button.",
              "3. In the content provider selector dropdown, choose **HTML5 Apps**.",
              "4. Locate your deployed application in the list: Title: `App Title`, Description: `An SAP Fiori application.`, ID: `project1`.",
              "5. Check the selection checkbox on the left of the application row.",
              "6. Click the blue **+ Add to My Content** button at the top-right of the table.",
              "7. The button updates to **Remove**, confirming that the application has been added to your subaccount's active content repository."
            ],
            "keyPoints": [
              "Content Explorer allows browsing all federated content across HTML5 Apps and remote SAP S/4HANA systems",
              "Adding an application to My Content makes it available for group, catalog, and role bindings",
              "The application maintains its original semantic object and inbound navigation intent configured in BAS"
            ],
            "figures": [
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-7-content-explorer-add-app.jpg",
                "caption": "SAP Build Work Zone: Content Explorer — Selecting Deployed 'project1' (App Title) and Adding to My Content"
              }
            ]
          }
        ]
      },
      {
        "id": "group-wz-roles-launchpad-verification",
        "title": "Phase 5: Launchpad Grouping, Role Authorization & Live Verification",
        "subtitle": "Assigning apps to launchpad groups and roles, launching the site, and validating the running application.",
        "badge": "Live Launchpad",
        "sections": [
          {
            "heading": "Creating and Assigning Apps to a Launchpad Group",
            "paragraphs": [
              "To render a tile on the user's Fiori Launchpad homepage, the application must be assigned to a **Group** (or a Page within the Spaces and Pages paradigm). A group organizes related applications under a common section header on the launchpad canvas.",
              "**Step-by-Step Group Configuration:**",
              "1. In **Content Manager**, select the **My Content** tab.",
              "2. Click the **+ New** button in the header toolbar and select **Group**.",
              "3. In the Group editor, fill in the **Group Title\***: `demo grp 1` and optional description.",
              "4. In the tabs below the header, select **Apps**.",
              "5. In the **All Apps** table, search for your application: `App Title` (ID: `project1`).",
              "6. Under the **Assignment Status** column, toggle the switch to **ON** (checked).",
              "7. Click **Save** in the top-right corner to persist the group definition."
            ],
            "keyPoints": [
              "Groups provide semantic categorization of application tiles on classic Fiori Launchpad sites",
              "The Assignment Status toggle instantly binds the app to the group without manual JSON configuration",
              "Apps can belong to multiple groups simultaneously depending on user role workflows"
            ],
            "figures": [
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-8-content-manager-group.jpg",
                "caption": "SAP Build Work Zone: Content Manager — Assigning 'project1' to Launchpad Group 'demo grp 1'"
              }
            ]
          },
          {
            "heading": "Granting User Visibility via Role Assignment (Everyone Role)",
            "paragraphs": [
              "In SAP Build Work Zone, assigning an app to a group only defines *where* the tile appears; assigning it to a **Role** defines *who* is authorized to see and execute it.",
              "Every Work Zone site includes a default pre-delivered role named **Everyone**. Applications assigned to the `Everyone` role are visible to all authenticated users accessing the site without requiring custom user-to-role mappings.",
              "**Role Assignment Procedure:**",
              "1. In **Content Manager > My Content**, locate the **Everyone** role in the roles list.",
              "2. Click the row to open the role editor, then click **Edit** in the top-right corner.",
              "3. Select the **Apps** tab.",
              "4. Locate `App Title` (ID: `project1`) and toggle the **Assignment Status** switch to **ON**.",
              "5. Click **Save** to confirm role authorization."
            ],
            "keyPoints": [
              "Without role assignment, applications will not appear on the launchpad even if assigned to a group",
              "The Everyone role grants immediate site-wide visibility to all authenticated users",
              "For restricted business scenarios, create custom roles and map them to dedicated BTP Role Collections"
            ],
            "figures": [
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-9-content-manager-role.jpg",
                "caption": "SAP Build Work Zone: Content Manager — Assigning 'project1' to the 'Everyone' Role for Universal Visibility"
              }
            ]
          },
          {
            "heading": "Live Launchpad Verification & Running the Deployed SAPUI5 App",
            "paragraphs": [
              "With the site provisioned, the application deployed to Cloud Foundry, the channel synchronized, and the app assigned to both group and role, the deployment is fully operational.",
              "**Verification & Execution Workflow:**",
              "1. In SAP Build Work Zone, navigate back to **Site Directory** in the left-hand menu.",
              "2. On your site tile (`demo_site`), click the **Go to site** icon (or click the URL directly).",
              "3. The browser opens your live SAP Build Work Zone Launchpad in a new tab.",
              "4. On the homepage canvas, you will observe the group header **demo grp 1** featuring the tile **simple app1** (mapped to `project1`).",
              "5. Click the **simple app1** tile. The shell smoothly transitions into the running SAPUI5 application, rendering the header title **App Title** and the **Click Me** button.",
              "6. Click the **Click Me** button to trigger the controller's `onPress` event handler. The standard UI5 `sap.m.MessageToast` appears in the lower-center of the screen reading **'Button Pressed'**, confirming flawless end-to-end integration!"
            ],
            "keyPoints": [
              "The application runs embedded within the SAP Build Work Zone unified Fiori shell bar",
              "Cross-navigation and intent-based routing preserve application state and back-navigation",
              "End-to-end integration verified: BTP Role Collections -> BAS MTA Deploy -> Channel Manager Sync -> Group & Role Binding -> Live Launchpad Execution"
            ],
            "figures": [
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-10-launchpad-tile-group.jpg",
                "caption": "Live SAP Build Work Zone Launchpad: 'demo grp 1' Group Displaying the Deployed 'simple app1' Tile"
              },
              {
                "url": "/images/blogs/workzone/deploy/wz-deploy-11-running-app-click-me.jpg",
                "caption": "Running SAPUI5 Application in Work Zone Shell: Header Bar, Canvas, and 'Click Me' Button Interaction"
              }
            ]
          }
        ]
      }
    ]
  }
];
