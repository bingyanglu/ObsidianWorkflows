import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Obsidian Workflows</title>
        <meta
          name="description"
          content="Our privacy policy explains how we collect, use, and protect your personal information on Obsidian Workflows."
        />
      </Head>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-slate-600">
                Last updated: January 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Introduction</h2>
                <p className="text-slate-600 leading-relaxed">
                  Welcome to Obsidian Workflows. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Information You Give Us</h3>
                    <p className="text-slate-600 leading-relaxed">
                      This includes data you provide when you subscribe to our newsletter, contact us via email, or interact with our content. This may include your name, email address, and any other information you choose to provide.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Information We Collect Automatically</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We may automatically collect certain information about your equipment, browsing actions, and patterns. This includes your IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">How We Use Your Information</h2>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To provide you with our newsletter and content updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To respond to your inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To improve our website and services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To analyze website usage and optimize user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To comply with legal obligations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Sharing and Disclosure</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To trusted service providers who assist us in operating our website (such as email service providers)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>When required by law or to protect our rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>In connection with a business transfer or acquisition</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Security</h2>
                <p className="text-slate-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Cookies and Tracking</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Remember your preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Understand how you interact with our website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improve our services</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  You can control cookies through your browser settings, but disabling cookies may affect your experience on our website.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Rights</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Access:</strong> Request access to your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Correction:</strong> Request correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Deletion:</strong> Request deletion of your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Opt-out:</strong> Unsubscribe from our newsletter at any time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Portability:</strong> Request transfer of your data to another service</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Third-Party Links</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our website may contain links to third-party websites (such as GitHub repositories, plugin pages, etc.). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies when you visit them.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Children&apos;s Privacy</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Changes to This Policy</h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700">
                    <strong>Email:</strong> <a href="mailto:bingqilinpeishenme@gmail.com" className="text-purple-600 hover:text-purple-700">bingqilinpeishenme@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
