import { path } from 'express/lib/application';
import { CircleUserIcon, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

function SideNav(){

  const MenuOption = [
    {
      id:1,
      name: 'Dashboard',
      path: '/dashboard',
      icon: PanelsTopLeft
    },
    {
      id:2,
      name: 'Create New',
      path: '/dashboard/create-new',
      icon: FileVideo
    },
    {
      id:3,
      name: 'Upgrade',
      path: '/upgrade',
      icon: ShieldPlus
    },
    {
      id:4,
      name: 'Account',
      path: '/account',
      icon: CircleUserIcon
    }
  ]
  return (
    <div className="h-screen w-64 shadow-md p-5">
      <div className="grid gap-3">
        {MenuOption.map((item) => (
            <Link href={item.path} className="flex gap-3 items-center p-3">
              <div key={item.id} className={`p-5 flex items-center justify-start gap-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer
              ${path === item.path&&{'bg-primary text-white' : 'text-black'}}`}>
              <item.icon/>
              <span>{item.name}</span>
              </div>
            </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;