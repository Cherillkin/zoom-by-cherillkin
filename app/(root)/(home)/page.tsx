import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col size-full gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex flex-col justify-between h-full max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="max-w-[270px] rounded py-2 text-center text-base glassmorphism">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-4xl lg:text-7xl">12:30 AM</h1>
            <p className="font-medium text-lg lg:text-2xl text-sky-1">
              Saturday, May 10, 2024
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
