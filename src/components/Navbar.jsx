import { Menu, LogIn } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">HR</div>
            <span className="text-xl font-semibold tracking-tight text-gray-900">PeopleFlow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              <LogIn className="w-4 h-4" />
              Sign in
            </a>
            <a href="#get-started" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-sm hover:shadow transition-shadow">
              Get started
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
