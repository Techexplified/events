import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CalendarCheck2,
  Send,
  Users,
  Sparkles,
  ArrowRight,
  Menu,
  Clock3,
  MessageCircle,
  LayoutDashboard,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const featureCardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const EventsLandingPage = () => {
  const floatTransition = {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  // Parallax for hero cards
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const handleComingSoonClick = () => {
    window.open("https://app.explified.com/expli", "_blank");
  };

  return (
    <motion.div
      className="min-h-screen bg-slate-950 text-slate-50 flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Subtle floating gradient blobs (hidden on very small screens) */}
      <motion.div
        className="pointer-events-none fixed -left-40 top-24 h-56 w-56 rounded-full bg-[#23b5b5]/10 blur-3xl -z-10 hidden sm:block"
        animate={{ y: [-10, 10] }}
        transition={floatTransition}
      />
      <motion.div
        className="pointer-events-none fixed right-[-120px] bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl -z-10 hidden md:block"
        animate={{ y: [8, -8] }}
        transition={{ ...floatTransition, duration: 4 }}
      />

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0">
          {/* Brand */}
          <a href="https://explified.com/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#23b5b5]/15 ring-1 ring-[#23b5b5]/40">
              <span className="text-lg font-bold text-[#23b5b5]">E</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold tracking-tight">
                  Event
                </span>
             
              </div>
           
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <button
              className="hover:text-white transition-colors"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Features
            </button>
            <button
              className="hover:text-white transition-colors"
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Pricing
            </button>
            <button
              className="hover:text-white transition-colors"
              onClick={() =>
                document
                  .getElementById("use-cases")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Use cases
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={handleComingSoonClick}
              className="inline-flex items-center gap-2 rounded-full border border-[#23b5b5]/60 bg-[#0f4141] px-4 py-1.5 text-xs font-semibold text-[#d5fafa] shadow-lg shadow-[#23b5b5]/25 hover:bg-[#106060] transition"
              whileHover={{
                scale: 1.06,
                y: -1,
                boxShadow: "0 0 28px rgba(35,181,181,0.55)",
              }}
              whileTap={{ scale: 0.96, y: 0 }}
            >
              Login
              <ArrowRight className="h-3 w-3" />
            </motion.button>

            <button className="inline-flex rounded-full border border-white/10 p-2 text-slate-300 hover:bg-white/5 md:hidden">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* HERO */}
        <section
          ref={heroRef}
          className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:py-14 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:px-0 lg:py-20"
        >
          {/* Subtle grid + glow background (toned down on mobile) */}
          <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
            {/* Soft radial glow */}
            <div className="absolute left-1/2 top-[-120px] h-64 w-[420px] -translate-x-1/2 rounded-[999px] bg-[#23b5b5]/25 blur-3xl opacity-60 hidden sm:block" />
            {/* Vertical light beam behind hero */}
            <div className="absolute left-1/2 top-0 h-[420px] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/60 via-[#23b5b5]/0 to-transparent opacity-60 hidden sm:block" />
            {/* Grid lines overlay */}
            <div className="absolute inset-[-1px] bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0)_0,_rgba(15,23,42,0.9)_60%)]" />
            <div className="absolute inset-0 opacity-[0.18] mix-blend-screen bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[length:80px_80px] hidden sm:block" />
          </div>

          {/* Extra animated diagonal line (desktop only) */}
          <motion.div
            className="pointer-events-none absolute -left-10 top-24 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent opacity-70 hidden lg:block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="pointer-events-none absolute right-0 bottom-20 h-px w-52 bg-gradient-to-r from-transparent via-[#23b5b5]/80 to-transparent opacity-60 hidden md:block"
            animate={{ x: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Left: text with animations */}
          <motion.div
            className="space-y-7 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tiny glowing orb */}
            <motion.div
              className="pointer-events-none absolute -left-4 -top-4 h-4 w-4 rounded-full bg-cyan-400/70 blur-sm hidden sm:block"
              animate={{ y: [-4, 4, -4], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-[#23b5b5]/40 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300 shadow-[0_0_40px_rgba(35,181,181,0.35)]/10"
              variants={itemVariants}
            >
              <Sparkles className="h-3 w-3 text-[#23b5b5]" />
              <span className="font-medium text-[#23b5b5]">
               New: Smart Event Timeline •
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <span>Everything from scheduling to communication, in one flow.</span>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="relative inline-block">
                <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                  Plan{" "}
                  <span className="bg-gradient-to-r from-[#23b5b5] via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                    unforgettable
                  </span>{" "}
                  events. <br className="hidden sm:block" />
                  Without the chaos.
                </h1>

                {/* Light bar under heading */}
                <motion.div
                  className="pointer-events-none mt-3 h-[2px] w-40 rounded-full bg-gradient-to-r from-[#23b5b5] via-cyan-400 to-transparent blur-[1px]"
                  initial={{ opacity: 0, scaleX: 0.4 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                />
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                eventflow keeps your timelines, vendors, and guests perfectly
                in sync—so you can focus on the experience, not the spreadsheet.
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={handleComingSoonClick}
                className="inline-flex items-center justify-center rounded-full bg-[#0f4141] px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-lg shadow-[#23b5b5]/40 hover:bg-[#106060] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23b5b5]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  boxShadow: "0 18px 60px rgba(35,181,181,0.45)",
                }}
                whileTap={{ scale: 0.96, y: 0 }}
              >
                Coming Soon
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-400"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {["A", "B", "C"].map((letter, i) => (
                  <motion.div
                    key={i}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-slate-800 text-[10px] font-semibold text-slate-100"
                    whileHover={{ y: -2, scale: 1.05 }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="font-medium text-slate-200">
                  2,500+ events automated
                </p>
                <p>Teams, agencies and solo planners worldwide.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: floating cards with parallax */}
          <motion.div
            className="relative mt-4 h-[280px] max-w-md self-center lg:h-[320px] lg:mt-0 lg:justify-self-end"
            style={{ y: parallaxY }}
          >
            {/* Base card */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-full rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/50 backdrop-blur"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Up next
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    Launch Party – Q1 Reveal
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-300 border border-emerald-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Ready
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-300">
                <div className="rounded-2xl bg-slate-900/80 p-3 border border-white/5">
                  <div className="mb-1 flex items-center gap-1.5">
                    <CalendarCheck2 className="h-3.5 w-3.5 text-[#23b5b5]" />
                    <span className="font-medium">Schedule</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Thu, 7:00 PM</p>
                  <p className="mt-1 font-semibold text-xs text-slate-100">
                    Full run-of-show
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3 border border-white/5">
                  <div className="mb-1 flex items-center gap-1.5">
                    <Send className="h-3.5 w-3.5 text-[#23b5b5]" />
                    <span className="font-medium">Invites</span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    184 confirmed · 12 pending
                  </p>
                  <p className="mt-1 font-semibold text-xs text-slate-100">
                    Auto reminders on
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3 border border-white/5">
                  <div className="mb-1 flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-[#23b5b5]" />
                    <span className="font-medium">Crew</span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    6 owners · 3 vendors
                  </p>
                  <p className="mt-1 font-semibold text-xs text-slate-100">
                    Roles synced
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-dashed border-[#23b5b5]/50 bg-[#23b5b5]/5 p-3 text-[11px] text-slate-200">
                <p className="font-medium">
                  “Timeline locked. All speakers reminded 24h before.”
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Smart automation · No manual follow-ups
                </p>
              </div>
            </motion.div>

            {/* Floating card: Event scheduled */}
            <motion.div
              initial={{ opacity: 0, y: 24, x: 24 }}
              animate={{ opacity: 1, y: -10, x: 24 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [-8, 8] }}
                transition={floatTransition}
                className="absolute -right-3 top-4 w-40 rounded-2xl border border-[#23b5b5]/40 bg-slate-900/95 p-3 text-[11px] shadow-xl"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-medium text-slate-300">
                    Event scheduled
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <p className="mt-1 text-xs font-semibold text-slate-50">
                  “Product Showcase Day”
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Guest emails queued · SMS 1h before
                </p>
              </motion.div>
            </motion.div>

            {/* Floating card: Live attendees */}
            <motion.div
              initial={{ opacity: 0, y: 24, x: -24 }}
              animate={{ opacity: 1, y: 32, x: -24 }}
              transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [6, -6] }}
                transition={{ ...floatTransition, duration: 3.4 }}
                className="absolute -left-2 bottom-1 w-44 rounded-2xl border border-white/10 bg-slate-900/95 p-3 text-[11px] shadow-xl"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-slate-200">
                    Live attendees
                  </span>
                  <span className="rounded-full bg-[#23b5b5]/20 px-2 py-0.5 text-[10px] text-[#23b5b5]">
                    +32 now
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {["E", "F", "G", "H"].map((letter) => (
                      <div
                        key={letter}
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-900 bg-slate-800 text-[10px] font-semibold"
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 text-right">
                    Reactions, check-ins <br />
                    & VIP alerts in real-time.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION BELOW HERO = FEATURES */}
        <section
          id="features"
          className="border-t border-white/5 bg-slate-950/90"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0 lg:py-16">
            <motion.div
              className="mb-10 text-center space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23b5b5]"
                variants={itemVariants}
              >
                WHY TEAMS LOVE EVENTFLOW
              </motion.p>
              <motion.h2
                className="text-2xl font-semibold text-slate-50 sm:text-3xl"
                variants={itemVariants}
              >
                All your event chaos, finally aligned.
              </motion.h2>
              <motion.p
                className="mx-auto max-w-2xl text-sm text-slate-400"
                variants={itemVariants}
              >
                Replace messy sheets, scattered chats, and last-minute scrambles
                with a single, live-updating command center for every event.
              </motion.p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 */}
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-lg"
                variants={featureCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#23b5b5]/15">
                    <Clock3 className="h-4 w-4 text-[#23b5b5]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-50">
                    Live timelines
                  </p>
                </div>
                <p className="text-sm text-slate-400">
                  Drag-and-drop your entire run-of-show and see instant impact
                  on teams, vendors and guest-facing touchpoints.
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  When something shifts, everyone knows—instantly.
                </p>

                <motion.div
                  className="pointer-events-none absolute -right-5 -bottom-5 h-16 w-16 rounded-full bg-[#23b5b5]/10 blur-xl"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-lg"
                variants={featureCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.08 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#23b5b5]/15">
                    <MessageCircle className="h-4 w-4 text-[#23b5b5]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-50">
                    Smart comms
                  </p>
                </div>
                <p className="text-sm text-slate-400">
                  Auto-trigger confirmations, reminders and thank-you notes
                  across email and SMS with your brand’s voice.
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  No more copy-paste marathons before every event.
                </p>

                <motion.div
                  className="pointer-events-none absolute -left-6 top-10 h-16 w-16 rounded-full bg-cyan-500/10 blur-xl"
                  animate={{ x: [-5, 5, -5] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-lg"
                variants={featureCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.16 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#23b5b5]/15">
                    <LayoutDashboard className="h-4 w-4 text-[#23b5b5]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-50">
                    One event cockpit
                  </p>
                </div>
                <p className="text-sm text-slate-400">
                  See guests, tasks, vendors and risks at a glance. Zoom into
                  details only when you need them.
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Great for agencies running multiple events in parallel.
                </p>

                <motion.div
                  className="pointer-events-none absolute right-4 -top-4 h-10 w-10 rounded-2xl border border-[#23b5b5]/40 bg-[#23b5b5]/10"
                  animate={{ rotate: [0, 8, -6, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section
          id="use-cases"
          className="border-t border-white/5 bg-slate-950"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0 lg:py-16">
            <div className="mb-10 text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23b5b5]">
                USE CASES
              </p>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                Built for every kind of event team.
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-slate-400">
                Whether you run internal offsites or global launch tours, keep
                every run-of-show predictable and on-brand.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "In-house teams",
                  body: "Company-wide all-hands, offsites and internal summits with no last-minute chaos.",
                },
                {
                  icon: CalendarCheck2,
                  title: "Agencies",
                  body: "Run multiple client events in parallel with clear roles, approvals and timelines.",
                },
                {
                  icon: MessageCircle,
                  title: "Community & cohorts",
                  body: "Meetups, live cohorts, webinars and roadshows with synced comms across channels.",
                },
              ].map((useCase, idx) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-lg"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#23b5b5]/15 text-[#23b5b5]">
                      <useCase.icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-semibold text-slate-50">
                      {useCase.title}
                    </p>
                  </div>
                  <p className="text-sm text-slate-400">{useCase.body}</p>
                  <motion.button
                    onClick={handleComingSoonClick}
                    whileHover={{ scale: 1.04 }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-4 inline-flex items-center justify-center rounded-full border border-[#23b5b5]/50 bg-[#0f4141]/40 px-4 py-1.5 text-[11px] font-semibold text-[#bff5f3]"
                  >
                    Coming Soon
                    <ArrowRight className="ml-1.5 h-3 w-3" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section
          id="pricing"
          className="border-t border-white/5 bg-slate-950/95"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0 lg:py-16">
            <div className="mb-10 text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23b5b5]">
                PRICING
              </p>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                Simple plans, coming soon.
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-slate-400">
                We&apos;re finalizing pricing that works for small teams, busy
                agencies and large brands—no surprise fees, ever.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {["Starter", "Team", "Enterprise"].map((tier, idx) => (
                <motion.div
                  key={tier}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative rounded-3xl border bg-slate-900/80 p-6 shadow-xl ${
                    idx === 1
                      ? "border-[#23b5b5] shadow-[0_0_40px_rgba(35,181,181,0.35)]"
                      : "border-white/10"
                  }`}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  {idx === 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#23b5b5] px-3 py-1 text-[10px] font-semibold text-slate-950">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {tier}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Core event automation and smart comms baked in.
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-300 mb-4">
                    <li>• Unlimited events & timelines</li>
                    <li>• Guests & crew management</li>
                    <li>• Email & SMS automation</li>
                    <li>• Real-time alerts & status</li>
                  </ul>

                  {/* No prices – only Coming Soon */}
                  <motion.button
                    onClick={handleComingSoonClick}
                    whileHover={{ scale: 1.05 }}
                    animate={{ opacity: [0.7, 1, 0.7], y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-full inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-semibold shadow-md ${
                      idx === 1
                        ? "bg-[#23b5b5] text-slate-950 hover:bg-[#1e9f9f]"
                        : "border border-[#23b5b5]/50 bg-[#0f4141]/40 text-[#bef5f3]"
                    }`}
                  >
                    Coming Soon
                    <ArrowRight className="ml-1.5 h-3 w-3" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER – multi-column like screenshot */}
    <footer className="bg-black pt-16 pb-8 border-t border-white/10 text-sm w-full">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {/* Top link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-gray-400">
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://labs.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Labs
                  </a>
                </li>
                <li>
                  <a
                    href="https://stream.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Stream
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Developer
                  </a>
                </li>
                <li>
                  <a
                    href="https://affiliate.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Affiliate
                  </a>
                </li>
                <li>
                  <a
                    href="https://beacon.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Beacon
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://notes.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Notes
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/quickshot/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    QuickShot
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/youtube-summarizer/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Youtube Summariser
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/yt-insight-saas/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    YT Insight
                  </a>
                </li>
                <li>
                  <a
                    href="https://expli.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Expli
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://explified.com/blog/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/our-projects/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Our Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://community.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Academy
                  </a>
                </li>
                <li>
                  <a
                    href="https://events.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://explified.com/about-us/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/partners/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/terms-of-service/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/privacy-policy/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/refund-terms/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Refund Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#23b5b5] rounded flex items-center justify-center">
                <Sparkles className="text-black w-3 h-3 fill-current" />
              </div>
              <span className="font-semibold text-white text-base">
                Explified
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#23b5b5] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-xs md:text-sm">Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#23b5b5] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs md:text-sm">LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#23b5b5] transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span className="text-xs md:text-sm">YouTube</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#23b5b5] transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span className="text-xs md:text-sm">Twitter / X</span>
              </a>
            </div>

     
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default EventsLandingPage;
