import React from "react";
const contacts = [
  {
    name: "LinkDin",
    logo: "/linkdin.png",
    link: "",
  },
  {
    name: "Facebook",
    logo: "/fb.png",
    link: "",
  },
  {
    name: "Gamil",
    logo: "/gmail.png",
    link: "",
  },
  {
    name: "Whatsapp",
    logo: "/whatsapp.png",
    link: "",
  },
];

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-20">
      <div className="container my-20">
        <h2 className="text-gold text-4xl font-bold text-center">
          Connect With Me
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 ">
          {contacts?.map((c, index) => (
            <div
              key={index}
              className="group hover:translate-y-1 px-2 transition-all duration-300 bg-white pr-5 flex items-center w-50 justify-between mx-auto   rounded-3xl "
            >
              <img
                src={c.logo}
                alt=""
                className="w-15 group-hover:scale-110 duration-600"
              />
              <h2 className="text-blue-400 text-2xl font-bold italic">
                {" "}
                {c.name}{" "}
              </h2>
            </div>
          ))}
        </div>
        <img src="/3davater.png" alt="" className="w-100 mx-auto" />
        <div className="bg-white  rounded-2xl mt-10 p-5 text-center text-black">
          <h2>Contact Me</h2>
         <form action="" className="p-5 md:p-10 max-w-4xl mx-auto">
  {/* Row 1 */}
  <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
    <input
      className="flex-1 border border-gray-500 p-3 rounded-2xl"
      placeholder="First Name"
      type="text"
    />
    <input
      className="flex-1 border border-gray-500 p-3 rounded-2xl"
      placeholder="Last Name"
      type="text"
    />
  </div>

  {/* Row 2 */}
  <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
    <input
      className="flex-1 border border-gray-500 p-3 rounded-2xl"
      placeholder="Email"
      type="email"
    />
    <input
      className="flex-1 border border-gray-500 p-3 rounded-2xl"
      placeholder="Phone"
      type="tel"
    />
  </div>

  {/* Message */}
  <div className="mb-5">
    <textarea
      className="border border-gray-500 w-full rounded-2xl p-4 min-h-[150px]"
      placeholder="Your message..."
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl w-full md:w-auto"
  >
    Send Message
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
