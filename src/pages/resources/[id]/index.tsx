import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs";
import type { Plugin } from "@/types/common";

interface PluginDetailProps {
  plugin: Plugin;
}

export default function PluginDetail({ plugin }: PluginDetailProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const formatDownloads = (downloads?: number) => {
    if (!downloads) return 'Unknown';
    if (downloads >= 1000000) return `${(downloads / 1000000).toFixed(1)}M`;
    if (downloads >= 1000) return `${(downloads / 1000).toFixed(1)}K`;
    return downloads.toString();
  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor"/>
                <stop offset="50%" stopColor="transparent"/>
              </linearGradient>
            </defs>
            <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      }
    }
    return <div className="flex items-center gap-1">{stars}</div>;
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'query': return 'bg-blue-100 text-blue-800';
      case 'template': return 'bg-green-100 text-green-800';
      case 'calendar': return 'bg-purple-100 text-purple-800';
      case 'board': return 'bg-orange-100 text-orange-800';
      case 'visualization': return 'bg-pink-100 text-pink-800';
      case 'organization': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <>
      <Head>
        <title>{plugin.name} - ObsidianHub</title>
        <meta name="description" content={plugin.description} />
      </Head>

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
          <div className="container mx-auto px-4 py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-slate-300 mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/resources" className="hover:text-white transition-colors">
                Plugins
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-purple-300">{plugin.name}</span>
            </nav>

            {/* Plugin Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{plugin.name}</h1>
                    {plugin.author && (
                      <p className="text-slate-300">by {plugin.author}</p>
                    )}
                  </div>
                </div>

                <p className="text-xl text-slate-200 leading-relaxed mb-6">
                  {plugin.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  {plugin.rating && (
                    <div className="flex items-center gap-2">
                      {renderStars(plugin.rating)}
                      <span className="text-slate-300 font-medium">
                        {plugin.rating.toFixed(1)}
                      </span>
                    </div>
                  )}
                  {plugin.downloads && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      <span className="font-medium">{formatDownloads(plugin.downloads)} downloads</span>
                    </div>
                  )}
                  {plugin.category && (
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(plugin.category)}`}>
                      {plugin.category}
                    </span>
                  )}
                </div>

                {/* Tags */}
                {plugin.tags && plugin.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {plugin.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 lg:min-w-[240px]">
                <Link
                  href={plugin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Install Plugin
                </Link>
                {plugin.githubUrl && (
                  <Link
                    href={plugin.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-white font-medium transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              {plugin.features && plugin.features.length > 0 && (
                <section className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Key Features</h2>
                  <ul className="space-y-4">
                    {plugin.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Review */}
              {plugin.review && (
                <section className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Our Review</h2>
                    {plugin.reviewRating && (
                      <div className="flex items-center gap-2">
                        {renderStars(plugin.reviewRating)}
                        <span className="text-slate-600 font-medium">
                          {plugin.reviewRating}/5
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {plugin.review}
                  </p>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Plugin Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Plugin Information</h3>
                <div className="space-y-3">
                  {plugin.version && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Version</span>
                      <span className="font-medium text-slate-800">v{plugin.version}</span>
                    </div>
                  )}
                  {plugin.lastUpdated && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Last Updated</span>
                      <span className="font-medium text-slate-800">{plugin.lastUpdated}</span>
                    </div>
                  )}
                  {plugin.downloads && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Downloads</span>
                      <span className="font-medium text-slate-800">{formatDownloads(plugin.downloads)}</span>
                    </div>
                  )}
                  {plugin.author && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Author</span>
                      <span className="font-medium text-slate-800">{plugin.author}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Related Plugins */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Related Plugins</h3>
                <p className="text-slate-600 text-sm">
                  Discover more plugins in the {plugin.category} category
                </p>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 mt-4 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  Browse All Plugins
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const resourcesPath = path.join(process.cwd(), "data", "json", "resources.json");
  const resources = JSON.parse(fs.readFileSync(resourcesPath, "utf8"));

  const paths = resources
    .filter((plugin: Plugin) => plugin.id)
    .map((plugin: Plugin) => ({
      params: { id: plugin.id }
    }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resourcesPath = path.join(process.cwd(), "data", "json", "resources.json");
  const resources = JSON.parse(fs.readFileSync(resourcesPath, "utf8"));

  const plugin = resources.find((p: Plugin) => p.id === params?.id);

  if (!plugin) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      plugin
    }
  };
};
