'use client'

import React from 'react'
import { Vortex } from './ui/vortex'
import { AnimatedText } from './AnimatedText';
import { Button } from './Button';
import { Button as Button1 } from '@/components/Button';




const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
      </div>
    ),
  },
];


const slideData = [
    {
      title: "Professional Experience",
      button: "Explore Component",
      subheadings: [["Founder & CEO – PRIDalLY", "UK & India"], ["Founder – Scensora", "UK"], ["Mental Health Coach", "Shout UK / NGOs / Freelance"], ["Digital Learning Specialist", "Anglia Ruskin University"]],
      checkpoints: [],
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Recognition & Awards",
      button: "Explore Component",
      subheadings: [],
      checkpoints: ["NHS Clinical Entrepreneur Programme – Certificate Holder", "Tata Health & Education Scholarship (x3)", "Finalist – Babson x Santander Global Entrepreneur Program", "Nominee – Inspirational Young Woman UK", "Featured by BBC"],
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Education",
      button: "Explore Component",
      subheadings: [["MSc Psychology", "Anglia Ruskin University, UK – Merit"], ["Doctor of Pharmacy", "Post Baccalaureate (India) – 83.29%"], ["PG Diploma in Pharmacovigilance"], ["BPharm, NVQ2 (UK)"]],
      checkpoints: [],
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Professional Memberships",
      button: "Explore Component",
      subheadings: [],
      checkpoints: ["British Psychological Society", "American Psychological Association", "Editorial Board (International Journal)"],
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];


export const HeroPage = () => {
  const headerStyle = "text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-8"
  const sectionStyle = "relative z-10 text-lg md:text-7xl bg-clip-text justify-center text-black font-sans font-bold"

  return (
    <>
      {/* About Me */}
      <section>
        <div className="w-full mx-auto rounded-md overflow-hidden">
          {/* About Me Section */}
              <main className="pt-24 relative">

                <Vortex
                  className="flex items-center flex-col justify-center text-center px-2 md:px-10 py-4 h-screen relative mx-auto w-max"
                > 
                      {/* Hero Section */}
                      <section className="flex flex-col justify-center items-center text-center px-4 overflow-hidden">
                        <div className="space-y-6 relative">
                          <div className="relative inline-block">
                            <AnimatedText text="Meghana Rao Nadendla" className='text-xl md:text-2xl text-gray-600 font-light'/>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#1CA75B] to-[#70B9F0] text-transparent bg-clip-text m-5 p-5">
                              Healing, Innovation, and Impact
                            </h1>
                          </div>
                          
                          <h2 className="text-xl md:text-2xl text-gray-600 font-light">
                            <span className="inline-block animate-slideUpAndFade animation-delay-2000">
                              Clinical Pharmacist
                            </span>{" "}
                            <span className="inline-block animate-slideUpAndFade animation-delay-2000">|</span>{" "}
                            <span className="inline-block animate-slideUpAndFade animation-delay-2000">
                              Psychologist
                            </span>{" "}
                            <span className="inline-block animate-slideUpAndFade animation-delay-2000">|</span>{" "}
                            <span className="inline-block animate-slideUpAndFade animation-delay-2000">
                              Social Entrepreneur
                            </span>
                          </h2>
                          
                          <div className="flex gap-4 flex-col sm:flex-row justify-center pt-8 animate-slideUpAndFade animation-delay-4000">
                            <Button href="/about" className="relative overflow-hidden group">
                              <span className="relative z-10">View My Work</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-[#1CA75B] to-[#70B9F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Button>
                          </div>
                        </div>
                      </section>
                </Vortex>
                </main>
        </div>
        <div className="min-h-screen relative flex h-auto flex-col mt-16 pt-3">
              {/* Hero Section */}
              <section className="bg-gradient-to-b from-[#70B9F0]/10 to-white justify-center items-center">
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center mt-10">
                        About Me
                      </h1>
              </section>
        
              {/* Quick Intro */}
              <section className="container mx-auto px-4 py-24 max-w-4xl">
                <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1CA75B]/5 to-[#70B9F0]/5" />
                  <div className="relative">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      I&apos;m <span className="font-semibold text-[#1CA75B]">Meghana Rao Nadendla</span>, 
                      a Clinical Pharmacist, Psychologist, and Social Entrepreneur. 
                      My work bridges science, mental health, and social innovation, with projects ranging from 
                      LGBTQIA+ digital health solutions to sensory well-being products.
                    </p>
                    <div className="mt-8 flex justify-center gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#1CA75B]">10+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#70B9F0]">50+</div>
                        <div className="text-sm text-gray-600">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#F2B63D]">1000+</div>
                        <div className="text-sm text-gray-600">Lives Impacted</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* Featured Projects */}
              <section className="container mx-auto px-4 py-16">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#1CA75B] to-[#70B9F0] text-transparent bg-clip-text">
                    Featured Projects
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Innovative solutions at the intersection of healthcare, technology, and well-being
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* PRIDalLY */}
                    <div className="group">
                      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                        <div className="h-48 bg-gradient-to-br from-[#1CA75B] to-[#70B9F0] relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white mb-2">PRIDalLY</h3>
                            <p className="text-white/90 text-sm">LGBTQIA+ Health App</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 mb-6">A new model of inclusive healthcare, bringing personalized support to the LGBTQIA+ community.</p>
                          <Button1 href="/projects/pridally" variant="secondary" className="w-full group-hover:bg-gradient-to-r from-[#1CA75B] to-[#70B9F0] group-hover:text-white transition-all duration-300">
                            Learn More
                          </Button1>
                        </div>
                      </div>
                    </div>
        
                    {/* Scensora */}
                    <div className="group">
                      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                        <div className="h-48 bg-gradient-to-br from-[#F2B63D] to-[#1CA75B] relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white mb-2">Scensora</h3>
                            <p className="text-white/90 text-sm">Candles & Cosmetics</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 mb-6">Neuroscience-inspired sensory well-being products that transform everyday rituals.</p>
                          <Button1 href="/projects/scensora" variant="secondary" className="w-full group-hover:bg-gradient-to-r from-[#F2B63D] to-[#1CA75B] group-hover:text-white transition-all duration-300">
                            Learn More
                          </Button1>
                        </div>
                      </div>
                    </div>
        
                    {/* Speak2Make */}
                    <div className="group">
                      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                        <div className="h-48 bg-gradient-to-br from-[#70B9F0] to-[#F2B63D] relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white mb-2">Speak2Make</h3>
                            <p className="text-white/90 text-sm">Digital Thought Leadership</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 mb-6">Exploring migration, identity, and philosophy through engaging digital content.</p>
                          <Button1 href="/projects/speak2make" variant="secondary" className="w-full group-hover:bg-gradient-to-r from-[#70B9F0] to-[#F2B63D] group-hover:text-white transition-all duration-300">
                            Learn More
                          </Button1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* Career Journey Section */}
              <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                    My Career Journey
                  </h2>
        
                
        
                  <a href="#download-cv" className="inline-block w-full text-center px-8 py-4 bg-[#1CA75B] text-white rounded-xl hover:bg-[#158f4b] transition-colors font-semibold">
                    Download Full CV
                  </a>
        
                </div>
              </section>
        
        
            
        
              {/* Publications Section */}
              <section className="py-16 bg-gradient-to-b from-[#70B9F0]/10 to-white">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                    Publications & Media
                  </h2>
        
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-[#1CA75B] mb-4">Books</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Clinical Toxicology Guide – Available on Amazon</li>
                        <li>• Upcoming book – Launching in 2025</li>
                      </ul>
                    </div>
        
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-[#1CA75B] mb-4">Research</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• 2 published papers</li>
                        <li>• 2 papers under review</li>
                        <li>• Topics: Pharmacy & Psychology</li>
                      </ul>
                    </div>
        
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-[#1CA75B] mb-4">Media & Talks</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Featured by BBC</li>
                        <li>• NHS Programme speaker</li>
                        <li>• Global entrepreneurship competitions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* Services Section */}
              <section className="py-16 bg-gradient-to-b from-white to-[#70B9F0]/10">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                    Work With Me
                  </h2>
        
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <h3 className="text-xl font-semibold text-[#1CA75B] mb-4">
                        Coaching & Mentorship
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Career guidance for healthcare professionals</li>
                        <li>• Mental health coaching</li>
                        <li>• Cultural adjustment support</li>
                      </ul>
                    </div>
        
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <h3 className="text-xl font-semibold text-[#1CA75B] mb-4">
                        Consulting
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Digital health innovation strategy</li>
                        <li>• Pharmacovigilance expertise</li>
                        <li>• NGO and start-up advisory</li>
                      </ul>
                    </div>
        
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <h3 className="text-xl font-semibold text-[#1CA75B] mb-4">
                        Speaking & Workshops
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Public mental health</li>
                        <li>• LGBTQIA+ healthcare</li>
                        <li>• Social entrepreneurship</li>
                      </ul>
                    </div>
                  </div>
        
                  <div className="text-center mt-12">
                    <a 
                      href="#book-session"
                      className="inline-flex items-center px-8 py-4 bg-[#1CA75B] text-white rounded-xl hover:bg-[#158f4b] transition-colors font-semibold"
                    >
                      👉 Ready to collaborate? Book a Session
                    </a>
                  </div>
                </div>
              </section>
        
              {/* Sticky scroll */}
              {/* <section className="w-full py-4">
                  <StickyScroll content={content} contentClassName="colorboxes"/>
              </section> */}
            </div>
      </section>

      {/* Hero Section with Image and Header */}
      {/* <section className="relative w-full h-screen">
        <Image
          src="/unseen-studio-s9CC2SKySJM-unsplash.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={headerStyle}>
            Hello World!!!
          </h1>
        </div>
      </section> */}

      {/* Quote Section */}
      {/* <section>
        <div className="flex items-center justify-centerw-full mx-auto rounded-md  h-screen overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h2 className={sectionStyle}>
              "The only limit to our realization of tomorrow will be our doubts of today."
            </h2>
          </div>
        </div>
      </section> */}
    </>
  )
}