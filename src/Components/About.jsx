import React, { useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { dairyAbout } from "../Redux/Slice";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
//   const dispatch = useDispatch();
  const AboutRef = useRef();
  const topHeading = useRef();
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       dispatch(dairyAbout(AboutRef.current.getBoundingClientRect().top));
//     });
//   }, []);

  useEffect(() => {
    gsap.fromTo(
      topHeading.current, // Use .current to access the DOM element
      { fontSize: "15px" }, // Initial font size
      {
        fontSize: "30px", // Final font size
        scrollTrigger: {
          trigger: topHeading.current, // Trigger element
          start: "top 90%", // Start animation when the top of the element reaches 10% of the viewport
          end: "top 40%", // End animation when the top of the element reaches 30% of the viewport
          scrub: 1, // Smooth scrubbing
          toggleActions: "play none none reverse", // Control animation on scroll
          once: false, // Reset on re-enter
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      card1.current,
      { x: "300%" }, // Start from the left side (offscreen)
      {
        x: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card1.current, // Trigger for the animation
          start: "top 90%", // When the top of the trigger hits 80% of the viewport
          end: "top 40%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );
    gsap.fromTo(
      card2.current,
      { x: "300%" }, // Start from the left side (offscreen)
      {
        x: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card2.current, // Trigger for the animation
          start: "top 80%", // When the top of the trigger hits 80% of the viewport
          end: "top 40%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );
    gsap.fromTo(
      card3.current,
      { x: "300%" }, // Start from the left side (offscreen)
      {
        x: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card3.current, // Trigger for the animation
          start: "top 70%", // When the top of the trigger hits 80% of the viewport
          end: "top 30%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );
  }, []);

  const array = [
    {
      image:
        "https://joyfarmlanet.co.ke/wp-content/uploads/2020/09/400-by-300.jpg",
      name: "Our Dairy Farm",
      description:
        "The farm is situated at the heart of MUA estate in Lanet, within Nakuru County, and wears many hearts, blending seamlessly with its vibrant community. Known for showcasing sustainable agriculture, advanced dairy farming practices, and a spirit of innovation, the farm stands out as an unconventional neighbor with more cows than people per square kilometer.",
      reference: card1,
    },
    {
      image:
        "https://www.joyfarmlanet.co.ke/wp-content/uploads/2020/09/slide-3.jpg",
      name: "Meet Our Cows",
      description:
        "The farm hosts 96 cows, 42 of which are lactating, producing an impressive average daily yield of 1150 liters. With an average of 27 liters, high-yielders produce up to 47 liters, while low-yielders range from 27 to 12 liters per day. Sustainable practices, advanced feeding methods, and careful health monitoring further enhance productivity and quality across all dairy operations.",
      reference: card2,
    },
    {
      image:
        "https://joyfarmlanet.co.ke/wp-content/uploads/2020/09/400-by-300.jpg",
      name: "Our Feeds",
      description:
        "We produce our own feeds, selling a standard 70 kg bag of dairy meal at Ksh 2,500, while a high-yield 70 kg bag is priced at Ksh 2,800. These balanced rations, enriched with essential nutrients, help boost cows' yields, ensuring better milk quality, health, and productivity. Additionally, our in-house feed production supports sustainability and affordability for local farmers.",
      reference: card3,
    },
  ];

  return (
    <>
      <div
        ref={AboutRef}
        id="about"
        className="min-h-screen py-9 lg:py-[50px] overflow-hidden"
      >
        <h1
          ref={topHeading}
          className="text-3xl text-center font-[600] text-[rgb(61,57,58)]"
        >
          About Form
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-[100px] mt-9 gap-9 px-2">
          {array.map((e, i) => {
            return (
                <div key={i} ref={e.reference} className="p-3 customShadow rounded">
                  <div className="w-[250px] md:w-[220px] lg:w-[280px] md:h-[200px] mx-auto rounded group overflow-hidden">
                    <img
                      className="w-full h-full group-hover:scale-125 cursor-pointer transition-all duration-300 rounded"
                      src="https://joyfarmlanet.co.ke/wp-content/uploads/2020/09/400-by-300.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-[rgb(35,31,32)] text-2xl font-[500] mt-4 lg:mt-5 text-center">{e.name}</h1>
                    <p className="mt-3 text-justify">{e.description}</p>
                  </div>
                </div>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default About;
