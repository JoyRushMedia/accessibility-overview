import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  AlertCircle,
  Scale,
} from 'lucide-react';

interface VendorGuidanceProps {
  searchQuery?: string;
}

const VendorGuidance: React.FC<VendorGuidanceProps> = ({ searchQuery = '' }) => {
  const contractConsiderations = [
    {
      phase: "Pre-Contract Requirements",
      items: [
        {
          requirement: "VPAT Review",
          details: "Current VPAT must be dated within last 12 months",
          verificationSteps: [
            "Verify testing methodology",
            "Check conformance claims",
            "Review testing dates",
            "Validate scope coverage"
          ]
        },
        {
          requirement: "Accessibility Statement",
          details: "Public commitment to accessibility standards",
          verificationSteps: [
            "Verify WCAG conformance level",
            "Check remediation process",
            "Review support channels",
            "Validate testing approach"
          ]
        },
        {
          requirement: "Technical Documentation",
          details: "Documentation of accessibility features",
          verificationSteps: [
            "Review feature documentation",
            "Check implementation guides",
            "Verify testing procedures",
            "Validate support materials"
          ]
        }
      ]
    },
    {
      phase: "Contract Requirements",
      items: [
        {
          requirement: "Conformance Level",
          details: "Explicit WCAG 2.1 AA requirement",
          verificationSteps: [
            "Define conformance level",
            "Specify testing requirements",
            "Set verification process",
            "Establish remediation timeline"
          ]
        },
        {
          requirement: "Testing Rights",
          details: "Right to conduct independent testing",
          verificationSteps: [
            "Define testing scope",
            "Specify testing timeline",
            "Set acceptance criteria",
            "Establish retest rights"
          ]
        },
        {
          requirement: "Remediation Commitment",
          details: "Clear timeline for fixing issues",
          verificationSteps: [
            "Set response timeframes",
            "Define severity levels",
            "Establish fix timelines",
            "Specify verification process"
          ]
        }
      ]
    }
  ];

  const redFlags = [
    {
      category: "Testing Claims",
      warnings: [
        "Automated testing only",
        "No professional testers",
        "Unclear testing methodology",
        "Outdated VPAT (>12 months)"
      ],
      impact: "May miss critical accessibility issues",
      mitigation: "Require professional testing evidence and methodology documentation"
    },
    {
      category: "Timeline Responses",
      warnings: [
        "Immediate fixes promised",
        "No testing window needed",
        "Unrealistic timelines",
        "No remediation process"
      ],
      impact: "Indicates lack of understanding of accessibility complexity",
      mitigation: "Establish realistic timelines based on industry standards"
    },
    {
      category: "Documentation",
      warnings: [
        "Generic accessibility claims",
        "No technical documentation",
        "Unclear conformance level",
        "Missing implementation guides"
      ],
      impact: "May indicate superficial accessibility commitment",
      mitigation: "Require detailed documentation and specific conformance claims"
    },
    {
      category: "Support Process",
      warnings: [
        "No dedicated accessibility support",
        "Unclear escalation process",
        "No remediation timeline",
        "Limited testing capabilities"
      ],
      impact: "May result in inadequate issue resolution",
      mitigation: "Require defined support process and SLAs"
    }
  ];

  const bestPractices = [
    {
      title: "Testing Windows",
      practices: [
        "Minimum 3-4 weeks for initial testing",
        "2-3 weeks for remediation verification",
        "Additional time for configuration testing",
        "Buffer for unexpected issues"
      ]
    },
    {
      title: "Documentation Requirements",
      practices: [
        "Current VPAT with testing details",
        "Accessibility conformance statement",
        "Technical implementation guides",
        "User accessibility documentation"
      ]
    },
    {
      title: "Support Requirements",
      practices: [
        "Dedicated accessibility contact",
        "Defined escalation process",
        "Clear remediation timelines",
        "Regular status updates"
      ]
    },
    {
      title: "Quality Assurance",
      practices: [
        "Professional testing evidence",
        "Multiple testing methodologies",
        "Cross-platform verification",
        "Regular compliance updates"
      ]
    }
  ];

  const filterContent = (content: string) => {
    if (!searchQuery) return true;
    return content.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const filteredContractConsiderations = contractConsiderations.filter(phase => 
    filterContent(phase.phase) || 
    phase.items.some(item => filterContent(item.requirement) || filterContent(item.details))
  );

  const filteredRedFlags = redFlags.filter(flag => 
    filterContent(flag.category) || 
    flag.warnings.some(warning => filterContent(warning))
  );

  const filteredBestPractices = bestPractices.filter(practice => 
    filterContent(practice.title) || 
    practice.practices.some(p => filterContent(p))
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-blue-500" />
            Contract Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredContractConsiderations.map((phase, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-bold text-lg mb-4">{phase.phase}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.items.map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-blue-500" />
                        <h4 className="font-semibold">{item.requirement}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{item.details}</p>
                      <div>
                        <h5 className="text-sm font-semibold mb-2">Verification:</h5>
                        <ul className="space-y-1">
                          {item.verificationSteps.map((step, j) => (
                            <li key={j} className="text-sm flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-orange-500" />
            Vendor Red Flags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {filteredRedFlags.map((flag, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-bold mb-3">{flag.category}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Warning Signs:</h4>
                    <ul className="space-y-1">
                      {flag.warnings.map((warning, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
                          {warning}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Impact:</h4>
                    <p className="text-sm text-gray-600">{flag.impact}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Mitigation:</h4>
                    <p className="text-sm text-gray-600">{flag.mitigation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredBestPractices.map((section, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-bold mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.practices.map((practice, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorGuidance;