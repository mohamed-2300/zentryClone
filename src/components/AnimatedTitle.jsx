import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse'
        }
      });

      titleAnimation.to('.animated-word' , {
        opacity: 1,
        transform: 'translate3d(0,0,0) rotateY(0deg)rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.04,
      })
    }, containerRef)

    return () => ctx.revert();
  
  
  }, [])
  

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(' ').map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default AnimatedTitle;
