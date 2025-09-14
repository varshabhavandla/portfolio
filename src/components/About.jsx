export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-semibold text-blue-400 mb-4">🛠️ About Me</h2>
      <p className="mb-4">
        DevOps Engineer focused on building reliable, secure, and scalable
        cloud platforms. I design and automate infrastructure, CI/CD,
        observability, and incident response across Azure, AWS, and GCP with a
        strong SRE mindset. I also have experience deploying AI agents and
        automations using LangGraph, LangChain, and n8n.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>6+ years in cloud-native DevOps and platform engineering</li>
        <li>
          Proven track record shipping IaC-first environments, GitHub Actions,
          and Kubernetes platforms
        </li>
        <li>
          Passionate about reliability, cost efficiency, and developer
          experience
        </li>
      </ul>
      <p className="mt-4">
        I work on real-time DevOps and cloud projects involving AWS, Azure,
        Terraform, Kubernetes, and Docker. I also develop automation scripts
        for tool installations and configurations.
      </p>
    </section>
  );
}