import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Obsidian Workflows</title>
        <meta
          name="description"
          content="Get in touch with the Obsidian Workflows team. We'd love to hear from you about your knowledge management journey."
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Have questions, suggestions, or want to share your Obsidian workflow? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Email Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Email Us</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Send us your questions, feedback, or workflow suggestions. We respond to all emails within 24-48 hours.
                </p>
                <a
                  href="mailto:bingqilinpeishenme@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  bingqilinpeishenme@gmail.com
                </a>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v2H4a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Join Our Newsletter</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Get weekly workflows, plugin reviews, and productivity tips delivered to your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-r-lg text-white text-sm font-medium transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    Can you review my specific workflow or plugin setup?
                  </h3>
                  <p className="text-slate-600">
                    Absolutely! We love hearing about unique workflows. Send us an email with details about your setup, and we might feature it in our newsletter or create a dedicated article about it.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    Do you accept guest posts or collaborations?
                  </h3>
                  <p className="text-slate-600">
                    Yes! If you have expertise in Obsidian workflows, plugin development, or knowledge management, we&apos;d love to collaborate. Reach out via email with your ideas.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    How do you choose which plugins to review?
                  </h3>
                  <p className="text-slate-600">
                    We focus on plugins that solve real workflow problems, have active development, and integrate well with existing setups. Community suggestions are always welcome!
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    Can you help me troubleshoot an Obsidian issue?
                  </h3>
                  <p className="text-slate-600">
                    While we can&apos;t provide individual technical support, we often create guides based on common issues. Send us your question – it might become our next tutorial!
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Follow Our Journey
              </h2>
              <div className="flex justify-center gap-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter/X
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
