import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Add Your Business or Shop Details</h2>
        <p className="text-center text-gray-600 mb-8">
          If you are a shop owner, marketer, or want to promote your place, please fill in the form below.
        </p>

        <form className="space-y-6">
          <motion.input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            placeholder="Message (e.g. shop info, marketing details)"
            rows="4"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
