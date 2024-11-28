'use client';
import React from 'react';

import { HomePage } from './dashboard/components';
import { VisualizationWrapper } from './dashboard/components';

export default function ClientPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Accessibility Overview</h1>
        <div className="space-y-8">
          <HomePage />
          <VisualizationWrapper visualizationId="default" />
        </div>
      </main>
    </div>
  );
}
