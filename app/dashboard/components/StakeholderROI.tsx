import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Users, DollarSign, TrendingUp, ShieldCheck, UserCheck, AlertCircle } from 'lucide-react';

const StakeholderROI = () => {
  const stakeholders = [
    {
      group: "End Users with Disabilities",
      impact: "Critical",
      needs: [
        "Screen reader compatibility",
        "Keyboard navigation",
        "Color contrast compliance",
        "Clear error identification"
      ],
      benefits: [
        "Equal access to information",
        "Independent task completion",
        "Reduced frustration",
        "Improved user experience"
      ]
    },
    {
      group: "Business Stakeholders",
      impact: "High",
      needs: [
        "Legal compliance",
        "Market expansion",
        "Brand reputation",
        "Risk mitigation"
      ],
      benefits: [
        "Reduced legal risk",
        "Increased market share",
        "Enhanced brand image",
        "Competitive advantage"
      ]
    },
    {
      group: "Development Team",
      impact: "High",
      needs: [
        "Clear requirements",
        "Testing tools",
        "Implementation guidelines",
        "Expert support"
      ],
      benefits: [
        "Structured approach",
        "Reduced rework",
        "Improved code quality",
        "Better documentation"
      ]
    },
    {
      group: "Content Team",
      impact: "Medium",
      needs: [
        "Accessibility guidelines",
        "Alt text standards",
        "Content structure rules",
        "Validation tools"
      ],
      benefits: [
        "Streamlined workflow",
        "Consistent quality",
        "Better organization",
        "Reduced errors"
      ]
    }
  ];

  const roiMetrics = {
    preventionComparison: [
      {
        approach: "Professional Implementation",
        initialCost: "Higher",
        ongoingCost: "Lower",
        benefits: [
          "Reduced legal risk",
          "Lower maintenance costs",
          "Fewer emergency fixes",
          "Better user satisfaction"
        ]
      },
      {
        approach: "Reactive Fixes",
        initialCost: "Lower",
        ongoingCost: "Higher",
        risks: [
          "Legal exposure",
          "Emergency remediation costs",
          "Brand damage",
          "Lost market opportunity"
        ]
      }
    ],
    businessMetrics: [
      {
        metric: "Market Reach",
        improvement: "+15-20%",
        details: "Increased accessible user base"
      },
      {
        metric: "User Satisfaction",
        improvement: "+25-30%",
        details: "Improved experience for all users"
      },
      {
        metric: "Development Efficiency",
        improvement: "+20-25%",
        details: "Reduced rework and maintenance"
      },
      {
        metric: "Legal Risk Reduction",
        improvement: "+40-50%",
        details: "Decreased compliance issues"
      }
    ]
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-500" />
            Stakeholder Impact Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {stakeholders.map((stakeholder, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{stakeholder.group}</h3>
                  <span className={`px-2 py-1 rounded text-sm ${getImpactColor(stakeholder.impact)}`}>
                    {stakeholder.impact} Impact
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Needs:</h4>
                    <ul className="space-y-1">
                      {stakeholder.needs.map((need, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <UserCheck className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Benefits:</h4>
                    <ul className="space-y-1">
                      {stakeholder.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                          {benefit}
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
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-500" />
            ROI Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4">Implementation Approach Comparison</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {roiMetrics.preventionComparison.map((approach, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">{approach.approach}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Initial Cost:</span>
                        <span className="text-sm font-medium">{approach.initialCost}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Ongoing Cost:</span>
                        <span className="text-sm font-medium">{approach.ongoingCost}</span>
                      </div>
                      <div className="mt-4">
                        <h5 className="text-sm font-semibold mb-2">
                          {approach.benefits ? 'Benefits:' : 'Risks:'}
                        </h5>
                        <ul className="space-y-1">
                          {(approach.benefits || approach.risks).map((item, i) => (
                            <li key={i} className="text-sm flex items-start gap-2">
                              {approach.benefits ? (
                                <ShieldCheck className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                              ) : (
                                <AlertCircle className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
                              )}
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4">Business Impact Metrics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {roiMetrics.businessMetrics.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{item.metric}</h4>
                      <span className="text-green-600 font-bold">{item.improvement}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StakeholderROI;