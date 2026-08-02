"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold">
          Contact Me
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          Have a project or opportunity? Let&apos;s connect.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-slate-400">
                  prashantkumar75258@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-slate-400">
                  +91 9065949148
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-slate-400">
                  India
                </p>
              </div>
            </div>

          </div>

          {/* Right */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-cyan-400"
            />

            <button
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-600"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}