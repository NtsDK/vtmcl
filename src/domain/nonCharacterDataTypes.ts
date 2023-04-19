// export interface Meta {
//   name: string;
//   date: string;
//   preGameDate: string;
//   description: string;
//   saveTime: string;
// }

// export type Log = [string,string,string,string][];

export type Version = string;

export type CharsheetBackMode =
  | "charsheet-image"
  | "charsheet-none"
  | "charsheet-color";

export interface Settings {
  backgroundColor: string;
  charsheetBackColor: string;
  charsheetBackImage_v2: string;
  charsheetBackMode: CharsheetBackMode;
}
