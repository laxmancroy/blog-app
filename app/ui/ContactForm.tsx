export default function Contact() {
    return (
        <div className="container mx-auto bg-red-800 text-center">
            <div className="inline-block bg-foreground my-6 rounded-md">
                <h2 className="text-3xl mt-4">Contact</h2>
                <form className="flex flex-col px-5 py-6 *:w-full *:focus:outline-0 *:my-2 *:rounded-md *:border *:border-border">
                    <input type="text" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea name="msg" placeholder="Your message here..."></textarea>
                    <br />
                    <input type="submit" value="Submit" className="bg-blue-600 w-full py-3 text-white rounded-md" />
                </form>
            </div>
        </div>
    )
}