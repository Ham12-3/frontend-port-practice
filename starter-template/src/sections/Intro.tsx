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
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelector("h2"),
        {
          transform: "translateY(0)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView]);
  return (
    <section className="section lg:mt-20 mt-12 md:mt-16" ref={scope}>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Building beautfiul websites with clean code and thoughful design to
          help your business grow and stand out online
        </h2>
      </div>
    </section>
  );
};

export default Intro;
