'use client';

import { useState } from 'react';

const navBar = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Sign in', href: '/signin' },
    { name: 'Sign up', href: '/signup' }
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header id="header" className="bg-foreground text-white flex justify-around py-2 border-b-[1px] border-border ">
            <div className="text-2xl">Blog</div>
            {/* Desktop Navigation Bar */}
            <nav className="hidden sm:block">
                <ul className="flex justify-center *:border *:border-gray-600 *:px-2 *:py-1 *:mx-2 *:rounded-md *:hover:cursor-pointer *:hover:border-white">
                    {
                        navBar.map(link => (
                            <a key={link.href} href={link.href}>{link.name}</a>
                        ))
                    }
                </ul>
            </nav>

            {/* Mobile Navigation Bar */}
            <button className="sm:hidden" onClick={() => (setMenuOpen(!menuOpen))}>menu</button>
            {menuOpen &&
                <nav className="w-full h-screen bg-yellow-500 absolute top-0 left-0 overflow-hidden">
                    <ul>
                        {
                            navBar.map(link => (
                                <a key={link.href} href={link.href}>{link.name}</a>
                            ))
                        }
                    </ul>
                    <button onClick={() => (setMenuOpen(false))}>close</button>
                </nav>

            }
        </header>
    )
}