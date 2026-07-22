const notifications = [
  { id: 1, type: "comment", read: false, actor: "Aarav Singh", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop", text: "commented on your story", story: "The Cartographer's Daughter", time: "2 min ago" },
  { id: 2, type: "like", read: false, actor: "Leila Hartmann", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop", text: "liked your story", story: "The Cartographer's Daughter", time: "14 min ago" },
  { id: 3, type: "follow", read: false, actor: "Dario Mancini", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop", text: "started following you", story: null, time: "1 hour ago" },
  { id: 4, type: "continuation", read: false, actor: "Tomás Rivera", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop", text: "added a continuation to your story", story: "The Cartographer's Daughter", time: "3 hours ago" },
  { id: 5, type: "competition", read: true, actor: null, avatar: null, text: 'The Midnight Manuscript competition closes in 3 days. Submit your entry now.', story: null, time: "5 hours ago" },
  { id: 6, type: "achievement", read: true, actor: null, avatar: null, text: 'You earned the "On Fire" badge — 100+ views in 24 hours!', story: null, time: "Yesterday" },
  { id: 7, type: "like", read: true, actor: "Yara Mensah", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop", text: "liked your story", story: "Salt & Starlight", time: "Yesterday" },
  { id: 8, type: "comment", read: true, actor: "Amara Diallo", avatar: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=100&auto=format&fit=crop", text: "replied to your comment on", story: "Frequency Nine", time: "2 days ago" },
  { id: 9, type: "follow", read: true, actor: "Miriam Osei", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop", text: "started following you", story: null, time: "3 days ago" },
  { id: 10, type: "milestone", read: true, actor: null, avatar: null, text: 'Your story "The Cartographer\'s Daughter" reached 100,000 views! 🎉', story: null, time: "4 days ago" },
  { id: 11, type: "competition", read: true, actor: null, avatar: null, text: "You've been shortlisted for the Roots & Branches writing competition.", story: null, time: "5 days ago" },
  { id: 12, type: "achievement", read: true, actor: null, avatar: null, text: 'You earned the "Prolific" badge — 10 stories published!', story: null, time: "1 week ago" },
];

export default notifications;