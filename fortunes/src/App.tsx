import { useState, useEffect } from 'react';

function App() {
  const [fortune, setFortune] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [deviceOrientation, setDeviceOrientation] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [clickIntensity, setClickIntensity] = useState(0);
  const STORAGE_KEY = 'recentFortunes';
  const NO_REPEAT_WINDOW_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                            window.innerWidth <= 768 || 
                            ('ontouchstart' in window);
      setIsMobile(isMobileDevice);
      console.log('Device type:', isMobileDevice ? 'Mobile' : 'Desktop');
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const loadFortune = async () => {
      try {
        const response = await fetch('/fortunes/fortunes.json');
        const data = await response.json();
        const fortunes: string[] = data.fortunes || [];
        
        if (fortunes.length > 0) {
          // Load recent fortunes from localStorage
          const now = Date.now();
          const recentRaw = localStorage.getItem(STORAGE_KEY);
          let recent: { text: string; ts: number }[] = [];
          try {
            recent = recentRaw ? JSON.parse(recentRaw) : [];
          } catch {
            recent = [];
          }

          // Remove entries older than the window
          recent = recent.filter(entry => now - entry.ts < NO_REPEAT_WINDOW_MS && typeof entry.text === 'string');

          // Build a Set of recent texts for quick lookup
          const recentSet = new Set(recent.map(r => r.text.trim()));

          // Filter available fortunes
          const trimmedFortunes = fortunes.map(f => (typeof f === 'string' ? f.trim() : ''))
            .filter(f => f.length > 0);
          let available = trimmedFortunes.filter(f => !recentSet.has(f));

          // If all are filtered out (user saw many recently), fall back to full list
          if (available.length === 0) {
            available = trimmedFortunes;
          }

          // Pick random from available
          const randomIndex = Math.floor(Math.random() * available.length);
          const chosen = available[randomIndex];
          setFortune(chosen);

          // Update recent list (keep within time window and cap size)
          const updated = [{ text: chosen, ts: now }, ...recent]
            .filter((entry, idx, arr) => {
              // de-duplicate by text, keeping most recent
              return arr.findIndex(e => e.text === entry.text) === idx;
            })
            .slice(0, 500);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
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
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 80,
          y: (e.clientY / window.innerHeight - 0.5) * 80
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      setClickPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 100,
        y: (e.clientY / window.innerHeight - 0.5) * 100
      });
      setClickIntensity(1);
      // Fade out the click intensity
      setTimeout(() => setClickIntensity(0), 1000);
      console.log('Click interaction triggered');
    };

    const handleTouch = (e: TouchEvent) => {
      if (isMobile && e.touches.length > 0) {
        const touch = e.touches[0];
        setClickPosition({
          x: (touch.clientX / window.innerWidth - 0.5) * 100,
          y: (touch.clientY / window.innerHeight - 0.5) * 100
        });
        setClickIntensity(1);
        // Fade out the click intensity
        setTimeout(() => setClickIntensity(0), 1000);
        console.log('Mobile touch interaction triggered');
      }
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (isMobile && e.gamma !== null && e.beta !== null) {
        // Light smoothing to avoid jitter
        setDeviceOrientation(prev => {
          const targetX = e.gamma! * 3.0; // Left-right tilt (increased sensitivity)
          const targetY = e.beta! * 2.5;  // Front-back tilt (increased sensitivity)
          const alpha = 0.2; // smoothing factor (increased for more responsiveness)
          const newOrientation = {
            x: prev.x + (targetX - prev.x) * alpha,
            y: prev.y + (targetY - prev.y) * alpha,
          };
          
          // Debug log (only occasionally to avoid spam)
          if (Math.random() < 0.01) {
            console.log('Mobile device orientation:', { gamma: e.gamma, beta: e.beta, targetX, targetY, newOrientation });
          }
          
          return newOrientation;
        });
      }
    };

    // Add listeners based on device type
    if (isMobile) {
      // Mobile: Add device orientation listener
      try {
        window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });
        console.log('Mobile: Device orientation listener added');
      } catch (error) {
        console.log('Mobile: Device orientation not available:', error);
      }

      // Mobile: Add touch listener for tap interactions
      window.addEventListener('touchstart', handleTouch, { passive: true });
      console.log('Mobile: Touch listener added');

      // For iOS devices, try to request permission on first user interaction
      const handleUserInteraction = async () => {
        if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
          try {
            const permission = await (DeviceOrientationEvent as any).requestPermission();
            if (permission === 'granted') {
              console.log('Mobile: Device orientation permission granted after user interaction');
            }
          } catch (error) {
            console.log('Mobile: Device orientation permission error:', error);
          }
        }
        // Remove listeners after first interaction
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('touchstart', handleUserInteraction);
      };

      window.addEventListener('click', handleUserInteraction, { once: true });
      window.addEventListener('touchstart', handleUserInteraction, { once: true });
    } else {
      // Desktop: Add mouse and click listeners
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('click', handleClick, { passive: true });
      console.log('Desktop: Mouse and click listeners added');
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
        window.removeEventListener('touchstart', handleTouch);
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('touchstart', handleUserInteraction);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('click', handleClick);
      }
    };
  }, [isMobile]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-amber-50 to-blue-50">
        <div className="animate-pulse">
          <div className="w-3 h-3 bg-gradient-to-r from-amber-300 to-blue-400 rounded-full shadow-lg"></div>
        </div>
      </div>
    );
  }

  const motionX = isMobile ? deviceOrientation.x + (clickPosition.x * clickIntensity) : mousePosition.x + (clickPosition.x * clickIntensity);
  const motionY = isMobile ? deviceOrientation.y + (clickPosition.y * clickIntensity) : mousePosition.y + (clickPosition.y * clickIntensity);

  return (
    <div className="h-screen w-screen flex items-center justify-center p-8 bg-gradient-to-br from-stone-100 via-amber-100 to-blue-100 relative overflow-hidden">
      
      {/* Interactive floating elements - Leaf and flower silhouettes */}
      <div 
        className="absolute top-1/4 left-1/4 w-6 h-8 opacity-40 shadow-lg transition-transform duration-200 ease-out"
        style={{ 
          transform: `translate(${motionX * 1.2}px, ${motionY * 0.8}px) rotate(${motionX * 0.5}deg)`,
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
        }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/3 w-4 h-6 opacity-35 shadow-md transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(${motionX * -0.9}px, ${motionY * 1.1}px) rotate(${motionX * -0.3}deg)`,
          background: 'linear-gradient(180deg, #f59e0b, #d97706)',
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
        }}
      ></div>
      <div 
        className="absolute bottom-1/3 left-1/5 w-8 h-4 opacity-40 shadow-sm transition-transform duration-250 ease-out"
        style={{ 
          transform: `translate(${motionX * 1.0}px, ${motionY * -0.7}px) scale(${1 + motionX * 0.01})`,
          background: 'linear-gradient(90deg, #60a5fa, transparent)',
          clipPath: 'polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-5 h-5 opacity-45 shadow-md transition-transform duration-350 ease-out"
        style={{ 
          transform: `translate(${motionX * -0.6}px, ${motionY * 1.3}px) rotate(${motionY * 0.4}deg)`,
          background: 'linear-gradient(45deg, #78716c, #f59e0b)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          borderRadius: '50%'
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/6 w-3 h-7 opacity-35 shadow-sm transition-transform duration-400 ease-out"
        style={{ 
          transform: `translate(${motionX * 1.4}px, ${motionY * -0.9}px) rotate(${motionX * -0.2}deg)`,
          background: 'linear-gradient(180deg, #93c5fd, transparent)',
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
        }}
      ></div>
      <div 
        className="absolute top-1/5 right-1/5 w-6 h-3 opacity-40 shadow-lg transition-transform duration-180 ease-out"
        style={{ 
          transform: `translate(${motionX * -1.1}px, ${motionY * 0.6}px) scale(${1 + motionY * 0.02})`,
          background: 'linear-gradient(90deg, #f59e0b, #3b82f6)',
          clipPath: 'polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
        }}
      ></div>
      <div 
        className="absolute bottom-1/5 left-1/3 w-2 h-8 opacity-40 shadow-md transition-transform duration-220 ease-out"
        style={{ 
          transform: `translate(${motionX * 0.8}px, ${motionY * -1.2}px) rotate(${motionY * -0.6}deg)`,
          background: 'linear-gradient(180deg, #2563eb, #f59e0b)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
        }}
      ></div>
      <div 
        className="absolute top-2/3 right-1/6 w-4 h-4 opacity-35 shadow-lg transition-transform duration-280 ease-out"
        style={{ 
          transform: `translate(${motionX * -1.3}px, ${motionY * 0.9}px) rotate(${motionX * 0.7}deg) scale(${1 + motionX * 0.015})`,
          background: 'linear-gradient(135deg, #d97706, #60a5fa)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          borderRadius: '50%'
        }}
      ></div>
      
      {/* Main fortune content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <div className="relative">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-relaxed font-medium tracking-wide animate-fade-in px-4 sm:px-6 md:px-8 relative" style={{ color: '#1f48ff' }}>
            {fortune}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;