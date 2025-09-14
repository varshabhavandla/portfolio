const skills = [
  "Terraform",
  "ARM Templates",
  "Azure",
  "AWS",
  "GitHub Actions",
  "Jenkins",
  "Azure DevOps",
  "Kubernetes",
  "Docker",
  "LangChain",
  "LangGraph",
  "n8n",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">
          ⚡ Skills & Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-700 p-4 rounded-lg text-center hover:scale-105 transform transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}