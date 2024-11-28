"use client"

import { motion } from "framer-motion";
import { Timeline, TimelineItem } from '@/components/ui/timeline';
import { Card } from '@/components/ui/card';
import { fadeInUp, staggerChildren } from "@/lib/animations";

const phases = [
  {
    title: "Requirements Gathering",
    duration: "2-3 weeks",
    tasks: [
      "Define project scope and objectives",
      "Identify technical requirements",
      "Establish budget constraints",
      "Create vendor evaluation criteria"
    ],
    deliverables: ["Requirements document", "Evaluation matrix"]
  },
  {
    title: "Vendor Research",
    duration: "2-4 weeks",
    tasks: [
      "Market research",
      "Initial vendor outreach",
      "Request capability statements",
      "Create shortlist"
    ],
    deliverables: ["Vendor longlist", "Initial assessment report"]
  },
  {
    title: "RFP Process",
    duration: "4-6 weeks",
    tasks: [
      "Prepare RFP document",
      "Distribute to vendors",
      "Q&A period",
      "Proposal evaluation"
    ],
    deliverables: ["RFP document", "Vendor proposals", "Evaluation scores"]
  },
  {
    title: "Vendor Selection",
    duration: "2-3 weeks",
    tasks: [
      "Detailed proposal review",
      "Vendor presentations",
      "Reference checks",
      "Final selection"
    ],
    deliverables: ["Selection report", "Vendor recommendation"]
  }
];

export function ProjectLifecycle() {
  return (
    <motion.div 
      className="space-y-8"
      variants={staggerChildren}
      initial="initial"
      animate="animate"
    >
      <h2 className="text-2xl font-bold">Vendor Selection Lifecycle</h2>
      
      <Timeline>
        {phases.map((phase, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <TimelineItem>
              <Card className="p-4 hover:bg-accent/5">
                <h3 className="text-lg font-semibold">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Estimated duration: {phase.duration}
                </p>
                
                <div className="mt-4">
                  <h4 className="font-medium">Key Tasks:</h4>
                  <ul className="list-disc list-inside text-sm">
                    {phase.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium">Deliverables:</h4>
                  <ul className="list-disc list-inside text-sm">
                    {phase.deliverables.map((deliverable, i) => (
                      <li key={i}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </TimelineItem>
          </motion.div>
        ))}
      </Timeline>
    </motion.div>
  );
}
