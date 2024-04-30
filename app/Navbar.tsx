import React from 'react'
import Link from 'next/link'
import { IoBugSharp } from "react-icons/io5";

export default function Navbar() {
    const links = [
        {label: "Dashboard", href: "/dashboard"},
        {label: "Issue", href: "/issue"},
    ]
    
  return (
    <nav className="flex space-x-6 border-b mb-5 items-center py-8 h-14 px-5 text-xl">
        <Link href="/"><IoBugSharp /></Link>
        <ul className="flex space-x-5">
            {links.map(link => <Link key={link.href} href={link.href} className="text-zinc-500 hover:text-zinc-100 transition-colors">{link.label}</Link>)}
        </ul>
    </nav>
  )
}
