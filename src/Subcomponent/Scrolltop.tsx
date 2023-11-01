import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = currentScrollPos > 200;
    setIsVisible(isVisible);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='container'>
          <button
      className="scroll-to-top-button "
      style={{ display: isVisible ? 'block' : 'none'  }}
      onClick={handleScrollToTop}
    >
      Scroll to Top<i className="bi bi-arrow-up"></i>
    </button>
    </div>
   
  );
}

export default ScrollToTopButton;