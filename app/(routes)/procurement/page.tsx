"use client";

import React, { useState, useCallback } from 'react';
import { 
  ProcurementTesting, 
  VendorGuidance, 
  VisualizationWrapper 
} from '../../dashboard/components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Button } from '../../../components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '../../../components/ui/alert';
import { Shield, AlertTriangle, BookOpen, Download, Users, TestTube2, Settings } from "lucide-react";
import { ProjectLifecycle } from '../../../components/procurement/ProjectLifecycle';
import { useDebouncedCallback } from 'use-debounce';
import { useSearch } from '../../contexts/SearchContext';

export default function ProcurementPage() {
  const { searchQuery } = useSearch();
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = useCallback(async () => {
    if (isExporting) return;
    setIsExporting(true);
    requestAnimationFrame(() => {
      window.print();
      setIsExporting(false);
    });
  }, [isExporting]);

  const debouncedExport = useDebouncedCallback(handleExportPDF, 300);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="w-full max-w-[1400px] mx-auto p-4 sm:p-6">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-end print:hidden">
            <Button 
              variant="outline" 
              onClick={debouncedExport}
              disabled={isExporting}
              className="w-auto bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-400 border-indigo-300 dark:border-indigo-700"
            >
              {isExporting ? (
                <span className="inline-flex items-center">
                  <span className="animate-spin mr-2">⏳</span>
                  Exporting...
                </span>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Export as PDF
                </>
              )}
            </Button>
          </div>

          <VisualizationWrapper visualizationId="procurement-testing">
            <div className="space-y-8 w-full">
              <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/50 rounded-xl shadow-sm print:border print:border-gray-200">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <AlertTitle className="text-amber-800 dark:text-amber-200">
                  Documentation Requirements
                </AlertTitle>
                <AlertDescription className="text-amber-700 dark:text-amber-300 text-sm">
                  Vendors must provide both a VPAT and an ACR. The ACR must demonstrate WCAG 2.1 Level AA conformance, while the VPAT provides Section 508 compliance details. Both documents should be current within the last 12 months.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-50 rounded-lg">
                      <Shield className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Required Documentation</h2>
                  </div>
                  <ul className="space-y-3">
                    {['ACR', 'VPAT', 'Test methodology documentation', 'Remediation timeline'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Ongoing Requirements</h2>
                  </div>
                  <ul className="space-y-3">
                    {['Regular conformance testing', 'Updated documentation annually', 'Accessibility roadmap updates', 'Incident response process'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <div className="h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Tabs defaultValue="terminology" className="space-y-6">
                <TabsList className="w-full p-2 bg-gray-100/80 dark:bg-gray-800/80 rounded-2xl flex items-center gap-2 print:hidden">
                  {[
                    { label: 'Terminology', icon: <BookOpen className="h-4 w-4" />, value: 'terminology' },
                    { label: 'Selection Process', icon: <Settings className="h-4 w-4" />, value: 'lifecycle' },
                    { label: 'Testing Requirements', icon: <TestTube2 className="h-4 w-4" />, value: 'testing' },
                    { label: 'Vendor Management', icon: <Users className="h-4 w-4" />, value: 'vendor' }
                  ].map((tab) => (
                    <TabsTrigger 
                      key={tab.value}
                      value={tab.value}
                      className="flex-1 rounded-xl py-3 px-4 font-medium 
                        data-[state=active]:bg-white data-[state=active]:text-indigo-600 
                        data-[state=active]:shadow-sm transition-all duration-200 
                        hover:text-indigo-600"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {tab.icon}
                        <span className="hidden sm:inline">{tab.label}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="mt-8 space-y-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md print:shadow-none print:p-0">
                    <TabsContent value="terminology" className="print:block">
                      <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
                            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Key Terms & Documents</h2>
                        </div>
                        
                        <div className="grid gap-8">
                          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                            <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-4">Accessibility Conformance Report (ACR)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">A detailed report documenting how well a product meets WCAG success criteria. Must include:</p>
                            <ul className="grid gap-2 text-gray-600 dark:text-gray-400">
                              {[
                                "Specific WCAG 2.1 success criteria evaluation",
                                "Testing methodology and tools used",
                                "Detailed results for each criterion",
                                "Remediation plans for any failures",
                                "Testing date and scope of evaluation"
                              ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                  <div className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                            <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-4">Voluntary Product Accessibility Template (VPAT)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">A document that explains how information and communication technology (ICT) products and services comply with Section 508, EN 301 549, and WCAG accessibility standards.</p>
                            <ul className="grid gap-2 text-gray-600 dark:text-gray-400">
                              {[
                                "Standardized template format",
                                "Section 508 compliance details",
                                "Supports procurement evaluation",
                                "Required for government contracts"
                              ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                  <div className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                            <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-4">Key Differences</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">ACR Focuses On:</h4>
                                <ul className="grid gap-2 text-gray-600 dark:text-gray-400">
                                  {[
                                    "Detailed WCAG conformance",
                                    "Specific testing results",
                                    "Technical implementation details",
                                    "Remediation specifics"
                                  ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                      <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="space-y-4">
                                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">VPAT Focuses On:</h4>
                                <ul className="grid gap-2 text-gray-600 dark:text-gray-400">
                                  {[
                                    "Section 508 compliance",
                                    "Standardized reporting",
                                    "Procurement requirements",
                                    "Multiple standards coverage"
                                  ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                      <div className="h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                            <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-4">Conformance Levels</h3>
                            <div className="grid gap-3">
                              {[
                                { level: "Supports", desc: "Functionality fully meets the criterion" },
                                { level: "Partially Supports", desc: "Some functionality meets the criterion" },
                                { level: "Does Not Support", desc: "Majority of functionality doesn't meet the criterion" },
                                { level: "Not Applicable", desc: "Criterion isn't relevant to the product" }
                              ].map((item) => (
                                <div key={item.level} className="flex items-center gap-3">
                                  <span className="font-medium text-gray-800 dark:text-gray-200 min-w-[160px]">{item.level}:</span>
                                  <span className="text-gray-600 dark:text-gray-400">{item.desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="lifecycle" className="print:block">
                      <ProjectLifecycle />
                    </TabsContent>
                    
                    <TabsContent value="testing" className="print:block">
                      <ProcurementTesting searchQuery={searchQuery} />
                    </TabsContent>
                    
                    <TabsContent value="vendor" className="print:block">
                      <VendorGuidance searchQuery={searchQuery} />
                    </TabsContent>
                  </div>
                </div>
              </Tabs>
            </div>
          </VisualizationWrapper>
        </div>
      </main>
    </div>
  );
}