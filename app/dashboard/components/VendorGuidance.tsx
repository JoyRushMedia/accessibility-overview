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
          <CardTitle className="text-base-content">Vendor Evaluation Criteria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {filteredContractConsiderations.map((item) => (
              <div key={item.phase} className="border border-base-300 rounded-lg p-4 bg-base-100">
                <h3 className="font-semibold text-base-content mb-2">{item.phase}</h3>
                <p className="text-base-content/70">{item.items.map(item => item.requirement).join(', ')}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.items.map((item) => (
                    <span key={item.requirement} className="badge badge-outline text-base-content">
                      {item.requirement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorGuidance;