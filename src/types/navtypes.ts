export interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;

}

interface PriceChange {
  dir: "up" | "down" | "same"; // ba string
  pct: number;
}

export interface ProductMarquee {

  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: PriceChange;

}