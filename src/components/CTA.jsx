export default function CTA() {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to modernize your HR?
            </h3>
            <p className="mt-3 text-blue-100 text-lg">
              Launch in minutes. Import employees, set up policies, and invite your team.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold ring-1 ring-inset ring-gray-200 hover:bg-gray-50">
              Book a demo
            </a>
            <a href="#signup" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black">
              Start free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
