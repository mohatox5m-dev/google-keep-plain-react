export const NOTE_COLORS = [
  { id: "default", label: "Default", bg: "#ffffff", border: "#e0e0e0" },
  { id: "coral", label: "Coral", bg: "#f28b82", border: "#f28b82" },
  { id: "orange", label: "Orange", bg: "#fbbf74", border: "#fbbf74" },
  { id: "yellow", label: "Yellow", bg: "#fff475", border: "#fff475" },
  { id: "green", label: "Green", bg: "#ccff90", border: "#ccff90" },
  { id: "teal", label: "Teal", bg: "#a7ffeb", border: "#a7ffeb" },
  { id: "blue", label: "Blue", bg: "#cbf0f8", border: "#cbf0f8" },
  { id: "darkblue", label: "Dark blue", bg: "#aecbfa", border: "#aecbfa" },
  { id: "purple", label: "Purple", bg: "#d7aefb", border: "#d7aefb" },
  { id: "pink", label: "Pink", bg: "#fdcfe8", border: "#fdcfe8" },
  { id: "brown", label: "Brown", bg: "#e6c9a8", border: "#e6c9a8" },
  { id: "gray", label: "Gray", bg: "#e8eaed", border: "#e8eaed" },
];

export function getNoteColorStyle(colorId, isDark = false) {
  const color = NOTE_COLORS.find((c) => c.id === colorId) ?? NOTE_COLORS[0];

  if (color.id === "default" && isDark) {
    return {
      backgroundColor: "#303134",
      borderColor: "#303134",
      color: "#e8eaed",
    };
  }

  return {
    backgroundColor: color.bg,
    borderColor: color.id === "default" ? "#dadce0" : color.border,
    color: "#202124",
  };
}
