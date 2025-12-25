import React, { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need to know how to code?",
      answer:
        'No. If you can write "When X happens, do Y and Z" you can build workflows. Our customers include English majors, sales ops people, and customer success managers. Zero of them code.',
    },
    {
      question: "How long does setup take?",
      answer:
        "First workflow: 15 minutes. Most teams build 3-5 workflows in their first day as they realize what's possible. There's no implementation timeline. Connect tools, describe workflow, click save. That's it.",
    },
    {
      question: "What if something breaks?",
      answer:
        "We monitor every workflow execution. If something fails, you get an alert with exactly what broke and how to fix it. Most issues auto-resolve before you notice. We have 99.9% uptime.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes. Cancel in your dashboard. No calls with retention teams. No contracts. No penalties. We'd rather earn your subscription every month than trap you.",
    },
    {
      question: "What apps integrate?",
      answer:
        "Slack, Notion, Asana, HubSpot, Salesforce, Google Workspace, Stripe, Intercom, Airtable, ClickUp, Monday, Jira, GitHub, and 180+ more. Missing an integration? We add new ones every week based on customer requests.",
    },
    {
      question: "Is my data secure?",
      answer:
        "SOC 2 Type II certified. Data encrypted in transit and at rest. We don't store your data. We just coordinate the handoff between your tools. Your data stays in your systems. We're just the messenger.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-[#000000]/70">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-6xl text-balance font-bold mb-6">
            Everything you're{" "}
            <span className="text-[#FB2B8F]">wondering about</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium max-w-3xl mx-auto">
            The answers you actually need before signing up
          </p>
        </div>

        <div className="space-y-0 px-4 sm:px-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-2 border-[#000000]/10 last:border-b-0"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left py-6 flex justify-between items-center group"
              >
                <h3 className="text-lg font-bold group-hover:text-[#FB2B8F] transition-colors">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl font-bold text-[#FB2B8F] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] pb-8 md:pb-10"
                    : "max-h-0"
                }`}
              >
                <p className="text-lg font-medium leading-relaxed max-w-4xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
