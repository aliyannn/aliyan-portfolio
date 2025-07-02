import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const spotlightRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleMouseMove = (e) => {
    const rect = spotlightRef.current.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send("service_h5nuv9b", "template_wa5w8vd", data, "RMv4qHCq_hkg1gcVG")
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        reset();
        toast.success("Message sent successfully ✅");
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong ❌");
        console.error(err);
      });
  };

  return (
    <section id="contact" className="flex items-center justify-center px-4 py-24">
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            {...register("from_name", { required: "Name is required" })}
            placeholder="Your Name"
            className="w-full px-4 py-3 mb-4 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.from_name && <p className="text-red-400">{errors.from_name.message}</p>}

          <input
            type="email"
            {...register("from_email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
            })}
            placeholder="Your Email"
            className="w-full px-4 py-3 mb-4 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.from_email && <p className="text-red-400">{errors.from_email.message}</p>}

          <textarea
            rows="5"
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            className="w-full px-4 py-3 mb-4 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          {errors.message && <p className="text-red-400">{errors.message.message}</p>}

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--electric-purple)] text-white font-semibold py-3 rounded relative overflow-hidden group"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
            <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
          </motion.button>
        </form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex justify-center mt-6"
            >
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="text-green-500">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        <ToastContainer position="top-right" autoClose={4000} />
      </motion.div>
    </section>
  );
};

export default ContactForm;
