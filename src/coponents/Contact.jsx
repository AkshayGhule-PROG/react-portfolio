import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then(
        (result) => {
          setOpen(true); // Show success message
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.error('Error sending email:', error.text); // Error logging
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 relative z-10">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4 gap-6">
        <h2 className="text-4xl text-center font-semibold text-primary mb-6">Contact</h2>
        <p className="text-lg text-center text-secondary max-w-2xl mb-8">
          Feel free to reach out to me for any questions or opportunities!
        </p>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-card p-8 rounded-xl shadow-xl gap-6"
        >
          <h3 className="text-2xl font-semibold text-primary mb-6">Email Me 🚀</h3>

          <div className="flex flex-col gap-4">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary text-black"
              aria-label="Your Email"
            />

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary text-black"
              aria-label="Your Name"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary text-black"
              aria-label="Subject"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-4 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary text-black"
              aria-label="Message"
            />

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold"
            >
              Send
            </button>
          </div>
        </form>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
};

export default Contact;
