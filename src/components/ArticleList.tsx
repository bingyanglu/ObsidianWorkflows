import Link from "next/link";

interface Article {
  id: string;
  title: string;
  description: string;
  date?: string;
}

interface ArticleListProps {
  articles: Article[];
  showMoreLink?: boolean;
}

export default function ArticleList({ articles, showMoreLink = true }: ArticleListProps) {
  // Function to get plugin type from title (simplified)
  const getPluginType = (title: string) => {
    if (title.toLowerCase().includes('dataview')) return 'query';
    if (title.toLowerCase().includes('kanban')) return 'board';
    if (title.toLowerCase().includes('calendar')) return 'calendar';
    if (title.toLowerCase().includes('graph')) return 'network';
    if (title.toLowerCase().includes('template')) return 'template';
    return 'plugin';
  };

  const getPluginIcon = (type: string) => {
    const iconClass = "w-6 h-6";

    switch (type) {
      case 'query':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'board':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'network':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
      case 'template':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (!articles || articles.length === 0) {
    return (
      <section className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">No Articles Yet</h3>
          <p className="text-slate-600">We&apos;re working hard to prepare amazing Obsidian plugin tutorials for you</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      {showMoreLink && (
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Latest Tutorials</h2>
            <p className="text-slate-600">Explore the powerful features of Obsidian plugins</p>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg font-medium transition-colors duration-200"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => {
          const pluginType = getPluginType(article.title);
          const pluginIcon = getPluginIcon(pluginType);

          return (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="group block"
            >
              <article className="plugin-card group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                    {pluginIcon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-800 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2 mb-1">
                      {article.title}
                    </h3>
                    {article.date && (
                      <time className="text-sm text-slate-500">
                        {formatDate(article.date)}
                      </time>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.description}
                </p>

                <div className="flex items-center justify-between">
                                    <span className="badge">
                    {pluginType === 'plugin' ? 'General Plugin' :
                     pluginType === 'query' ? 'Dataview' :
                     pluginType === 'board' ? 'Kanban' :
                     pluginType === 'calendar' ? 'Calendar Plugin' :
                     pluginType === 'network' ? 'Graph Analysis' :
                     pluginType === 'template' ? 'Template Plugin' : 'Plugin Tutorial'}
                  </span>

                  <div className="flex items-center gap-1 text-purple-600 group-hover:text-purple-700 transition-colors duration-200">
                    <span className="text-sm font-medium">Read</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
