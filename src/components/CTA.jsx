export default function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(236,72,153,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.2),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Let’s build your next night</h2>
              <p className="mt-4 text-white/70">Tell us your vision — we’ll bring the lineup, visuals, and operations to make it unforgettable.</p>
              <ul className="mt-6 space-y-2 text-white/80 text-sm">
                <li>• Full-service event production</li>
                <li>• Club takeovers & brand nights</li>
                <li>• Festivals and open-air events</li>
              </ul>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input placeholder="Name" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                <input placeholder="Email" type="email" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              </div>
              <input placeholder="Event type (club, festival, brand night)" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <textarea placeholder="Tell us about your vision" rows={4} className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <button type="submit" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 w-full sm:w-auto">Request a Proposal</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
