import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  const rafRef = useRef(null);
  const animateRef = useRef(null);

  // Cursor positions (target = real mouse, current = smoothed)
  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (animateRef.current) cancelAnimationFrame(animateRef.current);
    };
  }, []);

  // Smoothly animate currentPos toward targetPos (premium “lag” feel)
  const startSmoothingLoop = () => {
    if (animateRef.current) cancelAnimationFrame(animateRef.current);

    const step = () => {
      const overlay = overlayRef.current;
      if (!overlay) return;

      const target = targetPosRef.current;
      const current = currentPosRef.current;

      // Lerp factor (higher = faster follow). Keep subtle.
      const ease = 0.12;

      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;

      // Two-layer glow for depth (more noticeable but still professional)
      overlay.style.background = `
        radial-gradient(850px circle at ${current.x}px ${current.y}px, rgba(37, 99, 235, 0.16), transparent 48%),
        radial-gradient(520px circle at ${current.x}px ${current.y}px, rgba(99, 102, 241, 0.10), transparent 55%)
      `;

      animateRef.current = requestAnimationFrame(step);
    };

    animateRef.current = requestAnimationFrame(step);
  };

  const stopSmoothingLoop = () => {
    if (animateRef.current) cancelAnimationFrame(animateRef.current);
    animateRef.current = null;
  };

  const handleMouseMove = (e) => {
    if (isTouchDevice || prefersReducedMotion) return;

    // throttle mouse events (compute target only)
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      targetPosRef.current = { x, y };

      // Initialize current position on first move to avoid a “jump”
      if (!isHovering) {
        currentPosRef.current = { x, y };
      }
    });
  };

  const handleMouseEnter = () => {
    if (isTouchDevice || prefersReducedMotion) return;
    setIsHovering(true);
    startSmoothingLoop();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    stopSmoothingLoop();
  };

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Help Desk & Technical Support',
      description:
        'Fast, friendly support when you need it. Email, phone, or remote access to solve problems quickly so you can get back to work.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Network & Security',
      description:
        'Setup, monitoring, and protection for your network. Firewalls, VPNs, Wi-Fi, and proactive security to keep your systems safe.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud & Email Solutions',
      description:
        'Microsoft 365, Google Workspace, file sharing, and cloud backups. Migration help, setup, and ongoing management.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: 'Backup & Disaster Recovery',
      description:
        'Automated backups you can count on. Regular testing, quick recovery, and peace of mind if something goes wrong.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'IT Consulting & Strategy',
      description:
        'Planning, budgeting, and vendor management. Advice you can trust to help your technology support your business goals.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Device Setup & Management',
      description:
        'New computer setup, software installation, and device lifecycle management. Keep your team equipped and productive.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="section-padding relative overflow-hidden"
      // Base background: subtle vertical gradient + slightly stronger dot pattern
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(37, 99, 235, 0.08), rgba(248, 250, 252, 0.95) 60%, rgba(255, 255, 255, 1)),
          radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.12) 1px, transparent 0)
        `,
        backgroundSize: 'auto, 40px 40px',
        backgroundColor: '#f8fafc',
      }}
    >
      {/* Cursor glow overlay (background set via JS for smoothing) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Services We Offer
          </h2>
          <p className="text-lg text-gray-600">
            From day-to-day support to strategic planning, we provide the IT services
            small businesses need to stay productive and secure.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card card-hover group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-5 text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
