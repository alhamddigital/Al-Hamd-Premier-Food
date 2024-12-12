import React, { useEffect, useRef } from "react";
import { GiBuffaloHead } from "react-icons/gi";
// import { useDispatch } from "react-redux";
// import { dairyRule } from "../Redux/Slice";

const Rules = () => {
//   const dispatch = useDispatch();
  const ruleRef = useRef();

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       dispatch(dairyRule(ruleRef.current.getBoundingClientRect().top));
//     });
//   }, []);

  const array = [
    {
      heading: "Quality Milk",
      description:
        "Poor milk quality reduces the shelf life of liquid milk (that is pasteurised or ultra high treated or UHT) and is becoming more important for...",
    },
    {
      heading: "Housing Dairy Stock",
      description:
        "Cows need 10 to 12 hr of undisturbed rest each day, preferably in comfortable With well-designed walkways and resting stalls, comfortable lying...",
    },
    {
      heading: "Calf rearing",
      description:
        "Calves must be born under hygienic Calving cows must be provided with a clean dry area in which to calve down. The calves’ umbilical cord should...",
    },
    {
      heading: "Rearing Weaned Heifers",
      description:
        "Weaned heifers require a balanced diet of quality roughages and This varies with the age of the calf. Their rumen is still too small for them to...",
    },
    {
      heading: "Feeding Milking Cows",
      description:
        "Poor milk quality reduces the shelf life of liquid milk (that is pasteurised or ultra high treated or UHT) and is becoming more important for...",
    },
    {
      heading: "Breeding Adult Cows",
      description:
        "Milking cows need to be well fed to If cows are too thin or over fat, they will have poorer fertility. The voluntary waiting period, or days...",
    },
  ];

  return (
      <div
        ref={ruleRef}
        id="rule"
        className="w-full bg-[rgb(30,118,234)] mt-6 lg:mt-9 py-7 px-3 lg:py-[60px] relative"
      >
        <h1 className="text-center text-white text-3xl md:text-4xl font-[500]">
          We Practice the Golden Rules!
        </h1>
        <div className="flex justify-center items-center mt-7">
          <div className="w-[100px] h-[2px] bg-white"></div>
          <div className="text-white text-2xl ml-3">
            <GiBuffaloHead />
          </div>
          <div className="w-[100px] h-[2px] ml-3 bg-white"></div>
        </div>

        <div className="w-full sm:w-[200px] md:w-[250px] mx-auto lg:w-[300px] mt-9 md:absolute md:top-[280px] md:left-[50%] md:-translate-x-[50%]">
          <img
            className="w-full h-full"
            src="https://joyfarmlanet.co.ke/wp-content/uploads/2016/09/big_cow.png"
            alt=""
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:mt-5 lg:px-[100px] sm:gap-9 md:gap-x-[200px] lg:gap-x-[300px]">
          {array.map((e, i) => {
            return (
                <div key={i} className=" flex gap-5 mt-9">
                  <div className="w-[50px]">
                    <div className="w-[50px] h-[50px]  bg-white flex justify-center items-center rounded-full text-[rgb(35,35,46)] text-2xl">
                      {i+1}
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-white text-xl md:text-2xl font-[500]">{e.heading}</h1>
                    <p className="text-white mt-3">{e.description}</p>
                  </div>
                </div>
            );
          })}

        </div>
      </div>
  );
};

export default Rules;
