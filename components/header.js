import { Navbar } from "./navbar";

import bg from "../public/assets/web-bg.jpg";

export const Header = () => (
  <div>
    <div className="w-11/12 md:w-3/5 mx-auto py-4 md:py-16">
      <Navbar />
      <div className="mt-8">
        <h1 className="text-2xl font-work-sans text-gray-700 dark:text-gray-50 leading-snug lg:text-6xl lg:leading-relaxed">
          Hello, my name is{" "}
          <span className="font-bold underline decoration-sky-500">
            Ethan Moffat
          </span>
          . I’m a{" "}
          <span className="font-bold text-teal dark:text-teal-light">
            software developer
          </span>{" "}
          living in{" "}
          <span className="underline decoration-red-500 font-bold">Canada</span>
          . I build beautiful websites and work with{" "}
          <span className="underline decoration-purple-500 font-bold">
            Python
          </span>
          ,{" "}
          <span className="underline decoration-emerald-500 font-bold">
            Node.js
          </span>
          ,{" "}
          <span className="underline decoration-blue-500 font-bold">React</span>
          , and more.
        </h1>
      </div>
    </div>
  </div>
);
