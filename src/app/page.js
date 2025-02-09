import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="text-gray-800 py-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            My App
          </a>
          <nav className="space-x-4">
            <a
              href="#features"
              className="hover:text-golden-yellow transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-golden-yellow transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-golden-yellow transition-colors duration-200"
            >
              Contact
            </a>
            <button className="bg-supabase-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
              Sign Up
            </button>
          </nav>
        </div>
      </header>

      <main className="p-8">
        <section className="rounded-lg bg-gradient-green-golden py-20 text-center text-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Unlock Your Potential with Our App
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Experience the power of data management and seamless application
              development.
            </p>
            <button className="bg-white text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </section>

        <section id="features" className="py-12">
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Feature 1
                </h4>
                <p className="text-gray-600">
                  Description of feature 1. Explain the benefits and how it
                  helps users.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Feature 2
                </h4>
                <p className="text-gray-600">
                  Description of feature 2. Explain the benefits and how it
                  helps users.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Feature 3
                </h4>
                <p className="text-gray-600">
                  Description of feature 3. Explain the benefits and how it
                  helps users.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 bg-supabase-background">
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Pricing Plans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  Basic
                </h4>
                <p className="text-gray-600 text-lg mb-4">
                  Free
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                </ul>
                <button className="bg-supabase-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                  Sign Up
                </button>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  Pro
                </h4>
                <p className="text-gray-600 text-lg mb-4">
                  $99/month
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>All Basic Features</li>
                  <li>Feature 3</li>
                  <li>Priority Support</li>
                </ul>
                <button className="bg-supabase-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                  Sign Up
                </button>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  Enterprise
                </h4>
                <p className="text-gray-600 text-lg mb-4">
                  Contact Us
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>All Pro Features</li>
                  <li>Custom Features</li>
                  <li>Dedicated Support</li>
                </ul>
                <button className="bg-supabase-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Contact Us
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Have questions? Get in touch with our team.
            </p>
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <ContactForm /> {/* Render the ContactForm component */}
            </div>
          </div>
        </section>
      </main>

      <footer className="text-gray-800 text-center py-4">
        <p>&copy; {new Date().getFullYear()} My Company</p>
      </footer>
    </div>
  );
}
