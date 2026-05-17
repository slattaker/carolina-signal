import logo from './assets/Carolina Signal Logo.png'
export default function CarolinaSignalWebsite() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
              <img
                src={logo}
                alt="Carolina Signal Logo"
                className="h-16 w-auto"
              />
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#coverage" className="hover:text-cyan-400 transition">Coverage</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
              Serving Fort Mill • Rock Hill • Charlotte • Indian Land
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight">
              Home WiFi Problems?
              <span className="block text-cyan-400">Let’s Fix Them.</span>
            </h2>

            <p className="mb-8 max-w-xl text-lg text-gray-300">
              Carolina Signal helps homeowners and small businesses solve frustrating WiFi issues, improve coverage, and build reliable home networks that just work.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-cyan-500 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:scale-105"
              >
                Contact Us
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-gray-700 px-6 py-3 text-base font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-2xl shadow-cyan-500/10">
            <div className="grid gap-5">
              <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5">
                <h3 className="mb-2 text-xl font-semibold text-cyan-400">Common Issues We Fix</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Slow or unstable WiFi</li>
                  <li>• Dead zones around the house</li>
                  <li>• Smart TVs buffering constantly</li>
                  <li>• Dropped Zoom or Teams calls</li>
                  <li>• Security cameras disconnecting</li>
                  <li>• Smart home devices going offline</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
                <p className="text-lg font-semibold text-cyan-300">
                  Friendly local service with real-world IT and networking experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold">Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Straightforward networking help without confusing jargon.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'WiFi Troubleshooting',
              text: 'Fix slow internet, disconnects, buffering, and unreliable wireless coverage.',
            },
            {
              title: 'Home Network Setup',
              text: 'Professional setup for routers, mesh systems, switches, and smart home devices.',
            },
            {
              title: 'WiFi Coverage Improvements',
              text: 'Eliminate dead zones and improve wireless signal throughout the home.',
            },
            {
              title: 'Smart Home Connectivity',
              text: 'Get cameras, TVs, thermostats, doorbells, and smart devices working reliably.',
            },
            {
              title: 'Home Office Networking',
              text: 'Stable networking solutions for remote work, video calls, and productivity.',
            },
            {
              title: 'Small Business Networking',
              text: 'Reliable networking help for offices, retail spaces, and small businesses.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-800 bg-gray-900 p-7 transition hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <h3 className="mb-3 text-2xl font-semibold text-cyan-400">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-gray-800 bg-gray-900/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-4xl font-bold">About Carolina Signal</h2>
            <p className="mb-5 text-lg leading-relaxed text-gray-300">
              Carolina Signal was created to help homeowners and small businesses solve frustrating network and WiFi problems without expensive enterprise-level pricing.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              We focus on practical, reliable solutions that improve coverage, stability, and overall internet performance.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-3xl border border-gray-800 bg-gray-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">Simple & Easy</h3>
              <p className="text-gray-300">
                We explain things clearly and keep the process stress-free for all ages.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">Reliable Networking</h3>
              <p className="text-gray-300">
                Better coverage, faster speeds, and more dependable connections.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">Local Support</h3>
              <p className="text-gray-300">
                Based in the Carolinas and focused on helping the local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 text-center">
          <h2 className="mb-4 text-4xl font-bold">Service Areas</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Carolina Signal proudly serves Fort Mill, Rock Hill, Indian Land, Charlotte, and surrounding areas.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-gray-800 bg-gray-900/70">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="mb-6 text-4xl font-bold">Get In Touch</h2>

          <p className="mb-10 text-lg text-gray-300">
            Need help with your WiFi or home network? Reach out today.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-800 bg-gray-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">Phone</h3>
              <p className="text-gray-300">(555) 555-5555</p>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">Email</h3>
              <p className="break-all text-gray-300">hello@carolinasignal.net</p>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">Hours</h3>
              <p className="text-gray-300">Mon - Sat<br />8:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-gray-500 md:flex-row">
          <p>© 2026 Carolina Signal. All rights reserved.</p>
          <p>Reliable WiFi & Home Network Solutions</p>
        </div>
      </footer>
    </div>
  )
}
