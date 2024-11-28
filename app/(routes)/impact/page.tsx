"use client";

import React from 'react';
import { BusinessImpact, VisualizationWrapper } from '@/app/dashboard/components';

export default function ImpactPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-4 pt-20">
        <VisualizationWrapper visualizationId="stakeholder-roi">
          <BusinessImpact />
        </VisualizationWrapper>
      </main>
    </div>
  );
}
