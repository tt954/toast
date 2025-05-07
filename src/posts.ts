interface Post {
	title: string;
	id: number;
	content: string;
	createdAt: Date,
}

export const posts: Post[] = [
  {
    title: "Why I Love Debugging",
    id: 1,
    content: "Debugging might seem tedious, but I find it incredibly rewarding. It's like solving a mini puzzle every time.",
	createdAt: new Date()
  },
  {
    title: "CSS Tricks I Wish I Knew Earlier",
    id: 2,
    content: "From stacking context to flexbox quirks, CSS is full of surprises. Here's a list of tricks that made my life easier.",
	createdAt: new Date("5/1/2025")
  },
  {
    title: "Breaking Down useEffect",
    id: 3,
    content: "React's useEffect can be tricky at first. Let's walk through how it works and when to use it effectively.",
	createdAt: new Date("4/28/2025")
  }
];