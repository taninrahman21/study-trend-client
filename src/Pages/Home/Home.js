import React from "react";

const Home = () => {
  return (
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://clockwise.software/img/blog/cost-to-build-an-elearning-platform/header-background.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Study Trend</h1>
            <p className="mb-5">
              Study Trend was created in 2002.After create we achived a lot of success by teaching people.We always focus on qulality and build skills and cost-effective solutions.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
  );
};

export default Home;
