const LEAP_YEAR = 2000;

export type Element = "Fire" | "Earth" | "Air" | "Water";
export type Modality = "Cardinal" | "Fixed" | "Mutable";

export type ZodiacSign = {
  name: string;
  start: { month: number; day: number };
  end: { month: number; day: number };
  symbol: string; // emoji
  element: Element;
  modality: Modality;
  rulingPlanet: string;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
  compatible: string[];
  challenging: string[];
};

export const ELEMENT_COLORS: Record<Element, string> = {
  Fire: "#FF6B4A",
  Earth: "#8B9A46",
  Air: "#5B9BD5",
  Water: "#4A90A4",
};

export const ZODIAC_SIGNS: readonly ZodiacSign[] = [
  {
    name: "Aries",
    start: { month: 3, day: 21 },
    end: { month: 4, day: 19 },
    symbol: "♈",
    element: "Fire",
    modality: "Cardinal",
    rulingPlanet: "Mars",
    description:
      "Bold and pioneering, Aries charges into life with unbridled energy and a fearless spirit. Always ready for the next adventure, they lead with instinct and courage.",
    traits: ["Courageous", "Energetic", "Pioneering", "Direct", "Competitive"],
    strengths: ["Leadership", "Initiative", "Honesty", "Enthusiasm"],
    challenges: ["Impatience", "Impulsiveness", "Temper", "Restlessness"],
    compatible: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
    challenging: ["Cancer", "Capricorn"],
  },
  {
    name: "Taurus",
    start: { month: 4, day: 20 },
    end: { month: 5, day: 20 },
    symbol: "♉",
    element: "Earth",
    modality: "Fixed",
    rulingPlanet: "Venus",
    description:
      "Steadfast and sensual, Taurus values stability, comfort, and the finer things in life. Reliable and patient, they build lasting foundations with quiet determination.",
    traits: ["Reliable", "Patient", "Practical", "Sensual", "Loyal"],
    strengths: ["Persistence", "Loyalty", "Groundedness", "Appreciation of beauty"],
    challenges: ["Stubbornness", "Possessiveness", "Resistance to change"],
    compatible: ["Virgo", "Capricorn", "Cancer", "Pisces"],
    challenging: ["Leo", "Aquarius"],
  },
  {
    name: "Gemini",
    start: { month: 5, day: 21 },
    end: { month: 6, day: 20 },
    symbol: "♊",
    element: "Air",
    modality: "Mutable",
    rulingPlanet: "Mercury",
    description:
      "Versatile and witty, Gemini thrives on ideas, conversation, and variety. Quick-minded and adaptable, they connect people and concepts with effortless charm.",
    traits: ["Curious", "Adaptable", "Communicative", "Witty", "Social"],
    strengths: ["Intellect", "Flexibility", "Humor", "Networking"],
    challenges: ["Inconsistency", "Restlessness", "Superficiality", "Indecisiveness"],
    compatible: ["Libra", "Aquarius", "Aries", "Leo"],
    challenging: ["Virgo", "Pisces"],
  },
  {
    name: "Cancer",
    start: { month: 6, day: 21 },
    end: { month: 7, day: 22 },
    symbol: "♋",
    element: "Water",
    modality: "Cardinal",
    rulingPlanet: "Moon",
    description:
      "Nurturing and intuitive, Cancer creates emotional safety for themselves and others. Deeply empathetic, they protect what they love with quiet strength and loyalty.",
    traits: ["Empathetic", "Protective", "Intuitive", "Loyal", "Nurturing"],
    strengths: ["Emotional intelligence", "Loyalty", "Caregiving", "Imagination"],
    challenges: ["Moodiness", "Over-sensitivity", "Clinging", "Defensiveness"],
    compatible: ["Scorpio", "Pisces", "Taurus", "Virgo"],
    challenging: ["Aries", "Libra"],
  },
  {
    name: "Leo",
    start: { month: 7, day: 23 },
    end: { month: 8, day: 22 },
    symbol: "♌",
    element: "Fire",
    modality: "Fixed",
    rulingPlanet: "Sun",
    description:
      "Charismatic and creative, Leo shines with natural confidence and warmth. Generous leaders who love to inspire others, they thrive when recognized and admired.",
    traits: ["Confident", "Generous", "Creative", "Warm", "Dramatic"],
    strengths: ["Leadership", "Creativity", "Loyalty", "Optimism"],
    challenges: ["Pride", "Need for attention", "Stubbornness", "Dominance"],
    compatible: ["Aries", "Sagittarius", "Gemini", "Libra"],
    challenging: ["Taurus", "Scorpio"],
  },
  {
    name: "Virgo",
    start: { month: 8, day: 23 },
    end: { month: 9, day: 22 },
    symbol: "♍",
    element: "Earth",
    modality: "Mutable",
    rulingPlanet: "Mercury",
    description:
      "Analytical and meticulous, Virgo brings order and practical wisdom. Service-oriented and detail-focused, they improve everything they touch with quiet precision.",
    traits: ["Analytical", "Practical", "Modest", "Diligent", "Helpful"],
    strengths: ["Problem-solving", "Reliability", "Attention to detail", "Humility"],
    challenges: ["Over-criticism", "Worry", "Perfectionism", "Self-doubt"],
    compatible: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
    challenging: ["Gemini", "Sagittarius"],
  },
  {
    name: "Libra",
    start: { month: 9, day: 23 },
    end: { month: 10, day: 22 },
    symbol: "♎",
    element: "Air",
    modality: "Cardinal",
    rulingPlanet: "Venus",
    description:
      "Harmonious and diplomatic, Libra seeks balance, beauty, and fairness in all things. Charming mediators who value partnership and aesthetic refinement.",
    traits: ["Diplomatic", "Charming", "Fair-minded", "Social", "Aesthetic"],
    strengths: ["Negotiation", "Empathy", "Grace", "Partnership skills"],
    challenges: ["Indecisiveness", "People-pleasing", "Avoidance of conflict"],
    compatible: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
    challenging: ["Cancer", "Capricorn"],
  },
  {
    name: "Scorpio",
    start: { month: 10, day: 23 },
    end: { month: 11, day: 21 },
    symbol: "♏",
    element: "Water",
    modality: "Fixed",
    rulingPlanet: "Pluto (Mars)",
    description:
      "Intense and transformative, Scorpio dives deep into truth and emotion. Passionate and resilient, they possess remarkable focus and the power to reinvent themselves.",
    traits: ["Intense", "Passionate", "Resourceful", "Loyal", "Mysterious"],
    strengths: ["Depth", "Resilience", "Focus", "Emotional strength"],
    challenges: ["Jealousy", "Secretiveness", "Control issues", "Vindictiveness"],
    compatible: ["Cancer", "Pisces", "Virgo", "Capricorn"],
    challenging: ["Leo", "Aquarius"],
  },
  {
    name: "Sagittarius",
    start: { month: 11, day: 22 },
    end: { month: 12, day: 21 },
    symbol: "♐",
    element: "Fire",
    modality: "Mutable",
    rulingPlanet: "Jupiter",
    description:
      "Adventurous and optimistic, Sagittarius seeks freedom, truth, and expansion. Philosophical explorers who inspire others with their enthusiasm and honesty.",
    traits: ["Optimistic", "Adventurous", "Honest", "Philosophical", "Independent"],
    strengths: ["Vision", "Humor", "Open-mindedness", "Enthusiasm"],
    challenges: ["Restlessness", "Tactlessness", "Overconfidence", "Commitment issues"],
    compatible: ["Aries", "Leo", "Libra", "Aquarius"],
    challenging: ["Virgo", "Pisces"],
  },
  {
    name: "Capricorn",
    start: { month: 12, day: 22 },
    end: { month: 1, day: 19 },
    symbol: "♑",
    element: "Earth",
    modality: "Cardinal",
    rulingPlanet: "Saturn",
    description:
      "Ambitious and disciplined, Capricorn climbs with patience and strategy. Responsible achievers who value tradition, structure, and long-term success.",
    traits: ["Ambitious", "Disciplined", "Responsible", "Patient", "Pragmatic"],
    strengths: ["Perseverance", "Leadership", "Organization", "Reliability"],
    challenges: ["Rigidity", "Pessimism", "Workaholism", "Emotional reserve"],
    compatible: ["Taurus", "Virgo", "Scorpio", "Pisces"],
    challenging: ["Aries", "Libra"],
  },
  {
    name: "Aquarius",
    start: { month: 1, day: 20 },
    end: { month: 2, day: 18 },
    symbol: "♒",
    element: "Air",
    modality: "Fixed",
    rulingPlanet: "Uranus (Saturn)",
    description:
      "Innovative and humanitarian, Aquarius thinks ahead of the curve. Independent visionaries who champion progress, originality, and collective good.",
    traits: ["Independent", "Innovative", "Humanitarian", "Intellectual", "Unconventional"],
    strengths: ["Vision", "Objectivity", "Originality", "Friendship"],
    challenges: ["Detachment", "Stubbornness", "Rebellion", "Emotional distance"],
    compatible: ["Gemini", "Libra", "Aries", "Sagittarius"],
    challenging: ["Taurus", "Scorpio"],
  },
  {
    name: "Pisces",
    start: { month: 2, day: 19 },
    end: { month: 3, day: 20 },
    symbol: "♓",
    element: "Water",
    modality: "Mutable",
    rulingPlanet: "Neptune (Jupiter)",
    description:
      "Compassionate and imaginative, Pisces flows with empathy and creativity. Dreamers and healers who sense the unseen and connect deeply with others.",
    traits: ["Compassionate", "Imaginative", "Intuitive", "Gentle", "Artistic"],
    strengths: ["Empathy", "Creativity", "Spirituality", "Adaptability"],
    challenges: ["Escapism", "Over-sensitivity", "Indecisiveness", "Victim mentality"],
    compatible: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
    challenging: ["Gemini", "Sagittarius"],
  },
];

const MONTH_NAMES: Record<string, number> = {
  january: 1,
  jan: 1,
  february: 2,
  feb: 2,
  march: 3,
  mar: 3,
  april: 4,
  apr: 4,
  may: 5,
  june: 6,
  jun: 6,
  july: 7,
  jul: 7,
  august: 8,
  aug: 8,
  september: 9,
  sep: 9,
  sept: 9,
  october: 10,
  oct: 10,
  november: 11,
  nov: 11,
  december: 12,
  dec: 12,
};

function toMmdd(month: number, day: number): number {
  return month * 100 + day;
}

function inRange(mmdd: number, start: number, end: number): boolean {
  if (start <= end) return mmdd >= start && mmdd <= end;
  return mmdd >= start || mmdd <= end;
}

export function getZodiacSign(month: number, day: number): ZodiacSign | null {
  const mmdd = toMmdd(month, day);
  return (
    ZODIAC_SIGNS.find((s) => inRange(mmdd, toMmdd(s.start.month, s.start.day), toMmdd(s.end.month, s.end.day))) ?? null
  );
}

function parseToMonthDay(input: string): { month: number; day: number } | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const lower = trimmed.toLowerCase();

  const now = new Date();

  if (lower === "today") {
    return { month: now.getMonth() + 1, day: now.getDate() };
  }
  if (lower === "tomorrow") {
    const d = new Date(now);
    d.setDate(d.getDate() + 1);
    return { month: d.getMonth() + 1, day: d.getDate() };
  }
  if (lower === "yesterday") {
    const d = new Date(now);
    d.setDate(d.getDate() - 1);
    return { month: d.getMonth() + 1, day: d.getDate() };
  }

  // Month name + day: "March 21", "March 21st", "mar 21"
  const monthNameDay = lower.match(
    /^(january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)\s+(\d{1,2})(?:st|nd|rd|th)?$/i,
  );
  if (monthNameDay) {
    const month = MONTH_NAMES[monthNameDay[1].toLowerCase()];
    const day = parseInt(monthNameDay[2], 10);
    if (month && day >= 1 && day <= 31) return { month, day };
  }

  // Day + month name: "21 March", "21st March"
  const dayMonthName = lower.match(
    /^(\d{1,2})(?:st|nd|rd|th)?\s+(january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)$/i,
  );
  if (dayMonthName) {
    const day = parseInt(dayMonthName[1], 10);
    const month = MONTH_NAMES[dayMonthName[2].toLowerCase()];
    if (month && day >= 1 && day <= 31) return { month, day };
  }

  // Numeric: m/d, m-d, d/m, d-m (1-2 digits each). Prefer m/d when ambiguous.
  const numeric = trimmed.match(/^(\d{1,2})[/-](\d{1,2})(?:[/-]\d{4})?$/);
  if (numeric) {
    const a = parseInt(numeric[1], 10);
    const b = parseInt(numeric[2], 10);
    if (a >= 1 && a <= 12 && b >= 1 && b <= 31) return { month: a, day: b };
    if (b >= 1 && b <= 12 && a >= 1 && a <= 31) return { month: b, day: a };
  }

  // ISO: YYYY-MM-DD
  const iso = trimmed.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (iso) {
    const month = parseInt(iso[2], 10);
    const day = parseInt(iso[3], 10);
    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) return { month, day };
  }

  return null;
}

function isValidCalendarDate(month: number, day: number): boolean {
  const d = new Date(LEAP_YEAR, month - 1, day, 12, 0, 0);
  return d.getMonth() === month - 1 && d.getDate() === day;
}

export function parseDate(input: string): Date | null {
  const parsed = parseToMonthDay(input);
  if (!parsed) return null;
  const { month, day } = parsed;
  if (!isValidCalendarDate(month, day)) return null;
  return new Date(LEAP_YEAR, month - 1, day, 12, 0, 0);
}

export function formatDateRange(sign: ZodiacSign): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const start = `${months[sign.start.month - 1]} ${sign.start.day}`;
  const end = `${months[sign.end.month - 1]} ${sign.end.day}`;
  return `${start} – ${end}`;
}
