import React, { useState, useEffect } from 'react';
import { Language, TRANSLATIONS, REVIEWS_DATA, ReviewItemLocalized } from '../data/translations';
import { Star, ThumbsUp, MessageSquarePlus, X } from 'lucide-react';

interface ReviewsSectionProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const [reviewsList, setReviewsList] = useState<ReviewItemLocalized[]>(REVIEWS_DATA[lang]);
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [imageLoaded, setImageLoaded] = useState(true);

  const t = TRANSLATIONS[lang].reviews;

  useEffect(() => {
    setReviewsList(REVIEWS_DATA[lang]);
  }, [lang]);

  const handleLike = (id: string) => {
    setLikedReviews((prev) => {
      const isAlreadyLiked = prev[id];
      const updated = { ...prev, [id]: !isAlreadyLiked };
      
      setReviewsList((current) =>
        current.map((item) =>
          item.id === id
            ? { ...item, helpfulCount: item.helpfulCount + (isAlreadyLiked ? -1 : 1) }
            : item
        )
      );
      return updated;
    });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newQuote.trim()) return;

    const initial = newAuthor.trim().charAt(0).toUpperCase() || 'U';
    const newRev: ReviewItemLocalized = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      role: newRole.trim() || (lang === 'th' ? 'ผู้ใช้จริง' : 'Verified User'),
      verifiedText: lang === 'th' ? 'รีวิวใหม่ล่าสุด' : 'Recent Review',
      quote: newQuote.trim(),
      rating: newRating,
      initial,
      colorClass: 'bg-indigo-100 text-indigo-800',
      helpfulCount: 0
    };

    setReviewsList([newRev, ...reviewsList]);
    setIsWriteReviewOpen(false);
    setNewAuthor('');
    setNewRole('');
    setNewQuote('');
    setNewRating(5);
  };

  return (
    <section id="reviews" className="py-20 bg-[#f5faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-semibold tracking-wider text-[#125a85] uppercase font-mono">
            {t.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1c30] font-display">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#41474f]">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Visual Card on Left, Review Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Authentic Visual Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white rounded-2xl border border-[#a5d6f4] p-4 shadow-sm overflow-hidden group">
              <div className="aspect-square w-full rounded-xl overflow-hidden flex items-center justify-center relative bg-gradient-to-b from-[#eaf4fb] to-[#d8edf9]">
                {imageLoaded ? (
                  <img
                    src="/assets/aistudio/review_card.png"
                    alt="RANE HERB Customer Reviews"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={() => setImageLoaded(false)}
                  />
                ) : (
                  <div className="p-8 text-center">
                    <span className="text-4xl">⭐</span>
                    <h4 className="text-lg font-bold text-[#0b1c30] mt-2">{t.satisfactionScore}</h4>
                    <p className="text-xs text-[#41474f] mt-1">{t.userCount}</p>
                  </div>
                )}
              </div>

              <div className="pt-4 px-2 text-center">
                <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-[#0b1c30] ml-1 font-mono">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-[#41474f]">
                  {t.guaranteeText}
                </p>
                <button
                  onClick={() => setIsWriteReviewOpen(true)}
                  className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#125a85] bg-[#a5d6f4]/25 hover:bg-[#a5d6f4]/40 rounded-lg transition-colors cursor-pointer"
                >
                  <MessageSquarePlus className="w-3.5 h-3.5" />
                  <span>{t.writeReviewBtn}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Review Cards in 2x2 Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reviewsList.map((rev) => {
                const isLiked = likedReviews[rev.id];
                return (
                  <div
                    key={rev.id}
                    className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs flex flex-col justify-between hover:border-[#98cbff] hover:shadow-sm transition-all"
                  >
                    <div>
                      {/* 5 Stars */}
                      <div className="flex items-center gap-1 text-amber-400 mb-3">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-xs sm:text-sm text-[#0b1c30] leading-relaxed italic mb-4">
                        &ldquo;{rev.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author & Verification Footer */}
                    <div className="pt-3 border-t border-[#f0f4f8] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full ${rev.colorClass} flex items-center justify-center font-bold text-xs shrink-0`}>
                          {rev.initial}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0b1c30]">
                            {rev.author}
                          </div>
                          <div className="text-[10px] text-[#41474f] flex items-center gap-1">
                            <span>{rev.role}</span>
                            <span className="text-[#c1c7d1]">•</span>
                            <span className="text-[#4b635a] font-medium">{rev.verifiedText}</span>
                          </div>
                        </div>
                      </div>

                      {/* Helpful Button */}
                      <button
                        onClick={() => handleLike(rev.id)}
                        className={`text-[10px] flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer ${
                          isLiked
                            ? 'text-[#136299] bg-[#eff4ff] font-semibold'
                            : 'text-[#717880] hover:text-[#0b1c30]'
                        }`}
                        title={t.helpful}
                      >
                        <ThumbsUp className={`w-3 h-3 ${isLiked ? 'fill-[#136299]' : ''}`} />
                        <span>{rev.helpfulCount}</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Write Review Modal */}
      {isWriteReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full border border-[#dce9ff] p-6 shadow-2xl relative">
            <button
              onClick={() => setIsWriteReviewOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-[#717880] hover:text-[#0b1c30] rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-[#0b1c30] mb-1">
              {t.modalTitle}
            </h3>
            <p className="text-xs text-[#41474f] mb-4">
              {t.modalSubtitle}
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1">
                  {t.formRating}
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewRating(star)}
                      className="p-1 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newRating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1">
                  {t.formName}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.formNamePlaceholder}
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#e2e8f0] focus:border-[#136299] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1">
                  {t.formRole}
                </label>
                <input
                  type="text"
                  placeholder={t.formRolePlaceholder}
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#e2e8f0] focus:border-[#136299] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1">
                  {t.formQuote}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={t.formQuotePlaceholder}
                  value={newQuote}
                  onChange={(e) => setNewQuote(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#e2e8f0] focus:border-[#136299] outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsWriteReviewOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-[#41474f] hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  {t.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#136299] hover:bg-[#0b1c30] rounded-lg shadow-sm cursor-pointer"
                >
                  {t.submitReviewBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
