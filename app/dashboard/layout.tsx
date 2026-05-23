export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>This is starter</div>
            {children}
            <div>This is end</div>
        </>
    )
}