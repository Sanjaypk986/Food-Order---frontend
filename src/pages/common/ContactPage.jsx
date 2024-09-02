import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [complaint, setComplaint] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      message,
      complaint,
      feedback
    });

    setName('');
    setEmail('');
    setMessage('');
    setComplaint('');
    setFeedback('');
  };

  return (
    <main className='container mx-auto px-2'>
      <section className='my-8 lg:w-3/4 mx-auto px-1'>
        <h2 className='font-semibold text-center text-2xl my-5 underline'>Reach Out & Resolve</h2>
        <p className=' mb-6'>
          Have a question or need assistance? We're here to help! Fill out the form below or reach out to us directly.
        </p>
        <form onSubmit={handleSubmit} className='space-y-4 '>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='name' className='block  font-medium mb-2'>
                Name
              </label>
              <input
  type='text'
  id='name'
  value={name}
  onChange={(e) => setName(e.target.value)}
  className='w-full border border-gray-300 rounded-lg p-2'
  required
/>
            </div>
            <div>
              <label htmlFor='email' className='block  font-medium mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border border-gray-300 rounded-lg p-2'
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor='message' className='block  font-medium mb-2'>
              Message
            </label>
            <textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows='4'
              className='w-full border border-gray-300 rounded-lg p-2'
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor='complaint' className='block  font-medium mb-2'>
              Customer Complaint (if any)
            </label>
            <textarea
              id='complaint'
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              rows='3'
              className='w-full border border-gray-300 rounded-lg p-2'
            ></textarea>
          </div>
          <div>
            <label htmlFor='feedback' className='block  font-medium mb-2'>
              Feedback (optional)
            </label>
            <textarea
              id='feedback'
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows='3'
              className='w-full border border-gray-300 rounded-lg p-2'
            ></textarea>
          </div>
          <button
            type='submit'
            className='secondary-bg text-white px-6 py-3 rounded-lg shadow-md transition duration-300 '
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
