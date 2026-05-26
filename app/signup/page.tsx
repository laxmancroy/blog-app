import Link from 'next/link';

export default function Signup() {
    return (
        <div>
            <h2>Sign Up</h2>
            <p>If you have a account, go to <Link href="/signin">Login</Link> page</p>
        </div>
    )
}