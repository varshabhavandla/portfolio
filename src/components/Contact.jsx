export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">📧 Contact</h2>
        <p className="mb-4">Let's connect!</p>
        <div className="space-y-2">
          <p>
            Email:{" "}
            <a
              href="mailto:varshabhavandla89@gmail.com"
              className="text-blue-300 underline hover:text-blue-200 transition-colors"
            >
              varshabhavandla89@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/varsha-bh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline hover:text-blue-200 transition-colors"
            >
              linkedin.com/in/varsha-bh
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/varshabhavandla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline hover:text-blue-200 transition-colors"
            >
              github.com/varshabhavandla
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}