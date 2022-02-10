import { useState, useEffect } from "react";
import { ScrollButton, ScrollButtonContainer, ScrollIcon } from "./ScrollToTopStyles";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <ScrollButtonContainer>
        <ScrollButton type="button" onClick={scrollToTop} isVisible={isVisible}>
          <ScrollIcon size="2rem" />
        </ScrollButton>
      </ScrollButtonContainer>
    </>
  );
};

export default ScrollToTop;
