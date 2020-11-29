export interface RandomColor {
  colors: Colors[];
  schemes: unknown;
  schemes_history: unknown;
  success: boolean;
  colors_history: ColorsHistory;
  messages: unknown[];
  new_color: string;
}

interface Colors {
  timestamp: number;
  hex: string;
  id: number;
  tags: Tags[];
}

interface Tags {
  timestamp: number;
  id: number;
  name: string;
}

interface ColorsHistory {
  [key: string]: HexData[];
}

interface HexData {
  d_count: number;
  id: string;
  a_count: number;
  name: string;
}
