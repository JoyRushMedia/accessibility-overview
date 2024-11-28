"use client";

import React from 'react';
import { BusinessImpact, ComplianceRiskTracker, VisualizationWrapper } from '@/app/dashboard/components';

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <main className="container mx-auto p-4 pt-20">
        <VisualizationWrapper visualizationId="business-compliance">
          <div className="space-y-8">
            <BusinessImpact />
            <ComplianceRiskTracker />
          </div>
        </VisualizationWrapper>
      </main>
    </div>
  );
} 