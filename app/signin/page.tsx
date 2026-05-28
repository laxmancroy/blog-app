import Link from 'next/link';

export default function Signin() {
    return (
        <div className="bg-red-600 container mx-auto">
            <div className="bg-foreground inline-block text-white rounded-md px-8 py-5 border-[1px] border-border my-10">
                <h2 className="text-3xl mb-5">Sign In</h2>
                <form className="my-9 *:focus:outline-0 *:w-full">
                    <input type="text" placeholder="Email" className="border-[1px] border-border h-9 rounded-md" />
                    <br />
                    <input type="password" placeholder="Password" className="border-[1px] border-border h-9 mt-5 rounded-md" />
                    <br />
                    <input type="submit" value="Submit" className="bg-blue-600 text-white w-full py-3 rounded-md mt-5" />
                </form>
                <p className="block mt-8">If you are not a member, please <Link href="/signup" className="text-blue-600">sign up</Link> first.</p>
            </div>
        </div>
    )
}