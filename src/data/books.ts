export interface BookReview {
  id: string;
  title: string;
  author: string;
  rating: number;
  genre: string;
  reviewDate: string;
  shortReview: string;
  fullReview: string;
  recommendation: boolean;
  coverUrl?: string;
}

export const bookReviews: BookReview[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    rating: 5,
    genre: "Fiction",
    reviewDate: "March 2026",
    shortReview: "A beautiful exploration of the choices we make and the lives we could have lived.",
    fullReview: "The Midnight Library is one of those rare books that stays with you long after you turn the last page. Matt Haig crafts a poignant story about Nora Seed, who finds herself in a library between life and death, where every book offers a different version of her life. It's a meditation on regret, possibility, and the beauty of our imperfect lives. I couldn't put it down and found myself reflecting on my own choices for days afterward. A must-read for anyone who's ever wondered 'what if.'",
    recommendation: true,
  },
  {
    id: "2",
    title: "Educated",
    author: "Tara Westover",
    rating: 5,
    genre: "Memoir",
    reviewDate: "February 2026",
    shortReview: "An unforgettable memoir about the transformative power of education.",
    fullReview: "Tara Westover's memoir is nothing short of extraordinary. Growing up in a survivalist family in rural Idaho, she didn't set foot in a classroom until she was seventeen. Her journey from there to earning a PhD from Cambridge is both harrowing and inspiring. The writing is raw and honest — she doesn't shy away from the painful truths of her upbringing. This book reminded me why I believe in the power of stories to change lives.",
    recommendation: true,
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    rating: 4,
    genre: "Science Fiction",
    reviewDate: "January 2026",
    shortReview: "A thrilling sci-fi adventure with heart and humor.",
    fullReview: "Andy Weir does it again! Project Hail Mary is a page-turner filled with clever science, humor, and an unexpectedly touching friendship. The protagonist wakes up alone on a spaceship with no memory and must figure out how to save Earth. What follows is a delightful puzzle-solving adventure. The relationship between Ryland and Rocky is one of the most heartwarming I've encountered in sci-fi. Highly recommended for anyone who loved The Martian.",
    recommendation: true,
  },
  {
    id: "4",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    rating: 4,
    genre: "Literary Fiction",
    reviewDate: "December 2025",
    shortReview: "A quietly devastating novel about love, sacrifice, and what it means to be human.",
    fullReview: "Ishiguro's Nobel Prize-winning prose shines in this story told from the perspective of Klara, an Artificial Friend waiting to be purchased from a store. Through Klara's innocent yet perceptive eyes, we explore themes of love, jealousy, and the human condition. The novel is gentle and meditative, building slowly to moments of profound emotional impact. It's the kind of book that makes you see the world differently.",
    recommendation: true,
  },
  {
    id: "5",
    title: "Atomic Habits",
    author: "James Clear",
    rating: 4,
    genre: "Self-Help",
    reviewDate: "November 2025",
    shortReview: "Practical and actionable — the best book I've read on building better habits.",
    fullReview: "I'm usually skeptical of self-help books, but Atomic Habits won me over completely. James Clear breaks down the science of habit formation into a clear, actionable framework. The concept of 1% improvements and habit stacking has genuinely changed how I approach my daily routines. Whether you want to start a reading habit, exercise more, or break a bad pattern, this book gives you the tools. I've already recommended it to everyone I know.",
    recommendation: true,
  },
  {
    id: "6",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    rating: 5,
    genre: "Historical Fiction",
    reviewDate: "October 2025",
    shortReview: "Glamorous, heartbreaking, and absolutely unputdownable.",
    fullReview: "This book swept me off my feet. Evelyn Hugo, a reclusive Hollywood icon, finally tells the truth about her glamorous and scandalous life to a young journalist. The story spans decades of old Hollywood, exploring themes of ambition, love, identity, and the price of fame. Every twist kept me gasping. Taylor Jenkins Reid writes characters so vivid they feel real. I finished this in two sittings and immediately wanted to read it again.",
    recommendation: true,
  },
];