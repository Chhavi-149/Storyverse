import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

// Signup only saves { username, email, photo, genres } to Firestore.
// This fills in every other field ProfileHero/EditProfileForm expect,
// so a real account never renders "undefined" or crashes on missing stats.
function withDefaults(currentUser, profileData) {
  const genres = profileData.genres || currentUser.genres || [];

  return {
    uid: currentUser.uid,
    username: profileData.username || currentUser.username || "user",
    displayName: profileData.username || currentUser.username || "User",
    email: currentUser.email || "",
    avatar: profileData.photo || currentUser.photo || "",
    website: profileData.website || "",
    bio: profileData.bio || "This writer hasn't added a bio yet.",
    tags: genres,
    tagline: genres.length ? genres.join(" & ") : "Writer",
    badge: profileData.badge || null,
    stats: {
      stories: profileData.stats?.stories || 0,
      totalViews: profileData.stats?.totalViews || "0",
      followers: profileData.stats?.followers || "0",
      avgRating: profileData.stats?.avgRating || "—",
    },
  };
}

export async function getUserProfile(currentUser) {
  const snap = await getDoc(doc(db, "users", currentUser.uid));
  const profileData = snap.exists() ? snap.data() : {};
  return withDefaults(currentUser, profileData);
}

export async function updateUserProfile(uid, updates) {
  await updateDoc(doc(db, "users", uid), updates);
}
