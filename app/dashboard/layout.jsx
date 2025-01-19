import React from 'react';
import Header from './_components/Header';
import SideNav from './_components/SideNav';


function DashboardLayout({ children }) {
  return (
    <div>
      <div className="hidden md:block h-screen bg-white fixed mt-[65px] w-64">
        <SideNav/>
        {children}
      </div>
      <div>
        <Header/>
        <div className="p-5 md:ml-64">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;