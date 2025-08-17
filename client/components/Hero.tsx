export default function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 dark:text-slate-100 leading-tight">
              AI-Powered Screenshot Redaction for Business
            </h1>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Capture screenshots, automatically remove sensitive data, and extract insights in seconds.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#features"
                onClick={(e) => handleSmoothScroll(e, "#features")}
                className="inline-flex items-center text-brand-blue hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Explore features
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleSmoothScroll(e, "#pricing")}
                className="inline-flex items-center text-brand-blue hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                See pricing
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="mt-12 space-y-3">
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Originals auto-delete in 24h
              </div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                EU/US/UK data residency
              </div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Team libraries for secure sharing
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Raw Screenshot</div>
                <div className="bg-slate-100 dark:bg-slate-600 rounded-lg h-32 flex items-center justify-center">
                  <div className="text-slate-400 dark:text-slate-300 text-sm">Original Image</div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Redacted Result</div>
                <div className="bg-slate-100 dark:bg-slate-600 rounded-lg h-32 flex items-center justify-center relative">
                  <div className="text-slate-400 dark:text-slate-300 text-sm">Blurred PII</div>
                  <div className="absolute inset-0 bg-blue-100/30 dark:bg-blue-900/30 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white dark:bg-slate-700 rounded-xl p-4 shadow-sm">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">AI Analysis</div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-brand-blue text-white text-xs rounded-lg">
                  Summary
                </button>
                <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300 text-xs rounded-lg">
                  Export CSV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
