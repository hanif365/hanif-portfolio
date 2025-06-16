import { useState, useEffect } from 'react';

interface UseCounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  isInView: boolean;
  reset?: boolean;
}

const useCounter = ({
  end, 
  start = 0, 
  duration = 1200,
  delay = 0,
  isInView,
  reset = true
}: UseCounterProps) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    // Reset counter when out of view if reset is true
    if (!isInView && reset) {
      setCount(start);
      return;
    }
    
    // Don't animate if not in view
    if (!isInView) return;
    
    // Delay start if needed
    let timeout: NodeJS.Timeout;
    if (delay > 0) {
      timeout = setTimeout(startCounting, delay);
      return () => clearTimeout(timeout);
    } else {
      startCounting();
    }
    
    function startCounting() {
      // Calculate increment based on the duration
      const totalFrames = 30;
      const timePerFrame = duration / totalFrames;
      const increment = (end - start) / totalFrames;
      
      let currentCount = start;
      let frame = 0;
      
      const counter = setInterval(() => {
        frame++;
        currentCount += increment;
        
        if (frame >= totalFrames) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, timePerFrame);
      
      return () => clearInterval(counter);
    }
  }, [end, start, duration, delay, isInView, reset]);
  
  return count;
};

export default useCounter; 