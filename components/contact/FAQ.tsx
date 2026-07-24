"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, Sparkles } from "lucide-react";

const faqs = [
  {
    category: "General",
    question: "What does TeamSufix do?",
    answer:
      "TeamSufix is a multidisciplinary technology, engineering, architecture, construction and consulting company delivering integrated solutions for organizations, businesses and communities.",
  },
  {
    category: "General",
    question: "Can TeamSufix handle complete projects?",
    answer:
      "Yes. Our multidisciplinary structure allows us to support projects from initial idea and planning through design, development, construction, implementation and ongoing support.",
  },
  {
    category: "Software",
    question: "Do you build custom software?",
    answer:
      "Yes. We design and develop custom web applications, mobile applications, ERP systems, business management platforms and other digital solutions.",
  },
  {
    category: "Software",
    question: "Can you improve an existing software system?",
    answer:
      "Yes. We can review, improve, modernize, maintain and extend existing software systems depending on the technology and project requirements.",
  },
  {
    category: "Engineering",
    question: "What engineering services do you provide?",
    answer:
      "Our engineering services include professional consultancy, civil engineering, structural design, technical reports and project support.",
  },
  {
    category: "Construction",
    question: "Do you handle construction projects?",
    answer:
      "Yes. We support residential, commercial and other construction projects through planning, project management and construction delivery.",
  },
  {
    category: "Consulting",
    question: "What type of consulting do you provide?",
    answer:
      "Our consulting services include business strategy, technology consulting, digital transformation, process improvement and professional training.",
  },
  {
    category: "Support",
    question: "Do you provide ongoing support after delivery?",
    answer:
      "Yes. Depending on the project, we can provide maintenance, technical support, improvements and long-term professional assistance.",
  },
];

const categories = [
  "All",
  "General",
  "Software",
  "Engineering",
  "Construction",
  "Consulting",
  "Support",
];

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;

      const query = search.toLowerCase();

      return (
        matchesCategory &&
        (faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query))
      );
    });
  }, [category, search]);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
            <Sparkles size={15} />
            Frequently Asked Questions
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Answers to common questions.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Find quick answers about our services, projects and working process.
          </p>
        </div>

        {/* Search */}
        <div className="relative mt-12">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-green-600"
          />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-2xl border border-green-100 bg-green-50/50 py-4 pl-14 pr-5 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
          />
        </div>

        {/* Categories */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition ${
                category === item
                  ? "bg-green-700 text-white shadow-lg shadow-green-700/20"
                  : "border border-green-100 bg-green-50 text-green-700 hover:bg-green-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="mt-10 space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-green-300 bg-green-50/50 shadow-lg shadow-green-700/5"
                    : "border-green-100 bg-white hover:border-green-200"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                      {faq.category}
                    </span>

                    <h3 className="mt-2 font-bold text-slate-900">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-green-700 text-white"
                        : "bg-green-50 text-green-700"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-green-100 px-6 pb-6 pt-5">
                      <p className="leading-7 text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="rounded-2xl border border-green-100 bg-green-50 p-10 text-center">
              <p className="font-medium text-green-800">No questions found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
