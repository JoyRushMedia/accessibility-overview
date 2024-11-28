import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Clock, AlertTriangle, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface ProcurementTestingProps {
  searchQuery?: string;
}

const ProcurementTesting: React.FC<ProcurementTestingProps> = ({ searchQuery = '' }) => {
  const testingRequirements = [
    {
      phase: "Initial Testing (Demo Environment)",
      minimumTime: "3-4 weeks",
      activities: [
        "Technical WCAG 2.1 AA compliance testing",
        "Assistive technology testing (JAWS, NVDA, etc.)",
        "Keyboard navigation testing",
        "Mobile accessibility testing",
        "Documentation review"
      ],
      deliverables: [
        "Detailed compliance report",
        "Technical specifications for fixes",
        "Priority assessment",
        "Risk evaluation"
      ],
      risks: [
        "Rushed testing missing critical issues",
        "Incomplete coverage of user scenarios",
        "Superficial compliance checks only",
        "Missing technical dependencies"
      ]
    },
    {
      phase: "Vendor Remediation Period",
      minimumTime: "4-6 weeks",
      activities: [
        "Vendor technical analysis",
        "Development work",
        "Internal QA testing",
        "Release planning",
        "Documentation updates"
      ],
      considerations: [
        "Complex fixes require architectural changes",
        "Multiple development cycles needed",
        "Cross-platform testing required",
        "Regression testing necessary"
      ],
      risks: [
        "Underestimated complexity",
        "Dependencies on product roadmap",
        "Resource availability",
        "Release schedule conflicts"
      ]
    },
    {
      phase: "Retesting (Production Environment)",
      minimumTime: "2-3 weeks",
      activities: [
        "Verification of all remediations",
        "Full regression testing",
        "Configuration-specific testing",
        "User acceptance testing"
      ],
      deliverables: [
        "Verification report",
        "Outstanding issues list",
        "Risk assessment update",
        "Compliance documentation"
      ],
      risks: [
        "New issues in production environment",
        "Configuration-specific problems",
        "Incomplete fixes requiring rework",
        "Timeline compression"
      ]
    }
  ];

  const comparisonTable = [
    {
      aspect: "Technical Expertise",
      professional: [
        "Deep WCAG understanding",
        "Assistive technology proficiency",
        "Testing methodology expertise",
        "Compliance documentation experience"
      ],
      volunteer: [
        "Variable technical knowledge",
        "Personal AT experience",
        "Informal testing approach",
        "Limited compliance knowledge"
      ]
    },
    {
      aspect: "Time Commitment",
      professional: [
        "Dedicated testing time",
        "Systematic approach",
        "Consistent availability",
        "Quick turnaround"
      ],
      volunteer: [
        "Limited availability",
        "Competing priorities",
        "Irregular scheduling",
        "Extended timelines"
      ]
    },
    {
      aspect: "Testing Coverage",
      professional: [
        "Comprehensive WCAG coverage",
        "Multiple AT platforms",
        "Edge cases consideration",
        "Technical documentation"
      ],
      volunteer: [
        "Limited scope testing",
        "Single AT platform focus",
        "Common scenarios only",
        "Informal feedback"
      ]
    }
  ];

  // Filter function for search
  const filterContent = (content: string) => {
    if (!searchQuery) return true;
    return content.toLowerCase().includes(searchQuery.toLowerCase());
  };

  // Filter requirements based on search
  const filteredRequirements = testingRequirements.map(phase => ({
    ...phase,
    activities: phase.activities.filter(filterContent),
    deliverables: phase.deliverables?.filter(filterContent),
    risks: phase.risks.filter(filterContent),
    considerations: phase.considerations?.filter(filterContent),
  })).filter(phase => 
    filterContent(phase.phase) || 
    phase.activities.length > 0 || 
    (phase.deliverables?.length ?? 0) > 0 || 
    phase.risks.length > 0 || 
    (phase.considerations?.length ?? 0) > 0
  );

  // Filter comparison table
  const filteredComparison = comparisonTable
    .map(row => ({
      ...row,
      professional: row.professional.filter(filterContent),
      volunteer: row.volunteer.filter(filterContent),
    }))
    .filter(row => 
      filterContent(row.aspect) || 
      row.professional.length > 0 || 
      row.volunteer.length > 0
    );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-blue-500" />
            Minimum Testing Timeline Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredRequirements.map((phase, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{phase.phase}</h3>
                    <p className="text-sm text-gray-600">Minimum Duration: {phase.minimumTime}</p>
                  </div>
                  {index < filteredRequirements.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Required Activities:</h4>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Risk Factors:</h4>
                    <ul className="space-y-1">
                      {phase.risks.map((risk, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 mt-0.5 text-orange-500 flex-shrink-0" />
                          {risk}
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

      <Card>
        <CardHeader>
          <CardTitle>Professional vs. Volunteer Testing Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredComparison.map((row, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-bold mb-3">{row.aspect}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Professional Testing:</h4>
                    <ul className="space-y-1">
                      {row.professional.map((point, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Volunteer Testing:</h4>
                    <ul className="space-y-1">
                      {row.volunteer.map((point, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 mt-0.5 text-orange-500 flex-shrink-0" />
                          {point}
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
    </div>
  );
};

export default ProcurementTesting;