import Image from 'next/image';

export default function Hero() {
    return (
        <div>
            <div className="flex justify-center my-6">
                <button>prev</button>
                <Image src="/thumbnails/rainyCafeMemories-noLogo.jpg" alt="" width={500
                } height={300} style={{ width: '100%', height: 'auto' }} preload />
                <button>next</button>
            </div>
            <div className="text-center">.   .   .</div>
        </div>
    )
}