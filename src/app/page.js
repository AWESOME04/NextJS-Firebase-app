import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
            <p className="text-lg mb-8">This is a full-stack app built with Next.js 13 and Firebase.</p>
            <div className="flex space-x-4">
                <Link href="/signup/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </Link>
                <Link href="/signin/" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </Link>
            </div>
        </div>
    );
}