import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Clock, ArrowRight, AlertCircle, CheckCircle2, Users, Code, FileSearch, Settings } from 'lucide-react';

const ImplementationTimeline = () => {
  const phases = [
    {
      phase: "Initial Assessment",
      duration: "4-6 weeks",
      activities: [
        {
          name: "Automated Testing",
          owner: "Accessibility Team",
          deliverables: ["Initial scan results", "Critical issues list"],
          dependencies: []
        },
        {
          name: "Manual Testing",
          owner: "Accessibility Specialists",
          deliverables: ["Detailed audit report", "WCAG compliance gaps"],
          dependencies: ["Automated Testing"]
        },
        {
          name: "User Testing",
          owner: "UX Research",
          deliverables: ["User feedback", "Priority issues"],
          dependencies: ["Automated Testing"]
        }
      ]
    },
    {
      phase: "Planning & Design",
      duration: "6-8 weeks",
      activities: [
        {
          name: "Design System Updates",
          owner: "Design Team",
          deliverables: ["Accessible components", "Color system", "Typography"],
          dependencies: ["Initial Assessment"]
        },
        {
          name: "Content Strategy",
          owner: "Content Team",
          deliverables: ["Alt text guidelines", "Heading hierarchy", "Plain language guide"],
          dependencies: ["Initial Assessment"]
        },
        {
          name: "Technical Planning",
          owner: "Development Team",
          deliverables: ["Implementation plan", "Resource allocation", "Timeline"],
          dependencies: ["Design System Updates"]
        }
      ]
    },
    {
      phase: "Implementation",
      duration: "12-16 weeks",
      activities: [
        {
          name: "Component Updates",
          owner: "Development Team",
          deliverables: ["ARIA implementation", "Keyboard navigation", "Screen reader support"],
          dependencies: ["Technical Planning"]
        },
        {
          name: "Content Updates",
          owner: "Content Team",
          deliverables: ["Alt text implementation", "Heading structure", "Error messages"],
          dependencies: ["Content Strategy"]
        },
        {
          name: "QA Testing",
          owner: "QA Team",
          deliverables: ["Test cases", "Bug reports", "Regression testing"],
          dependencies: ["Component Updates", "Content Updates"]
        }
      ]
    },
    {
      phase: "Validation",
      duration: "4-6 weeks",
      activities: [
        {
          name: "Professional Testing",
          owner: "Accessibility Specialists",
          deliverables: ["Compliance verification", "Final audit report"],
          dependencies: ["Implementation"]
        },
        {
          name: "User Validation",
          owner: "UX Research",
          deliverables: ["User testing results", "Satisfaction metrics"],
          dependencies: ["Professional Testing"]
        },
        {
          name: "Documentation",
          owner: "All Teams",
          deliverables: ["Compliance documentation", "Maintenance guidelines"],
          dependencies: ["Professional Testing", "User Validation"]
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Implementation Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className={`border-2 rounded-lg p-4 border-base-300 bg-base-200`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-base-content">{phase.phase}</h3>
                    <p className="text-sm text-base-content/60">Duration: {phase.duration}</p>
                  </div>
                  {phaseIndex < phases.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-base-content/40" />
                  )}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {phase.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="border border-base-300 rounded-lg p-3 bg-base-100">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-base-content">{activity.name}</h4>
                        <span className="text-xs text-base-content/60">{activity.owner}</span>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <h5 className="text-xs font-semibold mb-1 text-base-content">Deliverables:</h5>
                          <ul className="space-y-1">
                            {activity.deliverables.map((del, i) => (
                              <li key={i} className="text-xs flex items-start gap-1">
                                <CheckCircle2 className="h-3 w-3 mt-0.5 text-success flex-shrink-0" />
                                <span className="text-base-content/70">{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {activity.dependencies.length > 0 && (
                          <div>
                            <h5 className="text-xs font-semibold mb-1 text-base-content">Dependencies:</h5>
                            <ul className="space-y-1">
                              {activity.dependencies.map((dep, i) => (
                                <li key={i} className="text-xs flex items-start gap-1">
                                  <AlertCircle className="h-3 w-3 mt-0.5 text-warning flex-shrink-0" />
                                  <span className="text-base-content/70">{dep}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
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
          <CardTitle>Resource Requirements by Phase</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-base-300 rounded-lg p-4">
              <h3 className="font-bold mb-3 text-base-content">Team Allocation</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span className="text-sm text-base-content">Accessibility Specialists</span>
                  <span className="text-sm font-medium text-base-content">40-60 hours/week</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm text-base-content">Developers</span>
                  <span className="text-sm font-medium text-base-content">80-120 hours/week</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm text-base-content">Designers</span>
                  <span className="text-sm font-medium text-base-content">40-60 hours/week</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm text-base-content">Content Team</span>
                  <span className="text-sm font-medium text-base-content">20-40 hours/week</span>
                </li>
              </ul>
            </div>
            <div className="border border-base-300 rounded-lg p-4">
              <h3 className="font-bold mb-3 text-base-content">Critical Success Factors</h3>
              <ul className="space-y-2">
                <li className="text-sm flex items-start gap-2">
                  <Users className="h-4 w-4 mt-0.5 text-primary" />
                  <span className="text-base-content/70">Dedicated accessibility team</span>
                </li>
                <li className="text-sm flex items-start gap-2">
                  <Code className="h-4 w-4 mt-0.5 text-primary" />
                  <span className="text-base-content/70">Proper development resources</span>
                </li>
                <li className="text-sm flex items-start gap-2">
                  <FileSearch className="h-4 w-4 mt-0.5 text-primary" />
                  <span className="text-base-content/70">Regular testing and validation</span>
                </li>
                <li className="text-sm flex items-start gap-2">
                  <Settings className="h-4 w-4 mt-0.5 text-primary" />
                  <span className="text-base-content/70">Clear governance model</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImplementationTimeline;