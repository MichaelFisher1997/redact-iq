import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Do you store my original screenshots?",
      answer: "Originals default to 24h auto-delete; you can change retention for redacted copies."
    },
    {
      question: "Which regions are available?",
      answer: "EU and US at launch; more regions planned."
    },
    {
      question: "What counts as an AI action?",
      answer: "Explain or Extract operations per screenshot."
    },
    {
      question: "Can I disable external LLMs?",
      answer: "Yes. You can enforce 'redaction-only' mode per workspace."
    },
    {
      question: "Is there a team library?",
      answer: "Yes. Workspaces include shared libraries, roles, and audit log on Team."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white dark:bg-slate-900 py-24 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-slate-900 dark:text-slate-100 pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-500 dark:text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
