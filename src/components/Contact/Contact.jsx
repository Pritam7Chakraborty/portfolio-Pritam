// src/components/Contact/Contact.jsx
import React, {useState } from "react";
import email_icon from "/src/assets/email.png";
import location_icon from "/src/assets/location.png";
import linkedin_icon from "/src/assets/linkedin.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending....");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://pritam-portfolio-api.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (responseData.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        throw new Error(responseData.msg || "An error occurred.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <div id="contact" className="relative py-16 px-4 overflow-hidden">
      {/* --- Decorative Background Gradients --- */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-900/50 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-orange-900/50 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* --- Left Content --- */}
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Let's talk
          </h1>
          <p className="max-w-lg text-neutral-300 text-lg md:text-xl leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form or use the contact details below.
          </p>
          {/* Redesigned Contact Info */}
          <div className="flex flex-col gap-6 text-neutral-200 text-lg mt-4">
            <a href="mailto:cpritam870@gmail.com" className="flex items-center gap-4 group">
              <img src={email_icon} alt="email icon" className="w-8 p-1.5 bg-neutral-800 rounded-full" />
              <span className="group-hover:text-white transition-colors">cpritam870@gmail.com</span>
            </a>
            <div className="flex items-center gap-4">
              <img src={location_icon} alt="location icon" className="w-8 p-1.5 bg-neutral-800 rounded-full" />
              <span>West Bengal, India</span>
            </div>
            <a href="https://linkedin.com/in/pritam-chakraborty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <img src={linkedin_icon} alt="linkedin icon" className="w-8 p-1.5 bg-neutral-800 rounded-full" />
              <span className="group-hover:text-white transition-colors">linkedin.com/in/pritam-chakraborty</span>
            </a>
          </div>
        </div>

        {/* --- Right Form --- */}
        <form onSubmit={onSubmit} className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 shadow-xl flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-white mb-2">Send me a message</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-neutral-300 font-medium">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" required className="w-full h-12 px-4 rounded-lg border border-neutral-700 bg-neutral-800/50 text-neutral-200 focus:outline-none focus:border-purple-600 transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-neutral-300 font-medium">Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" required className="w-full h-12 px-4 rounded-lg border border-neutral-700 bg-neutral-800/50 text-neutral-200 focus:outline-none focus:border-purple-600 transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-neutral-300 font-medium">Write your message</label>
            <textarea name="message" rows="5" placeholder="Enter your message" required className="w-full p-4 rounded-lg border border-neutral-700 bg-neutral-800/50 text-neutral-200 resize-none focus:outline-none focus:border-purple-600 transition"></textarea>
          </div>
          <button type="submit" disabled={isLoading} className="mt-2 px-12 py-4 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? "Sending..." : "Submit Now"}
          </button>
          {result && <span className="mt-2 text-center text-base text-green-400">{result}</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;