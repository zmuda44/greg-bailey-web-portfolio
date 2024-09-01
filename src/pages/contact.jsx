
import { useState } from 'react';


function Contact() {

  // Set all variables to empty to start
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {


    const target = e.target
    console.log(target)
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and password       
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (!inputValue) {
      setErrorMessage('No inputValue');
    }
    console.log(inputType)
  };

  const handleOut = (e) => {
    const target = e.target;
    const inputValue = target.value;

    // Check if the field is empty when the user leaves the input field
    if (!inputValue) {
      if(target.placeholder === 'Type your message here') {
        setErrorMessage('Please enter your message');
      } else {
        setErrorMessage(`Please enter your ${target.placeholder}`);
      }
    };
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("All fields required to send a message");
      return
    }
    
    alert(`Hello ${name}, welcome to my portfolio!`);

    // Clears form
    setEmail('');
    setName('');
    setMessage('');

  };

  return (
    <section id='contact'>

      <div className="container">
        <h1 id="contact-title" className="section-title">Hello {name}</h1>
        <form className="form" onSubmit={handleFormSubmit}>
        <input
            id="contactMe-name"
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleOut}
            type="text"
            placeholder="Name"
          />
          <input
            id="contactMe-email"
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleOut}
            type="email"
            placeholder="email"
          />
          <input
            id="contactMe-message"  
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleOut}
            type="text"
            placeholder="Type your message here"
          />
          <button type="submit">Submit</button>
        </form>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
      </div>
    </section>
  );
}

export default Contact;








    // if (!validateEmail(email) || name) {
    //   setErrorMessage('Email or name is invalid');
    //   return;
    // }
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${name}`
    //   );
    //   return;
    // }