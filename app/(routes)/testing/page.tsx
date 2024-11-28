import React from 'react';
import { ProcurementTesting, VendorGuidance, VisualizationWrapper } from '@/app/dashboard/components';

export default function TestingPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-4 pt-20">
        <VisualizationWrapper visualizationId="procurement-testing">
          <div className="space-y-8">
            <ProcurementTesting />
            <VendorGuidance />
          </div>
        </VisualizationWrapper>
      </main>
    </div>
  );
} 