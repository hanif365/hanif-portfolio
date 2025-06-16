"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaEquals, FaXmark } from "react-icons/fa6";
// import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check for saved theme preference or use user's system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  // const toggleTheme = () => {
  //   const newTheme = !isDarkMode ? 'dark' : 'light';
    
  //   if (newTheme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
    
  //   localStorage.setItem('theme', newTheme);
  //   setIsDarkMode(!isDarkMode);
  // };

  // const iconVariants = {
  //   initial: {
  //     x: -50,
  //     opacity: 0,
  //     rotate: -180,
  //     scale: 0.5,
  //   },
  //   animate: {
  //     x: 0,
  //     opacity: 1,
  //     rotate: 0,
  //     scale: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 200,
  //       damping: 12,
  //     },
  //   },
  //   exit: {
  //     x: 50,
  //     opacity: 0,
  //     rotate: 180,
  //     scale: 0.5,
  //     transition: {
  //       duration: 0.3,
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  const hireMeVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 py-4">
      <div className="justify-between px-4 sm:px-6 lg:px-8 mx-auto  md:items-center md:flex">
        <div className="flex-1 md:flex-initial">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-medium">MD. ABU HANIF</span>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <FaXmark className="w-6 h-6 " />
                ) : (
                  <FaEquals className="w-6 h-6 " />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex-auto">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar
                ? "p-6 md:p-0 block"
                : "hidden md:block bg-primary rounded-xl px-2"
              // : "hidden md:block bg-gray-100/80 rounded-xl px-2"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex space-y-4 md:space-y-0">
              {["Home", "Skills", "Experience", "Education", "Blogs", "Contact"].map((item) => {
                const itemPath =
                  item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive = pathname === itemPath;

                return (
                  <li
                    key={item}
                    className={`text-sm font-medium text-center border-b-2 border-border md:border-b-0 transition duration-300 py-3 md:py-4`}
                  >
                    <Link
                      href={itemPath}
                      onClick={() => setNavbar(false)}
                      className="relative py-2 px-3 md:mx-1 rounded-lg hover:bg-hover transition-colors duration-300"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active"
                          className="absolute inset-0 bg-secondary rounded-lg"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item}</span>
                    </Link>
                  </li>
                );
              })}
              <li className="text-sm font-medium py-2 text-center border-b-2 border-border md:border-b-0 md:hidden">
                <motion.div
                  key={isDarkMode ? "dark-hire" : "light-hire"}
                  variants={hireMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Link
                    href="https://www.linkedin.com/in/programmerhanif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary px-4 py-2 rounded-xl hover:bg-hover transition-colors duration-300"
                    onClick={() => setNavbar(false)}
                  >
                    HIRE ME
                  </Link>
                </motion.div>
              </li>
              {/* <li className="text-sm font-medium py-2 text-center border-b-2 border-border md:border-b-0 md:hidden">
                <button
                  className="p-2 rounded-full transition-colors duration-300"
                  onClick={toggleTheme}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={isDarkMode ? "dark" : "light"}
                      variants={iconVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isDarkMode ? (
                        <IoSunnyOutline className="w-6 h-6" />
                      ) : (
                        <IoMoonOutline className="w-6 h-6" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="hidden md:flex md:flex-initial">
          <ul className="items-center justify-end md:flex space-y-4 md:space-y-0 md:space-x-4">
            {/* <li className="text-sm font-medium py-2 text-center">
              <button
                className="p-2 rounded-full transition-colors duration-300 cursor-pointer"
                onClick={toggleTheme}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? "dark" : "light"}
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isDarkMode ? (
                      <IoSunnyOutline className="w-6 h-6" />
                    ) : (
                      <IoMoonOutline className="w-6 h-6" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </li> */}
            <li className="text-sm font-medium py-2 text-center">
              <motion.div
                key={isDarkMode ? "dark-hire" : "light-hire"}
                variants={hireMeVariants}
                initial="initial"
                animate="animate"
              >
                <Link
                  href="https://www.linkedin.com/in/programmerhanif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary px-4 py-3 md:py-4 rounded-xl hover:bg-hover transition-colors duration-300"
                  onClick={() => setNavbar(false)}
                >
                  HIRE ME
                </Link>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
