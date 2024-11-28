import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Clock, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const RemediationTimeline = () => {
  const phases = [
    {
      title: 'Initial Assessment',
      duration: '2-3 weeks',
      activities: [
        { role: 'Auditor', task: 'Automated testing', dependencies: [] },
        { role: 'Auditor', task: 'Manual testing', dependencies: [] },
        { role: 'Auditor', task: 'Documentation review', dependencies: [] }
      ],
      deliverables: [
        'Comprehensive audit report',
        'WCAG violation inventory',
        'Priority assessment'
      ]
    },
    {
      title: 'Planning & Design Updates',
      duration: '3-4 weeks',
      activities: [
        { role: 'UX Designer', task: 'Interaction pattern updates', dependencies: ['Initial Assessment'] },
        { role: 'Visual Designer', task: 'Color contrast fixes', dependencies: ['Initial Assessment'] },
        { role: 'Content Author', task: 'Alt text review', dependencies: ['Initial Assessment'] }
      ],
      deliverables: [
        'Updated design specifications',
        'New content guidelines',
        'Technical requirements'
      ]
    },
    {
      title: 'Development',
      duration: '4-8 weeks',
      activities: [
        { role: 'Developer', task: 'Semantic HTML updates', dependencies: ['Planning & Design Updates'] },
        { role: 'Developer', task: 'ARIA implementation', dependencies: ['Planning & Design Updates'] },
        { role: 'Developer', task: 'Keyboard navigation fixes', dependencies: ['Planning & Design Updates'] }
      ],
      deliverables: [
        'Code updates',
        'Unit test updates',
        'Documentation updates'
      ]
    },
    {
      title: 'Testing & Validation',
      duration: '2-3 weeks',
      activities: [
        { role: 'QA', task: 'Regression testing', dependencies: ['Development'] },
        { role: 'Auditor', task: 'Accessibility retesting', dependencies: ['Development'] },
        { role: 'All Teams', task: 'Issue resolution', dependencies: ['Development'] }
      ],
      deliverables: [
        'Updated compliance report',
        'Test documentation',
        'Remaining issues list'
      ]
    },
    {
      title: 'Final Remediation',
      duration: '2-4 weeks',
      activities: [
        { role: 'All Teams', task: 'Address remaining issues', dependencies: ['Testing & Validation'] },
        { role: 'Auditor', task: 'Final compliance verification', dependencies: ['Testing & Validation'] },
        { role: 'PM', task: 'Documentation finalization', dependencies: ['Testing & Validation'] }
      ],
      deliverables: [
        'Final compliance documentation',
        'Training materials',
        'Maintenance plan'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-blue-500" />
            Accessibility Remediation Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-48 flex-shrink-0">
                    <h3 className="font-bold text-lg text-blue-700">{phase.title}</h3>
                    <p className="text-sm text-gray-600">{phase.duration}</p>
                  </div>
                  <div className="flex-grow border rounded-lg p-4 bg-gray-50">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Activities</h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <AlertCircle className="h-4 w-4 mt-0.5 text-orange-500 flex-shrink-0" />
                              <span>{activity.task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Deliverables</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {index < phases.length - 1 && (
                  <div className="absolute left-24 -bottom-6 text-gray-400">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Role Intersections & Dependencies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold mb-3">Critical Intersections</h3>
              <ul className="space-y-2">
                <li className="text-sm">• UX Design ↔ Development: Interaction patterns</li>
                <li className="text-sm">• Visual Design ↔ Development: CSS implementation</li>
                <li className="text-sm">• Content ↔ Development: ARIA labels & descriptions</li>
                <li className="text-sm">• Testing ↔ All Roles: Validation cycles</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold mb-3">Common Bottlenecks</h3>
              <ul className="space-y-2">
                <li className="text-sm">• Design changes requiring development rework</li>
                <li className="text-sm">• Content updates affecting layout</li>
                <li className="text-sm">• Testing revealing cross-role issues</li>
                <li className="text-sm">• Final validation requiring multiple role inputs</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RemediationTimeline;