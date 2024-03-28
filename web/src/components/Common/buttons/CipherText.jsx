import React, { useState, useEffect } from 'react';

const CipherText = ({ detail }) => {
    const [isAnimation, setIsAnimation] = useState(false);

    useEffect(() => {
        handleMouseOver();
        setTimeout(() => {
            handleMouseLeave();
        }, 1000);
    }, [])


    const randomAlphaNum = () => {
        let rand;
        do {
            rand = Math.floor(Math.random() * 123); // Generate a random number between 0 and 122 (inclusive)
        } while (!(rand >= 65 && rand <= 90) && !(rand >= 97 && rand <= 122)); // Keep generating until rand corresponds to uppercase or lowercase ASCII characters

        return String.fromCharCode(rand);
    };

    const cipherStart = (text) => {
        let i = 0;
        const replace = /[^\s]/g;
        return setInterval(() => {
            setText(
                text.substring(0, i) +
                text.substring(i, text.length).replace(replace, randomAlphaNum)
            );
            i++;
            if (i > text.length) clearInterval(timer);
        }, 80);
    };

    const [timer, setTimer] = useState(null);
    const [text, setText] = useState(detail.value);

    const handleMouseOver = () => {
        if (!isAnimation) {
            setTimer(cipherStart(detail.value));
            setIsAnimation(true);
        }
    };

    const handleMouseLeave = () => {
        if (isAnimation) {
            clearInterval(timer);
            setText(detail.value);
            setIsAnimation(false);
        }
    };

    return (
        <span className='font-[monospace]'
            style={{ color: 'white' }}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            {text}
        </span>
    );
};

export default CipherText;
