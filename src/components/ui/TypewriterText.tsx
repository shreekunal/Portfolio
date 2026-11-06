import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  typingSpeed = 70,
  deleteSpeed = 35,
  pauseTime = 2000,
  className = '',
  cursorClassName = '',
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: number;
    const currentFullWord = words[currentWordIndex];

    if (!isDeleting && currentText === currentFullWord) {
      // Pause at the end of the full word
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && currentText === '') {
      // Move to next word after complete delete
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Type or delete
      const speed = isDeleting ? deleteSpeed : typingSpeed;
      timeout = window.setTimeout(() => {
        const nextText = isDeleting
          ? currentFullWord.substring(0, currentText.length - 1)
          : currentFullWord.substring(0, currentText.length + 1);

        setCurrentText(nextText);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span>{currentText}</span>
      <span
        className={`inline-block w-[2.5px] h-[0.9em] ml-1 bg-crimson shadow-[0_0_8px_#ff0038] animate-pulse align-middle self-center ${cursorClassName}`}
      />
    </span>
  );
};
