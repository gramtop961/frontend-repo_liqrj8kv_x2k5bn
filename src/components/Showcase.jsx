import { motion } from 'framer-motion'

const shows = [
  { title: 'Neon Pulse', location: 'Warehouse 17', date: 'July 2025' },
  { title: 'Aurora Nights', location: 'Solaris Club', date: 'May 2025' },
  { title: 'Bassline Odyssey', location: 'District X', date: 'March 2025' },
]

export default function Showcase() {
  return (
    <section id="events" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(147,51,234,0.2),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Recent productions</h2>
            <p className="mt-3 text-white/70">A glimpse into our latest nights.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-white/20 px-5 py-2 text-white/90 hover:bg-white/10">Book yours</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shows.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center p-6 overflow-hidden">
              <div className="backdrop-blur-sm bg-black/40 rounded-xl p-4">
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="text-white/80">{s.location}</p>
                <p className="text-white/60 text-sm">{s.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
