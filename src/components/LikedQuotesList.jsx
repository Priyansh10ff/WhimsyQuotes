import { useState } from 'react';

export default function LikedQuotesList({ likedQuotes, onRemoveLike }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuotes = likedQuotes.filter(quote => 
    quote.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    quote.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#fffdfc] p-8 md:p-12 rounded-[2.5rem] shadow-sm border-2 border-[#f2e8e3]">
      <div className="text-center mb-10">
         <h2 className="text-3xl font-bold text-[#8b7e74] mb-3">🌸 Your Keepsake Collection</h2>
         <p className="text-[#a1968d]">Thoughts you've gathered along the way.</p>
      </div>
      
      <div className="relative mb-8">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">🔍</span>
        <input 
          type="text" 
          className="w-full p-5 pl-12 border-2 border-[#f0ebf5] bg-[#fcfaff] rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#e6f7ff] focus:border-[#a8d8ea] transition-all text-[#7c6a5a] placeholder-[#b8b0a9]"
          placeholder="Find a thought by author or words..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {likedQuotes.length === 0 ? (
        <div className="text-center py-16 bg-[#f9f7f4] rounded-3xl border-2 border-dashed border-[#ebdcd2]">
          <span className="text-5xl block mb-4 opacity-50">🧸</span>
          <p className="text-xl text-[#a1968d] font-medium">Your collection is empty.</p>
          <p className="text-[#b8b0a9] mt-2">Go find some inspiration above!</p>
        </div>
      ) : filteredQuotes.length === 0 ? (
        <p className="text-center text-[#a1968d] py-12 bg-[#f9f7f4] rounded-3xl">No matches found for "{searchQuery}".</p>
      ) : (
        <ul className="space-y-6">
          {filteredQuotes.map((quote) => (
            <li key={quote.id} className="group bg-white p-6 rounded-3xl border-2 border-[#f5f0ed] hover:border-[#ffd6e7] hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-[#7c6a5a] text-lg font-serif italic mb-3 leading-relaxed">"{quote.content}"</p>
                <div className="flex items-center gap-2">
                    <span className="text-[#dba7b7] text-sm">⭐</span>
                    <small className="text-[#a1968d] font-bold tracking-wide text-sm uppercase">— {quote.author}</small>
                </div>
              </div>
              <div className="flex justify-end">
                <button 
                    onClick={() => onRemoveLike(quote.id)}
                    className="bg-[#fff0f5] text-[#dba7b7] border-2 border-[#ffd6e7] hover:bg-[#ffe6ef] hover:text-red-500 hover:border-red-300 px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shrink-0"
                    title="Remove from collection"
                >
                  <span>💔</span> Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
