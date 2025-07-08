// components/ResourceList.js
import Link from "next/link";
import { useRouter } from "next/router";
import type { Plugin } from "@/types/common";

interface ResourceListProps {
  resources: Plugin[];
  showMoreLink?: boolean;
}

export default function ResourceList({ resources, showMoreLink = true }: ResourceListProps) {
  const getCategoryIcon = (category?: string) => {
    const iconClass = "w-5 h-5";

    switch (category?.toLowerCase()) {
      case 'productivity':
      case '效率':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'note-taking':
      case '笔记':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        );
      case 'visualization':
      case '可视化':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'organization':
      case '组织':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        );
    }
  };

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
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
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
          <svg key={i} className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      }
    }
    return <div className="flex items-center gap-1">{stars}</div>;
  };

  if (!resources || resources.length === 0) {
    return (
      <section className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">No Plugins Yet</h3>
          <p className="text-slate-600">We&apos;re collecting more excellent Obsidian plugins</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      {showMoreLink && (
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Featured Plugins</h2>
            <p className="text-slate-600">Discover Obsidian plugins that boost productivity</p>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg font-medium transition-colors duration-200"
          >
            Browse All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((plugin, index) => (
          <div
            key={index}
            className="plugin-card group hover:shadow-xl hover:-translate-y-1"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                  {getCategoryIcon(plugin.category)}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 group-hover:text-purple-600 transition-colors duration-200">
                    {plugin.name}
                  </h3>
                  {plugin.author && (
                    <p className="text-sm text-slate-500">by {plugin.author}</p>
                  )}
                </div>
              </div>
              {plugin.version && (
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                  v{plugin.version}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {plugin.description}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                {plugin.rating && (
                  <div className="flex items-center gap-1">
                    {renderStars(plugin.rating)}
                    <span className="text-xs text-slate-500 ml-1">
                      {plugin.rating.toFixed(1)}
                    </span>
                  </div>
                )}
                {plugin.downloads && (
                  <div className="flex items-center gap-1 text-slate-500">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    <span className="text-xs">{formatDownloads(plugin.downloads)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            {plugin.tags && plugin.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {plugin.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span key={tagIndex} className="badge">
                    {tag}
                  </span>
                ))}
                {plugin.tags.length > 3 && (
                  <span className="text-xs text-slate-500">
                    +{plugin.tags.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Action */}
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">
                {plugin.category && (
                  <span className="capitalize">{plugin.category}</span>
                )}
              </div>
              <Link
                href={plugin.id ? `/resources/${plugin.id}` : plugin.url}
                {...(!plugin.id && { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg transition-colors duration-200"
              >
                View Details
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={plugin.id ? "M9 5l7 7-7 7" : "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"} />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
