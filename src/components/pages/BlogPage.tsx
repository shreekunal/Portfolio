import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Tag, CheckCircle2, ArrowRight, Search, X, ExternalLink, BookOpen, ChevronDown, ChevronRight, Layers, Copy, Check, FileCode, GraduationCap, Table, Filter, FileText, BarChart3, Boxes, SlidersHorizontal, Maximize2, ZoomIn } from 'lucide-react';
import { BLOG_POSTS, PERSONAL_INFO } from '../../data/portfolioData';
import { BlogPost, BlogArticleSection, BlogSectionGroup, BlogCodeBlock, BlogBuildingBlock } from '../../types';
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
          className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-white/[0.08] text-rose-700 dark:text-rose-300 border border-zinc-200 dark:border-white/10"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
};

const CodeBlockView: React.FC<BlogCodeBlock> = ({ code, filename, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const normalizedCode = code.includes('\n') ? code : code.replace(/\\n/g, '\n');
  const lines = normalizedCode.split('\n');

  const renderLine = (line: string) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith('<!--')) {
      return <span className="text-zinc-500 italic">{line}</span>;
    }

    const tokenRegex = /(\x27[^\x27]*\x27|"[^"]*"|@[\w\.\#]+|<!--.*?-->|<\/?[\w\.:]+|\b[\w\-]+=(?=["\x27])|\b(?:service|entity|projection|actions|action|returns|using|from|annotate|with|as|readonly|on)\b|\b(?:TypeName|TypeNamePlural|Title|Description|Value|Label|Criticality|ID|Target|Data|\$Type|Action|TargetProperties)\b|[()\[\]{},;:]|\w+|\s+|.)/g;
    const tokens = line.match(tokenRegex) || [line];

    return tokens.map((token, idx) => {
      if (token.startsWith("'") || token.startsWith('"')) {
        return <span key={idx} className="text-emerald-400">{token}</span>;
      }
      if (token.startsWith('@')) {
        return <span key={idx} className="text-rose-400 font-semibold">{token}</span>;
      }
      if (/^(service|entity|projection|actions|action|returns|using|from|annotate|with|as|readonly|on)$/.test(token)) {
        return <span key={idx} className="text-sky-400 font-bold">{token}</span>;
      }
      if (/^(TypeName|TypeNamePlural|Title|Description|Value|Label|Criticality|ID|Target|Data|\$Type|Action|TargetProperties)$/.test(token)) {
        return <span key={idx} className="text-amber-300 font-medium">{token}</span>;
      }
      if (/^<\/?[\w\.:]+/.test(token)) {
        return <span key={idx} className="text-sky-400 font-bold">{token}</span>;
      }
      if (/^[\w\-]+=(?=["'])/.test(token)) {
        return <span key={idx} className="text-amber-300">{token}</span>;
      }
      if (/^[()\[\]{},;:]$/.test(token)) {
        return <span key={idx} className="text-zinc-500">{token}</span>;
      }
      return <span key={idx} className="text-zinc-200">{token}</span>;
    });
  };

  return (
    <div className="my-5 rounded-xl border border-zinc-200 dark:border-white/10 bg-[#0d1117] shadow-lg overflow-hidden font-mono text-[12.5px]">
      {/* Code Header Bar */}
      <div className="px-4 py-2.5 bg-[#161b22] border-b border-zinc-200/10 dark:border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-300">
          <FileCode className="w-4 h-4 text-sky-400 shrink-0" />
          <span className="font-semibold text-xs text-zinc-200 tracking-wide">
            {filename || (language ? `${language.toUpperCase()} Snippet` : 'Source Code')}
          </span>
          {language && (
            <span className="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-white/10 text-zinc-300 border border-white/10">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all cursor-pointer"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 text-[11px] font-sans font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px] font-sans font-medium">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto leading-relaxed">
        <pre className="text-zinc-200 m-0 p-0 font-mono">
          <code className="block min-w-full">
            {lines.map((line, lIdx) => (
              <div key={lIdx} className="flex min-w-fit hover:bg-white/[0.03] transition-colors">
                <span className="select-none pr-4 text-right text-zinc-600 text-[11px] w-10 shrink-0 font-mono">
                  {lIdx + 1}
                </span>
                <span className="whitespace-pre font-mono">
                  {renderLine(line) || '\u00A0'}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

interface BlogImageViewProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  maxHeight?: string;
  onOpenLightbox: (src: string, caption?: string) => void;
  playHover?: () => void;
}

const BlogImageView: React.FC<BlogImageViewProps> = ({
  src,
  alt,
  caption,
  className = '',
  maxHeight = 'max-h-[520px]',
  onOpenLightbox,
  playHover,
}) => {
  return (
    <div
      onClick={() => onOpenLightbox(src, caption || alt)}
      onMouseEnter={playHover}
      className={`group relative rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-black/50 shadow-sm cursor-zoom-in transition-all hover:border-crimson/50 hover:shadow-md ${className}`}
      title="Click to view full screen"
    >
      <div className="relative overflow-hidden bg-white dark:bg-zinc-900">
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto object-contain ${maxHeight} transition-transform duration-200 group-hover:scale-[1.01]`}
          loading="lazy"
        />
        {/* Fullscreen indicator badge on hover */}
        <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 hover:bg-black text-white px-2.5 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 backdrop-blur-md shadow-lg pointer-events-none border border-white/10">
          <Maximize2 className="w-3 h-3 text-crimson" />
          <span>Full Screen</span>
        </div>
      </div>
      {caption && (
        <div className="px-4 py-2.5 text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-white/[0.02] border-t border-zinc-200 dark:border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
            <span className="truncate">{caption}</span>
          </div>
          <span className="text-[10px] text-zinc-400 font-sans uppercase shrink-0 flex items-center gap-1">
            <ZoomIn className="w-3 h-3" /> Max view
          </span>
        </div>
      )}
    </div>
  );
};

export const BlogPage: React.FC = () => {
  const { playHover, playClick } = useSoundEffects();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; caption?: string } | null>(null);
  const [openGroups, setOpenGroups] = useState<{ [groupId: string]: boolean }>({
    'group-overview': true,
    'group-spa-subscribe-booster': true
  });
  const [activeGroupId, setActiveGroupId] = useState<string>('group-overview');

  // Prevent background scroll and support ESC key to close image lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage]);

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

  const collapseAllGroups = (post: BlogPost) => {
    playClick();
    if (!post.groups) return;
    const allClosed: { [k: string]: boolean } = {};
    post.groups.forEach((g) => { allClosed[g.id] = false; });
    setOpenGroups(allClosed);
  };

  const activePost: BlogPost | undefined = BLOG_POSTS.find((p) => p.slug === activeSlug);

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
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          {/* About Me Button - Navigates back to main portfolio */}
          <a
            href="/"
            onClick={(e) => {
              playClick();
              // Smooth client-side SPA navigation back to portfolio
              e.preventDefault();
              window.history.pushState(null, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
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

      {/* Main Container with Sticky Left Index Navigator */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {activePost ? (
          /* ==================================================== */
          /* ARTICLE READING VIEW WITH DEV NAVIGATOR              */
          /* ==================================================== */
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start animate-in fade-in duration-300">
            {/* Desktop Left-Side Index Navigator (Natural multi-line text wrap, no horizontal scroller) */}
            {activePost.groups && activePost.groups.length > 0 && (
              <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 pb-6 custom-scrollbar">
                <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-[#0e0e13] shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-zinc-100 dark:border-white/10">
                    <Layers className="w-4 h-4 text-crimson" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                      Mission Navigator
                    </span>
                  </div>

                  <nav className="space-y-1 font-mono text-xs">
                    {activePost.groups.map((grp) => {
                      const isActive = activeGroupId === grp.id;
                      const fullCleanTitle = grp.title.replace(/^Group \d+:\s*|^Overview:\s*|^Best Practices:\s*/, '');
                      return (
                        <button
                          key={grp.id}
                          onClick={() => scrollToGroup(grp.id)}
                          onMouseEnter={playHover}
                          title={fullCleanTitle}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 group cursor-pointer ${
                            isActive
                              ? 'bg-crimson/10 text-crimson-dark dark:text-crimson font-bold border border-crimson/25 shadow-sm'
                              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/60 dark:hover:bg-white/[0.03]'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors ${
                              isActive ? 'bg-crimson' : 'bg-zinc-300 dark:bg-zinc-700 group-hover:bg-crimson/60'
                            }`}
                          />
                          <span className="leading-snug break-words">
                            {fullCleanTitle}
                          </span>
                        </button>
                      );
                    })}
                  </nav>

                  <div className="pt-2 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>{activePost.groups.length} Learning Modules</span>
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="hover:text-crimson transition-colors"
                    >
                      Top ↑
                    </button>
                  </div>
                </div>
              </aside>
            )}

            {/* Article Content Area */}
            <article className="flex-1 min-w-0 w-full">
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
                  <div className="p-4 rounded-xl bg-zinc-100/80 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                      <BookOpen className="w-3.5 h-3.5 text-crimson" />
                      <span>Official Curriculum & Enterprise References</span>
                    </div>

                    {/* Featured Official Learning Course */}
                    {activePost.sources.filter(s => s.badge.toLowerCase().includes('course')).map((course, cIdx) => (
                      <a
                        key={cIdx}
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 p-3 rounded-lg bg-white dark:bg-black/60 border border-crimson/30 hover:border-crimson hover:shadow-sm text-zinc-900 dark:text-white transition-all group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <GraduationCap className="w-5 h-5 text-crimson shrink-0" />
                          <div className="min-w-0 flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-crimson/10 text-crimson border border-crimson/25 shrink-0">
                              [{course.badge}]
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-zinc-950 dark:text-white group-hover:text-crimson transition-colors leading-snug">
                              {course.title}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-mono text-crimson shrink-0 font-medium">
                          <span className="hidden sm:inline">Open Course</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </a>
                    ))}

                    {/* Other Documentation & Design References */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2 pt-1">
                      {activePost.sources.filter(s => !s.badge.toLowerCase().includes('course')).map((src, sIdx) => (
                        <a
                          key={sIdx}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white dark:bg-black/50 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 hover:border-crimson hover:text-crimson transition-colors"
                        >
                          <span className="text-crimson font-bold">[{src.badge}]</span>
                          <span className="leading-snug">{src.title}</span>
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
                        id={grp.id}
                        className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0d0d11] overflow-hidden transition-all shadow-sm scroll-mt-24"
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

                                {/* Beautiful FPM Building Blocks Showcase */}
                                {sec.buildingBlocks && sec.buildingBlocks.length > 0 && (
                                  <div className="my-6 space-y-3">
                                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                                      <Boxes className="w-3.5 h-3.5 text-crimson" />
                                      <span>Reusable UI5 Building Blocks (sap.fe.macros)</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                      {sec.buildingBlocks.map((bb: BlogBuildingBlock, bIdx: number) => {
                                        const isFifth = bIdx === 4 && sec.buildingBlocks?.length === 5;
                                        const Icon = bb.tag.includes('Table') ? Table :
                                                     bb.tag.includes('FilterBar') ? Filter :
                                                     bb.tag.includes('Form') ? FileText :
                                                     bb.tag.includes('Chart') ? BarChart3 : SlidersHorizontal;

                                        return (
                                          <div
                                            key={bIdx}
                                            className={`p-4 rounded-xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-[#111116] hover:border-crimson/40 hover:shadow-sm transition-all group flex flex-col justify-between ${
                                              isFifth ? 'md:col-span-2' : ''
                                            }`}
                                          >
                                            <div>
                                              <div className="flex items-center justify-between gap-2 mb-2.5">
                                                <div className="flex items-center gap-2">
                                                  <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-500 border border-sky-500/20">
                                                    <Icon className="w-4 h-4" />
                                                  </div>
                                                  <code className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
                                                    {bb.tag}
                                                  </code>
                                                </div>
                                                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 font-medium">
                                                  {bb.annotation}
                                                </span>
                                              </div>
                                              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                                                {bb.description}
                                              </p>
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}

                                {/*  Action Steps with Directly Embedded Images & Tables */}
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

                                        {/* Direct  Step Image */}
                                        {ast.image && (
                                          <BlogImageView
                                            src={ast.image}
                                            alt={ast.imageCaption || `Step ${ast.stepNumber || ''}`}
                                            caption={ast.imageCaption}
                                            className="ml-0 sm:ml-9"
                                            maxHeight="max-h-[520px]"
                                            onOpenLightbox={(url, cap) => {
                                              playClick();
                                              setLightboxImage({ url, caption: cap });
                                            }}
                                            playHover={playHover}
                                          />
                                        )}

                                        {/* Direct  Step Table */}
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
                                      <BlogImageView
                                        key={fIdx}
                                        src={fig.url}
                                        alt={fig.caption}
                                        caption={fig.caption}
                                        maxHeight="max-h-[500px]"
                                        onOpenLightbox={(url, cap) => {
                                          playClick();
                                          setLightboxImage({ url, caption: cap });
                                        }}
                                        playHover={playHover}
                                      />
                                    ))}
                                  </div>
                                )}

                                {/* Single Fallback Image */}
                                {!sec.figures && sec.image && (
                                  <BlogImageView
                                    src={sec.image}
                                    alt={sec.imageCaption || sec.heading}
                                    caption={sec.imageCaption}
                                    className="my-6"
                                    maxHeight="max-h-[500px]"
                                    onOpenLightbox={(url, cap) => {
                                      playClick();
                                      setLightboxImage({ url, caption: cap });
                                    }}
                                    playHover={playHover}
                                  />
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

                                {sec.codeBlocks && sec.codeBlocks.length > 0 && (
                                  <div className="space-y-4 my-4">
                                    {sec.codeBlocks.map((cb, cbIdx) => (
                                      <CodeBlockView
                                        key={cbIdx}
                                        code={cb.code}
                                        filename={cb.filename}
                                        language={cb.language}
                                      />
                                    ))}
                                  </div>
                                )}

                                {!sec.codeBlocks && sec.code && (
                                  <CodeBlockView
                                    code={sec.code}
                                    filename={sec.code.trim().startsWith('//') ? sec.code.trim().split('\n')[0].replace('//', '').trim() : undefined}
                                    language={sec.code.includes('<mvc:View') ? 'xml' : 'cds'}
                                  />
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
                  {activePost.sections?.map((sec, idx) => (
                    <section key={idx} className="space-y-4">
                      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                        {sec.heading}
                      </h2>

                      {sec.paragraphs.map((p: string, pIdx: number) => (
                        <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                          {p}
                        </p>
                      ))}

                      {sec.buildingBlocks && sec.buildingBlocks.length > 0 && (
                        <div className="my-6 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                            <Boxes className="w-3.5 h-3.5 text-crimson" />
                            <span>Reusable UI5 Building Blocks (sap.fe.macros)</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            {sec.buildingBlocks.map((bb: BlogBuildingBlock, bIdx: number) => {
                              const isFifth = bIdx === 4 && sec.buildingBlocks?.length === 5;
                              const Icon = bb.tag.includes('Table') ? Table :
                                           bb.tag.includes('FilterBar') ? Filter :
                                           bb.tag.includes('Form') ? FileText :
                                           bb.tag.includes('Chart') ? BarChart3 : SlidersHorizontal;

                              return (
                                <div
                                  key={bIdx}
                                  className={`p-4 rounded-xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-[#111116] hover:border-crimson/40 hover:shadow-sm transition-all group flex flex-col justify-between ${
                                    isFifth ? 'md:col-span-2' : ''
                                  }`}
                                >
                                  <div>
                                    <div className="flex items-center justify-between gap-2 mb-2.5">
                                      <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-500 border border-sky-500/20">
                                          <Icon className="w-4 h-4" />
                                        </div>
                                        <code className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
                                          {bb.tag}
                                        </code>
                                      </div>
                                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 font-medium">
                                        {bb.annotation}
                                      </span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                                      {bb.description}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {sec.image && (
                        <BlogImageView
                          src={sec.image}
                          alt={sec.imageCaption || sec.heading}
                          caption={sec.imageCaption}
                          className="my-6"
                          maxHeight="max-h-[500px]"
                          onOpenLightbox={(url, cap) => {
                            playClick();
                            setLightboxImage({ url, caption: cap });
                          }}
                          playHover={playHover}
                        />
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

                      {sec.codeBlocks && sec.codeBlocks.length > 0 && (
                        <div className="space-y-4 my-4">
                          {sec.codeBlocks.map((cb, cbIdx) => (
                            <CodeBlockView
                              key={cbIdx}
                              code={cb.code}
                              filename={cb.filename}
                              language={cb.language}
                            />
                          ))}
                        </div>
                      )}

                      {!sec.codeBlocks && sec.code && (
                        <CodeBlockView
                          code={sec.code}
                          filename={sec.code.trim().startsWith('//') ? sec.code.trim().split('\n')[0].replace('//', '').trim() : undefined}
                          language={sec.code.includes('<mvc:View') ? 'xml' : 'cds'}
                        />
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
          </div>
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

            {/* 2-Column Responsive Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => openArticle(post.slug)}
                    onMouseEnter={playHover}
                    className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0e0e12] hover:border-crimson/50 hover:shadow-lg hover:shadow-crimson/5 transition-all duration-200 group cursor-pointer flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-zinc-500 mb-3">
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

                      <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white group-hover:text-crimson transition-colors leading-snug mb-2.5">
                        {post.title}
                      </h2>

                      <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3.5 border-t border-zinc-100 dark:border-white/[0.06] mt-auto">
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

                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-crimson group-hover:translate-x-1 transition-transform shrink-0">
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 text-center py-16 px-4 rounded-2xl border border-dashed border-zinc-300 dark:border-white/10 bg-white/50 dark:bg-white/[0.02]">
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

      {/* Fullscreen Image Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Top Bar with Caption & Close Button */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-7xl flex items-center justify-between gap-4 pb-3 text-white"
          >
            <div className="flex items-center gap-2 min-w-0 text-xs sm:text-sm font-mono text-zinc-200">
              <span className="w-2 h-2 rounded-full bg-crimson shrink-0" />
              <span className="truncate">{lightboxImage.caption || 'Image Preview'}</span>
            </div>
            <button
              onClick={() => {
                playClick();
                setLightboxImage(null);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white/10 hover:bg-crimson text-white border border-white/20 transition-all cursor-pointer shrink-0"
              title="Close (ESC)"
            >
              <span>Close</span>
              <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-black/50 border border-white/20">ESC</kbd>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Full Screen Image Frame */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-full max-h-[86vh] flex items-center justify-center overflow-auto rounded-2xl border border-white/15 bg-black/70 shadow-2xl p-2 sm:p-3"
          >
            <img
              src={lightboxImage.url}
              alt={lightboxImage.caption || 'Full view'}
              className="max-w-[96vw] max-h-[82vh] w-auto h-auto object-contain select-none rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
