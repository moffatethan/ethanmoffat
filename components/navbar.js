import React, { useState } from "react";
import { GitHub, Linkedin, Twitter, Menu, X, Moon } from "react-feather";
import { useTransition, animated, config } from "react-spring";

const mobileNavClasses =
  "p-4 block w-full transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600";

export const Navbar = ({ footer = false }) => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const toggleMobileNav = () => setMobileNavIsOpen(!mobileNavIsOpen);

  const transitions = useTransition(mobileNavIsOpen, {
    from: { opacity: "0", transform: "scale(0.95)" },
    enter: { opacity: "1", transform: "scale(1)" },
    leave: { opacity: "0", transform: "scale(0.95)" },
    reverse: mobileNavIsOpen,
  });

  const iconTransitions = useTransition(mobileNavIsOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: mobileNavIsOpen,
    delay: 200,
    config: config.gentle,
  });

  return (
    <div>
      <ul className={`md:flex text-gray-800 text-2xl`}>
        <div className="flex flex-row flex-1">
          <li
            className={`hover:text-blue-600 cursor-pointer transition-colors ease-in-out font-medium mb-4 lg:mb-0`}
          >
            <a href="https://twitter.com/MrEthanMoffat" target="_blank">
              twitter
            </a>
          </li>
          <li
            className={`dot-separated hover:text-blue-600 cursor-pointer transition-colors ease-in-out font-medium mb-4 lg:mb-0`}
          >
            <a href="https://github.com/moffatethan" target="_blank">
              git
            </a>
          </li>
          <li
            className={`dot-separated hover:text-blue-600 cursor-pointer transition-colors ease-in-out font-medium mb-4 lg:mb-0`}
          >
            <a href="https://codingscoop.com/" target="_blank">
              read
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};
