export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center bg-porcelain"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
        <p className="text-base text-stone">Dallas, Texas</p>
        <h1 className="mt-5 font-serif text-6xl font-medium leading-none text-graphite sm:text-7xl">
          Uma Chenniappan
        </h1>
        <p className="mt-6 text-xl text-stone sm:text-2xl">
          Vice President, Gateway Enablement Team, Wells Fargo
        </p>
        <p className="mt-10 max-w-[78ch] text-lg leading-relaxed text-graphite">
          Across fifteen years in financial services and healthcare, I have
          turned complex problems into technologies people trust. I am currently
          completing a Master of Science in Cybersecurity at NYU. I am looking
          for my next role in technical program management, product and platform
          delivery, or AI governance.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-base">
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
            className="border border-graphite px-5 py-2 text-graphite transition-colors hover:bg-graphite hover:text-porcelain"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
