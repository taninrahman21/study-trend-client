import React from "react";

const Blogs = () => {
  return (
    <div className="w-10/12 mx-auto mt-10">
      <h1 className="text-center text-3xl font-bold mb-8">Here is some Questions</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Question 1: What is cors?</h2>
        <p>
          Cross-origin resource sharing (CORS) is a mechanism that allows
          restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.[1] A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.[2] Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.[3] It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin
          requests.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Question 2: Why are you using firebase? What other options do you have to implement authentication?</h2>
        <p>Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Question 3: How does private route work?</h2>
        <p>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Question 4: What is Node?And How does Node work?</h2>
        <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.<br/> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
