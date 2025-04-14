import { useState } from "react";

export const ContactForm = () => {
  // 1st way for getting form data
  // const [username, setUsername] = useState("")
  // const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")

  // const handleFormSubmit = (e) => {
  //     e.preventDefault()
  //     const ContactData = {
  //         username,
  //         email,
  //         message
  //     }
  //     console.log(ContactData)
  // }

  // 2nd way
  const [contacts, setContacts] = useState({
    username: "",
    email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      username,
      email,
      message,
    };
    console.log(contacts);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Contact Form</h1>
          {/* <form action="" onSubmit={handleFormSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username"value={contacts.username}  onChange={(e) => setUsername(e.target.value)} required autoComplete="off" />
                        <label htmlFor="email">email</label>
                        <input type="text" name="email" value={contacts.email} onChange={(e) => setEmail(e.target.value)} required autoComplete="off" />
                        <label htmlFor="message">Textarea</label>
                        <textarea type="text" name="message" value={contacts.message} onChange={(e) => setMessage(e.target.value)} required autoComplete="off" />
                        <button type="submit">Send
                         Message</button>
                    </form> */}
          {/* 2nd way */}
          <form action="" onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={contacts.username}
              onChange={handleInputChange}
              required
              autoComplete="off"
            />
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              value={contacts.email}
              onChange={handleInputChange}
              required
              autoComplete="off"
            />
            <label htmlFor="message">Textarea</label>
            <textarea
              type="text"
              name="message"
              value={contacts.message}
              onChange={handleInputChange}
              required
              autoComplete="off"
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};
