import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-10'>
      {
        courses.map(course => <Course key={course.id} course={course}></Course>)
      }
    </div>
  );
};

export default Courses;