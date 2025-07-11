import Link from "next/link";

export function Footer() {
  const navItems = [
    {
      label: "Workflows",
      path: "/articles",
    },
    {
      label: "Plugin Reviews",
      path: "/resources",
    },
    {
      label: "Themes",
      path: "/themes",
    },
    {
      label: "Start Here",
      path: "/start",
    },
  ];

  const communityLinks = [
    {
      name: "Twitter/X",
      url: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com/bingyanglu/ObsidianWorkflows",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  const resourceLinks = [
    {
      name: "Plugin Development Guide",
      url: "https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin"
    },
    {
      name: "Theme Creation Tutorial",
      url: "https://docs.obsidian.md/Themes/App+themes/Build+a+theme"
    },
    {
      name: "API Documentation",
      url: "https://docs.obsidian.md/Reference/TypeScript+API"
    },
    {
      name: "FAQ",
      url: "https://help.obsidian.md/"
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Obsidian Workflows
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              We provide proven, step-by-step workflows and honest plugin reviews to help you build a powerful, personalized second brain.
            </p>
            <div className="flex space-x-4">
              {communityLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-purple-400 transition-colors duration-200"
                  title={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Dev Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Legal & Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:bingqilinpeishenme@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Obsidian Workflows. Focused on building powerful second brains
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-slate-500 text-xs">
                Not an official Obsidian website · Dedicated to promoting excellent knowledge management tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
