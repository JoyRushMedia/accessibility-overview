import React from 'react';
import { Info, Users, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import type { WCAGItem, RoleDefinition, WCAGDescription } from '../../../types/wcag';
import * as Tooltip from '@radix-ui/react-tooltip';

// Add descriptions for WCAG criteria
const wcagDescriptions: Record<string, WCAGDescription> = {
  '1.1.1': {
    title: 'Non-text Content',
    description: 'All non-text content has a text alternative that serves the equivalent purpose.'
  },
  '1.2.1': {
    title: 'Audio-only and Video-only (Prerecorded)',
    description: 'Provide alternatives for time-based media.'
  },
  '1.2.2': {
    title: 'Captions (Prerecorded)',
    description: 'Captions are provided for all prerecorded audio content in synchronized media.'
  },
  '1.2.3': {
    title: 'Audio Description or Media Alternative',
    description: 'Alternative for time-based media or audio description provided.'
  },
  '1.2.4': {
    title: 'Captions (Live)',
    description: 'Captions are provided for all live audio content in synchronized media.'
  },
  '1.2.5': {
    title: 'Audio Description',
    description: 'Audio description is provided for all prerecorded video content.'
  },
  '1.2.6': {
    title: 'Sign Language',
    description: 'Sign language interpretation for all prerecorded audio content.'
  },
  '1.2.7': {
    title: 'Extended Audio Description',
    description: 'Extended audio description for all prerecorded video content.'
  },
  '1.2.8': {
    title: 'Media Alternative',
    description: 'Alternative for all prerecorded time-based media.'
  },
  '1.2.9': {
    title: 'Audio-only (Live)',
    description: 'Alternative for live audio-only content.'
  },
  '1.3.1': {
    title: 'Info and Relationships',
    description: 'Information, structure, and relationships can be programmatically determined.'
  },
  '1.3.2': {
    title: 'Meaningful Sequence',
    description: 'Correct reading sequence can be programmatically determined.'
  },
  '1.3.3': {
    title: 'Sensory Characteristics',
    description: 'Instructions don\'t rely solely on sensory characteristics.'
  },
  '1.3.4': {
    title: 'Orientation',
    description: 'Content not restricted to single display orientation.'
  },
  '1.3.5': {
    title: 'Identify Input Purpose',
    description: 'Input purpose can be programmatically determined.'
  },
  '1.3.6': {
    title: 'Identify Purpose',
    description: 'Purpose of UI components can be programmatically determined.'
  },
  '1.4.1': {
    title: 'Use of Color',
    description: 'Color is not used as the only visual means of conveying information.'
  },
  '1.4.2': {
    title: 'Audio Control',
    description: 'Mechanism available to pause or stop audio.'
  },
  '1.4.3': {
    title: 'Contrast (Minimum)',
    description: 'Text has sufficient color contrast.'
  },
  '1.4.4': {
    title: 'Resize Text',
    description: 'Text can be resized without loss of functionality.'
  },
  '1.4.5': {
    title: 'Images of Text',
    description: 'Text is used instead of images of text where possible.'
  },
  '1.4.6': {
    title: 'Contrast (Enhanced)',
    description: 'Enhanced contrast for text and images.'
  },
  '1.4.7': {
    title: 'Low or No Background Audio',
    description: 'Audio is clear for listeners to hear.'
  },
  '1.4.8': {
    title: 'Visual Presentation',
    description: 'Flexible options for text presentation.'
  },
  '1.4.9': {
    title: 'Images of Text (No Exception)',
    description: 'Images of text used only for decoration.'
  },
  '1.4.10': {
    title: 'Reflow',
    description: 'Content can reflow without loss of functionality.'
  },
  '1.4.11': {
    title: 'Non-text Contrast',
    description: 'Visual elements have sufficient contrast.'
  },
  '1.4.12': {
    title: 'Text Spacing',
    description: 'No loss of content with text spacing adjustments.'
  },
  '1.4.13': {
    title: 'Content on Hover or Focus',
    description: 'Additional content on hover/focus is controllable.'
  },
  '2.1.1': {
    title: 'Keyboard',
    description: 'All functionality available from keyboard.'
  },
  '2.1.2': {
    title: 'No Keyboard Trap',
    description: 'Keyboard focus is not trapped.'
  },
  '2.1.3': {
    title: 'Keyboard (No Exception)',
    description: 'All functionality available from keyboard without exception.'
  },
  '2.1.4': {
    title: 'Character Key Shortcuts',
    description: 'Character key shortcuts can be turned off or remapped.'
  },
  '2.2.1': {
    title: 'Timing Adjustable',
    description: 'Time limits can be adjusted.'
  },
  '2.2.2': {
    title: 'Pause, Stop, Hide',
    description: 'Moving content can be paused, stopped, or hidden.'
  },
  '2.2.3': {
    title: 'No Timing',
    description: 'No time limits on interactions.'
  },
  '2.2.4': {
    title: 'Interruptions',
    description: 'Interruptions can be postponed or suppressed.'
  },
  '2.2.5': {
    title: 'Re-authenticating',
    description: 'Data preserved when re-authenticating.'
  },
  '2.2.6': {
    title: 'Timeouts',
    description: 'Users warned of timeout that could cause data loss.'
  },
  '2.3.1': {
    title: 'Three Flashes or Below',
    description: 'No content flashes more than three times per second.'
  },
  '2.3.2': {
    title: 'Three Flashes',
    description: 'No content flashes more than three times per second.'
  },
  '2.3.3': {
    title: 'Animation from Interactions',
    description: 'Motion animation can be disabled.'
  },
  '2.4.1': {
    title: 'Bypass Blocks',
    description: 'Mechanism available to bypass blocks of content.'
  },
  '2.4.2': {
    title: 'Page Titled',
    description: 'Pages have titles that describe topic or purpose.'
  },
  '2.4.3': {
    title: 'Focus Order',
    description: 'Focus order preserves meaning and operability.'
  },
  '2.4.4': {
    title: 'Link Purpose (In Context)',
    description: 'Link purpose can be determined from text.'
  },
  '2.4.5': {
    title: 'Multiple Ways',
    description: 'Multiple ways available to find pages.'
  },
  '2.4.6': {
    title: 'Headings and Labels',
    description: 'Headings and labels describe topic or purpose.'
  },
  '2.4.7': {
    title: 'Focus Visible',
    description: 'Keyboard focus indicator is visible.'
  },
  '2.4.8': {
    title: 'Location',
    description: 'Information about user\'s location within site available.'
  },
  '2.4.9': {
    title: 'Link Purpose (Link Only)',
    description: 'Link purpose can be determined from link text alone.'
  },
  '2.4.10': {
    title: 'Section Headings',
    description: 'Section headings used to organize content.'
  },
  '2.5.1': {
    title: 'Pointer Gestures',
    description: 'Complex gestures have simpler alternatives.'
  },
  '2.5.2': {
    title: 'Pointer Cancellation',
    description: 'Functions completed on up-event can be aborted.'
  },
  '2.5.3': {
    title: 'Label in Name',
    description: 'Visual labels match accessible names.'
  },
  '2.5.4': {
    title: 'Motion Actuation',
    description: 'Functions triggered by motion have alternatives.'
  },
  '2.5.5': {
    title: 'Target Size',
    description: 'Target size is at least 44 by 44 CSS pixels.'
  },
  '2.5.6': {
    title: 'Concurrent Input Mechanisms',
    description: 'Content works with different input methods.'
  },
  '3.1.1': {
    title: 'Language of Page',
    description: 'Default human language can be programmatically determined.'
  },
  '3.1.2': {
    title: 'Language of Parts',
    description: 'Language of parts can be programmatically determined.'
  },
  '3.1.3': {
    title: 'Unusual Words',
    description: 'Mechanism available for unusual words.'
  },
  '3.1.4': {
    title: 'Abbreviations',
    description: 'Mechanism available to expand abbreviations.'
  },
  '3.1.5': {
    title: 'Reading Level',
    description: 'Supplemental content for complex text.'
  },
  '3.1.6': {
    title: 'Pronunciation',
    description: 'Mechanism available for pronunciation.'
  },
  '3.2.1': {
    title: 'On Focus',
    description: 'Focus doesn\'t trigger significant changes.'
  },
  '3.2.2': {
    title: 'On Input',
    description: 'Input doesn\'t trigger significant changes.'
  },
  '3.2.3': {
    title: 'Consistent Navigation',
    description: 'Navigation mechanisms are consistent.'
  },
  '3.2.4': {
    title: 'Consistent Identification',
    description: 'Components with same functionality consistently identified.'
  },
  '3.2.5': {
    title: 'Change on Request',
    description: 'Changes of context are initiated by user.'
  },
  '3.3.1': {
    title: 'Error Identification',
    description: 'Errors are clearly identified.'
  },
  '3.3.2': {
    title: 'Labels or Instructions',
    description: 'Labels or instructions provided for user input.'
  },
  '3.3.3': {
    title: 'Error Suggestion',
    description: 'Error suggestions provided when known.'
  },
  '3.3.4': {
    title: 'Error Prevention',
    description: 'Reversible, checked, or confirmed for legal commitments.'
  },
  '3.3.5': {
    title: 'Help',
    description: 'Context-sensitive help is available.'
  },
  '3.3.6': {
    title: 'Error Prevention (All)',
    description: 'Reversible, checked, or confirmed for all submissions.'
  },
  '4.1.1': {
    title: 'Parsing',
    description: 'Content can be reliably interpreted.'
  },
  '4.1.2': {
    title: 'Name, Role, Value',
    description: 'Name, role, and value available for all UI components.'
  },
  '4.1.3': {
    title: 'Status Messages',
    description: 'Status messages can be programmatically determined.'
  }
};

const WCAGHeatmap = () => {
  // Clear role definitions with comprehensive descriptions
  const roleDefinitions: Record<string, RoleDefinition> = {
    'C': {
      label: 'Content',
      description: 'Content creation and management responsibilities including writing, editing, and structuring content for accessibility.',
      examples: ['Alt text creation', 'Heading structure', 'Clear writing'],
    },
    'P': {
      label: 'Programming',
      description: 'Technical implementation of accessibility features through code and development.',
      examples: ['ARIA implementation', 'Keyboard navigation', 'Screen reader support'],
    },
    'S': {
      label: 'Structure',
      description: 'Information architecture and semantic structure of content and interfaces.',
      examples: ['Document outline', 'Navigation paths', 'Content relationships'],
    },
    'SP': {
      label: 'Support',
      description: 'Documentation, training, and support materials for accessibility features.',
      examples: ['User guides', 'Training materials', 'Support documentation'],
    }
  };

  // Complete WCAG data structure
  const wcagData: WCAGItem[] = [
    // Principle 1: Perceivable
    { criterion: '1.1.1', level: 'A', roles: ['C', 'S', 'P'] },
    { criterion: '1.2.1', level: 'A', roles: ['C', 'SP'] },
    { criterion: '1.2.2', level: 'A', roles: ['C', 'P'] },
    { criterion: '1.2.3', level: 'A', roles: ['C'] },
    { criterion: '1.2.4', level: 'AA', roles: ['C', 'SP'] },
    { criterion: '1.2.5', level: 'AA', roles: ['C', 'P'] },
    { criterion: '1.2.6', level: 'AAA', roles: ['C', 'SP'] },
    { criterion: '1.2.7', level: 'AAA', roles: ['C', 'SP'] },
    { criterion: '1.2.8', level: 'AAA', roles: ['C', 'P'] },
    { criterion: '1.2.9', level: 'AAA', roles: ['C', 'SP'] },
    { criterion: '1.3.1', level: 'A', roles: ['C', 'S', 'P'] },
    { criterion: '1.3.2', level: 'A', roles: ['S', 'SP'] },
    { criterion: '1.3.3', level: 'A', roles: ['C', 'P', 'SP'] },
    { criterion: '1.3.4', level: 'AA', roles: ['SP'] },
    { criterion: '1.3.5', level: 'AA', roles: ['P', 'C'] },
    { criterion: '1.3.6', level: 'AAA', roles: ['C', 'P'] },
    { criterion: '1.4.1', level: 'A', roles: ['S', 'SP'] },
    { criterion: '1.4.2', level: 'A', roles: ['C', 'P'] },
    { criterion: '1.4.3', level: 'AA', roles: ['P'] },
    { criterion: '1.4.4', level: 'AA', roles: ['C', 'SP'] },
    { criterion: '1.4.5', level: 'AA', roles: ['S', 'C', 'SP'] },
    { criterion: '1.4.6', level: 'AAA', roles: ['C', 'P'] },
    { criterion: '1.4.7', level: 'AAA', roles: ['C', 'P'] },
    { criterion: '1.4.8', level: 'AAA', roles: ['C', 'P', 'S'] },
    { criterion: '1.4.9', level: 'AAA', roles: ['SP'] },
    { criterion: '1.4.10', level: 'AA', roles: ['P', 'SP'] },
    { criterion: '1.4.11', level: 'AA', roles: ['P'] },
    { criterion: '1.4.12', level: 'AA', roles: ['P'] },
    { criterion: '1.4.13', level: 'AA', roles: ['P'] },

    // Principle 2: Operable
    { criterion: '2.1.1', level: 'A', roles: ['S', 'P'] },
    { criterion: '2.1.2', level: 'A', roles: ['P'] },
    { criterion: '2.1.3', level: 'AAA', roles: ['P'] },
    { criterion: '2.1.4', level: 'A', roles: ['P'] },
    { criterion: '2.2.1', level: 'A', roles: ['SP'] },
    { criterion: '2.2.2', level: 'A', roles: ['SP'] },
    { criterion: '2.2.3', level: 'AAA', roles: ['SP'] },
    { criterion: '2.2.4', level: 'AAA', roles: ['SP'] },
    { criterion: '2.2.5', level: 'AAA', roles: ['SP'] },
    { criterion: '2.2.6', level: 'AAA', roles: ['SP'] },
    { criterion: '2.3.1', level: 'A', roles: ['P', 'SP'] },
    { criterion: '2.3.2', level: 'AAA', roles: ['P', 'SP'] },
    { criterion: '2.3.3', level: 'AAA', roles: ['P', 'SP'] },
    { criterion: '2.4.1', level: 'A', roles: ['C', 'S', 'SP'] },
    { criterion: '2.4.2', level: 'A', roles: ['C', 'S'] },
    { criterion: '2.4.3', level: 'A', roles: ['S', 'P'] },
    { criterion: '2.4.4', level: 'A', roles: ['C', 'P'] },
    { criterion: '2.4.5', level: 'AA', roles: ['P'] },
    { criterion: '2.4.6', level: 'AA', roles: ['C', 'S'] },
    { criterion: '2.4.7', level: 'AA', roles: ['P', 'SP'] },
    { criterion: '2.4.8', level: 'AAA', roles: ['S'] },
    { criterion: '2.4.9', level: 'AAA', roles: ['C', 'P'] },
    { criterion: '2.4.10', level: 'AAA', roles: ['S'] },
    { criterion: '2.5.1', level: 'A', roles: ['P'] },
    { criterion: '2.5.2', level: 'A', roles: ['P'] },
    { criterion: '2.5.3', level: 'A', roles: ['P'] },
    { criterion: '2.5.4', level: 'A', roles: ['P'] },
    { criterion: '2.5.5', level: 'AAA', roles: ['P'] },
    { criterion: '2.5.6', level: 'AAA', roles: ['P'] },

    // Principle 3: Understandable
    { criterion: '3.1.1', level: 'A', roles: ['C', 'P'] },
    { criterion: '3.1.2', level: 'AA', roles: ['C', 'S'] },
    { criterion: '3.1.3', level: 'AAA', roles: ['C', 'S'] },
    { criterion: '3.1.4', level: 'AAA', roles: ['C', 'S'] },
    { criterion: '3.1.5', level: 'AAA', roles: ['C', 'S'] },
    { criterion: '3.1.6', level: 'AAA', roles: ['C', 'S'] },
    { criterion: '3.2.1', level: 'A', roles: ['P', 'S'] },
    { criterion: '3.2.2', level: 'A', roles: ['P', 'SP'] },
    { criterion: '3.2.3', level: 'AA', roles: ['SP'] },
    { criterion: '3.2.4', level: 'AA', roles: ['C', 'S'] },
    { criterion: '3.2.5', level: 'AAA', roles: ['S'] },
    { criterion: '3.3.1', level: 'A', roles: ['C', 'SP'] },
    { criterion: '3.3.2', level: 'A', roles: ['C', 'P', 'SP'] },
    { criterion: '3.3.3', level: 'AA', roles: ['C', 'SP'] },
    { criterion: '3.3.4', level: 'AA', roles: ['SP', 'C'] },
    { criterion: '3.3.5', level: 'AAA', roles: ['C', 'SP'] },
    { criterion: '3.3.6', level: 'AAA', roles: ['C', 'SP'] },

    // Principle 4: Robust
    { criterion: '4.1.1', level: 'A', roles: ['P'] },
    { criterion: '4.1.2', level: 'A', roles: ['C', 'P'] },
    { criterion: '4.1.3', level: 'AA', roles: ['P', 'SP'] }
  ];

  // Get level styling
  const getLevelStyle = (level: string): string => {
    switch (level) {
      case 'A': return 'bg-red-500 dark:bg-red-600 px-3 py-1 rounded-full text-xs font-semibold text-white';
      case 'AA': return 'bg-yellow-500 dark:bg-yellow-600 px-3 py-1 rounded-full text-xs font-semibold text-white';
      case 'AAA': return 'bg-green-500 dark:bg-green-600 px-3 py-1 rounded-full text-xs font-semibold text-white';
      default: return 'bg-gray-500 dark:bg-gray-600 px-3 py-1 rounded-full text-xs font-semibold text-white';
    }
  };

  const getCheckmarkStyle = (completed: boolean): string => {
    return completed ? 'text-green-500' : 'text-gray-300';
  };

  return (
    <div className="space-y-6">
      {/* Role Definitions Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Role Responsibilities
          </CardTitle>
          <CardDescription>Overview of key responsibilities for each role in implementing WCAG guidelines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(roleDefinitions).map(([code, info]) => (
              <div key={code} className="border rounded-lg p-4 border-base-300 bg-base-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 rounded-full text-sm bg-primary text-primary-content">
                    {code}
                  </span>
                  <h3 className="font-bold text-lg text-base-content">{info.label}</h3>
                </div>
                <p className="text-base-content/70 mb-3">{info.description}</p>
                <div className="bg-base-200 rounded p-3">
                  <h4 className="font-semibold mb-2 text-sm text-base-content">Key Responsibilities:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {info.examples.map((example, i) => (
                      <li key={i} className="text-sm flex items-start gap-2 text-base-content/70">
                        <CheckCircle2 className={`h-4 w-4 mt-0.5 ${getCheckmarkStyle(true)} flex-shrink-0`} />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* WCAG Heatmap Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-6 w-6 text-primary" />
            WCAG Requirements Distribution
          </CardTitle>
          <CardDescription>Distribution of WCAG success criteria across different roles and conformance levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Tooltip.Provider delayDuration={300}>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 border-b border-base-300 font-semibold text-left text-base-content">Criterion</th>
                    <th className="p-3 border-b border-base-300 font-semibold text-left text-base-content">Level</th>
                    {Object.entries(roleDefinitions).map(([code, info]) => (
                      <th key={code} className="p-3 border-b border-base-300 font-semibold text-center">
                        <div className="flex flex-col items-center">
                          <span className="px-2 py-1 rounded-full text-sm bg-primary text-primary-content">
                            {code}
                          </span>
                          <span className="text-xs mt-1 text-base-content/70">{info.label}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {wcagData.map((item, idx) => (
                    <tr 
                      key={idx} 
                      className="hover:bg-base-200 transition-colors"
                    >
                      <td className="p-3 border-b border-r border-base-300 font-medium text-base-content">
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <div className="cursor-help">
                              {item.criterion}
                              {wcagDescriptions[item.criterion] && (
                                <div className="text-xs text-base-content/70">
                                  {wcagDescriptions[item.criterion].title}
                                </div>
                              )}
                            </div>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              className="bg-base-200 px-4 py-3 rounded-lg shadow-lg border border-base-300 max-w-xs z-50"
                              sideOffset={5}
                            >
                              <div className="space-y-2">
                                <div className="font-semibold text-base-content">
                                  {wcagDescriptions[item.criterion]?.title}
                                </div>
                                <div className="text-sm text-base-content/70">
                                  {wcagDescriptions[item.criterion]?.description}
                                </div>
                              </div>
                              <Tooltip.Arrow className="fill-base-200" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </td>
                      <td className="p-3 border-b border-r border-base-300">
                        <span className={getLevelStyle(item.level)}>{item.level}</span>
                      </td>
                      {Object.keys(roleDefinitions).map(role => (
                        <td 
                          key={role} 
                          className="p-3 border-b border-r border-base-300 text-center"
                        >
                          {item.roles.includes(role) && (
                            <CheckCircle2 className={`h-5 w-5 ${getCheckmarkStyle(true)} mx-auto`} />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Tooltip.Provider>
          </div>

          {/* Legend */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/90 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Conformance Levels</h3>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded text-sm bg-red-600 dark:bg-red-500 text-white font-medium">A</span>
                  <span className="px-2 py-1 rounded text-sm bg-yellow-600 dark:bg-yellow-500 text-white font-medium">AA</span>
                  <span className="px-2 py-1 rounded text-sm bg-green-600 dark:bg-green-500 text-white font-medium">AAA</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
                  A: Essential accessibility requirements<br />
                  AA: Enhanced accessibility requirements<br />
                  AAA: Optimal accessibility requirements
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Role Definitions</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {Object.entries(roleDefinitions).map(([code]) => (
                    <span key={code} className="px-2 py-1 rounded-full text-sm bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-blue-100 font-medium">
                      {code}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  Each role indicates primary responsibility for implementing specific WCAG requirements.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WCAGHeatmap;