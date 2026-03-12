import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuoteCard from './components/QuoteCard';
import LikedQuotesList from './components/LikedQuotesList';
import Footer from './components/Footer';

import myBackgroundImage from './assets/Background.jpg'; 

export default function App() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  const quoteSectionRef = useRef(null);
  
  const [likedQuotes, setLikedQuotes] = useState(() => {
    try {
      const saved = localStorage.getItem('motivation_likes_cute');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to parse local storage", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('motivation_likes_cute', JSON.stringify(likedQuotes));
  }, [likedQuotes]);

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const fetchNewQuote = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const res = await fetch('https://dummyjson.com/quotes/random');
      if (!res.ok) throw new Error('Failed to fetch quote');
      
      const data = await res.json();
      setQuote({
        id: data.id,
        content: data.quote, 
        author: data.author
      });
    } catch (err) {
      setError('Could not load a new quote. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLikeFromMainCard = () => {
    if (!quote) return;
    setLikedQuotes(prevLikes => {
      const isAlreadyLiked = prevLikes.some(q => q.id === quote.id);
      if (isAlreadyLiked) {
        return prevLikes.filter(q => q.id !== quote.id);
      } else {
        return [{ ...quote, addedAt: Date.now() }, ...prevLikes];
      }
    });
  };

  const removeFromLikes = (quoteIdToRemove) => {
    setLikedQuotes(prevLikes => prevLikes.filter(q => q.id !== quoteIdToRemove));
  };

  const isCurrentQuoteLiked = quote ? likedQuotes.some(q => q.id === quote.id) : false;

  const scrollToQuotes = () => {
    quoteSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans text-gray-800">
      <Navbar likeCount={likedQuotes.length} />
      
      <HeroSection 
        backgroundImageUrl={myBackgroundImage} 
        onScrollClick={scrollToQuotes} 
      />

      <div className="max-w-4xl mx-auto px-4">
        <section ref={quoteSectionRef} className="py-16 md:py-24 scroll-mt-16">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#e6f7ff] text-[#4a7c8e] px-4 py-2 rounded-full text-sm font-extrabold tracking-wider mb-4 shadow-sm">
              ✨ TODAY'S WHIMSY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#7c6a5a]">
               Your Daily Dose of Sunshine
            </h2>
          </div>
          
          <QuoteCard 
            quote={quote}
            isLoading={isLoading}
            error={error}
            isLiked={isCurrentQuoteLiked}
            onFetchNew={fetchNewQuote}
            onToggleLike={toggleLikeFromMainCard}
          />
        </section>

        <div className="flex items-center justify-center gap-4 py-4 opacity-70">
             <span className="text-2xl">🌸</span>
             <div className="h-1 w-24 bg-[#ffd6e7] rounded-full"></div>
             <span className="text-2xl">🌸</span>
        </div>

        <section className="py-16 md:py-24 font-sans">
          <LikedQuotesList 
            likedQuotes={likedQuotes} 
            onRemoveLike={removeFromLikes} 
          />
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
