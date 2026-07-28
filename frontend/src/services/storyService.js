// src/services/storyService.js
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  collection,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

// Strips HTML tags down to plain paragraphs for chapter storage/reading
function htmlToParagraphs(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";
  return text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

// Generates a simple numeric-style id consistent with your existing mock data
async function getNextStoryId() {
  const snap = await getDocs(collection(db, "stories"));
  let maxId = 0;
  snap.forEach((d) => {
    const idNum = Number(d.id);
    if (!Number.isNaN(idNum) && idNum > maxId) maxId = idNum;
  });
  return maxId + 1;
}

export async function publishStory({ title, content, genre, tags, coverImage, author }) {
  if (!title?.trim()) throw new Error("Story needs a title before publishing.");
  if (!genre) throw new Error("Please select a genre before publishing.");

  const newId = await getNextStoryId();
  const paragraphs = htmlToParagraphs(content);
  const tagList = (tags || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const storyDoc = {
    id: newId,
    title: title.trim(),
    author: author.username || "Anonymous",
    authorAvatar: author.photo || "",
    authorId: author.uid,
    genre,
    status: "Ongoing",
    excerpt: paragraphs[0]?.slice(0, 160) || "",
    blurb: paragraphs.slice(0, 2).join(" ").slice(0, 400) || "",
    tags: tagList,
    cover: coverImage || "",
    views: "0",
    likes: "0",
    chapters: 1,
    rating: 0,
    language: "English",
    minPerChapter: Math.max(1, Math.round(paragraphs.join(" ").split(/\s+/).length / 200)),
    createdAt: serverTimestamp(),
  };

  await setDoc(doc(db, "stories", String(newId)), storyDoc);

  await setDoc(doc(db, "storyChapters", String(newId)), {
    chapters: [
      {
        number: 1,
        title: "Chapter 1",
        content: paragraphs,
      },
    ],
  });

  return storyDoc;
}

export async function saveDraft({ title, content, genre, tags, coverImage, author }) {
  if (!author?.uid) throw new Error("You must be logged in to save a draft.");

  const draftDoc = {
    title: title || "",
    content: content || "",
    genre: genre || "",
    tags: tags || "",
    coverImage: coverImage || "",
    authorId: author.uid,
    updatedAt: serverTimestamp(),
  };

  await setDoc(doc(db, "drafts", author.uid), draftDoc);
  return draftDoc;
}

export async function getDraft(uid) {
  const snap = await getDoc(doc(db, "drafts", uid));
  return snap.exists() ? snap.data() : null;
}

export async function getStoryById(storyId) {
  const snap = await getDoc(doc(db, "stories", String(storyId)));
  return snap.exists() ? snap.data() : null;
}

export async function getAllStories() {
  const snap = await getDocs(collection(db, "stories"));
  return snap.docs.map((d) => d.data());
}

// Stories actually written/published by a specific user (matched by authorId,
// which is only set on stories created through the Editor's publish flow —
// seeded mock stories have no authorId, so they never show up here).
export async function getStoriesByAuthor(uid) {
  if (!uid) return [];
  const all = await getAllStories();
  return all.filter((story) => story.authorId === uid);
}

export async function getStoryChapters(storyId) {
  const snap = await getDoc(doc(db, "storyChapters", String(storyId)));
  return snap.exists() ? snap.data().chapters : [];
}

export async function getComments(storyId) {
  const commentsRef = collection(db, "stories", String(storyId), "comments");
  const q = query(commentsRef, orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function addComment(storyId, { text, author, avatar }) {
  const commentsRef = collection(db, "stories", String(storyId), "comments");
  const docRef = await addDoc(commentsRef, {
    text,
    author,
    avatar,
    likes: 0,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
