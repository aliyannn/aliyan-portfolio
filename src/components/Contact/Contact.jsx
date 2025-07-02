import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const spotlightRef = useRef(null);
  const formRef = useRef();
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);

  const handleMouseMove = (e) => {
    const rect = spotlightRef.current.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_h5nuv9b",
        "template_fdmmvuq",
        formRef.current,
        "RMv4qHCq_hkg1gcVG"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("Email send error:", error);
          alert("Failed to send message ❌\n${error.text}");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center px-4 py-24"
    >
      <motion.div
        ref={spotlightRef}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-xl p-10 rounded-xl shadow-xl border border-white/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-xl"
          style={{
            background: `radial-gradient(600px at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.15), transparent 80%)`,
          }}
        />

        <h2 className="text-3xl font-bold text-white text-center mb-6">Get in Touch</h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <motion.input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            whileFocus={{ scale: 1.01 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md relative overflow-hidden group"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
            <span className="relative z-10">
              {loading ? "Sending..." : "Send Message"}
            </span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
