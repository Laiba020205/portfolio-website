import React from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatedHero } from "@/components/ui/animated-hero";
import { GradientButton } from "@/components/ui/gradient-button";
import { Github, Linkedin, Mail, ExternalLink, Code2, GraduationCap, Trophy, Braces, Database, Palette, BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-sans font-bold text-xl tracking-tight text-primary">Laiba <span className="text-foreground">Shaikh</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium font-mono text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-32">
        {/* Hero Section */}
        <section id="about" className="min-h-[80vh] flex flex-col items-center justify-center pt-10">
          <AnimatedHero />
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GradientButton className="gap-2">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </GradientButton>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <GradientButton className="gap-2">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </GradientButton>
            </a>
            <a href="mailto:contact@example.com">
              <GradientButton className="gap-2">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </GradientButton>
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
            <p className="text-muted-foreground font-mono text-center max-w-2xl">
              A comprehensive overview of my technical capabilities spanning various domains of software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={<Braces className="w-6 h-6 text-amber-500" />}
              title="Languages"
              skills={["Python", "Java", "C++", "C", "JavaScript", "TypeScript"]}
            />
            <SkillCard 
              icon={<BrainCircuit className="w-6 h-6 text-amber-500" />}
              title="AI & Data Science"
              skills={["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Machine Learning"]}
            />
            <SkillCard 
              icon={<Palette className="w-6 h-6 text-amber-500" />}
              title="Web Dev"
              skills={["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Node.js"]}
            />
            <SkillCard 
              icon={<Database className="w-6 h-6 text-amber-500" />}
              title="Databases"
              skills={["MySQL", "MongoDB", "PostgreSQL"]}
            />
            <SkillCard 
              icon={<Code2 className="w-6 h-6 text-amber-500" />}
              title="Tools"
              skills={["Git", "GitHub", "Docker", "VS Code", "Jupyter"]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
            <p className="text-muted-foreground font-mono text-center max-w-2xl">
              Showcasing my latest projects applying machine learning and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors p-8 flex flex-col h-full">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Risk Scoring Engine</h3>
              <p className="text-sm font-mono text-muted-foreground mb-6">March 2026</p>
              <p className="text-foreground/80 mb-8 flex-grow">
                An end-to-end credit risk prediction system leveraging machine learning to evaluate applicant risk. Features a RESTful API for real-time scoring and automated batch-scoring reporting, fully containerized for scalable deployment.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Python", "Machine Learning", "Docker", "REST API", "Pandas", "Scikit-Learn"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mt-auto">
                <GradientButton className="w-full justify-center">
                  <Github className="w-4 h-4 mr-2" /> View Source
                </GradientButton>
              </a>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors p-8 flex flex-col h-full">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Portfolio Website</h3>
              <p className="text-sm font-mono text-muted-foreground mb-6">2025</p>
              <p className="text-foreground/80 mb-8 flex-grow">
                A personal portfolio highlighting my skills, projects, and achievements. Designed with an elegant aesthetic featuring deep navy, ivory, and gold tones. Built with a focus on clean typography, smooth animations, and responsive design.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mt-auto">
                <GradientButton className="w-full justify-center">
                  <Github className="w-4 h-4 mr-2" /> View Source
                </GradientButton>
              </a>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors p-8 flex flex-col h-full">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Academic Feedback Portal</h3>
              <p className="text-sm font-mono text-muted-foreground mb-6">2025</p>
              <p className="text-foreground/80 mb-8 flex-grow">
                A full-stack Academic Feedback Portal developed for institutional use in collaboration with a 4-member team under faculty supervision. Features a RESTful backend with structured data storage and a dynamic React.js frontend for seamless user interaction, delivering a production-ready system for real college use.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Python", "Flask", "React.js", "SQL", "REST API", "Full-Stack"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mt-auto">
                <GradientButton className="w-full justify-center">
                  <Github className="w-4 h-4 mr-2" /> View Source
                </GradientButton>
              </a>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements Section */}
        <section id="certifications" className="scroll-mt-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Milestones</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8 border-b border-borderpb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <ul className="space-y-6 relative border-l border-border/50 ml-4 pl-6">
                <TimelineItem 
                  title="DeepLearning.AI: Supervised Machine Learning"
                  subtitle="Regression and Classification"
                />
                <TimelineItem 
                  title="DeepLearning.AI: Advanced Learning Algorithms"
                  subtitle=""
                />
                <TimelineItem 
                  title="Meta React Basics"
                  subtitle="Coursera"
                />
                <TimelineItem 
                  title="Programming in Java"
                  subtitle="Rice University (Coursera)"
                />
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
                <Trophy className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <ul className="space-y-6 relative border-l border-border/50 ml-4 pl-6">
                <TimelineItem 
                  title="Academic Excellence"
                  subtitle="Maintained a 9.55 CGPA. Achieved a perfect 10 SGPA in Semester 1."
                />
                <TimelineItem 
                  title="President, CSI Student Chapter"
                  subtitle="MESCOE. Led organizing technical workshops, hackathons, and seminars."
                />
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-12 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="font-sans font-bold text-2xl tracking-tight text-primary mb-6">Laiba <span className="text-foreground">Shaikh</span></span>
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm font-mono text-muted-foreground">
            © {new Date().getFullYear()} Laiba Shaikh. All rights reserved. Let's build something amazing together.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, skills, icon }: { title: string; skills: string[]; icon?: React.ReactNode }) {
  return (
    <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/50 transition-all group">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1.5 bg-secondary/50 text-foreground text-sm font-mono border border-border/50 rounded-md">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <li className="relative">
      <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-[0_0_0_2px_rgba(var(--primary),0.2)]" />
      <h4 className="text-lg font-bold leading-tight">{title}</h4>
      <p className="text-muted-foreground font-mono text-sm mt-1">{subtitle}</p>
    </li>
  );
}
