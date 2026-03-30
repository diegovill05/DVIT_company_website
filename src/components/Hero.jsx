import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-36 pb-24 md:pt-44 md:pb-36 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(37, 99, 235, 0.06) 0%, rgba(255, 255, 255, 1) 50%, rgba(16, 185, 129, 0.04) 100%),
          radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.07) 1px, transparent 0)
        `,
        backgroundSize: 'auto, 32px 32px',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[32rem] h-[32rem] bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm rounded-full border border-accent/20">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                San Antonio IT Support
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl xl:text-[3.5rem] font-extrabold text-secondary leading-[1.1] tracking-tight mb-5"
            >
              IT Support That Keeps Your Business{' '}
              <span className="text-primary">Running</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              Professional IT help desk, network support, and strategic consulting for
              small businesses. Fast response times, proactive security, and service in
              plain English.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="btn btn-primary px-9 py-3.5 text-[1.0625rem] shadow-lg shadow-primary/25"
              >
                Request a Consultation
              </a>
              <a
                href="tel:+12102091585"
                className="btn bg-transparent text-gray-600 border-gray-300 hover:border-primary hover:text-primary hover:-translate-y-0.5"
              >
                Call (210) 209-1585
              </a>
            </motion.div>

            {/* Trust Notes */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 sm:gap-6 text-sm text-gray-500 justify-center md:justify-start pt-6 border-t border-gray-200/80"
            >
              {['Fast Response', 'No Long-Term Contract', 'Local & Remote'].map(
                (label) => (
                  <div key={label} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{label}</span>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)]">
              <img
                src="/assets/hero-image.jpg"
                alt="Professional IT support team helping a small business"
                className="w-full h-auto"
              />
              {/* Overlay gradient for visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
            {/* Floating accent elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
