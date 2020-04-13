import React, { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="leading-normal">
        <div className="max-w-8xl mx-auto grid grid-cols-1 row-gap-16 px-4 py-4 sm:px-6 sm:py-12 lg:px-8 bg-blue-100">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;