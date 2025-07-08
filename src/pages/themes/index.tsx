import { GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import Link from "next/link";

interface Theme {
  id: string;
  name: string;
  description: string;
  author: string;
  category: string;
  downloads: number;
  version: string;
  lastUpdated: string;
  tags: string[];
  features: string[];
  preview: string;
  darkMode: boolean;
  lightMode: boolean;
  githubUrl: string;
  rating: number;
}

interface ThemesProps {
  themes: Theme[];
}

export default function Themes({ themes }: ThemesProps) {
  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000000) return `${(downloads / 1000000).toFixed(1)}M`;
    if (downloads >= 1000) return `${(downloads / 1000).toFixed(1)}K`;
    return downloads.toString();
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="currentColor"/>
                <stop offset="50%" stopColor="transparent"/>
              </linearGradient>
            </defs>
            <path fill={`url(#half-${i})`} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      }
    }
    return <div className="flex items-center gap-1">{stars}</div>;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Minimal': 'bg-blue-100 text-blue-800',
      'Productivity': 'bg-green-100 text-green-800',
      'Dark': 'bg-purple-100 text-purple-800',
      'Academic': 'bg-amber-100 text-amber-800',
      'Cool': 'bg-cyan-100 text-cyan-800',
    };
    return colors[category as keyof typeof colors] || 'bg-slate-100 text-slate-800';
  };

  return (
    <>
      <Head>
        <title>Obsidian Themes - Beautiful Visual Styles for Your Vault</title>
        <meta
          name="description"
          content="Discover beautiful Obsidian themes to customize your vault&apos;s appearance. From minimal to dark themes, find the perfect visual style for your workflow."
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Beautiful Themes for Your Vault
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Transform your Obsidian experience with carefully curated themes that enhance both aesthetics and functionality
            </p>
          </div>
        </div>
      </div>

      {/* Themes Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                {/* Theme Preview */}
                <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-slate-400">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Theme Info */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{theme.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(theme.category)}`}>
                      {theme.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">by {theme.author}</p>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {theme.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {renderStars(theme.rating)}
                    <span className="text-xs text-slate-500">
                      {theme.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    <span className="text-xs">{formatDownloads(theme.downloads)}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {theme.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="inline-block px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                    {theme.tags.length > 3 && (
                      <span className="text-xs text-slate-500 px-2 py-1">
                        +{theme.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Mode Support */}
                <div className="flex items-center gap-2 mb-4">
                  {theme.lightMode && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md text-xs">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Light
                    </span>
                  )}
                  {theme.darkMode && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-800 text-white rounded-md text-xs">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      Dark
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    href={theme.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    View on GitHub
                  </Link>
                  <button className="px-3 py-2 border border-slate-300 hover:bg-slate-50 rounded-lg text-slate-600 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Version and Last Updated */}
                <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between text-xs text-slate-500">
                  <span>v{theme.version}</span>
                  <span>{new Date(theme.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<ThemesProps> = async () => {
  const themesPath = path.join(process.cwd(), "data", "json", "themes.json");
  const themesData = fs.readFileSync(themesPath, "utf8");
  const themes: Theme[] = JSON.parse(themesData);

  return {
    props: {
      themes,
    },
  };
};
