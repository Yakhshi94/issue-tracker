'use client';
import React from 'react';
import Link from 'next/link';
import { IoBugSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

export default function Navbar() {
    const currentPath = usePathname();
    
    const links = [
        {label: "Dashboard", href: "/"},
        {label: "Issue", href: "/issue"},
    ]
    
  return (
    <nav className="flex space-x-6 border-b mb-5 items-center py-8 h-14 px-5 text-xl">
        <Link href="/"><IoBugSharp /></Link>
        <ul className="flex space-x-5">
            {links.map(link => <Link key={link.href} 
              href={link.href} 
              className={classnames(
                {
                  'text-zinc-800': currentPath === link.href,
                  'text-zinc-500': currentPath !== link.href,
                  'hover:text-zinc-800 transition-colors': true,
                }
              )}>
              {link.label}</Link>)}
        </ul>
    </nav>
  )
}
