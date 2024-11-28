import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { AlertTriangle, CheckCircle2, AlertCircle, Timer, Gauge } from 'lucide-react';

interface ComplianceArea {
  id: string;
  name: string;
  completed: number;
  requirements: number;
  risk: 'high' | 'medium' | 'low';
  inProgress: number;
  notStarted: number;
  criticalIssues: number;
  keyAreas: string[];
}

interface RiskMatrix {
  risk: string;
  likelihood: string;
  impact: string;
  affected: string;
  mitigation: string;
  priority: number;
}

const ComplianceRiskTracker = () => {
  const complianceAreas: ComplianceArea[] = [
    {
      id: "perceivable",
      name: "Perceivable",
      requirements: 28,
      completed: 12,
      inProgress: 10,
      notStarted: 6,
      criticalIssues: 4,
      risk: 'high',
      keyAreas: ['Images & Media', 'Text Alternatives', 'Color Contrast', 'Content Structure']
    },
    {
      id: "operable",
      name: "Operable",
      requirements: 32,
      completed: 15,
      inProgress: 12,
      notStarted: 5,
      criticalIssues: 3,
      risk: 'high',
      keyAreas: ['Keyboard Access', 'Navigation', 'Input Methods', 'Time Limits']
    },
    {
      id: "understandable",
      name: "Understandable",
      requirements: 24,
      completed: 8,
      inProgress: 11,
      notStarted: 5,
      criticalIssues: 2,
      risk: 'medium',
      keyAreas: ['Readability', 'Predictability', 'Input Assistance', 'Error Prevention']
    },
    {
      id: "robust",
      name: "Robust",
      requirements: 16,
      completed: 5,
      inProgress: 8,
      notStarted: 3,
      criticalIssues: 2,
      risk: 'low',
      keyAreas: ['Compatibility', 'Parsing', 'Name/Role/Value', 'Status Messages']
    }
  ];

  const riskMatrix: RiskMatrix[] = [
    {
      risk: "Keyboard Navigation Issues",
      likelihood: "High",
      impact: "High",
      affected: "Mobility impaired users",
      mitigation: "Professional keyboard testing and focus management",
      priority: 1
    },
    {
      risk: "Missing ARIA Labels",
      likelihood: "High",
      impact: "High",
      affected: "Screen reader users",
      mitigation: "Systematic ARIA audit and implementation",
      priority: 1
    },
    {
      risk: "Color Contrast",
      likelihood: "Medium",
      impact: "High",
      affected: "Low vision users",
      mitigation: "Contrast analysis and design system updates",
      priority: 2
    },
    {
      risk: "Complex Widget Behavior",
      likelihood: "Medium",
      impact: "High",
      affected: "All users with disabilities",
      mitigation: "Professional accessibility testing",
      priority: 2
    },
    {
      risk: "Dynamic Content Updates",
      likelihood: "Medium",
      impact: "Medium",
      affected: "Screen reader users",
      mitigation: "Live region implementation and testing",
      priority: 3
    }
  ];

  const getLikelihoodColor = (value: number): string => {
    if (value >= 0.7) return 'bg-red-500';
    if (value >= 0.4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getImpactColor = (value: number): string => {
    if (value >= 0.7) return 'bg-red-500';
    if (value >= 0.4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getLikelihoodValue = (value: string): number => {
    return value === "High" ? 0.8 : value === "Medium" ? 0.5 : 0.2;
  };

  const getImpactValue = getLikelihoodValue;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="h-6 w-6 text-blue-500" />
            WCAG Compliance Progress Tracker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {complianceAreas.map((area, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{area.name}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">Total Requirements: {area.requirements}</span>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <span className="text-sm text-red-500">{area.criticalIssues} Critical Issues</span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`progress-bar bg-blue-500`}
                        style={{ width: `${Math.round((area.completed / area.requirements) * 100)}%` }}
                      />
                    </div>
                    <div className="mt-2 flex justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Completed: {area.completed}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Timer className="h-4 w-4 text-yellow-500" />
                        <span>In Progress: {area.inProgress}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertCircle className="h-4 w-4 text-gray-400" />
                        <span>Not Started: {area.notStarted}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.keyAreas.map((keyArea, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                          {keyArea}
                        </span>
                      ))}
                    </div>
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
            <AlertTriangle className="h-6 w-6 text-orange-500" />
            Risk Assessment Matrix
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskMatrix.map((risk, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <span className="font-bold">{risk.risk}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-sm ${getLikelihoodColor(getLikelihoodValue(risk.likelihood))}`}>
                        Likelihood: {risk.likelihood}
                      </span>
                      <span className={`px-2 py-1 rounded text-sm ${getImpactColor(getImpactValue(risk.impact))}`}>
                        Impact: {risk.impact}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">Priority {risk.priority}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Affected Users:</span> {risk.affected}
                  </div>
                  <div>
                    <span className="font-semibold">Mitigation:</span> {risk.mitigation}
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

export default ComplianceRiskTracker;