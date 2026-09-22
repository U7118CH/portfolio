import { volunteering } from "../content/volunteering";

export default function Volunteering() {
  return (
    <section id="volunteering" className="bg-porcelain">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="font-serif text-3xl font-medium text-graphite">
          Volunteering
        </h2>
        <div className="mt-10 flex flex-col gap-8">
          {volunteering.map((entry) => (
            <div
              key={entry.title}
              className="grid gap-3 border-t border-mist pt-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
            >
              <div>
                <p className="text-base text-ash">{entry.dates}</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-graphite">
                  {entry.title}
                </h3>
                {entry.role && (
                  <p className="mt-1 text-base text-stone">{entry.role}</p>
                )}
                <p className="mt-3 text-base leading-relaxed text-graphite">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
