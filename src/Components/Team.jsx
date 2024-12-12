import React, { useEffect, useRef } from "react";
import { GiBuffaloHead } from "react-icons/gi";
// import { useDispatch } from "react-redux";
// import { dairyTeam } from "../Redux/Slice";

const Team = () => {
//   const dispatch = useDispatch();
  const teamRef = useRef();

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       dispatch(dairyTeam(teamRef.current.getBoundingClientRect().top));
//     });
//   }, []);

  const array = [
    {
      image:
        "https://www.dairyschool.co.il/wp-content/uploads/2023/06/Dairy-Farming-Management-Training-Course-1024x538.jpg",
      position: "Form Manager",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/cattle-team-farm-workers-take-260nw-2527627727.jpg",
      position: "Herdsman",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661925306592-c355d46e3ace?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFpcnklMjBmYXJtfGVufDB8fDB8fHww",
      position: "Dairy Nutritionist",
    },
    {
      image:
        "https://media.istockphoto.com/id/1319465262/photo/men-working-at-a-dairy-farm-and-looking-after-the-cows-in-a-corral.jpg?s=612x612&w=0&k=20&c=XNAg5MNznZ_zy2-0T2cWhADktNQugPlg2XM6fmcTV24=",
      position: "Veterinarian",
    },
  ];

  return (
    <>
      <div
        ref={teamRef}
        id="team"
        className="dairyTeam w-full mt-[50px] py-[60px]"
      >
        <h1 className="text-white text-center text-3xl">The Team Behind</h1>
        <div className="flex justify-center items-center mt-7">
          <div className="w-[100px] h-[2px] bg-white"></div>
          <div className="text-white text-2xl ml-3">
            <GiBuffaloHead />
          </div>
          <div className="w-[100px] h-[2px] ml-3 bg-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-9">
          {array.map((e, i) => {
            return (
              <>
                <div className="flex justify-center items-center flex-col">
                  <div className="w-[270px] h-[270px] rounded-full">
                    <img
                      className="w-full h-full rounded-full"
                      src={e.image}
                      alt=""
                    />
                  </div>
                  <h1 className="text-white text-2xl font-[600] text-center mt-5">{e.position}</h1>
                </div>
              </>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default Team;
