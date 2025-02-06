import { useState, useEffect } from "react";

/**
 * Custom React Hook to track the current screen width.
 *
 * @returns {number} The current width of the window.
 */
const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    /**
     * Updates the state with the new window width when resized.
     */
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

export default useScreenWidth;