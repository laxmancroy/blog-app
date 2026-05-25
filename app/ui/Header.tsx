export default function Header() {
    return (
        <header id="header" className="bg-blue-400 text-white flex justify-around py-2 ">
            <div>Blog</div>
            <nav>
                <ul className="flex justify-center *:bg-amber-400 *:px-2 *:py-1 *:mx-2 *:rounded-md *:hover:cursor-pointer">
                    <li>Home</li>
                    <li>About</li>
                    <li>Sign in</li>
                    <li>Sign up</li>
                    <li>Contact</li>

                </ul>
            </nav>
        </header>
    )
}