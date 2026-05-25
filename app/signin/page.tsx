import Link from 'next/link';

export default function Signin() {
    return (
        <div>
            <h2>Sign In</h2>
            <p>If you are not a member, please <Link href="/signup">sign up</Link> first.</p>
        </div>
    )
}