import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30 ring-1 ring-white/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/90 text-lg font-semibold tracking-wide">NightWave Events</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
            <a href="#events" className="text-white/80 hover:text-white transition">Events</a>
            <a href="#about" className="text-white/80 hover:text-white transition">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="rounded-full border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10 transition">Book a Night</a>
            <a href="#contact" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 font-semibold text-white shadow-lg shadow-fuchsia-500/30">Get a Quote</a>
          </div>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
