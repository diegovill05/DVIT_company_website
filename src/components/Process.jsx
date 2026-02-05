import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Free Assessment',
      description:
        'We talk about your current setup, pain points, and goals. No sales pressure—just a straightforward conversation.',
    },
    {
      number: '02',
      title: 'Custom Strategy',
      description:
        'We recommend practical solutions that fit your budget and needs. You decide what makes sense for your business.',
    },
    {
      number: '03',
      title: 'Seamless Onboarding',
      description:
        'We handle setup and migration carefully, minimizing disruption. Your team gets clear instructions and support.',
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description:
        'Help is there when you need it. Proactive monitoring, regular updates, and a real person who knows your systems.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Getting started is simple. Here's what to expect when you work with us.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative"
            >
              {/* Connector Line - Desktop Only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -z-10" />
              )}

              {/* Step Card */}
              <div className="relative">
                {/* Number Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white font-bold text-xl rounded-2xl mb-5 shadow-lg"
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
