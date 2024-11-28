"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  CheckCircle2,
  Scale,
  Award,
  BarChart,
} from 'lucide-react';



const BusinessImpact = () => {
  const financialImpact = [
    {
      category: "Cost Prevention",
      current: {
        title: "Current Risk Exposure",
        items: [
          {
            impact: "Legal Settlements",
            cost: "$10,000 - $100,000+ per case",
            description: "Recent accessibility lawsuits average settlements"
          },
          {
            impact: "Emergency Remediation",
            cost: "2-3x normal implementation",
            description: "Rush accessibility fixes after complaints"
          },
          {
            impact: "Brand Damage",
            cost: "5-15% potential revenue impact",
            description: "Lost business from negative publicity"
          },
          {
            impact: "Lost Opportunities",
            cost: "15-20% market segment",
            description: "Inaccessible products exclude user segments"
          }
        ]
      },
      prevention: {
        title: "Prevention Benefits",
        items: [
          {
            benefit: "Reduced Legal Risk",
            value: "90% reduction in exposure",
            description: "Professional implementation prevents most issues"
          },
          {
            benefit: "Efficient Implementation",
            value: "40-60% cost savings",
            description: "Planned vs. emergency remediation"
          },
          {
            benefit: "Market Protection",
            value: "15% revenue protection",
            description: "Maintains market access and reputation"
          },
          {
            benefit: "New Opportunities",
            value: "20%+ market expansion",
            description: "Access to government contracts and new segments"
          }
        ]
      }
    }
  ];

  const marketImpact = {
    segments: [
      {
        title: "People with Disabilities",
        size: "1.3 billion globally",
        spending: "$1.2 trillion annual spending power",
        impact: "Direct market access",
        requirements: [
          "Full product accessibility",
          "Support for assistive technologies",
          "Clear accessibility documentation",
          "Accessible customer service"
        ]
      },
      {
        title: "Aging Population",
        size: "Growing demographic",
        spending: "$15 trillion global silver economy",
        impact: "Expanding market",
        requirements: [
          "Easy-to-read interfaces",
          "Adjustable text sizes",
          "High contrast options",
          "Simple navigation"
        ]
      },
      {
        title: "Corporate Partners",
        size: "Enterprise market",
        spending: "Significant B2B opportunity",
        impact: "Partnership qualification",
        requirements: [
          "DEI compliance",
          "Accessibility certification",
          "Integration capabilities",
          "Support documentation"
        ]
      }
    ]
  };

  const competitiveAdvantages = [
    {
      category: "Market Position",
      advantages: [
        "First-mover advantage in accessibility",
        "Competitive differentiation",
        "Market leader reputation",
        "Enhanced brand value"
      ]
    },
    {
      category: "Product Quality",
      advantages: [
        "Improved user experience",
        "Better code quality",
        "Reduced maintenance costs",
        "Increased innovation"
      ]
    },
    {
      category: "Customer Relations",
      advantages: [
        "Broader customer base",
        "Improved customer satisfaction",
        "Positive brand association",
        "Community goodwill"
      ]
    },
    {
      category: "Business Operations",
      advantages: [
        "Reduced legal risk",
        "Streamlined development",
        "Improved documentation",
        "Better testing processes"
      ]
    }
  ];

  const implementationROI = {
    costs: [
      {
        category: "Initial Investment",
        items: [
          "Professional accessibility audit",
          "Staff training and certification",
          "Tool and resource acquisition",
          "Process development"
        ],
        typical: "$50,000 - $150,000"
      },
      {
        category: "Ongoing Maintenance",
        items: [
          "Regular testing and monitoring",
          "Continuous staff training",
          "Tool subscriptions",
          "Documentation updates"
        ],
        typical: "$30,000 - $80,000/year"
      }
    ],
    returns: [
      {
        category: "Direct Returns",
        items: [
          "Market expansion revenue",
          "Reduced legal exposure",
          "Government contract eligibility",
          "Reduced support costs"
        ],
        typical: "2-4x investment first year"
      },
      {
        category: "Indirect Benefits",
        items: [
          "Enhanced brand value",
          "Improved user satisfaction",
          "Better code quality",
          "Innovation advantages"
        ],
        typical: "Long-term value multiplier"
      }
    ]
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-blue-500" />
            Financial Impact Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          {financialImpact.map((section, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-4">{section.current.title}</h3>
                <div className="space-y-4">
                  {section.current.items.map((item, i) => (
                    <div key={i} className="bg-red-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-red-700">{item.impact}</span>
                        <span className="text-red-700">{item.cost}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-4">{section.prevention.title}</h3>
                <div className="space-y-4">
                  {section.prevention.items.map((item, i) => (
                    <div key={i} className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-green-700">{item.benefit}</span>
                        <span className="text-green-700">{item.value}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-500" />
            Market Impact Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {marketImpact.segments.map((segment, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold">{segment.title}</h3>
                  <span className="text-blue-600 font-semibold">{segment.size}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{segment.spending}</p>
                <p className="text-sm font-medium mb-2">{segment.impact}</p>
                <ul className="space-y-1">
                  {segment.requirements.map((req, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-500" />
            Competitive Advantages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            {competitiveAdvantages.map((section, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-bold mb-3">{section.category}</h3>
                <ul className="space-y-2">
                  {section.advantages.map((advantage, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <Award className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart className="h-6 w-6 text-blue-500" />
            Implementation ROI
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold">Investment Required</h3>
              {implementationROI.costs.map((cost, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{cost.category}</h4>
                    <span className="text-gray-600">{cost.typical}</span>
                  </div>
                  <ul className="space-y-1">
                    {cost.items.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <DollarSign className="h-4 w-4 mt-0.5 text-orange-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Expected Returns</h3>
              {implementationROI.returns.map((return_, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{return_.category}</h4>
                    <span className="text-green-600">{return_.typical}</span>
                  </div>
                  <ul className="space-y-1">
                    {return_.items.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessImpact;