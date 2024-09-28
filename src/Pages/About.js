import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Abaddon from "../assets/images.jpeg"; 
import aayushiImage from "../assets/Aayushi.jpg"; 
import khushbuImage from "../assets/Khusbhu.jpg"; 
import radhikaImage from "../assets/Radhika.jpg"; 

const teamMembers = [
  {
    name: "Aryan Tiwari",
    designation: "Developer",
    image: Abaddon, 
  },
  {
    name: "Aayushi Singh",
    designation: "UI/UX Designer",
    image: aayushiImage, 
  },
  {
    name: "Khusbhu Gandhi",
    designation: "Technical Writer",
    image: khushbuImage, 
  },
  {
    name: "Radhikadevi Tiwari",
    designation: "Tester",
    image: radhikaImage, 
  },
];

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="min-h-[90vh]">
        <Navbar />

        <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-lg mb-6 text-center">
            "Our mission is to help you discover the best prices for your food, honoring the value of every rupee in your pocket."
          </p>
          <p className="text-lg mb-10 text-center">
            We are dedicated to providing you with the most accurate and up-to-date food price comparisons across various delivery platforms. Our mission is to make your food ordering experience seamless and cost-effective.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-center">Meet Our Team</h2>
          
          <div className="px-2 sm:px-6 lg:px-12"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 text-center transition-transform transform hover:scale-105">
                  <img src={member.image} alt={member.name} className="w-full h-64 rounded-lg object-cover mx-auto mb-4"/>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.designation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
