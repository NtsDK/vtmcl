export interface Meta {
  name: string;
  date: string;
  preGameDate: string;
  description: string;
  saveTime: string;
}

export type Log = [string,string,string,string][];

export type Version = string;

export interface Settings {
  "backgroundColor": string;
  "charsheetBackColor": string;
  "charsheetBackImage": string;
  "charsheetBackMode": string;
}
