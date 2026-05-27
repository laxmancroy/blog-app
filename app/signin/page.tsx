import Link from 'next/link';

export default function Signin() {
    return (
        <div className="w-full text-center my-6">
            <div className="bg-foreground inline-block text-white rounded-md px-8 py-5 border-[1px] border-border">
                <h2 className="text-3xl mb-5">Sign In</h2>
                <form className="my-9">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" placeholder="Email" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" className="bg-blue-600 text-white w-full py-3 rounded-md" />
                </form>
                <p className="block mt-8">If you are not a member, please <Link href="/signup">sign up</Link> first.</p>
            </div>
        </div>
    )
}