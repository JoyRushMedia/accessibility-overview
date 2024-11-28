import React from 'react';
import { ResourceRequirements, VisualizationWrapper } from '@/app/dashboard/components';

export default function RolesPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-4 pt-20">
        <VisualizationWrapper visualizationId="integration-dashboard">
          <div className="space-y-8">
            <ResourceRequirements />
          </div>
        </VisualizationWrapper>
      </main>
    </div>
  );
}
