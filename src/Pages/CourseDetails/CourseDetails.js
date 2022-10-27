import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
// import { FaCloudDownloadAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import PdfFile from '../PdfFile.js/PdfFile';

const CourseDetails = () => {
  const course = useLoaderData();
  const {name, description, id, photo, classTime, author, price} = course;
  return (
    <div className='py-10'>
      <img className='h-[400px] w-full' src={photo} alt="course-cover" />
      <button className="btn btn-primary mt-5 w-full text-[18px]">
      <Link to={`/course/cheackout/${id}`}>Cheackout For ${price}</Link></button>
      <PDFDownloadLink document={<PdfFile course={course}/>}>
      {({ loading }) => (loading ? <button>Loading Document...</button> : <button className='btn btn-sm mt-3'>Download PDF</button> )}
      </PDFDownloadLink>
     
      <div className='text-2xl'>
      <h2><span className='font-semibold'>Course: </span>{name}</h2>
      <p><span className='font-semibold'>Price:</span> ${price}</p>
      <p><span className='font-semibold'>Class Time:</span> {classTime}</p>
      <p><span className='font-semibold'>Instructor:</span> {author.name}, {author.proffesion}</p>
      <h2 className='mt-3'><span className='font-semibold'>About {name}:</span> {description}</h2>
      </div>
    </div>
  );
};

export default CourseDetails;