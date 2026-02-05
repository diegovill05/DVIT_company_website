import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Stop Worrying About IT?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Let's talk about your technology challenges. No obligation, no pressure—just a straightforward conversation about how we can help.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="btn btn-secondary-white">
              Request a Consultation
            </a>
            <a
              href="tel:+12102091585"
              className="btn bg-white/10 text-white border-white hover:bg-white hover:text-primary"
            >
              Call (210) 209-1585
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
