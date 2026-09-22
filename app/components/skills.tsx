const groups = [
  {
    label: "Program and product delivery",
    items:
      "Cross functional program leadership, product roadmap and vision, intake governance and prioritization, stakeholder alignment, dependency and risk management, go to green recovery",
  },
  {
    label: "Cloud, API platforms, and DevOps",
    items:
      "API platforms and gateway (Apigee Hybrid), API governance and marketplace, CI/CD (Jenkins, Azure DevOps, UrbanCode, Ansible, Bitbucket, Git), hybrid cloud (VMware, RHEL), Azure, AWS, GCP",
  },
  {
    label: "Data and tooling",
    items:
      "Jira, Jira Align, Confluence, Tableau, portfolio dashboards, executive reporting",
  },
  {
    label: "AI and security governance",
    items:
      "Agentic and generative AI, AI driven inventory, threat assessment, OWASP, audit readiness, HIPAA, HITRUST, SOX, governance, risk, and compliance",
  },
];

const certifications =
  "Professional Scrum Master (PSM I), Professional Agile Leadership (PAL I), ICAgile (ICP-ACC, ICP-IDO, ICP-ATF), SAFe 5 POPM, Microsoft Azure Fundamentals (AZ-900), Caltech Generative AI Workshop, and PMI-CPMAI.";

export default function Skills() {
  return (
    <section className="bg-porcelain">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="font-serif text-3xl font-medium text-graphite">
          Skills and tools
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.label} className="border-t border-mist pt-4">
              <h3 className="text-base font-semibold text-graphite">
                {group.label}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone">
                {group.items}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-mist pt-4">
          <h3 className="text-base font-semibold text-graphite">
            Certifications
          </h3>
          <p className="mt-2 max-w-[78ch] text-base leading-relaxed text-stone">
            {certifications}
          </p>
        </div>
      </div>
    </section>
  );
}
