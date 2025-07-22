import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend or show a success message
    alert('Thank you! We will contact you soon.');
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Let’s Solve Your Noise Problem — Request a Free Quote Today</h2>
        <form onSubmit={handleSubmit} className="bg-background rounded-xl shadow-lg p-8 flex flex-col gap-6">
          <div>
            <label className="block mb-2 font-medium" htmlFor="name">Full Name</label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="phone">Phone Number <span className="text-primary">*</span></label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="email">Email Address</label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="message">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your space"
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition">Book Your Site Assessment</button>
          <a
            href="https://wa.me/971588629216"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition mt-2"
          >
            Chat on WhatsApp Now
          </a>
        </form>
      </div>
    </section>
  );
}