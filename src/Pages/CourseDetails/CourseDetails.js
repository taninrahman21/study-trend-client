import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const course = useLoaderData();
  const {name, description, id, photo, classTime, author, price} = course;
  return (
    <div className='py-10'>
      <img className='h-[400px] w-full' src={photo} alt="course-cover" />
      <button className="btn btn-primary mt-5 w-full text-[18px]">
      <Link to={`/course/cheackout/${id}`}>Cheackout For ${price}</Link></button>
      <div className='mt-5 text-2xl'>
      <h2><span className='font-semibold'>Course: </span>{name}</h2>
      <p><span className='font-semibold'>Price:</span> ${price}</p>
      <p><span className='font-semibold'>Class Time:</span> {classTime}</p>
      <p><span className='font-semibold'>Instructor:</span> {author.name}, {author.proffesion}</p>
      <h2 className='mt-3'><span className='font-semibold'>About {name}:</span> {description}</h2>
      </div>
      <button>Cheakout For ${price}</button>
    </div>
  );
};

export default CourseDetails;