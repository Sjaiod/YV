'use client';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Project MAYA',
    description: 'This is the first signature event. It’s impactful and has helped thousands of people.',
    image: '/MAYA01.jpg',
  },
  {
    title: 'Project Chauna Piyaju (PCP) ',
    description: 'This is the second signature event. A unique event with lasting contributions to the community.',
    image: '/PCP01.jpg',
  },
  {
    title: 'Menstrual Hygiene Management (MHM)',
    description: 'Third signature event, known for its huge turnout and massive outreach.',
    image: '/MHM01.jpg',
  },
  {
    title: 'Fight against winter (FAW)',
    description: 'The fourth signature event has been a major milestone in supporting underprivileged communities.',
    image: '/Faw01.jpg',
  },
];

const SignatureEvents = () => {
  return (
    <section className="relative px-6 py-20 bg-gray-900 text-gray-100">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Signature Events
      </h2>

      <div className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-200">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default SignatureEvents;
