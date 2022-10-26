import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const CourseLayout = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex w-full pl-[80px] bg-gray-200">
      <div className="w-2/5 py-5 text-2xl">
        <div className="sticky top-24">
          {courses.map((course) => (
            <NavLink
              key={course.id}
              to={`/courses/${course.id}`}
              className={({ isActive }) =>
                isActive
                  ? "block my-5 font-semibold text-red-800"
                  : "font-normal block my-5"
              }
            >
              {course.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="bg-white px-8 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default CourseLayout;
