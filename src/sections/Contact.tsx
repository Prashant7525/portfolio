"use client";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/contact/SectionHeader";
import ContactCard from "@/components/contact/ContactCard";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#08101d]
        py-24
        text-white
        sm:py-28
        lg:py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />

      <Container>

        {/* Section Header */}

        <SectionHeader />

        {/* Contact Content */}

        <div
          className="
            grid
            w-full
            items-stretch
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
          "
        >
          {/* Contact Information */}

          <ContactCard />

          {/* Contact Form */}

          <ContactForm />
        </div>

      </Container>
    </section>
  );
}