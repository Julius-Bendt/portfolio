const MONTH_ABBR = [
  "jan.", "feb.", "mar.", "apr.", "may",
  "jun.", "jul.", "aug.", "sep.", "oct.", "nov.", "dec.",
];

function ordinalSuffix(day: number): string {
  const v = day % 100;
  if (v >= 11 && v <= 13) return "th";
  switch (v % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

/** "aug. 2023" */
export function formatMonthYear(date: Date): string {
  return `${MONTH_ABBR[date.getMonth()]} ${date.getFullYear()}`;
}

/** "1st aug. 2023" */
export function formatDayMonthYear(date: Date): string {
  const day = date.getDate();
  return `${day}${ordinalSuffix(day)} ${MONTH_ABBR[date.getMonth()]} ${date.getFullYear()}`;
}
