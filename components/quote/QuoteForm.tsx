"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  UserRound,
} from "lucide-react";

const divisions = [
  "Digital",
  "Engineering",
  "Architecture",
  "Construction",
  "Consulting",
];

const budgets = [
  "Not sure yet",
  "Under GHS 5,000",
  "GHS 5,000 – GHS 25,000",
  "GHS 25,000 – GHS 100,000",
  "GHS 100,000+",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "More than 6 months",
];

const inputClassName =
  "w-full rounded-2xl border border-green-100 bg-green-50/40 px-5 py-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const division = formData.get("division");
    const service = formData.get("service");
    const budget = formData.get("budget");
    const timeline = formData.get("timeline");
    const description = formData.get("description");

    const subject = `Project Request from ${name}`;

    const body = `
Hello TeamSufix,

I would like to discuss a project with your team.

CONTACT INFORMATION
Name: ${name}
Company / Individual: ${company}
Email: ${email}
Phone: ${phone}

PROJECT INFORMATION
Division: ${division}
Service: ${service}
Budget: ${budget}
Timeline: ${timeline}

PROJECT DESCRIPTION
${description}

I look forward to hearing from you.

Best regards,
${name}
`;

    const mailto = `mailto:teamsufix31@gmail.com?subject=${encodeURIComponent(
      subject as string,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="relative overflow-hidden bg-green-50 py-24 md:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-green-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-xl px-6">
          <div className="rounded-[36px] border border-green-100 bg-white p-8 text-center shadow-[0_30px_90px_rgba(22,163,74,0.12)] md:p-14">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100 text-green-700">
              <CheckCircle2 size={42} />
            </div>

            <h2 className="mt-8 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Your request is ready.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Your email application should now open with your project details
              already prepared. Review the message and send it to our team.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 inline-flex rounded-full border border-green-200 bg-green-50 px-5 py-3 text-sm font-bold text-green-700 transition hover:bg-green-100"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-green-50 py-24 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-green-100/80 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-[36px] border border-green-100 bg-white shadow-[0_30px_100px_rgba(22,163,74,0.12)]"
        >
          {/* Form Header */}
          <div className="border-b border-green-100 bg-gradient-to-br from-green-950 via-green-900 to-green-800 px-7 py-10 text-white md:px-12 md:py-12">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                Project Inquiry
              </p>

              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                Let's understand what you're building.
              </h2>

              <p className="mt-4 leading-7 text-green-100/70">
                Share a few details about your project and our team will help
                identify the right next step.
              </p>
            </div>
          </div>

          <div className="p-7 md:p-12 lg:p-14">
            {/* Personal Information */}
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <UserRound size={20} />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                    Step 01
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Your Information
                  </h3>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Full Name *
                  </label>

                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Company / Individual *
                  </label>

                  <input
                    required
                    name="company"
                    type="text"
                    placeholder="Company or individual"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Email Address *
                  </label>

                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    name="phone"
                    type="tel"
                    placeholder="+233 ..."
                    className={inputClassName}
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-14 h-px bg-green-100" />

            {/* Project Information */}
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FileText size={20} />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                    Step 02
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Project Details
                  </h3>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Business Division *
                  </label>

                  <select required name="division" className={inputClassName}>
                    <option value="">Select a division</option>

                    {divisions.map((division) => (
                      <option key={division}>{division}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Service Needed *
                  </label>

                  <input
                    required
                    name="service"
                    type="text"
                    placeholder="What service do you need?"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Estimated Budget
                  </label>

                  <select name="budget" className={inputClassName}>
                    {budgets.map((budget) => (
                      <option key={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Expected Timeline
                  </label>

                  <select name="timeline" className={inputClassName}>
                    {timelines.map((timeline) => (
                      <option key={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-14 h-px bg-green-100" />

            {/* Project Brief */}
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                    Step 03
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Tell Us About Your Project
                  </h3>
                </div>
              </div>

              <textarea
                required
                name="description"
                rows={8}
                placeholder="Describe your project, goals, challenges and anything else we should know..."
                className={`${inputClassName} mt-8 resize-none`}
              />
            </div>

            {/* Submit */}
            <div className="mt-10 flex flex-col gap-6 border-t border-green-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-sm leading-6 text-slate-500">
                Your request will open in your default email application with
                your project information pre-filled.
              </p>

              <button
                type="submit"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-green-700 px-8 font-bold text-white shadow-xl shadow-green-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-2xl"
              >
                Request a Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
