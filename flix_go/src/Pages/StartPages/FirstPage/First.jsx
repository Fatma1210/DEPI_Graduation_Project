import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FirstPage() {
    let navigate = useNavigate();
    const [displayText, setDisplayText] = useState('');
    const fullText = "GGreetings! Join us on an unforgettable journey through the magic of movies!";

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayText((prev) => prev + fullText[index]);
            index++;

            // When the full text has been displayed
            if (index === fullText.length - 1) {
                clearInterval(intervalId);
                // Set a timeout to hold the final text before navigating
                setTimeout(() => {
                }, 2000); // Wait 2 seconds before navigating
            }
        }, 100); // Typing speed

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [fullText, navigate]); // Add navigate to the dependency array

    return (
        <div className='d-flex align-items-center justify-content-center vh-100'>
            <div className='text-center'>
                <motion.p 
                    className='h1'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {displayText}
                </motion.p>
                <motion.button 
                    className='btn btn-lg'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onClick={(()=>navigate("/signin"))} // Direct navigation on button click
                >
                    GO!
                </motion.button>
            </div>
        </div>
    );
}
