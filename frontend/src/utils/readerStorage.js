const HIGHLIGHTS_KEY = "inkwell_highlights";
const ANNOTATIONS_KEY = "inkwell_annotations";

function getStoredMap(key) {
  return JSON.parse(localStorage.getItem(key) || "{}");
}

function saveStoredMap(key, map) {
  localStorage.setItem(key, JSON.stringify(map));
}

export function getHighlightsForStory(storyId) {
  const map = getStoredMap(HIGHLIGHTS_KEY);
  return map[storyId] || [];
}

export function saveHighlight(storyId, highlight) {
  const map = getStoredMap(HIGHLIGHTS_KEY);
  const entry = { id: Date.now(), ...highlight };
  map[storyId] = [...(map[storyId] || []), entry];
  saveStoredMap(HIGHLIGHTS_KEY, map);
  return map[storyId];
}

export function getAllHighlights() {
  const map = getStoredMap(HIGHLIGHTS_KEY);
  return Object.entries(map).flatMap(([storyId, items]) =>
    items.map((item) => ({ ...item, storyId: Number(storyId) }))
  );
}

export function getAnnotationsForStory(storyId) {
  const map = getStoredMap(ANNOTATIONS_KEY);
  return map[storyId] || [];
}

export function saveAnnotation(storyId, annotation) {
  const map = getStoredMap(ANNOTATIONS_KEY);
  const entry = { id: Date.now(), ...annotation };
  map[storyId] = [...(map[storyId] || []), entry];
  saveStoredMap(ANNOTATIONS_KEY, map);
  return map[storyId];
}

export function deleteAnnotation(storyId, annotationId) {
  const map = getStoredMap(ANNOTATIONS_KEY);
  map[storyId] = (map[storyId] || []).filter((a) => a.id !== annotationId);
  saveStoredMap(ANNOTATIONS_KEY, map);
  return map[storyId];
}
