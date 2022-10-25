import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const CourseLayout = () => {
  const [courses, setCourses] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/courses')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])

  return (
    <div className="flex w-full pl-[80px] bg-gray-200">
      <div className="w-2/5 py-5 text-2xl">
      {
        courses.map(course => <Link
          key={course.id} 
          to={`/courses/${course.id}`}
          className='block my-5'
          >{course.name}</Link>)
      }
      </div>

      <div className="bg-white px-8 w-full">
       <Outlet></Outlet>
      </div>
    </div>
  );
};

export default CourseLayout;
