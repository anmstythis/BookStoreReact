import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wxubcei', 'template_f61t835' , form.current, {
        publicKey: '1onkU7pJ5wv212QU9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='sendForm' ref={form} onSubmit={sendEmail}>
      <label className='sendLabel'>Ваше имя</label>
      <input className='messageSend' type="text" name="from_name" />
      <label className='sendLabel'>Ваш Email</label>
      <input className='messageSend' type="email" name="user_email" />
      <label className='sendLabel'>Содержимое вопроса</label>
        <textarea className='messageSend' name="message" />
        <input className='sendButton' type="submit" value="➣" />
    </form>
  );
};

export default EmailForm;