import React from 'react';
import { RemediationTimeline, ImplementationTimeline, ResourceRequirements, VisualizationWrapper } from '../../dashboard/components';

export default function ImplementationPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <main className="container mx-auto p-4 pt-20">
        <VisualizationWrapper visualizationId="implementation-timeline">
          <div className="space-y-8">
            <RemediationTimeline />
            <ImplementationTimeline />
            <ResourceRequirements />
          </div>
        </VisualizationWrapper>
      </main>
    </div>
  );
} 