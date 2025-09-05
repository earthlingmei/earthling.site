import React, { useState, useEffect } from 'react';


function App() {
  const [fortune, setFortune] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [deviceOrientation, setDeviceOrientation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadFortune = async () => {
      try {
        const response = await fetch('./fortunes.json');
        const data = await response.json();
        const fortunes = data.fortunes;
        
        if (fortunes.length > 0) {
          const randomIndex = Math.floor(Math.random() * fortunes.length);
          setFortune(fortunes[randomIndex].trim());
        } else {
          setFortune('Wisdom comes to those who seek it.');
        }
      } catch (error) {
        // Fallback fortune if file doesn't exist yet
        setFortune('The journey of a thousand miles begins with a single step.');
      } finally {
        setIsLoading(false);
      }
    };

    loadFortune();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 80,
        y: (e.clientY / window.innerHeight - 0.5) * 80
      });
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        setDeviceOrientation({
          x: e.gamma * 2.5, // Left-right tilt
          y: e.beta * 2.0   // Front-back tilt
        });
      }
    };

    // Request permission for iOS devices
    const requestPermission = async () => {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        try {
          const permission = await (DeviceOrientationEvent as any).requestPermission();
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
          }
        } catch (error) {
          console.log('Device orientation permission denied');
        }
      } else {
        // Non-iOS devices
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestPermission();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-amber-50 to-blue-50">
        <div className="animate-pulse">
          <div className="w-3 h-3 bg-gradient-to-r from-amber-300 to-blue-400 rounded-full shadow-lg"></div>
        </div>
      </div>
    );
  }

  const motionX = mousePosition.x + deviceOrientation.x;
  const motionY = mousePosition.y + deviceOrientation.y;

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-stone-100 via-amber-100 to-blue-100 relative overflow-hidden">
      
      {/* Interactive floating elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-40 shadow-lg transition-transform duration-200 ease-out"
        style={{ transform: `translate(${motionX * 1.2}px, ${motionY * 0.8}px) rotate(${motionX * 0.5}deg)` }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/3 w-2 h-12 bg-gradient-to-b from-amber-400 to-amber-500 opacity-35 rounded-full shadow-md transition-transform duration-300 ease-out"
        style={{ transform: `translate(${motionX * -0.9}px, ${motionY * 1.1}px) rotate(${motionX * -0.3}deg)` }}
      ></div>
      <div 
        className="absolute bottom-1/3 left-1/5 w-6 h-2 bg-gradient-to-r from-blue-400 to-transparent opacity-40 rounded-full shadow-sm transition-transform duration-250 ease-out"
        style={{ transform: `translate(${motionX * 1.0}px, ${motionY * -0.7}px) scale(${1 + motionX * 0.01})` }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-gradient-to-tr from-stone-500 to-amber-400 opacity-45 rounded-sm shadow-md transition-transform duration-350 ease-out"
        style={{ transform: `translate(${motionX * -0.6}px, ${motionY * 1.3}px) rotate(${motionY * 0.4}deg)` }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/6 w-2 h-8 bg-gradient-to-b from-blue-300 to-transparent opacity-35 rounded-full shadow-sm transition-transform duration-400 ease-out"
        style={{ transform: `translate(${motionX * 1.4}px, ${motionY * -0.9}px) rotate(${motionX * -0.2}deg)` }}
      ></div>
      <div 
        className="absolute top-1/5 right-1/5 w-5 h-1 bg-gradient-to-r from-amber-500 to-blue-500 opacity-40 rounded-full shadow-lg transition-transform duration-180 ease-out"
        style={{ transform: `translate(${motionX * -1.1}px, ${motionY * 0.6}px) scale(${1 + motionY * 0.02})` }}
      ></div>
      <div 
        className="absolute bottom-1/5 left-1/3 w-1 h-6 bg-gradient-to-b from-blue-600 to-amber-400 opacity-40 rounded-full shadow-md transition-transform duration-220 ease-out"
        style={{ transform: `translate(${motionX * 0.8}px, ${motionY * -1.2}px) rotate(${motionY * -0.6}deg)` }}
      ></div>
      <div 
        className="absolute top-2/3 right-1/6 w-3 h-3 bg-gradient-to-br from-amber-600 to-blue-400 opacity-35 rounded-full shadow-lg transition-transform duration-280 ease-out"
        style={{ transform: `translate(${motionX * -1.3}px, ${motionY * 0.9}px) rotate(${motionX * 0.7}deg) scale(${1 + motionX * 0.015})` }}
      ></div>
      
      {/* Main fortune content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative">
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed font-medium tracking-wide animate-fade-in px-8 relative" style={{ color: '#1f48ff' }}>
            {fortune}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;