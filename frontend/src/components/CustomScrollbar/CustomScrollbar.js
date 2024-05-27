import React, { useEffect, useState, useRef } from 'react';
import '../../scrollbar.css'

const CustomScrollbar = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(scrollContainerRef.current?.scrollTimeout);
      scrollContainerRef.current.scrollTimeout = setTimeout(() => setScrolling(false), 200);
    };

    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={scrollContainerRef} className="custom-scroll-container">
      {children}
    </div>
  );
};

export default CustomScrollbar;
