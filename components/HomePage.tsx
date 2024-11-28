"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { 
  BookOpen, 
  Lightbulb, 
  Users, 
  Code, 
  Layout, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Keyboard,
  Eye,
  Brain,
  Monitor
} from 'lucide-react';
import Link from 'next/link';

const AccessibilityDashboard = () => {
  const corePrinciples = [
    {
      title: "Perceivable",
      description: "Information must be presentable to users in ways they can perceive",
      examples: [
        "Alternative text for images",
        "Captions for videos",
        "Sufficient color contrast",
        "Text alternatives for non-text content"
      ],
      icon: <Eye className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-800",
      href: "/learn/perceivable"
    },
    {
      title: "Operable",
      description: "Interface components must be operable by all users",
      examples: [
        "Keyboard accessibility",
        "Sufficient time to read",
        "No flashing content",
        "Easy navigation"
      ],
      icon: <Keyboard className="h-6 w-6" />,
      color: "bg-green-100 text-green-800",
      href: "/learn/operable"
    },
    {
      title: "Understandable",
      description: "Information and interface must be understandable",
      examples: [
        "Readable text",
        "Predictable operation",
        "Input assistance",
        "Clear instructions"
      ],
      icon: <Brain className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-800",
      href: "/learn/understandable"
    },
    {
      title: "Robust",
      description: "Content must be robust enough to work with various technologies",
      examples: [
        "Compatible with assistive technologies",
        "Valid HTML/ARIA",
        "Device independence",
        "Future compatibility"
      ],
      icon: <Monitor className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-800",
      href: "/learn/robust"
    }
  ];

  const learningPaths = [
    {
      title: "Beginners",
      description: "Start your accessibility journey here",
      modules: [
        "Understanding disability types",
        "Basic WCAG principles",
        "Common accessibility barriers",
        "Simple implementation techniques"
      ],
      icon: <Lightbulb className="h-6 w-6" />,
      href: "/path/beginners",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Designers",
      description: "Learn accessible design principles",
      modules: [
        "Color contrast requirements",
        "Accessible typography",
        "Navigation patterns",
        "Form design best practices"
      ],
      icon: <Layout className="h-6 w-6" />,
      href: "/path/designers",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Developers",
      description: "Technical implementation guides",
      modules: [
        "Semantic HTML",
        "ARIA implementation",
        "Keyboard navigation",
        "Screen reader compatibility"
      ],
      icon: <Code className="h-6 w-6" />,
      href: "/path/developers",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Content Creators",
      description: "Create accessible content",
      modules: [
        "Writing alt text",
        "Document structure",
        "Clear writing guidelines",
        "Multimedia accessibility"
      ],
      icon: <FileText className="h-6 w-6" />,
      href: "/path/content",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const practicalExercises = [
    {
      title: "Screen Reader Testing",
      description: "Learn to test with popular screen readers",
      difficulty: "Intermediate",
      duration: "45 mins",
      href: "/exercises/screen-reader",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Keyboard Navigation",
      description: "Practice implementing keyboard controls",
      difficulty: "Beginner",
      duration: "30 mins",
      href: "/exercises/keyboard",
      icon: <Keyboard className="h-6 w-6" />
    },
    {
      title: "ARIA Labels",
      description: "Hands-on practice with ARIA implementation",
      difficulty: "Advanced",
      duration: "60 mins",
      href: "/exercises/aria",
      icon: <Code className="h-6 w-6" />
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Introduction Section */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">Learn Web Accessibility</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Understanding and implementing accessibility is crucial for creating inclusive web experiences.
            Start your learning journey here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg dark:text-white">Why Accessibility Matters</h3>
              <ul className="space-y-2">
                {[
                  "Enable equal access for all users",
                  "Meet legal requirements",
                  "Improve user experience",
                  "Reach wider audience"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg dark:text-white">What You&apos;ll Learn</h3>
              <ul className="space-y-2">
                {[
                  "WCAG Guidelines",
                  "Implementation techniques",
                  "Testing methods",
                  "Best practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Principles */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Core Principles of Accessibility</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {corePrinciples.map((principle, index) => (
            <Link href={principle.href} key={index}>
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className={`p-2 rounded-full ${principle.color} w-fit`}>
                    {principle.icon}
                  </div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {principle.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Paths */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Learning Paths</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {learningPaths.map((path, index) => (
            <Link href={path.href} key={index}>
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className={`p-2 rounded-full ${path.color} w-fit`}>
                    {path.icon}
                  </div>
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {path.modules.map((module, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {module}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Practical Exercises */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Practical Exercises</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {practicalExercises.map((exercise, index) => (
            <Link href={exercise.href} key={index}>
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className={`p-2 rounded-full ${exercise.difficulty.toLowerCase().replace(' ', '-')}-100 w-fit`}>
                    {exercise.icon}
                  </div>
                  <CardTitle className="text-xl">{exercise.title}</CardTitle>
                  <CardDescription>{exercise.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{exercise.difficulty}</span>
                    <span className="text-sm font-medium">{exercise.duration}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AccessibilityDashboard;

