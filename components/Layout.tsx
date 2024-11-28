import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto p-4 pt-20 flex-grow">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        <div className="space-y-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
