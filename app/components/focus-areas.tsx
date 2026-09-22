const areas = [
  {
    title: "Technical program management",
    body: "I lead complex, cross functional programs across architecture, security, product, and engineering. I delivered a multi year API platform modernization across ten global teams on Apigee Hybrid.",
  },
  {
    title: "Product and platform delivery",
    body: "I define and deliver product vision for developer facing platforms. My self service API marketplace cut API creation lead time from six or more days to under two hours and increased API reuse fourfold.",
  },
  {
    title: "AI governance",
    body: "I translate security and compliance needs into working systems. I embedded OWASP aligned policy controls into CI/CD and built a generative AI based threat assessment. I now extend that work through my M.S. in Cybersecurity at NYU.",
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="bg-porcelain">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="font-serif text-3xl font-medium text-graphite">
          What I am looking for next
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {areas.map((area) => (
            <div key={area.title} className="border-t border-mist pt-4">
              <h3 className="font-serif text-xl font-medium text-graphite">
                {area.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-stone">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
