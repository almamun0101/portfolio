import React from "react";
import { FaFileDownload, FaEye } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const Certifcates = [
  {
    title:"Creative It",
    logo : "/CIT.png",
    text:"",
    file:"",
    img: "/HTML.jpg",
  },
  {
     title:"Brac",
    logo : "/braclogo.png",
    text:"",
    file:"",
    img: "/Brac.jpg",
  },
  {
     title:"Solo Learn",
    logo : "/sololearn.png",
    text:"",
    file:"",
    img: "/HTML.jpg",
  },
  {
     title:"Solo Learn",
    logo : "/sololearn.png",
    text:"",
    file:"",
    img: "/CSS.jpg",
  },
];

const Profile = () => {
  return (
    <div className="w-full bg-black text-white my-10 ">
      <h2 className="text-gold text-center text-4xl italic font-bold my-10 ">
        Check Out My Resume
      </h2>
      <div className="border border-gray-50 rounded-2xl bg-[#171717] py-10 px-10 w-3/4 mx-auto flex flex-col justify-center items-center">
        <div className="lg:w-80  rounded-full bord-4  border-black">
          <img
            src="/mamun.jpg"
            alt="mamun"
            className=" rounded-full animate-pulse ring-10 shadow shadow-white hover:-rotate-20 hover:shadow-xl hover:shadow-gold transition duration-300"
          />
        </div>
        <h1 className="mt-6 text-3xl lg:text-5xl text-gold  font-bold">
          Al Mamun Khan
        </h1>
        <p className="mt-2 text-white/60">
          Web Designer || Web Developer || MEARN Dev
        </p>
        <button className="flex py-2 mt-5 bg-gold/10 text-gold animate-bounce hover:animate-none hover:bg-gold transition duration-300 hover:text-white  items-center gap-5 border px-4 rounded-xl border-gold  ">
          Resume <FaFileDownload />
        </button>
      </div>

      <div className="my-20 ">
        <h2 className="text-center text-4xl font-bold text-gold ">
          Certifcate
        </h2>

        <div className="grid md:grid-cols-2 px-5 w-4/5 md:w-3/4 py-20  items-center mx-auto gap-5">
          {Certifcates.map((c, index) => (
            <div key={index} className="bg-white rounded-4xl p-4 text-black">
              <div className="flex justify-between items-center">
                <div className="bg-black rounded-4xl w-auto pr-5  flex items-center gap-2">
                  <div className="w-15 h-15 rounded-full border-2 bg-white">
                    <img src={c.logo} alt={c.name} />
                  </div>
                  <h2 className="text-gold text-xl font-bold">{c.title}</h2>
                </div>
                <div className="text-gold">
                  <GrCertificate size={30} />
                </div>
              </div>
            <img src={c.img} alt={c.name} />
              <h2 className="text-3xl py-2 px-5 font-bold">
                {c.text}
              </h2>
              <div className="bg-gray-300 text-center flex items-center justify-between  border-2 border-black/20 rounded-4xl px-5 py-3 w-1/3 md:w-1/5  ">
                <FaEye />

                <button>View</button>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
