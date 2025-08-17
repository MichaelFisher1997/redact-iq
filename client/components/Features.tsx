export default function Features() {
  const features = [
    {
      icon: "🔐",
      title: "AI Redaction",
      description: "Automatically blur emails, phone numbers, credit cards, names, and faces. Configure policies per workspace."
    },
    {
      icon: "📊",
      title: "Data Extraction",
      description: "Turn dashboards, invoices, and receipts into structured CSV/Excel or JSON. Save time on reporting."
    },
    {
      icon: "🧠",
      title: "AI Explanation",
      description: "Ask AI to summarize graphs, rewrite error messages, and generate report-ready bullet points."
    }
  ];

  return (
    <section id="features" className="bg-slate-50 dark:bg-slate-800 py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Features
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-600 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white dark:bg-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
              Team Libraries & Roles
            </span>
            <span className="px-4 py-2 bg-white dark:bg-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
              Region Pinning (EU/US)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
