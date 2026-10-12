import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle2, Quote, X } from 'lucide-react';
import { initialReviews, gymInfo } from '../data/gymData';

export default function Testimonials({ onShowToast }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [tag, setTag] = useState('General Fitness');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      role: 'Verified Member',
      rating: Number(rating),
      date: 'Just now',
      comment: comment.trim(),
      tag: tag
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setComment('');
    setRating(5);
    setShowModal(false);

    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: 'Review posted! Thank you for sharing your experience.'
      });
    }
  };

  return (
    <section id="reviews" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
            Community Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4 mb-3">
            Member <span className="text-cyan-400">Transformations</span>
          </h2>

          {/* Google Rating Summary */}
          <div className="inline-flex items-center gap-3 glass-card px-5 py-2.5 rounded-2xl border-white/10 mt-3 shadow-lg">
            <span className="text-2xl font-black text-white">{gymInfo.rating}</span>
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs text-slate-400 border-l border-white/10 pl-3">
              Verified on Google • {gymInfo.totalReviews}+ Reviews
            </span>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400 hover:text-slate-950 transition-all border border-cyan-400/20"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Share Your Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-6 sm:p-7 rounded-2xl border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between group hover:bg-slate-900/60"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md border border-cyan-400/20">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-slate-500">{rev.role}</span>
                </div>
                <span className="text-xs text-slate-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-6 sm:p-8 rounded-3xl border-cyan-500/30 shadow-2xl bg-slate-950 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-1">Write a Review</h3>
            <p className="text-xs text-slate-400 mb-6">Tell us about your fitness experience at Shree Health Point.</p>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Hegde"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Star Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 text-slate-600 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Workout Focus</label>
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                >
                  <option value="General Fitness">General Fitness</option>
                  <option value="Weight Loss">Weight Loss</option>
                  <option value="Muscle Building">Muscle Building</option>
                  <option value="CrossFit / Stamina">CrossFit / Stamina</option>
                  <option value="Personal Training">Personal Training</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Review</label>
                <textarea
                  required
                  rows="3"
                  placeholder="Share details about the facilities, trainers, or your personal progress..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20"
              >
                Publish Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
