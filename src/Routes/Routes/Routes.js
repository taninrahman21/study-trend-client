import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import CourseLayout from "../../Pages/CourseLayout/CourseLayout";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import NotFound from "../../Pages/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CourseCheackout from "../../Pages/CourseCheackout/CourseCheackout";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/courses',
        element: <CourseLayout></CourseLayout>,
        children: [
          {
            path: '/courses',
            element: <Courses></Courses>,
            loader: () => fetch('https://study-trend-server.vercel.app/courses')
          },
          {
            path: '/courses/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({params}) => fetch(`https://study-trend-server.vercel.app/courses/${params.id}`)
          }
        ]
      },
      {
        path: '/course/cheackout/:id',
        element: <PrivateRoute><CourseCheackout/></PrivateRoute>,
        loader: ({params}) => fetch(`https://study-trend-server.vercel.app/courses/${params.id}`)
      },
      {
        path: '/blogs', 
        element: <Blogs></Blogs>
      },
      {
        path: 'faq',
        element: <Faq></Faq>
      }
      
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
])