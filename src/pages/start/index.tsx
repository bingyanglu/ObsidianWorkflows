import Head from "next/head";
import Link from "next/link";

export default function StartHere() {
  const steps = [
    {
      id: 1,
      title: "Install Obsidian",
      description: "Download and install Obsidian on your device",
      content: "Head to obsidian.md and download the app for your operating system. Obsidian is free for personal use and available on Windows, Mac, Linux, iOS, and Android.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Create Your First Vault",
      description: "Set up your knowledge base structure",
      content: "A vault is a folder on your computer where Obsidian stores your notes. Create a new vault and give it a meaningful name. This will be your digital brain's home.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0a2 2 0 012-2h6l2 2h6a2 2 0 012 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Write Your First Note",
      description: "Learn the basics of Markdown and linking",
      content: "Create a note and experiment with basic Markdown formatting. Use [[double brackets]] to link to other notes, even if they don't exist yet. This is where the magic begins!",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Explore Core Features",
      description: "Discover graph view, tags, and search",
      content: "Try the graph view to see connections between your notes. Use #tags to categorize content. Master the search function - it's incredibly powerful for finding information.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Add Your First Plugin",
      description: "Extend functionality with community plugins",
      content: "Go to Settings > Community Plugins and explore the available options. Start with popular ones like Calendar or Templater to enhance your workflow.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1a2 2 0 104 0V4z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Build Your Workflow",
      description: "Develop a sustainable knowledge management system",
      content: "Create templates for different types of notes, establish naming conventions, and develop daily/weekly review habits. The key is consistency over perfection.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ];

  const tips = [
    {
      title: "Start Small",
      description: "Don't try to organize everything at once. Begin with one topic or project and expand gradually."
    },
    {
      title: "Link Liberally",
      description: "The power of Obsidian comes from connections. Link related concepts even if the connection seems obvious."
    },
    {
      title: "Use Daily Notes",
      description: "Enable daily notes for quick capture and reflection. It's a great habit for consistent note-taking."
    },
    {
      title: "Don't Over-Engineer",
      description: "Keep your system simple initially. You can always add complexity as you understand your needs better."
    }
  ];

  return (
    <>
      <Head>
        <title>Start Here - Your Obsidian Journey Begins</title>
        <meta
          name="description"
          content="New to Obsidian? Start here! A comprehensive beginner's guide to help you set up your first vault and begin building your second brain."
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome to Your Obsidian Journey
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              New to Obsidian? You&apos;re in the right place. This guide will help you go from zero to building your first digital brain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://obsidian.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Obsidian
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-slate-900 rounded-xl text-purple-400 font-semibold transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Browse Workflows
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Steps */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Getting Started in 6 Steps
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Follow this step-by-step guide to set up your Obsidian vault and start building your knowledge system
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex gap-8 mb-12">
                {/* Step Number and Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-4">
                    {step.icon}
                  </div>
                  <div className="w-16 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-100 text-purple-800 rounded-full text-sm font-bold">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-lg text-slate-600 mb-3">{step.description}</p>
                  <p className="text-slate-700 leading-relaxed">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Pro Tips for Success
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Learn from common beginner mistakes and set yourself up for long-term success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{tip.title}</h3>
                <p className="text-slate-600 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Ready for the Next Level?
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              Once you&apos;ve mastered the basics, explore our advanced workflows and plugin recommendations
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/articles"
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Advanced Workflows</h3>
                <p className="text-slate-600">Discover productivity systems used by power users</p>
              </Link>

              <Link
                href="/resources"
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1a2 2 0 104 0V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Essential Plugins</h3>
                <p className="text-slate-600">Hand-picked plugins with honest reviews</p>
              </Link>

              <Link
                href="/themes"
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5v12a2 2 0 104 0V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Beautiful Themes</h3>
                <p className="text-slate-600">Customize your vault&apos;s appearance</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
