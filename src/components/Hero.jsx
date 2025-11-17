import { Users, Calendar, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="absolute top-32 -right-16 h-80 w-80 rounded-full bg-indigo-100 blur-3xl opacity-60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> Trusted by modern HR teams
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Human Resource Management made simple
            </h1>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Streamline hiring, onboarding, time off, and performance reviews in one unified workspace.
              Automations and insights that save hours every week.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-sm hover:shadow transition">
                Start free trial
              </a>
              <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold ring-1 ring-inset ring-gray-200 hover:bg-gray-50">
                Book a demo
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <span className="text-sm">Time off</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-white ring-1 ring-gray-200 rounded-xl p-4 shadow-sm">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2069&auto=format&fit=crop" alt="HR Dashboard" className="rounded-lg" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow ring-1 ring-gray-200 p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600" />
                <div>
                  <p className="text-sm font-semibold">New hire onboarding</p>
                  <p className="text-xs text-gray-500">Policy signed • Equipment ready</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow ring-1 ring-gray-200 p-4">
                <p className="text-xs text-gray-500">Time off balance</p>
                <p className="text-lg font-bold">21 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
