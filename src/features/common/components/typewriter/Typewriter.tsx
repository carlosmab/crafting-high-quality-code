import { useState, useEffect } from 'react';

interface Props {
  text: string;
  delay: number;
  className?: string;
}

function Typewriter({ text, delay, className}: Props) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (<p className={className}>{currentText}</p>);
};

export default Typewriter;