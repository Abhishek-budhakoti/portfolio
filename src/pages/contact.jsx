import { useState } from "react";
import emailjs from "emailjs-com"; 

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    setLoading(true); 

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false); 
        },
        () => {
          alert("Failed to send email. Please try again.");
          setLoading(false); 
        }
      );
  };

  return (
    <section
      id="contact"
      className="text-black dark:text-white transition-colors duration-500 min-h-screen flex items-center justify-center px-4 py-40"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white/5 dark:bg-white/10 border border-white/30 dark:border-white rounded-md backdrop-blur-md space-y-4 shadow-lg"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 rounded border-b border-black dark:border-white bg-transparent text-black dark:text-white placeholder-gray-400 dark:placeholder-white focus:outline-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 rounded border-b border-black dark:border-white bg-transparent text-black dark:text-white placeholder-gray-400 dark:placeholder-white focus:outline-none"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 rounded border-b border-black dark:border-white bg-transparent text-black dark:text-white placeholder-gray-400 dark:placeholder-white focus:outline-none h-32 resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className={` cursor-pointer py-2 px-4 rounded transition-colors ${loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-black hover:bg-blue-700"
            } text-white`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};
