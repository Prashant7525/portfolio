"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(
      formData.get("name") ?? ""
    ).trim();

    const email = String(
      formData.get("email") ?? ""
    ).trim();

    const subject = String(
      formData.get("subject") ?? ""
    ).trim();

    const message = String(
      formData.get("message") ?? ""
    ).trim();

    /* =========================
       VALIDATION
    ========================= */

    if (!name || !email || !subject || !message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      setError(
        "Please write a little more in your message."
      );
      return;
    }

    /* =========================
       SEND MESSAGE
    ========================= */

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Failed to send message."
        );
      }

      /* =========================
         SUCCESS
      ========================= */

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        w-full
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        p-5
        backdrop-blur-xl
        sm:p-7
        lg:p-8
      "
    >
      {/* =========================
          HEADING
      ========================= */}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white sm:text-3xl">
          Send Me a Message
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Have a project or opportunity in mind?
          Send me a message and I&apos;ll get back
          to you.
        </p>
      </div>

      <div className="space-y-6">
        {/* =========================
            NAME
        ========================= */}

        <div>
          <label
            htmlFor="contact-name"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-400
            "
          >
            Full Name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your name"
            disabled={isSubmitting}
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-900/60
              px-5
              py-4
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-500
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-500/20
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          />
        </div>

        {/* =========================
            EMAIL
        ========================= */}

        <div>
          <label
            htmlFor="contact-email"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-400
            "
          >
            Email Address
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            disabled={isSubmitting}
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-900/60
              px-5
              py-4
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-500
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-500/20
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          />
        </div>

        {/* =========================
            SUBJECT
        ========================= */}

        <div>
          <label
            htmlFor="contact-subject"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-400
            "
          >
            Subject
          </label>

          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="Project Discussion"
            disabled={isSubmitting}
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-900/60
              px-5
              py-4
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-500
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-500/20
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          />
        </div>

        {/* =========================
            MESSAGE
        ========================= */}

        <div>
          <label
            htmlFor="contact-message"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-400
            "
          >
            Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Write your message..."
            disabled={isSubmitting}
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-slate-700
              bg-slate-900/60
              px-5
              py-4
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-500
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-500/20
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          />
        </div>

        {/* =========================
            ERROR
        ========================= */}

        {error && (
          <motion.p
            initial={{
              opacity: 0,
              y: -5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              rounded-xl
              border
              border-red-500/20
              bg-red-500/10
              px-4
              py-3
              text-sm
              text-red-300
            "
          >
            {error}
          </motion.p>
        )}

        {/* =========================
            SUCCESS
        ========================= */}

        {success && (
          <motion.div
            initial={{
              opacity: 0,
              y: -5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-green-500/20
              bg-green-500/10
              px-4
              py-3
              text-sm
              text-green-300
            "
          >
            <CheckCircle2
              className="
                h-5
                w-5
                shrink-0
              "
            />

            <span>
              Message sent successfully!
            </span>
          </motion.div>
        )}

        {/* =========================
            SUBMIT BUTTON
        ========================= */}

        <motion.button
          whileHover={
            !isSubmitting
              ? {
                  scale: 1.02,
                  y: -2,
                }
              : undefined
          }
          whileTap={
            !isSubmitting
              ? {
                  scale: 0.97,
                }
              : undefined
          }
          type="submit"
          disabled={isSubmitting}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-cyan-500
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-cyan-500/10
            transition-all
            duration-300
            hover:bg-cyan-600
            hover:shadow-cyan-500/20
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {isSubmitting ? (
            <>
              <Loader2
                className="
                  h-5
                  w-5
                  animate-spin
                "
              />

              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />

              Send Message
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}