"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    async function handleLogin() {
    await gitHubSignIn();
    }
    
    // Sign out of Firebase
    async function handleLogout() {
    await firebaseSignOut();
    }
    
// Displays the login page if the user is not logged in, and the welcome page if the user is logged in
    if (user === null) {
        return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
            <h1 className="text-4xl font-bold mb-4">Shopping List App</h1>
            <button
            onClick={handleLogin}
            className="bg-orange-600 hover:bg-orange-400 text-white py-2 px-4 rounded"
            >
            Sign in with GitHub
            </button>
        </main>
        );
    } 

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
        <h1 className="text-4xl">
            Welcome, {user.displayName} ({user.email})
        </h1>
        <div className="flex flex-col space-y-4">
            <button
            onClick={handleLogout}
            className="bg-orange-600 hover:bg-orange-400 text-white py-2 px-4 rounded"
            >
            Logout
            </button>
            <a href="\week-9\shopping-list">
            <span className="bg-orange-600 hover:bg-orange-400 text-white py-2 px-4 rounded cursor-pointer">
                Go to Shopping List
            </span>
            </a>
        </div>
        </main>
    );
}
