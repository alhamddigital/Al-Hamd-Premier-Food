import React, { useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { dairyFeed } from "../Redux/Slice";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feeds = () => {
//   const dispatch = useDispatch();
  const feedRef = useRef();
  const topHeading = useRef();
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       dispatch(dairyFeed(feedRef.current.getBoundingClientRect().top));
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
            end: "top 40%", // When the top of the trigger hits 50% of the viewport
            scrub: 1, // Smoothly animate based on scroll
            toggleActions: "play none none reverse",
            once: false,
          },
        }
      );
  }, []);

  const array = [
    {
      image: "https://joyfarmlanet.co.ke/wp-content/uploads/2023/07/WhatsApp-Image-2023-01-12-at-9.18.58-PM.jpg",
      name: "High Yield Dairy Meal",
      description: "The high-yield 70 kg bag, priced at Ksh 2,800, is specially formulated to meet the nutritional needs of high-producing cows. This balanced ration supports peak milk production, enhances cow health, and ensures sustained productivity for dairy farmers.",
      reference: card1,
    },
    {
      image: "https://joyfarmlanet.co.ke/wp-content/uploads/2023/07/calf-meal.jpeg",
      name: "Calf Meal",
      description: "The 20 kg bag of calf meal, priced at Ksh 1,000, offers an ideal nutritional boost for young calves, supporting rapid growth and healthy weight gain. This carefully formulated feed promotes optimal development and strengthens overall calf health.",
      reference: card2,
    },
    {
      image: "https://joyfarmlanet.co.ke/wp-content/uploads/2023/07/WhatsApp-Image-2023-01-12-at-9.19.56-PM.jpg",
      name: "Dairy Cattle Salt Lick",
      description: "Our Stock Lick, enriched with essential trace minerals, is designed to boost livestock health and productivity. This mineral-rich supplement supports immunity, enhances digestion, and helps maintain steady growth, making it vital for optimal animal performance.",
      reference: card3,
    },
  ];
  
  return (
    <>
      <div
        ref={feedRef}
        id="feed"
        className="w-full min-h-screen  px-3 py-9 lg:py-[60px] lg:px-[100px] overflow-hidden"
      >
        <h1 ref={topHeading} className="text-[30px] font-[600] text-center">
          Animal Feeds & Supplements
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-9">
          {array.map((e, i) => {
            return (
                <div key={i}
                  ref={e.reference}
                  className="flex items-center flex-col rounded customShadow p-3"
                >
                  <div className="w-[300px] h-[300px] overflow-hidden rounded-full ">
                    <img
                      className="w-full h-full rounded-full"
                      src={e.image}
                      alt=""
                    />
                  </div>
                  <h1 className="text-[rgb(61,57,58)] text-2xl font-[600] mt-5">
                    {e.name}
                  </h1>
                  <p className="mt-3 text-justify">
                    {e.description}
                  </p>
                </div>
            );
          })}
          
        </div>
      </div>
    </>
  );
};

export default Feeds;
