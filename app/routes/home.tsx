import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import { NavBar } from "~/components/Navbar";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuCheck" },
    { name: "description", content: "AI-powered resume analysis and optimization" },
  ];
}

export default function Home() {
  const {auth} = usePuterStore();
  const navigate = useNavigate();

    useEffect(() => { 
        if (!auth.isAuthenticated) navigate( "/auth?next=/");
    }, [auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <NavBar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your Application and Resume analytics</h1>
        <h2>Get insights into your job applications and optimize your resume</h2>

      </div>
       {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
    </section>
  </main>;
}
