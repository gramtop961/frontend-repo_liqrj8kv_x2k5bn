import { Star, Sparkles, Megaphone, Headphones, Camera, Gauge } from 'lucide-react'

const features = [
  { icon: Star, title: 'Talent Booking', desc: 'Global DJs, performers, and hosts perfectly matched to your crowd.' },
  { icon: Sparkles, title: 'Stage & Visuals', desc: 'Lighting, lasers, holographic projections, and high-impact stage design.' },
  { icon: Megaphone, title: 'Promotion', desc: 'Creative campaigns, influencers, and media to fill the dance floor.' },
  { icon: Headphones, title: 'Sound Engineering', desc: 'Premium sound systems and engineers tuned for your venue.' },
  { icon: Camera, title: 'Content Capture', desc: 'Aftermovies, reels, and photo coverage with a cinematic touch.' },
  { icon: Gauge, title: 'Operations', desc: 'Door, security, bars, and flow — handled end-to-end.' },
]

export default function Features() {
  return (
    <section id="services" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(236,72,153,0.15),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(34,211,238,0.15),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">What we do</h2>
          <p className="mt-4 text-white/70">Everything you need to launch unforgettable club nights and festivals.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/30">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
