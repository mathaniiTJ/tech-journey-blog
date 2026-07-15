import React from 'react';
import Link from "next/link";
import type {UrlObject} from "url";
import Image from "next/image";
import profilePic from '../../public/images/avatar.jpg'
import DarkModeButton from "@/components/DarkModeButton";

interface NavBarContainerProps {
  children: React.ReactNode;
  title: string;
  links?: {
    href: (string | UrlObject);
    title: string
  }[]
}

const NavBarContainer: React.FC<NavBarContainerProps> = ({title, children, links}) => {

  function renderLinks() {
    return links?.map((l, i) => {
      return (
          <li key={i}>
            <Link href={l.href}>{l.title}</Link>
          </li>
      );
    })
  }

  return (
      <div className="flex-1 drawer">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content flex flex-col items-center pt-[4.25rem]">
          <div className="w-full navbar fixed top-0 z-10 h-18 border-b border-yellow-200 bg-[#fff8d6] shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
            <div className="flex-none hidden lg:block w-12 h-12">
              <div className="avatar">
                <div className="w-12 rounded-full border-2 border-[#f59e0b]">
                  <Image alt={'Profile image'} src={profilePic}/>
                </div>
              </div>
            </div>
            <div className="flex-none lg:hidden w-12 h-12">
              <label htmlFor="nav-drawer" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     className="inline-block w-6 h-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 flex justify-between">
              <Link href="/"><h1 className={'text-3xl md:text-4xl font-semibold text-[#3b2f2f]'}>{title}</h1></Link>
            </div>
            {links && <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal text-[#3b2f2f]">
                  {renderLinks()}
                </ul>
            </div>}
          </div>
          {children}
        </div>
        {links && <div className="drawer-side">
            <label htmlFor="nav-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 pt-20 w-80 h-full bg-[#fff8d6] text-[#3b2f2f]">
              {renderLinks()}
            </ul>
        </div>}
      </div>
  );
};
export default NavBarContainer;
