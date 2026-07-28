// src/services/rankingsService.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function getTopWriters() {
  const snap = await getDocs(collection(db, "topWriters"));
  const writers = snap.docs.map((d) => d.data());
  return writers.sort((a, b) => a.rank - b.rank);
}

export async function getNovelRankings() {
  const snap = await getDocs(collection(db, "novelRankings"));
  return snap.docs.map((d) => d.data());
}

export async function getActiveCompetitions() {
  const snap = await getDocs(collection(db, "activeCompetitions"));
  return snap.docs.map((d) => d.data());
}

export async function getUpcomingCompetitions() {
  const snap = await getDocs(collection(db, "upcomingCompetitions"));
  return snap.docs.map((d) => d.data());
}

export async function getPastWinners() {
  const snap = await getDocs(collection(db, "pastWinners"));
  return snap.docs.map((d) => d.data());
}

export async function getWritingResources() {
  const snap = await getDocs(collection(db, "writingResources"));
  return snap.docs.map((d) => d.data());
}