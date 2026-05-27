import Link from 'next/link';

export default function Signup() {
    return (
        <div className="w-full text-center">
            <div className="inline-block bg-foreground border-[1px] border-border my-8 px-8 py-5">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="text" />
                    <br />
                    <input type="submit" value="Submit" className="bg-blue-500 text-white w-full rounded-md py-3" />
                </form>
                <p className="mt-6">If you have a account, go to <Link href="/signin">Login</Link> page</p>
            </div>
        </div>
    )
}