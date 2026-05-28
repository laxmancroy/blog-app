import Link from 'next/link';

export default function Signup() {
    return (
        <div className="bg-red-600 container mx-auto">
            <div className="inline-block bg-foreground border-[1px] border-border my-10 px-8 py-5 rounded-md">
                <h2>Sign Up</h2>
                <form className="*:focus:outline-0 *:h-9 *:my-2 *:w-full *:border-[1px] *:border-border *:rounded-md">
                    <br />
                    <input type="text" placeholder="Full Name" />
                    <br />
                    <input type="email" placeholder="Email" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" className="bg-blue-500 text-white w-full rounded-md py-3" />
                </form>
                <p className="mt-6">If you have a account, go to <Link href="/signin" className="text-blue-600">login</Link> page.</p>
            </div>
        </div>
    )
}