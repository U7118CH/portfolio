type Role = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    title: "Vice President, Lead Scrum Master, Gateway Enablement Team",
    company: "Wells Fargo",
    location: "Dallas, Texas",
    dates: "2021 to present",
    bullets: [
      "I designed and built Dependency Detective, an award winning agentic and semantic AI product that maps cross team dependencies from Jira and roadmap data before and during PI planning. It drove a forty percent increase in sprint predictability and was selected for enterprise rollout to all developers.",
      "Defining the product vision for a self service API platform, I launched an API marketplace and producer and consumer journeys that cut API creation lead time from six or more days to under two hours and increased API reuse fourfold.",
      "Working across business and security teams, I built a generative AI based threat assessment capability that automated risk surfacing and scoring and delivered multimillion dollar savings each year.",
      "From CI/CD metadata, repository intelligence, logs, and telemetry, I built an AI driven API inventory that automated compliance reporting and ownership mapping across tens of thousands of services.",
      "To achieve audit ready delivery without slowing velocity, I embedded OWASP aligned policy controls and risk scoring into CI/CD developer workflows. Across ten global teams on Apigee Hybrid, I own intake, governance, and sequencing.",
    ],
  },
  {
    title: "Agile Project Manager, Scrum Master",
    company: "Health Care Service Corporation",
    location: "Chicago, Illinois",
    dates: "2016 to 2021",
    bullets: [
      "I led delivery of a seventy million dollar enterprise modernization, mobilizing seven global Agile teams to migrate core platforms to private cloud and automate claims processing.",
      "By operationalizing scaled Agile practices, including PI planning, Scrum of Scrums, and dependency mapping, I reduced release risk and improved throughput. I drove roadmap decisions through an executive portfolio insights engine built on Jira and Tableau.",
    ],
  },
  {
    title: "Scrum Master",
    company: "Health Care Service Corporation",
    location: "Chicago, Illinois",
    dates: "2011 to 2016",
    bullets: [
      "I drove enterprise adoption of an analytics and reporting platform across twenty or more business units, replacing manual Excel reporting with governed Jira and Tableau dashboards.",
      "While leading two Agile teams in SAFe with two week sprints, I enforced HIPAA, HITRUST, and SOX controls across Teradata, Oracle, SQL Server, and Hadoop.",
    ],
  },
  {
    title: "Software Consultant",
    company: "JPMorgan Chase, Bank of America, and Mary Kay",
    location: "Dallas, Texas",
    dates: "2003 to 2006",
    bullets: [
      "My earlier consulting roles focused on Java, Perl, DB2, and financial system support.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-alice-blue">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="font-serif text-3xl font-medium text-graphite">
          Experience
        </h2>
        <div className="mt-10 flex flex-col gap-12">
          {roles.map((role) => (
            <article
              key={`${role.company}-${role.dates}`}
              className="grid gap-3 border-t border-mist pt-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
            >
              <div>
                <p className="text-base text-ash">{role.dates}</p>
                <p className="mt-1 text-base text-stone">{role.location}</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-graphite">
                  {role.title}
                </h3>
                <p className="mt-1 text-base text-stone">{role.company}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {role.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-base leading-relaxed text-graphite"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
