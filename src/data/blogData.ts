import { BlogPost } from "../types";

export const BLOG_POSTS: BlogPost[] = [
  {
    "id": "getting-started-with-sap-build-process-automation",
    "slug": "getting-started-with-sap-build-process-automation",
    "title": "Getting Started with SAP Build Process Automation: Complete 1:1 Mission Guide",
    "subtitle": "An exhaustive, step-by-step masterclass with 1:1 matching screenshots, form field tables, and exact click instructions for all 5 tutorial groups.",
    "excerpt": "Follow the complete SAP Developers mission with 1:1 precision: each numbered action step features its exact matching screenshot, field table, and click guidance directly beneath the instruction.",
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
      "Process Visibility"
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
              "Follow the complete step-by-step 1:1 action workflow below with matching screenshots."
            ],
            "keyPoints": [
              "How to activate SAP Build Process Automation in SAP BTP Free Trial or SAP BTP Free Tier account"
            ]
          },
          {
            "heading": "Subscribe to SAP Build Process Automation",
            "paragraphs": [
              "]\n\n> Complete [Get a Free Account on SAP BTP Trial](hcp-create-trial-account) tutorial and make sure to create an account in US East (VA) - AWS trial region"
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
                "instruction": "Navigate to **Instances and Subscriptions** and choose the **Go to Application** icon.\n\n    \n\n    This will launch your SAP Build Process Automation application.\n\n    You have successfully subscribed to SAP Build Process Automation.\n\n\n\n]",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_008.png",
                "imageCaption": "Step 14: Trial",
                "note": "Complete [Get an Account on SAP BTP to Try Out Free Tier Service Plans](btp-free-tier-account)."
              },
              {
                "stepNumber": 1,
                "instruction": "After successful creation of SAP BTP account using Free Tier, navigate to Boosters and search for **SAP Build Process Automation** to find the SAP Build Process Automation booster. Once the tile is shown, select the tile.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_1.png",
                "imageCaption": "Step 1: 1.PNG",
                "note": "Booster is a guided set of automatic instructions to achieve a specific goal. SAP Build Process Automation automates the onboarding of SAP Build Process Automation service in your account without the need of any manual configurations. It will configure entitlement, enable SAP Build Process Automation subscription, and will assign all the relevant role collections to the given users for administrator or developer personas."
              },
              {
                "stepNumber": 2,
                "instruction": "You will be navigated to the overview page of the booster. Choose **Start**.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_2.png",
                "imageCaption": "Step 2: 2.PNG"
              },
              {
                "stepNumber": 3,
                "instruction": "The booster tests the prerequisites for the service and your credentials. Once the **Prerequisites** are marked as **DONE** in green, it indicates that the tests have passed successfully. Choose **Next**.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_3.png",
                "imageCaption": "Step 3: 3.PNG"
              },
              {
                "stepNumber": 4,
                "instruction": "In this step you can create a new sub-account or use an existing one. Here, you will create a new sub-account scenario and choose **Next**.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_4.png",
                "imageCaption": "Step 4: 4.PNG",
                "note": "You cannot have SAP Build Process Automation and SAP Intelligent RPA in the same sub-account."
              },
              {
                "stepNumber": 5,
                "instruction": "System shows you all generated IDs which can be changed or accepted. The most important point here is that you can see the correct service and plan in the box then choose **Next**.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_5.png",
                "imageCaption": "Step 5: 5.PNG"
              },
              {
                "stepNumber": 6,
                "instruction": "Maintain users that would be added to the SAP Build Process Automation service. The users can be added later too. Choose **Next**.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_6.png",
                "imageCaption": "Step 6: 6.PNG"
              },
              {
                "stepNumber": 7,
                "instruction": "Summary of the booster is shown in the last page for review. After the review, choose **Finish**.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_7.png",
                "imageCaption": "Step 7: 7.PNG"
              },
              {
                "stepNumber": 8,
                "instruction": "The booster starts the deployment which can take up to five minutes to get the service ready.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_8.png",
                "imageCaption": "Step 8: 8.PNG",
                "note": "A pop-up will inform you that the Booster was successfully executed."
              },
              {
                "stepNumber": 9,
                "instruction": "Choose **Navigate to Subaccount**.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_9.png",
                "imageCaption": "Step 9: 9.PNG"
              },
              {
                "stepNumber": 10,
                "instruction": "Then choose **Instances and Subscriptions** in the menu.\n\n    You now get an overview on the activated services and you can move directly to the **SAP Build Process Automation** application by selecting the icon.",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_10.png",
                "imageCaption": "Step 10: 10.PNG",
                "note": "SAP Build Process Automation Application Development workbench which will be your one-stop studio to develop, test, deploy and monitor your processes with different skills like decision, automation, forms etc."
              },
              {
                "stepNumber": 11,
                "instruction": "You will have access to SAP Build which is a no-code environment from where you can start your development of the business processes.\n\n    \n\n    You are now ready to use SAP Build Process Automation in SAP BTP Free Tier.\n\n\n\n\n---",
                "image": "/images/blogs/bpa/all/spa-subscribe-booster_11.png",
                "imageCaption": "Step 11: Studio"
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
              "Follow the complete step-by-step 1:1 action workflow below with matching screenshots."
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
              "Follow the complete step-by-step 1:1 action workflow below with matching screenshots."
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
              "Follow the complete step-by-step 1:1 action workflow below with matching screenshots."
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
              "Follow the complete step-by-step 1:1 action workflow below with matching screenshots."
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
    ],
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
      },
      {
        "heading": "Group 1: Subscribe to SAP Build Process Automation & Security Roles \u2014 Learning Objectives",
        "paragraphs": [
          "Activate the SAP Build Process Automation service",
          "Follow the complete step-by-step 1:1 action workflow below with matching screenshots."
        ],
        "keyPoints": [
          "How to activate SAP Build Process Automation in SAP BTP Free Trial or SAP BTP Free Tier account"
        ]
      },
      {
        "heading": "Subscribe to SAP Build Process Automation",
        "paragraphs": [
          "]\n\n> Complete [Get a Free Account on SAP BTP Trial](hcp-create-trial-account) tutorial and make sure to create an account in US East (VA) - AWS trial region"
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
            "instruction": "Navigate to **Instances and Subscriptions** and choose the **Go to Application** icon.\n\n    \n\n    This will launch your SAP Build Process Automation application.\n\n    You have successfully subscribed to SAP Build Process Automation.\n\n\n\n]",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_008.png",
            "imageCaption": "Step 14: Trial",
            "note": "Complete [Get an Account on SAP BTP to Try Out Free Tier Service Plans](btp-free-tier-account)."
          },
          {
            "stepNumber": 1,
            "instruction": "After successful creation of SAP BTP account using Free Tier, navigate to Boosters and search for **SAP Build Process Automation** to find the SAP Build Process Automation booster. Once the tile is shown, select the tile.",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_1.png",
            "imageCaption": "Step 1: 1.PNG",
            "note": "Booster is a guided set of automatic instructions to achieve a specific goal. SAP Build Process Automation automates the onboarding of SAP Build Process Automation service in your account without the need of any manual configurations. It will configure entitlement, enable SAP Build Process Automation subscription, and will assign all the relevant role collections to the given users for administrator or developer personas."
          },
          {
            "stepNumber": 2,
            "instruction": "You will be navigated to the overview page of the booster. Choose **Start**.",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_2.png",
            "imageCaption": "Step 2: 2.PNG"
          },
          {
            "stepNumber": 3,
            "instruction": "The booster tests the prerequisites for the service and your credentials. Once the **Prerequisites** are marked as **DONE** in green, it indicates that the tests have passed successfully. Choose **Next**.",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_3.png",
            "imageCaption": "Step 3: 3.PNG"
          },
          {
            "stepNumber": 4,
            "instruction": "In this step you can create a new sub-account or use an existing one. Here, you will create a new sub-account scenario and choose **Next**.",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_4.png",
            "imageCaption": "Step 4: 4.PNG",
            "note": "You cannot have SAP Build Process Automation and SAP Intelligent RPA in the same sub-account."
          },
          {
            "stepNumber": 5,
            "instruction": "System shows you all generated IDs which can be changed or accepted. The most important point here is that you can see the correct service and plan in the box then choose **Next**.",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_5.png",
            "imageCaption": "Step 5: 5.PNG"
          },
          {
            "stepNumber": 6,
            "instruction": "Maintain users that would be added to the SAP Build Process Automation service. The users can be added later too. Choose **Next**.",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_6.png",
            "imageCaption": "Step 6: 6.PNG"
          },
          {
            "stepNumber": 7,
            "instruction": "Summary of the booster is shown in the last page for review. After the review, choose **Finish**.",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_7.png",
            "imageCaption": "Step 7: 7.PNG"
          },
          {
            "stepNumber": 8,
            "instruction": "The booster starts the deployment which can take up to five minutes to get the service ready.",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_8.png",
            "imageCaption": "Step 8: 8.PNG",
            "note": "A pop-up will inform you that the Booster was successfully executed."
          },
          {
            "stepNumber": 9,
            "instruction": "Choose **Navigate to Subaccount**.",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_9.png",
            "imageCaption": "Step 9: 9.PNG"
          },
          {
            "stepNumber": 10,
            "instruction": "Then choose **Instances and Subscriptions** in the menu.\n\n    You now get an overview on the activated services and you can move directly to the **SAP Build Process Automation** application by selecting the icon.",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_10.png",
            "imageCaption": "Step 10: 10.PNG",
            "note": "SAP Build Process Automation Application Development workbench which will be your one-stop studio to develop, test, deploy and monitor your processes with different skills like decision, automation, forms etc."
          },
          {
            "stepNumber": 11,
            "instruction": "You will have access to SAP Build which is a no-code environment from where you can start your development of the business processes.\n\n    \n\n    You are now ready to use SAP Build Process Automation in SAP BTP Free Tier.\n\n\n\n\n---",
            "image": "/images/blogs/bpa/all/spa-subscribe-booster_11.png",
            "imageCaption": "Step 11: Studio"
          }
        ]
      },
      {
        "heading": "Group 2: Create a Business Process Project in SAP Build Lobby \u2014 Learning Objectives",
        "paragraphs": [
          "Create a Business Project and Process to build and extend business processes",
          "Follow the complete step-by-step 1:1 action workflow below with matching screenshots."
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
      },
      {
        "heading": "Group 3: Create and Configure Start, Approval & Notification Forms \u2014 Learning Objectives",
        "paragraphs": [
          "Add forms to start the business process, send tasks for approvals and notify business users",
          "Follow the complete step-by-step 1:1 action workflow below with matching screenshots."
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
      },
      {
        "heading": "Group 4: Create Process Conditions & Branching Decision Rules \u2014 Learning Objectives",
        "paragraphs": [
          "Create a process condition to route the process based on business criteria",
          "Follow the complete step-by-step 1:1 action workflow below with matching screenshots."
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
      },
      {
        "heading": "Group 5: Release, Deploy, Execute & Monitor the Business Process \u2014 Learning Objectives",
        "paragraphs": [
          "Release, deploy and run the business process",
          "Follow the complete step-by-step 1:1 action workflow below with matching screenshots."
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
      },
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
];
