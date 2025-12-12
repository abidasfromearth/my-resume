'use client';

import Image from 'next/image';
import { useState } from 'react';
import { submitContact } from './actions';

const skills = [
  'TypeScript', 'JavaScript', 'Java', 'Playwright', 'Cypress', 
  'Selenium', 'WebdriverIO', 'K6', 'React', 'Next.js', 
  'Node.js', 'Docker', 'Git', 'TestNG', 'Appium'
];

const experience = [
  {
    title: 'AQA Engineer',
    company: 'FavBet Tech',
    location: 'Remote',
    period: 'July 2021 - Present',
    tech: ['Playwright', 'TypeScript', 'K6'],
    description: 'Developed two full-fledged web automation frameworks from scratch and integrated them into CI/CD with nightly runs. Closely collaborated with development and QA teams to ensure stable releases and rapid regression detection.'
  },
  {
    title: 'FE-Engineer & Product Manager',
    company: 'Lexoria Global Ltd',
    location: 'Alicante',
    period: 'July 2024 - July 2025',
    tech: ['React', 'Next.js', 'Ant Design', 'TypeScript'],
    description: 'Led the dev team, managed stakeholder communication, defined product requirements. Took ownership of complex UI implementation, performance optimization, and integration with payment systems.'
  },
  {
    title: 'AQA Engineer',
    company: 'Fozzy Group',
    location: 'Bali',
    period: 'June 2023 - November 2024',
    tech: ['Cypress', 'TypeScript', 'Playwright', 'Docker'],
    description: 'Built and maintained robust E2E test suites for a food delivery admin system. Actively mentored junior team members, helping them ramp up quickly and maintain high code standards.'
  },
  {
    title: 'AQA Engineer',
    company: 'Diseño Global Meridiano',
    location: 'Alicante, Spain',
    period: 'September 2022 - June 2023',
    tech: ['Selenium', 'Cypress', 'Java', 'Appium'],
    description: 'Support existing framework and create new WebDriver-based framework. Created and supported auto-tests including mobile automation.'
  },
  {
    title: 'Junior AQA Engineer',
    company: 'AB-Soft',
    location: 'Odessa, Ukraine',
    period: 'August 2021 - July 2022',
    tech: ['Selenium', 'TypeScript', 'WebDriver', 'Playwright'],
    description: 'Created new WebDriver-based framework from scratch. Developed and maintained automation test suites.'
  },
  {
    title: 'Trainee AQA Engineer',
    company: 'AB-Soft',
    location: 'Odessa, Ukraine',
    period: 'July 2020 - August 2021',
    tech: ['Selenium', 'TestCafe', 'JavaScript', 'Elasticsearch'],
    description: 'Autotest creation and support, maintained existing framework, worked with documentation.'
  }
];

export default function Home() {
  const [formState, setFormState] = useState<{ success?: boolean; message?: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const result = await submitContact(formData);
    setFormState(result);
    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-grid">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/5 via-transparent to-[#00a3ff]/5" />
        <div className="max-w-6xl mx-auto px-6 py-20 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 opacity-0 animate-fade-in-up">
              <div className="inline-block px-4 py-2 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 mb-6">
                <span className="text-[#00d4aa] text-sm font-medium">Available for opportunities</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                Vladyslav<br />
                <span className="gradient-text">Bondariev</span>
              </h1>
              <p className="text-2xl text-[#8888a0] mb-6">Automation QA Engineer</p>
              <p className="text-lg text-[#8888a0] max-w-xl leading-relaxed mb-8">
                4+ years of experience building robust test automation frameworks. 
                Passionate about quality, clean code, and continuous improvement.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-[#8888a0]">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  Chisinau, Moldova
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  abidafromearth@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  +34 627 306 794
                </span>
              </div>
            </div>
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#00d4aa] to-[#00a3ff] p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/me.jpg" 
                    alt="Vladyslav Bondariev" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 opacity-0 animate-fade-in-up">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up stagger-1">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 opacity-0 animate-fade-in-up">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div 
                key={index} 
                className="card p-8 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#f0f0f5]">{job.title}</h3>
                    <p className="text-[#00d4aa] font-medium">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#8888a0]">{job.period}</p>
                    <p className="text-[#8888a0] text-sm">{job.location}</p>
                  </div>
                </div>
                <p className="text-[#8888a0] mb-4 leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-[#2a2a3a] text-[#00d4aa]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 opacity-0 animate-fade-in-up">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="card p-8 opacity-0 animate-fade-in-up stagger-1">
            <h3 className="text-xl font-semibold text-[#f0f0f5] mb-2">QA Automation</h3>
            <p className="text-[#00d4aa] font-medium mb-4">Hillel IT School, Odessa</p>
            <ul className="text-[#8888a0] space-y-2">
              <li>• QA Manual Course (February 2018 - July 2018)</li>
              <li>• Database Course & Selenium/JS Stepik Course</li>
              <li>• English Access Microscholarship Program (Upper-Intermediate)</li>
              <li>• Certificate "Ukończenia kursu z języka Polskiego" (B2)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 opacity-0 animate-fade-in-up">
            <span className="gradient-text">Languages</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fade-in-up stagger-1">
            {['English', 'Ukrainian', 'Russian', 'Polish (B2)'].map((lang) => (
              <div key={lang} className="card p-6 text-center">
                <span className="text-[#f0f0f5] font-medium">{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20" id="contact">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center opacity-0 animate-fade-in-up">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <form action={handleSubmit} className="card p-8 space-y-6 opacity-0 animate-fade-in-up stagger-1">
            <div>
              <label className="block text-sm font-medium text-[#8888a0] mb-2">Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#8888a0] mb-2">Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#8888a0] mb-2">Message</label>
              <textarea 
                name="message" 
                rows={5} 
                required 
                placeholder="Your message..."
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {formState && (
              <div className={`p-4 rounded-lg text-center ${
                formState.success 
                  ? 'bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/30' 
                  : 'bg-red-500/10 text-red-400 border border-red-500/30'
              }`}>
                {formState.message}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto px-6 text-center text-[#8888a0]">
          <p>© 2025 Vladyslav Bondariev. All rights reserved.</p>
          <a 
            href="https://www.linkedin.com/in/vladislav-bondairev-48ab771a7/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-[#00d4aa] hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
