import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  }

  return (
    <section className='text-gray-700 body-font relative'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Interested in exploring Blockchain for your business? reach out to
            us, we’ll get back to you.
          </h1>
          <p className='lg:w-3/3 mx-auto leading-relaxed text-base'>
            Our team builds best possible solution on various platforms such as
            Ethereum, Hyperledger, R3 Corda. Have a look at the services and
            products that we work on.
          </p>
        </div>
      </div>
      <div className='lg:w-1/2 md:w-2/3 mx-auto mb-10'>
        {status === 'SUCCESS' ? (
          <p className='text-primary-yellow'>
            Thank you for getting in touch. We will get back to you soon.
          </p>
        ) : (
          <form
            className='flex flex-wrap -m-2  '
            onSubmit={submitForm}
            action='https://formspree.io/xbjzvrkq'
            method='POST'
          >
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                placeholder='Name'
                name='name'
                type='text'
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                placeholder='Email'
                name='email'
                type='email'
              />
            </div>
            <div className='p-2 w-full'>
              <textarea
                className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block'
                placeholder='Message'
                name='message'
              ></textarea>
            </div>
            <div className='p-2 w-full'>
              <button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                Submit
              </button>
            </div>
            {status === 'ERROR' && (
              <p className='text-primary-yellow'>Ooops! There was an error.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
