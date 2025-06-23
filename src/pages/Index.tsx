import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import PageHeader from '@/components/Dashboard/PageHeader';
import LeadsCountCard from '@/components/Dashboard/LeadsCountCard';
import TrackingChart from '@/components/Dashboard/TrackingChart';
import StatsGrid from '@/components/Dashboard/StatsGrid';

/**
 * DashboardPage Component
 * 
 * This is the main page for the Leads Dashboard. It serves as a container
 * that composes various dashboard widgets within the MainAppLayout.
 * The layout provides the consistent structure (sidebar, header), and this
 * page arranges the specific content for the dashboard overview.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The MainAppLayout component wraps the page content, providing the 
        sidebar, header, and the main content area with appropriate styling.
        The children of MainAppLayout are rendered inside a flex container 
        with a vertical gap, as defined in the layout requirements.
      */}
      <PageHeader />
      <LeadsCountCard />
      <TrackingChart />
      <StatsGrid />
    </MainAppLayout>
  );
};

export default IndexPage;
