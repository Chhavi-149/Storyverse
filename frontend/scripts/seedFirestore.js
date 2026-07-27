// paste the entire script content here
// scripts/seedFirestore.js
// One-time script to populate Firestore with your existing mock data,
// so the app looks fully populated from the moment it reads from Firestore.
//
// Run once from the frontend/ folder:
//   node scripts/seedFirestore.js
//
// Safe to re-run — it overwrites documents with the same IDs rather than duplicating.

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

// Reuse the same config as src/firebase/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyA0zrazM6eCfo1zuB9X65IFVOPZiyUPc-Y",
  authDomain: "storyverse-58eed.firebaseapp.com",
  projectId: "storyverse-58eed",
  storageBucket: "storyverse-58eed.firebasestorage.app",
  messagingSenderId: "126288420636",
  appId: "1:126288420636:web:2c92acc0401f7b22e8a4d9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Import your existing mock data files directly
import exploreStories from "../src/data/exploreStories.js";
import storyChapters from "../src/data/storyChapters.js";
import topWriters from "../src/data/topWriters.js";
import novelRankings from "../src/data/novelRankings.js";
import activeCompetitions from "../src/data/activeCompetitions.js";
import upcomingCompetitions from "../src/data/upcomingCompetitions.js";
import pastWinners from "../src/data/pastWinners.js";
import writingResources from "../src/data/writingResources.js";

async function seedCollection(collectionName, items, idField = "id") {
  console.log(`Seeding "${collectionName}" (${items.length} docs)...`);
  for (const item of items) {
    const id = String(item[idField] ?? items.indexOf(item));
    await setDoc(doc(collection(db, collectionName), id), item);
  }
  console.log(`✓ ${collectionName} done`);
}

async function seedStoryChapters() {
  console.log("Seeding story chapters...");
  for (const storyId of Object.keys(storyChapters)) {
    await setDoc(doc(collection(db, "storyChapters"), storyId), {
      chapters: storyChapters[storyId],
    });
  }
  console.log("✓ storyChapters done");
}

async function run() {
  try {
    await seedCollection("stories", exploreStories);
    await seedStoryChapters();
    await seedCollection("topWriters", topWriters, "rank");
    await seedCollection("novelRankings", novelRankings);
    await seedCollection("activeCompetitions", activeCompetitions);
    await seedCollection("upcomingCompetitions", upcomingCompetitions);
    await seedCollection("pastWinners", pastWinners);
    await seedCollection("writingResources", writingResources);

    console.log("\nAll done. Firestore is now populated with your mock data.");
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err);
    process.exit(1);
  }
}

run();