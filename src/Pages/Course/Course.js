import React from "react";
import { FaClock, FaCloudDownloadAlt, FaUser } from "react-icons/fa";

const Course = ({course}) => {
  const { name, classTime, photo, author, price } = course;
  return (
    <div className="border px-4 py-3 rounded-lg">
      <img className="h-[220px] w-full rounded-lg" src={photo} alt="" />
      <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold mt-2">{name}</h2>
      <FaCloudDownloadAlt title="Download pdf" className="text-3xl "/>
      </div>
      <div className="flex items-center text-gray-700 mt-3">
        <FaClock className="mr-2"/>
        <p>{classTime}</p>
      </div>
      <div className="flex items-center text-gray-700">
        <FaUser className="mr-2"/>
        <p>{author.name}, {author.proffesion}</p>
      </div>
      <button className="btn btn-primary mt-5 w-full text-[18px]">Get Premium For ${price}</button>
    </div>
  );
};

export default Course;
