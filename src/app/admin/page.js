'use client';
import { useAuthContext as useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { notFound, redirect } from 'next/navigation';

export default function AdminPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            redirect('/');
        }
    }, [user, loading, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
                {user && (
                    <div>
                        <p className="text-gray-600 text-center mb-4">
                            Welcome, {user.email}
                        </p>
                        {/* Add additional content for the admin dashboard */}
                    </div>
                )}
            </div>
        </div>
    );
}