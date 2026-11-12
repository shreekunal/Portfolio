import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Tag, CheckCircle2, ArrowRight, Search, X } from 'lucide-react';
import { BLOG_POSTS, PERSONAL_INFO } from '../../data/portfolioData';
import { BlogPost } from '../../types';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useSoundEffects } from '../../hooks/useSoundEffects';

export const BlogPage: React.FC = () => {
  const { playHover, playClick } = useSoundEffects();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sync with URL path (e.g. /blog/build-workzone)
  useEffect(() => {
    const parseSlugFromPath = () => {
      const path = window.location.pathname;
      const parts = path.split('/').filter(Boolean);
      if (parts.length >= 2 && parts[0] === 'blog') {
        setActiveSlug(parts[1]);
      } else {
        setActiveSlug(null);
      }
    };

    parseSlugFromPath();
    window.addEventListener('popstate', parseSlugFromPath);
    return () => window.removeEventListener('popstate', parseSlugFromPath);
  }, []);

  const openArticle = (slug: string) => {
    playClick();
    setActiveSlug(slug);
    window.history.pushState(null, '', `/blog/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeArticle = () => {
    playClick();
    setActiveSlug(null);
    window.history.pushState(null, '', '/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activePost: BlogPost | undefined = BLOG_POSTS.find((p) => p.slug === activeSlug);

  // Filter posts based on search query
  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.subtitle.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q) ||
      post.tags.some((t: string) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-[#fafafc] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 antialiased selection:bg-crimson/20 selection:text-crimson">
      {/* Floating Theme Switcher */}
      <ThemeToggle playClick={playClick} playHover={playHover} />

      {/* Top Navbar: ONLY Search Bar & About Me Button */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/90 dark:bg-black/90 border-b border-zinc-200 dark:border-white/10 px-4 md:px-8 py-3 transition-colors">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          {/* About Me Button - Navigates back to main portfolio */}
          <a
            href="/"
            onClick={playClick}
            onMouseEnter={playHover}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border transition-all shrink-0 bg-zinc-100 hover:bg-crimson/10 border-zinc-300 hover:border-crimson text-zinc-900 hover:text-crimson dark:bg-white/[0.05] dark:border-white/10 dark:text-zinc-200 dark:hover:text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-crimson" />
            <span>About me</span>
          </a>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeSlug) {
                  setActiveSlug(null);
                  window.history.pushState(null, '', '/blog');
                }
              }}
              placeholder="Search articles..."
              className="w-full pl-9 pr-8 py-1.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-0.5"
                title="Clear search"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-14">
        {activePost ? (
          /* ==================================================== */
          /* ARTICLE READING VIEW                                 */
          /* ==================================================== */
          <article className="animate-in fade-in duration-300">
            {/* Back to list button */}
            <button
              onClick={closeArticle}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-500 hover:text-crimson mb-8 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-crimson" />
              <span>Back to all articles</span>
            </button>

            {/* Article Header */}
            <div className="mb-10 pb-8 border-b border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-3">
                <span className="text-crimson font-bold">{activePost.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-zinc-400" />
                  {activePost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  {activePost.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight mb-3">
                {activePost.title}
              </h1>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-normal leading-relaxed">
                {activePost.subtitle}
              </p>
            </div>

            {/* Article Sections */}
            <div className="space-y-10 text-zinc-800 dark:text-zinc-200">
              {activePost.sections.map((sec, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    {sec.heading}
                  </h2>

                  {sec.paragraphs.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {p}
                    </p>
                  ))}

                  {sec.keyPoints && (
                    <ul className="space-y-2 py-2 pl-1">
                      {sec.keyPoints.map((kp: string, kIdx: number) => (
                        <li key={kIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                          <span>{kp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.code && (
                    <div className="my-4 p-4 rounded-xl font-mono text-xs overflow-x-auto bg-zinc-900 text-zinc-100 border border-zinc-800 shadow-sm leading-relaxed">
                      <pre>
                        <code>{sec.code}</code>
                      </pre>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Author Attribution & Footer */}
            <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-zinc-950 dark:text-white">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-xs font-mono text-zinc-500">
                  Associate SAP BTP Consultant @ Raven Infotech
                </div>
              </div>

              <button
                onClick={closeArticle}
                onMouseEnter={playHover}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-crimson hover:underline"
              >
                <span>← Back to all articles</span>
              </button>
            </div>
          </article>
        ) : (
          /* ==================================================== */
          /* DISTINGUISHABLE BOXED ARTICLES LIST                  */
          /* ==================================================== */
          <div className="animate-in fade-in duration-300">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-2">
                Technical Articles
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Engineering deep-dives and blueprints on SAP Build Work Zone, Process Automation, and SAP Fiori Elements.
              </p>
            </div>

            {/* Boxed Articles List */}
            <div className="space-y-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => openArticle(post.slug)}
                    onMouseEnter={playHover}
                    className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0e0e12] hover:border-crimson/50 hover:shadow-lg hover:shadow-crimson/5 transition-all duration-200 group cursor-pointer block"
                  >
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-zinc-500 mb-2.5">
                      <span className="px-2.5 py-0.5 rounded-full font-bold bg-crimson/10 border border-crimson/25 text-crimson-dark dark:text-crimson text-[11px]">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-zinc-400 text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-zinc-400" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-zinc-400" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white group-hover:text-crimson transition-colors leading-snug mb-2">
                      {post.title}
                    </h2>

                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-white/[0.06]">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Tag className="w-3 h-3 text-zinc-400" />
                        {post.tags.slice(0, 3).map((tag: string, tIdx: number) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-white/[0.05]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-crimson group-hover:translate-x-1 transition-transform">
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-zinc-300 dark:border-white/10 bg-white/50 dark:bg-white/[0.02]">
                  <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    No articles found matching "{searchQuery}"
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-crimson text-white hover:bg-crimson-bright transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>

            {/* Minimal Footer */}
            <div className="pt-10 mt-10 border-t border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
              <a href="/" className="hover:text-crimson transition-colors">
                ← Back to About me
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
