"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { 
  Users, 
  Settings,
  Code,
  FileSearch,
  Laptop,
  CheckCircle2
} from 'lucide-react';

const roles = {
  uxDesigner: {
    title: "UX Designer",
    icon: Laptop,
    description: "Responsible for user experience, interaction patterns, and information architecture",
    primaryRequirements: [
      {
        category: "Interaction Design",
        requirements: [
          "Design keyboard navigation patterns",
          "Plan focus management strategies",
          "Create accessible interaction patterns",
          "Design error prevention mechanisms"
        ],
        wcagCriteria: ["2.1.1", "2.4.3", "2.4.7", "3.3.4"]
      },
      {
        category: "Information Architecture",
        requirements: [
          "Structure content hierarchy",
          "Design navigation patterns",
          "Plan form layouts",
          "Create consistent patterns"
        ],
        wcagCriteria: ["1.3.1", "2.4.1", "2.4.6", "3.2.3"]
      },
      {
        category: "User Flows",
        requirements: [
          "Design skip navigation",
          "Plan error handling",
          "Create feedback mechanisms",
          "Design status messages"
        ],
        wcagCriteria: ["2.4.1", "3.3.1", "3.3.3", "4.1.3"]
      }
    ],
    tools: [
      "Wireframing tools",
      "Prototyping software",
      "User flow diagrams",
      "Interaction specifications"
    ],
    deliverables: [
      "Accessible interaction patterns",
      "Navigation specifications",
      "Error handling flows",
      "Focus management documentation"
    ]
  },
  visualDesigner: {
    title: "Visual Designer",
    icon: Laptop,
    description: "Responsible for visual presentation, color schemes, and typography",
    primaryRequirements: [
      {
        category: "Color and Contrast",
        requirements: [
          "Ensure sufficient color contrast",
          "Design focus indicators",
          "Create hover states",
          "Implement error states"
        ],
        wcagCriteria: ["1.4.3", "1.4.11", "2.4.7", "3.3.1"]
      },
      {
        category: "Typography",
        requirements: [
          "Select accessible fonts",
          "Define text spacing",
          "Ensure readable text size",
          "Maintain text contrast"
        ],
        wcagCriteria: ["1.4.3", "1.4.4", "1.4.12"]
      },
      {
        category: "Visual Hierarchy",
        requirements: [
          "Design consistent layouts",
          "Create clear relationships",
          "Define visual boundaries",
          "Implement status indicators"
        ],
        wcagCriteria: ["1.3.1", "1.4.1", "3.2.4"]
      }
    ],
    tools: [
      "Design software",
      "Color contrast analyzers",
      "Typography tools",
      "Style guide generators"
    ],
    deliverables: [
      "Accessible color schemes",
      "Typography specifications",
      "Visual component library",
      "Focus state designs"
    ]
  },
  developer: {
    title: "Front-End Developer",
    icon: Code,
    description: "Responsible for technical implementation and ARIA development",
    primaryRequirements: [
      {
        category: "Semantic HTML",
        requirements: [
          "Use proper HTML elements",
          "Implement ARIA roles",
          "Structure content logically",
          "Create accessible forms"
        ],
        wcagCriteria: ["1.3.1", "4.1.1", "4.1.2"]
      },
      {
        category: "Interactive Elements",
        requirements: [
          "Implement keyboard navigation",
          "Manage focus states",
          "Handle dynamic updates",
          "Create custom controls"
        ],
        wcagCriteria: ["2.1.1", "2.4.3", "2.4.7", "4.1.3"]
      },
      {
        category: "Technical Support",
        requirements: [
          "Support screen readers",
          "Implement ARIA patterns",
          "Handle device adaptation",
          "Manage browser compatibility"
        ],
        wcagCriteria: ["4.1.2", "4.1.3"]
      }
    ],
    tools: [
      "ARIA authoring tools",
      "Screen readers",
      "Keyboard testing tools",
      "Accessibility linters"
    ],
    deliverables: [
      "Semantic HTML structure",
      "ARIA implementations",
      "Keyboard navigation code",
      "Technical documentation"
    ]
  },
  contentAuthor: {
    title: "Content Author",
    icon: Laptop,
    description: "Responsible for creating accessible content and documentation",
    primaryRequirements: [
      {
        category: "Text Content",
        requirements: [
          "Write clear headings",
          "Create descriptive links",
          "Provide text alternatives",
          "Write error messages"
        ],
        wcagCriteria: ["2.4.2", "2.4.4", "2.4.6", "3.3.3"]
      },
      {
        category: "Media Content",
        requirements: [
          "Write alt text",
          "Create captions",
          "Provide transcripts",
          "Describe complex images"
        ],
        wcagCriteria: ["1.1.1", "1.2.1", "1.2.2", "1.2.3"]
      },
      {
        category: "Documentation",
        requirements: [
          "Document accessibility features",
          "Create user instructions",
          "Write help content",
          "Provide keyboard shortcuts"
        ],
        wcagCriteria: ["3.3.2", "3.3.5"]
      }
    ],
    tools: [
      "Content management systems",
      "Alt text generators",
      "Captioning tools",
      "Documentation platforms"
    ],
    deliverables: [
      "Accessible content",
      "Alt text library",
      "Error message documentation",
      "User guides"
    ]
  },
  qaSpecialist: {
    title: "QA Specialist",
    icon: Laptop,
    description: "Responsible for testing and validation of accessibility features",
    primaryRequirements: [
      {
        category: "Manual Testing",
        requirements: [
          "Keyboard navigation testing",
          "Screen reader testing",
          "Visual inspection",
          "Content verification"
        ],
        wcagCriteria: ["All"]
      },
      {
        category: "Automated Testing",
        requirements: [
          "Run automated scans",
          "Analyze results",
          "Track issues",
          "Verify fixes"
        ],
        wcagCriteria: ["All"]
      },
      {
        category: "Documentation",
        requirements: [
          "Create test cases",
          "Document findings",
          "Track compliance",
          "Report issues"
        ],
        wcagCriteria: ["All"]
      }
    ],
    tools: [
      "Automated testing tools",
      "Screen readers",
      "Browser extensions",
      "Issue tracking systems"
    ],
    deliverables: [
      "Test reports",
      "Compliance documentation",
      "Issue tracking",
      "Remediation guidance"
    ]
  }
} as const;

const RoleRequirements = () => {
  const [selectedRole, setSelectedRole] = useState<keyof typeof roles | null>(null);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-500" />
            Role-Specific Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {Object.entries(roles).map(([key, role]) => (
              <div
                key={key}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedRole === key 
                    ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setSelectedRole(key === selectedRole ? null : (key as keyof typeof roles))}
              >
                <div className="flex items-center gap-2 mb-2">
                  <role.icon className="h-5 w-5 text-blue-500" />
                  <h3 className="font-bold dark:text-white">{role.title}</h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{role.description}</p>
              </div>
            ))}
          </div>

          {selectedRole && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                {roles[selectedRole as keyof typeof roles].primaryRequirements.map((section, index) => (
                  <div key={index} className="border rounded-lg p-4 dark:border-gray-700">
                    <h3 className="font-bold mb-3 dark:text-white">{section.category}</h3>
                    <ul className="space-y-2 mb-4">
                      {section.requirements.map((req, i) => (
                        <li key={i} className="text-sm flex items-start gap-2 dark:text-gray-200">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">WCAG:</span> {section.wcagCriteria.join(", ")}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 dark:border-gray-700">
                  <h3 className="font-bold mb-3 dark:text-white">Required Tools</h3>
                  <ul className="space-y-2">
                    {roles[selectedRole as keyof typeof roles].tools.map((tool, i) => (
                      <li key={i} className="text-sm flex items-start gap-2 dark:text-gray-200">
                        <Settings className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border rounded-lg p-4 dark:border-gray-700">
                  <h3 className="font-bold mb-3 dark:text-white">Key Deliverables</h3>
                  <ul className="space-y-2">
                    {roles[selectedRole as keyof typeof roles].deliverables.map((deliverable, i) => (
                      <li key={i} className="text-sm flex items-start gap-2 dark:text-gray-200">
                        <FileSearch className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="dark:text-white">Cross-Role Dependencies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 dark:border-gray-700">
              <h3 className="font-bold mb-3 dark:text-white">UX → Visual Design</h3>
              <ul className="space-y-2">
                <li className="text-sm dark:text-gray-200">Focus state specifications</li>
                <li className="text-sm dark:text-gray-200">Interactive patterns</li>
                <li className="text-sm dark:text-gray-200">Form layouts</li>
                <li className="text-sm dark:text-gray-200">Navigation structures</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 dark:border-gray-700">
              <h3 className="font-bold mb-3 dark:text-white">Visual Design → Development</h3>
              <ul className="space-y-2">
                <li className="text-sm dark:text-gray-200">Color contrast requirements</li>
                <li className="text-sm dark:text-gray-200">Focus state styles</li>
                <li className="text-sm dark:text-gray-200">Typography specifications</li>
                <li className="text-sm dark:text-gray-200">Component states</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 dark:border-gray-700">
              <h3 className="font-bold mb-3 dark:text-white">Content → Development</h3>
              <ul className="space-y-2">
                <li className="text-sm dark:text-gray-200">Alt text implementation</li>
                <li className="text-sm dark:text-gray-200">Error messages</li>
                <li className="text-sm dark:text-gray-200">ARIA labels</li>
                <li className="text-sm dark:text-gray-200">Help text</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoleRequirements;