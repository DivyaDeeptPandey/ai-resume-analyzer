import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter';

export const meta = () => ([
    {title : "ResuCheck | Auth"},
    {name : "description", content : "Login or Register to ResuCheck to analyze your resume and track your job applications"}
])

const auth = () => {
    const {isLoading, auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split("next=")[1];
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate(next || "/");
        }
    }, [auth.isAuthenticated])
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center ">
        <div className="w-300 gradient-border shadow-lg">
            <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1>
                        Welcome to ResuCheck
                    </h1>
                    <h2 className='text-wrap'>
                        Login to analyze your resume and track your job applications, or sign up to get started with ResuCheck's AI-powered resume analysis and optimization.
                    </h2>
                </div>
                <div className="flex items-center justify-center">
                   {isLoading ? (
                        <button className="w-100 h-25 auth-button animate-pulse">
                            <p>Signing you in...</p>
                        </button>
                    
                   ) : (
                        <>
                            {auth.isAuthenticated ? (
                                <button className="w-20 h-25 auth-button" onClick={() => auth.signOut()}>
                                    <p>Sign Out</p>
                                </button>
                    ) : (
                            <button className="w-60 h-12 auth-button flex items-center justify-center" onClick={() => auth.signIn()}>
                                <p className="text-base">Sign In</p>
                            </button>
                    )}
                        </>
                   )}
                </div>
            </section>

        </div>

    </main>
  )
}

export default auth