import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Main App component to demonstrate the popup functionality
export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Set a timer to show the popup after 1 minute
    // Cast setTimeout to number to resolve TypeScript error
    timeoutRef.current = setTimeout(() => {
      setShowPopup(true);
    }, 60000) as unknown as number; // 1 minute = 60000 ms

    // Clear the timer if the component unmounts
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans p-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center">Ideovent Website</h1>
      <p className="text-gray-600 mb-8 text-center max-w-lg">This is where the main website content would be displayed. The review popup will appear after one minute.</p>
      
      {/* Button to manually trigger the popup for testing purposes */}
      <button
        onClick={() => {
          setShowPopup(true);
          if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
          }
        }}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Show Review Popup Now
      </button>

      {/* The animated review popup */}
      <ReviewPopup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}

// Review Popup component with an attractive and elegant UI
const ReviewPopup: React.FC<{ show: boolean; onClose: () => void }> = ({ show, onClose }) => {
  // Variants for controlling the animation sequence
  const popupVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    initial: { scale: 1, rotateX: 0 },
    hover: { scale: 1.05, y: -2, rotateX: 5 },
    tap: { scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl max-w-sm w-full text-center"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button with animation */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            {/* Star icon with animation */}
            <motion.div
              className="mx-auto text-yellow-500 mb-4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { delay: 0.2, type: "spring", stiffness: 200 } }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </motion.div>

            {/* Popup content */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">We’d love your feedback!</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Please leave us a review on Google.
            </p>

            {/* Review button */}
            <motion.a
              href="https://www.google.com/search?sca_esv=465159d7bf2b0b64&rlz=1CDGOYI_enIN1124IN1124&hl=en-GB&sxsrf=AE3TifPg3a2mjpLiV81OmfPnb4NYMVrN2A:1756398549596&q=ideovent+reviews&uds=AOm0WdGQmuJz4e9_ZrK_hKW68z882TDwrIGIu3aiI8shRVpYXS7yqFERHDnbM-dBlrIO7kCxIoJE9ePDladMljPgOz-FOrJNIU9Rh7hJD_c7c7ImObpz3cB78y4yVRiU-72ClC4wORgyPpYf4r3cDLrj7VyHsPX0DWE-SxU9DQ3x0CvACxqJIvhFctQ5VWrVs3fK54ME_-zZ8xX55efHo20uz4KIKQSIX1Nu7v40DcmzXQ2cnMbphQyREo4vWXi8P71IIAe0i1gLc7Q9fzPoohaK-xyU6RSoOcdir1xR306fG7T9xYBa0G1A2Pxrjm9LmriQRAhnUx0xFSBX6gqAqNqq7WXIqUeDIJyL_KfQU5JkIPaFMLO6ZLA&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4l9P2J-tZgTcyB88UzbmjCIpFlr7tSSZro8t7-owjg5nToTcjk6jTGrrw1kmneH5ePeKSHEwPHdod-NaGDh95KQZq10&sa=X&ved=2ahUKEwiVw4e99q2PAxX-n68BHRj9AHAQk8gLegQIGBAB&ictx=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-white font-medium text-lg px-6 py-3 rounded-lg shadow-lg
                         bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-xl transition-all duration-300"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={onClose}
            >
              Write a Review
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
