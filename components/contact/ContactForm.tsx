"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const inputClass =
  "w-full rounded-2xl border border-green-100 bg-white px-5 py-4 text-sm text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const subject = data.get("subject");
    const message = data.get("message");

    const body = `
Hello TeamSufix,

I would like to get in touch regarding the following:

CONTACT INFORMATION
Name: ${name}
Email: ${email}
Phone: ${phone}

SUBJECT
${subject}

MESSAGE
${message}

Best regards,
${name}
    `;

    const mailto = `mailto:teamsufix31@gmail.com?subject=${encodeURIComponent(
      subject?.toString() || "TeamSufix Contact Enquiry",
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <section className="bg-green-50 py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-[36px] border border-green-100 bg-white p-10 text-center shadow-[0_30px_80px_rgba(22,163,74,0.1)] md:p-16">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
              <CheckCircle2 size={42} />
            </div>

            <h2 className="mt-8 text-3xl font-black text-slate-900 md:text-4xl">
              Your message is ready.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Your email application should now open with your message prepared.
              Review the details and send it to our team.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 font-bold text-green-700 transition hover:text-green-900"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-green-50 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-green-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-[36px] border border-green-100 bg-white shadow-[0_30px_100px_rgba(22,163,74,0.1)]">
          {/* Form Header */}
          <div className="border-b border-green-100 bg-gradient-to-br from-green-950 via-green-900 to-green-800 p-8 text-white md:p-12">
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              <Sparkles size={16} />
              Send a Message
            </div>

            <h2 className="mt-5 text-3xl font-black md:text-4xl">
              Tell us what you&apos;re working on.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-green-100/70">
              Share a few details about your project or enquiry and our team
              will help you explore the right path forward.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-7 md:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Your Name *
                </label>

                <input
                  name="name"
                  required
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Email Address *
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Phone Number
                </label>

                <input
                  name="phone"
                  placeholder="+233 ..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Subject *
                </label>

                <input
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Your Message *
              </label>

              <textarea
                name="message"
                required
                rows={7}
                placeholder="Tell us about your project, challenge or enquiry..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="mt-8 flex flex-col gap-6 border-t border-green-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-slate-500">
                Your message will open in your default email application with
                the information prepared for you.
              </p>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-green-700 px-7 py-4 font-bold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
              >
                Send Message
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
