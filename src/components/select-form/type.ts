interface Country {
  name: string;
  value: string;
}

export interface Countries {
  [key: string]: Country;
}
