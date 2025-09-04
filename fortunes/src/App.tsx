import React, { useState, useEffect } from 'react';

function App() {
  const [fortune, setFortune] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFortune = async () => {
      try {
        const response = await fetch('/fortunes.txt');
        const text = await response.text();
        const fortunes = text.split('\n').filter(line => line.trim() !== '');
        
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100">
        <div className="animate-pulse opacity-40">
          <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 relative overflow-hidden">
      {/* Subtle paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='0.5'/%3E%3Ccircle cx='27' cy='7' r='0.5'/%3E%3Ccircle cx='47' cy='7' r='0.5'/%3E%3Ccircle cx='7' cy='27' r='0.5'/%3E%3Ccircle cx='27' cy='27' r='0.5'/%3E%3Ccircle cx='47' cy='27' r='0.5'/%3E%3Ccircle cx='7' cy='47' r='0.5'/%3E%3Ccircle cx='27' cy='47' r='0.5'/%3E%3Ccircle cx='47' cy='47' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Floating organic elements like pressed flowers */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-amber-200 rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-stone-300 rounded-full opacity-25 animate-float-delayed"></div>
      <div className="absolute bottom-1/3 left-1/5 w-0.5 h-0.5 bg-amber-300 rounded-full opacity-40 animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-stone-400 rounded-full opacity-20 animate-float-delayed"></div>
      
      {/* Main fortune content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed text-stone-600 font-light tracking-wide opacity-80 animate-fade-in px-4">
          {fortune}
        </p>
      </div>
    </div>
  );
}

export default App;