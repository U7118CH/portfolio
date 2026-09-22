export default function Contact() {
  return (
    <section id="contact" className="bg-alice-blue">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="font-serif text-3xl font-medium text-graphite">
          Get in touch
        </h2>
        <p className="mt-6 max-w-[78ch] text-lg leading-relaxed text-graphite">
          I am open to conversations about technical program management,
          product and platform delivery, and AI governance roles. The
          fastest way to reach me is by email.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-base">
          <a
            href="mailto:umachenniappan18@gmail.com"
            className="text-stone underline decoration-mist underline-offset-4 hover:text-link-hover"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/uma-chenniappan"
            className="text-stone underline decoration-mist underline-offset-4 hover:text-link-hover"
          >
            LinkedIn
          </a>
          <a
            href="/uma-chenniappan-resume.pdf"
            className="rounded-sm border border-graphite bg-mist/40 px-5 py-2 text-graphite transition-colors hover:bg-graphite hover:text-porcelain"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="border-t border-mist">
        <p className="mx-auto max-w-5xl px-6 py-6 text-sm text-ash sm:px-10">
          Uma Chenniappan, Dallas, Texas.
        </p>
      </div>
    </section>
  );
}
