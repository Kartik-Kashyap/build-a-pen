export interface Fact {
  label: string;
  value: string;
  unit?: string;
}

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MapPoint {
  country: string;
  material: string;
  role: string;
  coords: { x: number; y: number }; // % of SVG viewBox
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  hook: string; // opening dramatic statement
  body: string[];
  facts: Fact[];
  timeline?: TimelineEvent[];
  mapPoints?: MapPoint[];
  pullQuote: string;
  color: string;
}
