"use client";
import { FC, useEffect } from "react";
import { stagger, useAnimate, useInView } from "motion/react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (!scope.current) return;

    const splitText = new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });

    // Set initial styles for words
    splitText.words?.forEach((word) => {
      word.style.display = "inline-block";
      word.style.transform = "translateY(100%)";
      word.style.opacity = "0";
    });
  }, [scope]);

  useEffect(() => {
    if (inView && scope.current) {
      const words = scope.current.querySelectorAll("h2 .word");

      animate(
        words,
        {
          transform: "translateY(0)",
          opacity: 1,
        },
        {
          duration: 0.5,
          delay: stagger(0.1),
        }
      );
    }
  }, [inView, animate]);

  return (
    <section className="section lg:mt-20 mt-12 md:mt-16" ref={scope}>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%] overflow-hidden">
          Building beautiful websites with clean code and thoughtful design to
          help your business grow and stand out online
        </h2>
      </div>
    </section>
  );
};

export default Intro;
