import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.25),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(147,51,234,0.25),transparent_35%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Futuristic nightlife experiences
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-white">
            Elevate your club and festival nights with premium event organization
          </h1>
          <p className="mt-5 text-lg text-white/80">
            We design, promote, and execute immersive parties, DJ bookings, and branded nights. From holographic visuals to flawless logistics — you bring the crowd, we bring the vibe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30">
              Plan Your Event
            </a>
            <a href="#events" className="rounded-full border border-white/20 px-6 py-3 text-white/90 hover:bg-white/10 transition">
              See Past Nights
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
