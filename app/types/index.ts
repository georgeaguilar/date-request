export type Step = 1 | 2 | 3 | 4 | 5 | 6;

export interface DateSelection {
  date: string;
  time: string;
  food: string;
}

export interface FoodOption {
  emoji: string;
  label: string;
  value: string;
}
