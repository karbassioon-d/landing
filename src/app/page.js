import ContactForm from "./components/ContactForm";
import DataParticlesWrapper from "./components/DataParticlesWrapper";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="text-gray-800 py-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            SupportAI
          </a>
          <nav className="space-x-4">
            <a
              href="#features"
              className="hover:text-golden-yellow transition-colors duration-200"
            >
              Benefits
            </a>
            <a
              href="#contact"
              className="hover:text-golden-yellow transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="p-8 relative overflow-hidden">
        <DataParticlesWrapper particleColor="#FFDA63" />
        <section className="rounded-lg bg-gradient-green-golden py-20 text-center text-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Reimagine Customer Support with AI
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Unlock a new era of customer satisfaction with SupportAI. Provide
              instant, personalized support and empower your team to focus on
              what matters most.
            </p>
            <button className="bg-white text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Request a Demo
            </button>
          </div>
        </section>

        <section id="features" className="py-12 relative z-10">
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Experience the Power of AI-Driven Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  24/7 Instant Support
                </h4>
                <p className="text-gray-600">
                  Provide immediate assistance to your customers, no matter the
                  time of day.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Reduced Support Costs
                </h4>
                <p className="text-gray-600">
                  Automate routine tasks and free up your agents to focus on
                  complex issues.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Data-Driven Insights
                </h4>
                <p className="text-gray-600">
                  Gain valuable insights into customer behavior and optimize your
                  support processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-12 bg-supabase-background text-center relative z-10"
        >
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">
              Request a Demo
            </h3>
            <p className="text-gray-600 text-center mb-8">
              See SupportAI in action and discover how it can transform your
              customer support.
            </p>
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="text-gray-600 text-center py-4">
        <p>&copy; {new Date().getFullYear()} SupportAI</p>
      </footer>
    </div>
  );
}