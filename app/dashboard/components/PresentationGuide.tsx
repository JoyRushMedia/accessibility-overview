import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { 
  BookOpen, 
  Presentation, 
  Users, 
  FileSpreadsheet, 
  Mail, 
  CheckCircle2,
  Settings
} from 'lucide-react';

interface Step {
  title: string;
  items: string[];
  purpose: string;
}

interface Phase {
  phase: string;
  icon: React.ComponentType<{ className?: string }>;
  steps: Step[];
}

const PresentationGuide = () => {
  const presentationFlow: Phase[] = [
    {
      phase: "1. Document Assembly",
      icon: FileSpreadsheet,
      steps: [
        {
          title: "Introduction Materials",
          items: [
            "Accessibility Implementation Overview dashboard",
            "Complexity Map visualization",
            "Role Requirements breakdown"
          ],
          purpose: "Sets the stage and demonstrates scope"
        },
        {
          title: "Technical Requirements",
          items: [
            "WCAG Requirements Distribution",
            "Testing Requirements visualization",
            "Implementation Timeline"
          ],
          purpose: "Shows technical depth and complexity"
        },
        {
          title: "Business Case",
          items: [
            "Stakeholder Impact & ROI Analysis",
            "Risk Assessment Matrix",
            "Professional vs. Volunteer Testing comparison"
          ],
          purpose: "Demonstrates value and importance"
        }
      ]
    },
    {
      phase: "2. Presentation Structure",
      icon: Presentation,
      steps: [
        {
          title: "Executive Summary",
          items: [
            "Key findings and recommendations",
            "Critical timeline requirements",
            "Resource needs overview"
          ],
          purpose: "Quick understanding for decision makers"
        },
        {
          title: "Detailed Analysis",
          items: [
            "Technical requirements breakdown",
            "Testing methodology explanation",
            "Risk mitigation strategies"
          ],
          purpose: "In-depth understanding for technical teams"
        },
        {
          title: "Action Items",
          items: [
            "Recommended next steps",
            "Resource allocation needs",
            "Timeline adjustments"
          ],
          purpose: "Clear path forward"
        }
      ]
    },
    {
      phase: "3. Audience-Specific Packages",
      icon: Users,
      steps: [
        {
          title: "Procurement Team",
          items: [
            "Vendor Testing Requirements",
            "Timeline Considerations",
            "Professional Testing Justification"
          ],
          purpose: "Timeline and resource planning"
        },
        {
          title: "Technical Teams",
          items: [
            "Implementation Requirements",
            "Testing Methodology",
            "Technical Dependencies"
          ],
          purpose: "Technical planning and execution"
        },
        {
          title: "Business Stakeholders",
          items: [
            "ROI Analysis",
            "Risk Assessment",
            "Resource Requirements"
          ],
          purpose: "Business decision support"
        }
      ]
    },
    {
      phase: "4. Communication Strategy",
      icon: Mail,
      steps: [
        {
          title: "Initial Presentation",
          items: [
            "Executive overview",
            "Key visualizations",
            "Critical requirements"
          ],
          purpose: "Set expectations and requirements"
        },
        {
          title: "Follow-up Documentation",
          items: [
            "Detailed specifications",
            "Resource plans",
            "Timeline requirements"
          ],
          purpose: "Support implementation planning"
        },
        {
          title: "Ongoing Updates",
          items: [
            "Progress tracking",
            "Risk updates",
            "Timeline adjustments"
          ],
          purpose: "Maintain alignment and support"
        }
      ]
    }
  ];

  const practicalTips = [
    {
      category: "Document Preparation",
      tips: [
        "Convert visualizations to high-resolution images",
        "Create printer-friendly versions",
        "Prepare accessible document versions",
        "Include source data references"
      ]
    },
    {
      category: "Presentation Delivery",
      tips: [
        "Start with the big picture before details",
        "Use real examples to illustrate points",
        "Anticipate common questions",
        "Prepare specific examples for each audience"
      ]
    },
    {
      category: "Follow-up Actions",
      tips: [
        "Provide editable versions of timelines",
        "Include resource calculation spreadsheets",
        "Create action item templates",
        "Develop progress tracking tools"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-500" />
            Implementation Guide Assembly
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {presentationFlow.map((phase, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <phase.icon className="h-6 w-6 text-blue-500" />
                  <h3 className="font-bold text-lg">{phase.phase}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {phase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <ul className="space-y-2 mb-3">
                        {step.items.map((item, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        <span className="font-semibold">Purpose:</span> {step.purpose}
                      </p>
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
          <CardTitle>Practical Implementation Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {practicalTips.map((section, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-bold mb-3">{section.category}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <Settings className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                      {tip}
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

export default PresentationGuide;