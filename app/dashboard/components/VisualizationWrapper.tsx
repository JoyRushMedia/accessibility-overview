import React from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Info } from 'lucide-react';

const visualizationInfo: Record<string, {
  title: string;
  description: string;
  keyPoints: string[];
  audience: string;
}> = {
  "accessibility-complexity": {
    "title": "WCAG Requirements Distribution",
    "description": "This visualization maps out WCAG success criteria across different roles and implementation areas.",
    "keyPoints": [
      "Shows role-specific requirements",
      "Maps implementation responsibilities",
      "Identifies cross-functional needs",
      "Highlights critical criteria"
    ],
    "audience": "Development teams, designers, and content creators implementing WCAG requirements."
  },
  "implementation-timeline": {
    "title": "Implementation Planning Guide",
    "description": "Comprehensive timeline and resource planning for accessibility implementation.",
    "keyPoints": [
      "Detailed phase breakdown",
      "Resource allocation guidance",
      "Timeline estimates",
      "Critical path identification"
    ],
    "audience": "Project managers and team leads planning accessibility implementation."
  },
  "procurement-testing": {
    "title": "Procurement & Testing Guide",
    "description": "Comprehensive guidance for procurement teams managing accessibility requirements and vendor relationships.",
    "keyPoints": [
      "Testing timeline requirements",
      "Vendor evaluation criteria",
      "Contract considerations",
      "Best practices & red flags"
    ],
    "audience": "Procurement teams, contract managers, and accessibility coordinators."
  },
  "stakeholder-roi": {
    "title": "Market Impact & ROI Analysis",
    "description": "Detailed analysis of market opportunities, financial benefits, and return on investment for accessibility implementation.",
    "keyPoints": [
      "Market opportunity analysis",
      "Financial ROI calculations",
      "User impact metrics",
      "Competitive advantages"
    ],
    "audience": "Business stakeholders evaluating market potential and investment returns."
  },
  "business-compliance": {
    "title": "Business Strategy & Compliance",
    "description": "Comprehensive analysis of business impact, ROI, and compliance tracking for accessibility implementation.",
    "keyPoints": [
      "Business impact assessment",
      "Risk assessment metrics",
      "Compliance tracking",
      "Strategic planning guidance"
    ],
    "audience": "Business leaders and compliance officers managing accessibility initiatives."
  },
  "integration-dashboard": {
    "title": "Role Requirements & Resources",
    "description": "Detailed breakdown of role-specific responsibilities and required resources.",
    "keyPoints": [
      "Role-specific requirements",
      "Required tools and skills",
      "Training recommendations",
      "Resource allocation guidance"
    ],
    "audience": "Team leads and HR planning accessibility roles and responsibilities."
  }
};

interface VisualizationWrapperProps {
  visualizationId: string;
  children?: React.ReactNode;
}

const VisualizationWrapper: React.FC<VisualizationWrapperProps> = ({ visualizationId, children }) => {
  const info = visualizationInfo[visualizationId];

  if (!info) return children;

  return (
    <div className="space-y-6">
      <Card className="bg-base-200 border border-base-300">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold mb-3 text-base-content">{info.title}</h2>
              <p className="text-base-content/70 mb-4">{info.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-sm text-primary">Key Points:</h3>
                  <ul className="space-y-1">
                    {info.keyPoints.map((point, index) => (
                      <li key={index} className="text-sm text-base-content/70">• {point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm text-primary">Target Audience:</h3>
                  <p className="text-sm text-base-content/70">{info.audience}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {children}
    </div>
  );
};

export default VisualizationWrapper;