"use client";

import { motion } from "framer-motion";
import FloatingPetals from "@/components/FloatingPetals";
import FloralCorner from "@/components/FloralCorner";
import CountdownTimer from "@/components/CountdownTimer";
import SectionWrapper from "@/components/SectionWrapper";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import StickyNav from "@/components/StickyNav";
import DynamicHeroPhoto from "@/components/DynamicHeroPhoto";
import InteractiveInvitationCard from "@/components/InteractiveInvitationCard";
import CinematicLoader from "@/components/CinematicLoader";

const CONTAINER = "w-full max-w-3xl mx-auto px-5 sm:px-6 lg:px-8";
const NARROW_CONTAINER = "w-full max-w-2xl mx-auto px-5 sm:px-6";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const VENUE = "KV Conventions, Sanganakal Road, Ballari";

function googleCalendarUrl({
  name,
  start,
  end,
  detail,
}: {
  name: string;
  start: string;
  end: string;
  detail?: string;
}) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${name} - Dinesh & Monisha Wedding`,
    dates: `${start}/${end}`,
    ctz: "Asia/Kolkata",
    location: VENUE,
    details: detail
      ? `${detail}. Wedding celebration of Dinesh and Monisha.`
      : "Wedding celebration of Dinesh and Monisha.",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const events = [
  {
    name: "Varapooja",
    date: "23rd June 2026",
    day: "Tuesday",
    time: "4:30 PM",
    calendarUrl: googleCalendarUrl({
      name: "Varapooja",
      start: "20260623T163000",
      end: "20260623T173000",
    }),
  },
  {
    name: "Reception",
    date: "23rd June 2026",
    day: "Tuesday",
    time: "7:00 PM",
    calendarUrl: googleCalendarUrl({
      name: "Reception",
      start: "20260623T190000",
      end: "20260623T220000",
    }),
  },
  {
    name: "Upanayana",
    date: "24th June 2026",
    day: "Wednesday",
    time: "6:15 AM – 7:20 AM",
    detail: "Mithuna Lagna",
    calendarUrl: googleCalendarUrl({
      name: "Upanayana",
      start: "20260624T061500",
      end: "20260624T072000",
      detail: "Mithuna Lagna",
    }),
  },
  {
    name: "Muhurtha",
    date: "24th June 2026",
    day: "Wednesday",
    time: "9:15 AM – 9:45 AM",
    detail: "Karkataka Lagna",
    calendarUrl: googleCalendarUrl({
      name: "Muhurtha",
      start: "20260624T091500",
      end: "20260624T094500",
      detail: "Karkataka Lagna",
    }),
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CinematicLoader />
      <FloatingPetals />
      <StickyNav />

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        id="hero"
        className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden py-10 sm:py-16 md:py-20"
      >
        <FloralCorner position="top-left" />
        <FloralCorner position="top-right" />
        <FloralCorner position="bottom-left" />
        <FloralCorner position="bottom-right" />

        <motion.div
          className={`${NARROW_CONTAINER} relative z-10 text-center`}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="tracking-[0.14em] sm:tracking-[0.25em] uppercase text-text-medium mb-1.5 sm:mb-3"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.6rem" }}
          >
            Save the Date
          </motion.p>

          {/* Couple Photo */}
          <motion.div
            custom={1}
            variants={fadeUp}
          >
            <DynamicHeroPhoto />
          </motion.div>

          {/* Couple Names */}
          <motion.h1
            custom={2}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="shimmer-text inline-block max-w-full px-4 py-1 leading-[1.15] mb-0 cursor-default"
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(2.75rem, 15vw, 5.5rem)",
            }}
          >
            Dinesh
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="text-sm sm:text-xl text-rose-gold my-0 sm:my-1"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
          >
            &amp;
          </motion.p>

          <motion.h1
            custom={4}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="shimmer-text inline-block max-w-full px-4 py-1 leading-[1.15] mb-2 sm:mb-5 cursor-default"
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(2.75rem, 15vw, 5.5rem)",
            }}
          >
            Monisha
          </motion.h1>

          {/* Date */}
          <motion.p
            custom={5}
            variants={fadeUp}
            className="mx-auto mt-1 sm:mt-2 text-sm sm:text-lg text-rose-gold-dark font-medium tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            23rd &amp; 24th June 2026
          </motion.p>

          {/* Venue */}
          <motion.p
            custom={6}
            variants={fadeUp}
            className="mx-auto mt-0.5 sm:mt-1 max-w-[17rem] sm:max-w-none text-xs sm:text-base text-text-medium leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            KV Conventions, Sanganakal Road, Ballari
          </motion.p>

          {/* Countdown */}
          <motion.div custom={7} variants={fadeUp}>
            <CountdownTimer />
          </motion.div>

          {/* Scroll hint */}
          <motion.div custom={8} variants={fadeUp} className="mt-3 sm:mt-10">
            <motion.a
              href="#invitation"
              className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-rose-gold-light hover:text-rose-gold hover:bg-rose-gold-light/10 transition-all"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ INVITATION ═══════════════ */}
      <SectionWrapper id="invitation" className="py-12 sm:py-20 md:py-28">
        <div className={NARROW_CONTAINER}>
          <InteractiveInvitationCard>
            <div className="relative z-10 text-center">
              <div className="mb-4 sm:mb-6">
                <p
                  className="mx-auto max-w-[18rem] text-[0.68rem] sm:max-w-none sm:text-sm md:text-base text-rose-gold-dark tracking-wide leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  || Sri Lakshmi Narasimha Swamy Prasanna ||
                </p>
                <p
                  className="mx-auto max-w-[18rem] text-[0.68rem] sm:max-w-none sm:text-sm md:text-base text-rose-gold-dark tracking-wide leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  || Sri Kannika Parameshwari Prasanna ||
                </p>
                <OrnamentalDivider className="mb-0" />
              </div>

              <p
                className="text-sm sm:text-lg md:text-xl text-text-medium leading-relaxed italic"
                style={{ fontFamily: "var(--font-body)" }}
              >
                With the divine blessings of
              </p>
              <p
                className="text-xs sm:text-base text-rose-gold-dark mt-1.5 sm:mt-2 mb-4 sm:mb-7 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Late Smt. Rajalakshmamma &amp;<br className="sm:hidden" /> Late Sri Ashwathaiah Shetty
              </p>

              <OrnamentalDivider />

              <div className="mt-3 sm:mt-5">
                <p
                  className="text-sm sm:text-lg text-rose-gold-dark font-semibold leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Smt. Nagamani C. &amp;<br className="sm:hidden" /> Shri Chandrashekar A.
                </p>
                <p
                  className="text-[0.65rem] sm:text-sm text-text-medium mt-0.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Guligenahalli
                </p>
              </div>

              <p
                className="text-xs sm:text-base text-text-medium leading-relaxed mt-3 sm:mt-5 mb-4 sm:mb-7"
                style={{ fontFamily: "var(--font-body)" }}
              >
                cordially invite your gracious presence, along with your family
                and friends, on the auspicious occasion of the marriage of their
                beloved son
              </p>

              {/* Groom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="mb-3 sm:mb-4 cursor-default"
              >
                <h2
                  className="inline-block max-w-full px-2 py-1 leading-[1.15] text-rose-gold-dark"
                  style={{
                    fontFamily: "var(--font-script)",
                    fontSize: "clamp(1.4rem, 5.5vw, 2.5rem)",
                  }}
                >
                  Chi. Ra. C. Dinesh
                </h2>
                <p
                  className="text-[0.65rem] sm:text-sm text-text-medium mt-0.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Son of Smt. Nagamani C. &amp; Shri Chandrashekar A.
                </p>
              </motion.div>

              <p
                className="text-lg sm:text-xl text-rose-gold my-2 sm:my-3"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
              >
                with
              </p>

              {/* Bride */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="mb-4 sm:mb-7 cursor-default"
              >
                <h2
                  className="inline-block max-w-full px-2 py-1 leading-[1.15] text-rose-gold-dark"
                  style={{
                    fontFamily: "var(--font-script)",
                    fontSize: "clamp(1.2rem, 5vw, 2.5rem)",
                  }}
                >
                  Chi. Kum. Sou. Dr. S. J. Monisha
                </h2>
                <p
                  className="text-[0.65rem] sm:text-sm text-text-medium mt-0.5 leading-snug"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Only daughter of Smt. S. J. Pramodini<br className="sm:hidden" /> &amp; Sri Sura Jagadeesh Shetty
                </p>
              </motion.div>

              <OrnamentalDivider />

              <p
                className="text-xs sm:text-base text-text-medium italic mt-3 sm:mt-4 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Your presence and blessings will make this joyous occasion even
                more memorable.
              </p>

            </div>
          </InteractiveInvitationCard>
        </div>
      </SectionWrapper>

      {/* ═══════════════ SCHEDULE ═══════════════ */}
      <SectionWrapper id="events" className="py-12 sm:py-20 md:py-28">
        <div className={CONTAINER}>
          <div className="text-center">
            <p
              className="tracking-[0.16em] sm:tracking-[0.25em] uppercase text-text-medium mb-1"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.55rem" }}
            >
              Celebration Timeline
            </p>
            <h2
              className="text-rose-gold-dark"
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "clamp(1.6rem, 7vw, 3rem)",
              }}
            >
              Schedule of Events
            </h2>
            <OrnamentalDivider />
          </div>

          <div className="mx-auto mt-4 max-w-md space-y-3 sm:mt-8 sm:max-w-none sm:space-y-4">
            {events.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="card-glass event-card rounded-xl sm:rounded-2xl p-4 sm:p-5"
              >
                <div className="text-center">
                  <h3
                    className="text-sm sm:text-lg text-rose-gold-dark font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {event.name}
                  </h3>
                  <p
                    className="text-[0.65rem] sm:text-sm text-text-medium mt-0.5"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {event.date} &bull; {event.day}
                  </p>
                  <p
                    className="text-xs sm:text-base text-text-dark font-medium mt-0.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {event.time}
                  </p>
                  {event.detail && (
                    <div className="mt-1 sm:mt-1.5">
                      <span
                        className="inline-block text-[0.6rem] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full text-rose-gold-dark"
                        style={{
                          background: "rgba(183,110,121,0.08)",
                          fontFamily: "var(--font-sans)",
                          fontWeight: 500,
                        }}
                      >
                        {event.detail}
                      </span>
                    </div>
                  )}
                  <div className="mt-2.5 sm:mt-3.5">
                    <a
                      href={event.calendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-auto inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-[0.62rem] font-medium text-rose-gold-dark transition-colors hover:bg-rose-gold-light/10 sm:text-xs"
                      style={{
                        border: "1px solid rgba(183,110,121,0.14)",
                        fontFamily: "var(--font-sans)",
                      }}
                      aria-label={`Add ${event.name} to Google Calendar`}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="shrink-0"
                        aria-hidden="true"
                      >
                        <rect
                          x="4"
                          y="5"
                          width="16"
                          height="15"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M8 3v4M16 3v4M4 10h16M12 13v4M10 15h4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      Add to Google Calendar
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ═══════════════ VENUE ═══════════════ */}
      <SectionWrapper id="venue" className="py-12 sm:py-20 md:py-28">
        <div className={CONTAINER}>
          <div className="text-center">
            <p
              className="tracking-[0.16em] sm:tracking-[0.25em] uppercase text-text-medium mb-1"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.55rem" }}
            >
              Join Us At
            </p>
            <h2
              className="text-rose-gold-dark"
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "clamp(1.6rem, 7vw, 3rem)",
              }}
            >
              Venue
            </h2>
            <OrnamentalDivider />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.005 }}
            transition={{ duration: 0.4 }}
            className="card-glass mx-auto mt-4 max-w-md sm:max-w-none sm:mt-8 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center transition-colors duration-300 hover:border-rose-gold/25 hover:shadow-[0_12px_40px_rgba(183,110,121,0.08)]"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 rounded-xl sm:rounded-2xl flex items-center justify-center cursor-default"
              style={{
                background: "linear-gradient(135deg, rgba(183,110,121,0.1), rgba(201,169,110,0.1))",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-7 sm:h-7 text-rose-gold-dark">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>

            <h3
              className="text-lg sm:text-2xl text-rose-gold-dark font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              KV Conventions
            </h3>
            <p
              className="text-xs sm:text-base text-text-medium mt-1 mb-3 sm:mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Sanganakal Road, Ballari
            </p>

            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-5"
              style={{ border: "1px solid rgba(183,110,121,0.08)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.6!2d76.92!3d15.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA4JzI0LjAiTiA3NsKwNTUnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
              className="h-44 sm:h-56 md:h-64"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KV Conventions Location"
              />
            </div>

            <motion.a
              href="https://maps.app.goo.gl/uQGXRXkwMVmsX8Z4A"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-medium text-xs sm:text-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="relative py-8 sm:py-14">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 0%, rgba(253,242,240,0.5) 100%)" }}
        />

        <div className={`${CONTAINER} relative z-10 text-center`}>
          <motion.h2
            whileHover={{ scale: 1.03 }}
            className="text-rose-gold-dark mb-1.5 sm:mb-2 cursor-default"
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.8rem, 8vw, 3.5rem)",
            }}
          >
            Dinesh &amp; Monisha
          </motion.h2>
          <p
            className="text-xs sm:text-base text-text-medium"
            style={{ fontFamily: "var(--font-display)" }}
          >
            24th June 2026 &bull; Ballari
          </p>

          <OrnamentalDivider className="my-3 sm:my-4" />

          <p
            className="text-[0.65rem] sm:text-sm text-text-light italic"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We look forward to celebrating with you!
          </p>

          <nav className="mt-4 sm:mt-6 flex justify-center flex-wrap gap-1.5 sm:gap-3">
            {[
              { href: "#hero", label: "Home" },
              { href: "#invitation", label: "Invitation" },
              { href: "#events", label: "Events" },
              { href: "#venue", label: "Venue" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-pill px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[0.55rem] sm:text-xs text-text-medium tracking-wide"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p
            className="mt-5 sm:mt-8 text-[0.55rem] text-text-light"
            style={{ fontFamily: "var(--font-sans)", opacity: 0.6 }}
          >
            #Disha
          </p>
        </div>
      </footer>
    </main>
  );
}
