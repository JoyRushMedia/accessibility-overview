import React from 'react';
import { WCAGHeatmap, VisualizationWrapper } from '../../dashboard/components';

export default function WCAGPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-4 pt-20">
        <VisualizationWrapper visualizationId="accessibility-complexity">
          <WCAGHeatmap />
        </VisualizationWrapper>
      </main>
    </div>
  );
}
