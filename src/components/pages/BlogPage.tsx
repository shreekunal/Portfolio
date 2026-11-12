import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Tag, CheckCircle2, ArrowRight, Search, X, ExternalLink, BookOpen, ChevronDown, ChevronRight, Layers } from 'lucide-react';
import { BLOG_POSTS, PERSONAL_INFO } from '../../data/portfolioData';
import { BlogPost, BlogArticleSection, BlogSectionGroup } from '../../types';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useSoundEffects } from '../../hooks/useSoundEffects';

// Helper to render inline markdown: **bold**, `code`, etc.
const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-zinc-950 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-white/[0.08] text-crimson-dark dark:text-crimson border border-zinc-200 dark:border-white/10"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
};

export const BlogPage: React.FC = () => {
  const { playHover, playClick } = useSoundEffects();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openGroups, setOpenGroups] = useState<{ [groupId: string]: boolean }>({
    'group-overview': true,
    'group-spa-subscribe-booster': true
  });
  const [activeGroupId, setActiveGroupId] = useState<string>('group-overview');

  const scrollToGroup = (groupId: string) => {
    playClick();
    // Ensure the targeted group is expanded
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: true
    }));
    setActiveGroupId(groupId);
    const element = document.getElementById(groupId);
    if (element) {
      const yOffset = -90; // account for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleGroup = (groupId: string) => {
    playClick();
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  const expandAllGroups = (post: BlogPost) => {
    playClick();
    if (!post.groups) return;
    const allOpen: { [k: string]: boolean } = {};
    post.groups.forEach((g) => { allOpen[g.id] = true; });
    setOpenGroups(allOpen);
  };

  // Scrollspy: update activeGroupId based on current viewport
  useEffect(() => {
    if (!activePost?.groups) return;
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (const grp of activePost.groups!) {
        const el = document.getElementById(grp.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveGroupId(grp.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePost]);

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

              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-normal leading-relaxed mb-6">
                {activePost.subtitle}
              </p>

              {/* Source References Banner */}
              {activePost.sources && activePost.sources.length > 0 && (
                <div className="p-4 rounded-xl bg-zinc-100/80 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                    <BookOpen className="w-3.5 h-3.5 text-crimson" />
                    <span>Official References & Learning Missions</span>
                  </div>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 pt-1">
                    {activePost.sources.map((src, sIdx) => (
                      <a
                        key={sIdx}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white dark:bg-black/50 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 hover:border-crimson hover:text-crimson transition-colors"
                      >
                        <span className="text-crimson font-bold">[{src.badge}]</span>
                        <span className="truncate max-w-[280px] sm:max-w-[340px]">{src.title}</span>
                        <ExternalLink className="w-3 h-3 text-zinc-400 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Collapsible Mission Groups / Sections */}
            {activePost.groups && activePost.groups.length > 0 ? (
              <div className="space-y-6">
                {/* Expand / Collapse Controls */}
                <div className="flex items-center justify-between gap-2 pb-2 text-xs font-mono text-zinc-500">
                  <div className="flex items-center gap-1.5 font-bold text-zinc-800 dark:text-zinc-200">
                    <Layers className="w-4 h-4 text-crimson" />
                    <span>{activePost.groups.length} Collapsible Learning Units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => expandAllGroups(activePost)}
                      onMouseEnter={playHover}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-zinc-200 dark:border-white/10 hover:border-crimson hover:text-crimson transition-colors"
                    >
                      Expand All
                    </button>
                    <button
                      onClick={() => collapseAllGroups(activePost)}
                      onMouseEnter={playHover}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-zinc-200 dark:border-white/10 hover:border-crimson hover:text-crimson transition-colors"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                {/* Render Accordion Group Cards */}
                {activePost.groups.map((grp: BlogSectionGroup) => {
                  const isOpen = openGroups[grp.id] ?? false;
                  return (
                    <div
                      key={grp.id}
                      className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0d0d11] overflow-hidden transition-all shadow-sm"
                    >
                      {/* Accordion Group Header */}
                      <button
                        onClick={() => toggleGroup(grp.id)}
                        onMouseEnter={playHover}
                        className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition-colors group cursor-pointer"
                      >
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            {grp.badge && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wide uppercase bg-crimson/10 text-crimson-dark dark:text-crimson border border-crimson/20">
                                {grp.badge}
                              </span>
                            )}
                            <span className="text-[11px] font-mono text-zinc-400">
                              {grp.sections.length} topic{grp.sections.length > 1 ? 's' : ''}
                            </span>
                          </div>
                          <h2 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white group-hover:text-crimson transition-colors">
                            {grp.title}
                          </h2>
                          {grp.subtitle && (
                            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-normal">
                              {grp.subtitle}
                            </p>
                          )}
                        </div>

                        <div className="p-2 rounded-full border border-zinc-200 dark:border-white/10 group-hover:border-crimson text-zinc-500 group-hover:text-crimson transition-colors shrink-0">
                          {isOpen ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      {/* Accordion Group Content */}
                      {isOpen && (
                        <div className="p-5 sm:p-7 border-t border-zinc-100 dark:border-white/5 space-y-8 bg-zinc-50/40 dark:bg-black/20">
                          {grp.sections.map((sec: BlogArticleSection, sIdx: number) => (
                            <section key={sIdx} className="space-y-4">
                              <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-950 dark:text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                                <span>{sec.heading}</span>
                              </h3>

                              {sec.paragraphs.map((p: string, pIdx: number) => (
                                <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                                  {renderFormattedText(p)}
                                </p>
                              ))}

                              {/* 1:1 Action Steps with Directly Embedded Images & Tables */}
                              {sec.actionSteps && sec.actionSteps.length > 0 && (
                                <div className="space-y-6 my-6">
                                  {sec.actionSteps.map((ast, aIdx) => (
                                    <div
                                      key={aIdx}
                                      className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-[#111116] space-y-3.5 shadow-sm transition-all hover:border-crimson/40"
                                    >
                                      {/* Step Instruction */}
                                      <div className="flex items-start gap-3">
                                        {ast.stepNumber !== undefined && (
                                          <span className="w-6 h-6 rounded-full bg-crimson/15 text-crimson font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-crimson/30">
                                            {ast.stepNumber}
                                          </span>
                                        )}
                                        <div className="text-sm sm:text-base leading-relaxed text-zinc-900 dark:text-zinc-100 flex-1 font-medium">
                                          {renderFormattedText(ast.instruction)}
                                        </div>
                                      </div>

                                      {/* Callout Note if present */}
                                      {ast.note && (
                                        <div className="ml-9 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-mono">
                                          <strong className="text-amber-600 dark:text-amber-400">Note: </strong>
                                          {renderFormattedText(ast.note)}
                                        </div>
                                      )}

                                      {/* Direct 1:1 Step Image */}
                                      {ast.image && (
                                        <div className="ml-0 sm:ml-9 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-black/50 shadow-sm">
                                          <img
                                            src={ast.image}
                                            alt={ast.imageCaption || `Step ${ast.stepNumber || ''}`}
                                            className="w-full h-auto object-contain max-h-[520px] bg-white dark:bg-zinc-900"
                                            loading="lazy"
                                          />
                                          {ast.imageCaption && (
                                            <div className="px-4 py-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-white/[0.02] border-t border-zinc-200 dark:border-white/10 flex items-center gap-2">
                                              <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                                              <span>{ast.imageCaption}</span>
                                            </div>
                                          )}
                                        </div>
                                      )}

                                      {/* Direct 1:1 Step Table */}
                                      {ast.table && (
                                        <div className="ml-0 sm:ml-9 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-[#14141a] overflow-hidden shadow-sm">
                                          <div className="overflow-x-auto">
                                            <table className="w-full text-left text-xs sm:text-sm">
                                              <thead>
                                                <tr className="border-b border-zinc-200 dark:border-white/10 bg-zinc-100/70 dark:bg-white/[0.03]">
                                                  {ast.table.headers.map((h, hIdx) => (
                                                    <th
                                                      key={hIdx}
                                                      className="px-4 py-2.5 font-bold text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider"
                                                    >
                                                      {renderFormattedText(h)}
                                                    </th>
                                                  ))}
                                                </tr>
                                              </thead>
                                              <tbody className="divide-y divide-zinc-200/60 dark:divide-white/5 font-mono text-xs">
                                                {ast.table.rows.map((row, rIdx) => (
                                                  <tr
                                                    key={rIdx}
                                                    className="hover:bg-white dark:hover:bg-white/[0.02] transition-colors"
                                                  >
                                                    {row.map((cell, cIdx) => (
                                                      <td
                                                        key={cIdx}
                                                        className="px-4 py-2.5 text-zinc-800 dark:text-zinc-300"
                                                      >
                                                        {renderFormattedText(cell)}
                                                      </td>
                                                    ))}
                                                  </tr>
                                                ))}
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Curated Milestone Screenshot Figures */}
                              {sec.figures && sec.figures.length > 0 && (
                                <div className="space-y-6 my-6">
                                  {sec.figures.map((fig, fIdx) => (
                                    <div
                                      key={fIdx}
                                      className="rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-black/50 shadow-sm"
                                    >
                                      <img
                                        src={fig.url}
                                        alt={fig.caption}
                                        className="w-full h-auto object-contain max-h-[460px] bg-white dark:bg-zinc-900"
                                        loading="lazy"
                                      />
                                      {fig.caption && (
                                        <div className="px-4 py-2.5 text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-white/[0.02] border-t border-zinc-200 dark:border-white/10 flex items-center gap-2">
                                          <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                                          <span>{fig.caption}</span>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Single Fallback Image */}
                              {!sec.figures && sec.image && (
                                <div className="my-6 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-black/50 shadow-sm">
                                  <img
                                    src={sec.image}
                                    alt={sec.imageCaption || sec.heading}
                                    className="w-full h-auto object-contain max-h-[460px] bg-white dark:bg-zinc-900"
                                    loading="lazy"
                                  />
                                  {sec.imageCaption && (
                                    <div className="px-4 py-2.5 text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-white/[0.02] border-t border-zinc-200 dark:border-white/10 flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                                      <span>{sec.imageCaption}</span>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Clean Formatted Data Tables */}
                              {sec.tables && sec.tables.length > 0 && (
                                <div className="space-y-4 my-4">
                                  {sec.tables.map((tbl, tIdx) => (
                                    <div
                                      key={tIdx}
                                      className="rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#121217] overflow-hidden shadow-sm"
                                    >
                                      {tbl.caption && (
                                        <div className="px-4 py-2.5 bg-zinc-100/70 dark:bg-white/[0.03] border-b border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-800 dark:text-zinc-200 font-semibold">
                                          {renderFormattedText(tbl.caption)}
                                        </div>
                                      )}
                                      <div className="overflow-x-auto">
                                        <table className="w-full text-left text-xs sm:text-sm">
                                          <thead>
                                            <tr className="border-b border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.02]">
                                              {tbl.headers.map((h, hIdx) => (
                                                <th
                                                  key={hIdx}
                                                  className="px-4 py-2.5 font-bold text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider"
                                                >
                                                  {renderFormattedText(h)}
                                                </th>
                                              ))}
                                            </tr>
                                          </thead>
                                          <tbody className="divide-y divide-zinc-200/60 dark:divide-white/5 font-mono text-xs">
                                            {tbl.rows.map((row, rIdx) => (
                                              <tr
                                                key={rIdx}
                                                className="hover:bg-zinc-50/50 dark:hover:bg-white/[0.01] transition-colors"
                                              >
                                                {row.map((cell, cIdx) => (
                                                  <td
                                                    key={cIdx}
                                                    className="px-4 py-2.5 text-zinc-800 dark:text-zinc-300"
                                                  >
                                                    {renderFormattedText(cell)}
                                                  </td>
                                                ))}
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Numbered / Action Checkpoints */}
                              {sec.keyPoints && (
                                <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/10 space-y-2.5">
                                  <div className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                                    Action Checkpoints
                                  </div>
                                  <ul className="space-y-2">
                                    {sec.keyPoints.map((kp: string, kIdx: number) => (
                                      <li key={kIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                                        <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{renderFormattedText(kp)}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
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
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Fallback flat sections if no groups defined */
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

                    {sec.image && (
                      <div className="my-6 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-950/5 dark:bg-black/50">
                        <img
                          src={sec.image}
                          alt={sec.imageCaption || sec.heading}
                          className="w-full h-auto object-contain max-h-[480px] bg-white dark:bg-zinc-900"
                          loading="lazy"
                        />
                        {sec.imageCaption && (
                          <div className="px-4 py-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-white/[0.02] border-t border-zinc-200 dark:border-white/10">
                            {sec.imageCaption}
                          </div>
                        )}
                      </div>
                    )}

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
            )}

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
