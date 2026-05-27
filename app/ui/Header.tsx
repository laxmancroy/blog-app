const navBar = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Sign in', href: '/signin' },
    { name: 'Sign up', href: '/signup' }
];

export default function Header() {
    return (
        <header id="header" className="bg-foreground text-white flex justify-around py-2 border-b-[1px] border-border ">
            <div className="text-2xl">Blog</div>
            <nav>
                <ul className="flex justify-center *:border *:border-gray-600 *:px-2 *:py-1 *:mx-2 *:rounded-md *:hover:cursor-pointer *:hover:border-white">
                    {
                        navBar.map(link => (
                            <a key={link.href} href={link.href}>{link.name}</a>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}