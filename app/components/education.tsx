const education = [
  {
    institution: "New York University",
    location: "New York, New York",
    program: "M.S. in Cybersecurity, in progress",
    dates: "Expected 2029",
  },
  {
    institution: "Yale School of Management",
    location: "New Haven, Connecticut",
    program: "Executive education, Women's Leadership Program",
    dates: "",
  },
  {
    institution: "University of Texas at Dallas",
    location: "Dallas, Texas",
    program: "Certificate in management",
    dates: "",
  },
  {
    institution: "Madurai Kamaraj University",
    location: "Madurai, India",
    program: "B.S. in Computer Engineering",
    dates: "",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-alice-blue">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="font-serif text-3xl font-medium text-graphite">
          Education
        </h2>
        <div className="mt-10 flex flex-col gap-6">
          {education.map((entry) => (
            <div
              key={entry.institution}
              className="grid gap-1 border-t border-mist pt-4 sm:grid-cols-[14rem_1fr] sm:gap-8"
            >
              <p className="text-base text-ash">{entry.location}</p>
              <div>
                <h3 className="text-xl font-semibold text-graphite">
                  {entry.institution}
                </h3>
                <p className="mt-1 text-base text-stone">
                  {entry.program}
                  {entry.dates ? `, ${entry.dates.toLowerCase()}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
