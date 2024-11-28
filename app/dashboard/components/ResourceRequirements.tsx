import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { 
  Users, 
  Brain, 
  CheckCircle2, 
  Award, 
  DollarSign, 
  TrendingUp 
} from 'lucide-react';

interface ImplementationROI {
  returns?: {
    financial: number;
    social: number;
  };
}

const ROIDisplay: React.FC<{ roi: ImplementationROI }> = ({ roi }) => (
  <div>
    {roi.returns && (
      <>
        <p>Financial Return: ${roi.returns.financial}</p>
        <p>Social Impact Score: {roi.returns.social}</p>
      </>
    )}
  </div>
);

const ResourceRequirements = () => {
  const staffingNeeds = [
    {
      role: "Accessibility Specialist",
      level: "Senior",
      count: "1-2",
      responsibilities: [
        "Program leadership and strategy",
        "Standards and policy development",
        "Testing methodology oversight",
      ],
      requiredSkills: [
        "WCAG 2.1 expertise",
        "Assistive technology proficiency",
        "Testing methodology expertise",
        "Program management"
      ],
      certifications: [
        "IAAP CPWA or CPACC",
        "Section 508 Trusted Tester",
        "Relevant accessibility certifications"
      ]
    },
    {
      role: "Accessibility Tester",
      level: "Mid-Senior",
      count: "2-3",
      responsibilities: [
        "Manual accessibility testing",
        "Screen reader testing",
        "Issue documentation",
        "Remediation guidance"
      ],
      requiredSkills: [
        "WCAG understanding",
        "Multiple AT proficiency",
        "Testing tools expertise",
        "Technical writing"
      ],
      certifications: [
        "IAAP WAS",
        "Screen reader certifications",
        "Testing tool certifications"
      ]
    },
    {
      role: "Developer (Accessibility Focus)",
      level: "Senior",
      count: "1-2",
      responsibilities: [
        "Technical implementation",
        "ARIA development",
        "Component remediation",
        "Developer guidance"
      ],
      requiredSkills: [
        "ARIA expertise",
        "JavaScript frameworks",
        "Semantic HTML",
        "Accessibility APIs"
      ],
      certifications: [
        "Front-end certifications",
        "Framework-specific certs",
        "Accessibility development training"
      ]
    }
  ];

  const toolRequirements = [
    {
      category: "Testing Tools",
      essential: [
        {
          name: "Screen Readers",
          examples: "JAWS, NVDA, VoiceOver",
          cost: "$1,000-2,000/year",
          purpose: "AT compatibility testing"
        },
        {
          name: "Automated Testing",
          examples: "axe-core, WAVE, ARC Toolkit",
          cost: "$5,000-10,000/year",
          purpose: "Automated compliance checks"
        },
        {
          name: "Color Contrast",
          examples: "Colour Contrast Analyzer",
          cost: "$0-500/year",
          purpose: "Visual compliance testing"
        }
      ],
      recommended: [
        {
          name: "Testing Management",
          examples: "AMP, TPG, Deque",
          cost: "$10,000-20,000/year",
          purpose: "Testing workflow management"
        },
        {
          name: "Browser Extensions",
          examples: "Various testing tools",
          cost: "$1,000-2,000/year",
          purpose: "Quick compliance checks"
        }
      ]
    },
    {
      category: "Development Tools",
      essential: [
        {
          name: "ARIA Development",
          examples: "Development frameworks",
          cost: "$2,000-5,000/year",
          purpose: "Accessible component development"
        },
        {
          name: "Linting Tools",
          examples: "eslint-plugin-jsx-a11y",
          cost: "$0-1,000/year",
          purpose: "Code quality checks"
        }
      ],
      recommended: [
        {
          name: "Component Libraries",
          examples: "Accessible UI kits",
          cost: "$5,000-10,000/year",
          purpose: "Pre-built accessible components"
        }
      ]
    }
  ];

  const trainingResources = [
    {
      audience: "Development Team",
      requirements: [
        {
          type: "Technical Training",
          topics: [
            "ARIA implementation",
            "Semantic HTML",
            "JavaScript accessibility",
            "Testing tools"
          ],
          duration: "40-60 hours initial",
          cost: "$2,000-3,000 per developer"
        },
        {
          type: "Ongoing Education",
          topics: [
            "New standards updates",
            "Best practices",
            "Tool updates",
            "Technique improvements"
          ],
          duration: "10-15 hours/quarter",
          cost: "$1,000-1,500 per developer/year"
        }
      ]
    },
    {
      audience: "Design Team",
      requirements: [
        {
          type: "Design Training",
          topics: [
            "Accessible design patterns",
            "Color contrast",
            "Typography accessibility",
            "UX considerations"
          ],
          duration: "30-40 hours initial",
          cost: "$1,500-2,500 per designer"
        },
        {
          type: "Ongoing Education",
          topics: [
            "Pattern libraries",
            "User research",
            "New guidelines",
            "Tool updates"
          ],
          duration: "8-10 hours/quarter",
          cost: "$800-1,200 per designer/year"
        }
      ]
    }
  ];

  const budgetConsiderations = {
    implementation: [
      {
        category: "Initial Setup",
        items: [
          {
            item: "Staff Hiring/Training",
            cost: "$150,000-300,000",
            timeframe: "First 6 months"
          },
          {
            item: "Tools and Licenses",
            cost: "$50,000-100,000",
            timeframe: "Annual"
          },
          {
            item: "Initial Audit",
            cost: "$30,000-50,000",
            timeframe: "One-time"
          }
        ]
      },
      {
        category: "Ongoing Costs",
        items: [
          {
            item: "Staff Retention",
            cost: "$300,000-500,000",
            timeframe: "Annual"
          },
          {
            item: "Tool Maintenance",
            cost: "$30,000-50,000",
            timeframe: "Annual"
          },
          {
            item: "Continuous Training",
            cost: "$20,000-40,000",
            timeframe: "Annual"
          }
        ]
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Staffing Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Staffing Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {staffingNeeds.map((staff, index) => (
              <div key={index} className="border border-base-300 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-base-content">{staff.role}</h3>
                    <p className="text-sm text-base-content/60">{staff.level} • {staff.count} FTE</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-base-content">Responsibilities:</h4>
                    <ul className="space-y-1">
                      {staff.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-success flex-shrink-0" />
                          <span className="text-base-content/70">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Required Skills */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-base-content">Required Skills:</h4>
                    <ul className="space-y-1">
                      {staff.requiredSkills.map((skill, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <Brain className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                          <span className="text-base-content/70">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Certifications */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-base-content">Certifications:</h4>
                    <ul className="space-y-1">
                      {staff.certifications.map((cert, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <Award className="h-4 w-4 mt-0.5 text-warning flex-shrink-0" />
                          <span className="text-base-content/70">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tool Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Tool Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          {toolRequirements.map((toolCategory, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-md mb-2 text-base-content">{toolCategory.category}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Essential:</h4>
                  <ul className="space-y-1">
                    {toolCategory.essential.map((tool, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
                        <div>
                          <strong>{tool.name}</strong> <br />
                          <span className="text-sm text-gray-600">Examples: {tool.examples}</span> <br />
                          <span className="text-sm text-gray-600">Cost: {tool.cost}</span> <br />
                          <span className="text-sm text-gray-600">Purpose: {tool.purpose}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Recommended:</h4>
                  <ul className="space-y-1">
                    {toolCategory.recommended.map((tool, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                        <div>
                          <strong>{tool.name}</strong> <br />
                          <span className="text-sm text-gray-600">Examples: {tool.examples}</span> <br />
                          <span className="text-sm text-gray-600">Cost: {tool.cost}</span> <br />
                          <span className="text-sm text-gray-600">Purpose: {tool.purpose}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Training Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-purple-500" />
            Training Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          {trainingResources.map((train, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-md mb-2">{train.audience}</h3>
              {train.requirements.map((req, i) => (
                <div key={i} className="mb-2">
                  <h4 className="font-medium">{req.type}</h4>
                  <p className="text-sm text-gray-600">Topics: {req.topics.join(', ')}</p>
                  <p className="text-sm text-gray-600">Duration: {req.duration}</p>
                  <p className="text-sm text-gray-600">Cost: {req.cost}</p>
                </div>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Budget Considerations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-700" />
            Budget Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          {budgetConsiderations.implementation.map((budget, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-md mb-2">{budget.category}</h3>
              <ul className="space-y-2">
                {budget.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                    <div>
                      <strong>{item.item}</strong> <br />
                      <span className="text-sm text-gray-600">Cost: {item.cost}</span> <br />
                      <span className="text-sm text-gray-600">Timeframe: {item.timeframe}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Expected Returns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-green-500" />
            Expected Returns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ROIDisplay roi={{
            returns: {
              financial: 500000,
              social: 85
            }
          }} />
          <div className="space-y-4">
            {/* Example Return Item */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Improved Accessibility</h4>
                <span className="text-green-600">High</span>
              </div>
              <ul className="space-y-1">
                <li className="text-sm flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                  Enhanced user satisfaction and reach.
                </li>
                <li className="text-sm flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                  Compliance with legal standards.
                </li>
              </ul>
            </div>
            {/* Add more return items as needed */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceRequirements;