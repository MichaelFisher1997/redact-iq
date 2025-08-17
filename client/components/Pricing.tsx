export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "£0",
      period: "/month",
      description: "20 AI actions/month, watermark, 30-day storage.",
      features: [
        "20 AI actions per month",
        "Watermarked exports",
        "30-day storage",
        "Basic redaction"
      ]
    },
    {
      name: "Pro",
      price: "£12",
      period: "/month",
      description: "Unlimited redaction, 500 AI actions, CSV/XLSX export, 180-day storage.",
      features: [
        "Unlimited redaction",
        "500 AI actions per month",
        "CSV/XLSX export",
        "180-day storage",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Team",
      price: "£49",
      period: "/month (5 users)",
      description: "Shared library, SSO, audit log, compliance controls, region pinning by workspace.",
      features: [
        "Everything in Pro",
        "Shared workspace libraries",
        "SSO integration",
        "Audit log",
        "Compliance controls",
        "Region pinning by workspace"
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-slate-50 dark:bg-slate-800 py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm border hover:shadow-md transition-all duration-200 relative ${
                plan.popular ? 'border-brand-blue scale-105' : 'border-slate-200 dark:border-slate-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">{plan.price}</span>
                  <span className="text-slate-600 dark:text-slate-300 ml-1">{plan.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            AI actions are explain/extract operations. Redaction is unlimited on Pro and Team.
          </p>
        </div>
      </div>
    </section>
  );
}
