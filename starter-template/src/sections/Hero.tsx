"use client";
import { FC, useEffect, useRef } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import SplitType from "split-type";
import { motion, stagger, useAnimate } from "motion/react";

const Hero: FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const splitText = new SplitType(titleRef.current, {
      types: "lines,words",
      tagName: "span",
    });

    // Add a small delay to ensure the DOM has been updated
    setTimeout(() => {
      if (splitText.words?.length) {
        splitText.words.forEach((word, index) => {
          // Set initial styles
          word.style.display = "inline-block";
          word.style.transform = "translateY(100%)";
          word.style.opacity = "0";

          // Animate each word with increasing delay
          setTimeout(() => {
            word.style.transform = "translateY(0)";
            word.style.opacity = "1";
            word.style.transition = "transform 0.5s ease, opacity 0.5s ease";
          }, 100 + index * 200); // 200ms stagger between words
        });
      }
    }, 100);
  }, []);

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0 overflow-hidden"
            >
              Crafting digital experiences through code and creative design
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.75,
                }}
              >
                <Button
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-hiddne size-5">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  {" "}
                  <span>View My Work</span>
                </Button>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 2.2,
                }}
              >
                <Button variant="text">Let&apos;s Talk</Button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image
              src={heroImage}
              alt="My portraits"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-[200vh] border-4 border-red-500"></div>
    </section>
  );
};

export default Hero;
