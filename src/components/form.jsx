import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameRegex = /^[a-zA-Z\s]*$/; // Regex pour valider le champ de saisie du nom
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour valider le champ de saisie de l'email

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  const validateName = () => {
    if (!name) {
      return "Name is required.";
    } else if (!nameRegex.test(name)) {
      return "Please enter a valid name.";
    }
    return "";
  };

  const validateEmail = () => {
    if (!email) {
      return "Email is required.";
    } else if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  return (
    <section className="g-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
              Name:
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {validateName() && <span>{validateName()}</span>}
            </label>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
              Email:
              <input
                className="block p-3 w-full text-sm text-red-500 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {validateEmail() && <span>{validateEmail()}</span>}
            </label>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-white dark:text-gray-400">
              Message:
              <textarea className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button className="py-3 px-5 text-sm font-medium text-center border-white bg-custombblack border-2 text-white border-solid rounded-lg hover:bg-customyellow" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
