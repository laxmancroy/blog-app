import Link from 'next/link';

export default function Signin() {
    return (
        <div className="w-full text-center my-6">
            <div className="bg-foreground inline-block text-white rounded-md px-8 py-5">
                <h2 className="text-3xl mb-5">Sign In</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" placeholder="Email" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" placeholder="Password" />
                </form>
                <p className="block mt-8">If you are not a member, please <Link href="/signup">sign up</Link> first.</p>
            </div>
        </div>
    )
}