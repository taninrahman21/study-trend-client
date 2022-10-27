import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import toast, { Toaster } from 'react-hot-toast';

const CourseCheackout = () => {
  const {user} = useContext(AuthContext);
  const course = useLoaderData();

  const handleConfirmation = () => {
    toast.success('Successfully CheackOut!');
  }

  return (
    <div className='text-center my-10 border p-8 rounded-sm w-11/12 lg:w-2/4 mx-auto'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='text-2xl font-semibold'>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <p>Course: {course.name}</p>
          <p>Price: {course.price}</p>
          <p><span className='font-semibold'>Class Time:</span> {course.classTime}</p>
          <p>Instructor: {course.author.name}, {course.author.proffesion}</p>
      </div>
      <button onClick={handleConfirmation} className="btn btn-primary mt-5 w-full text-[18px]">
        Confirm to Cheackout
      </button>
    </div>
  );
};

export default CourseCheackout;