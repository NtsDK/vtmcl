// import dateFormat from 'dateformat';
import fileSaver from "file-saver";
import { DateTime } from "luxon";

const { saveAs } = fileSaver;

// const R = require('ramda');
// const { saveAs } = require('file-saver');
// const CU = require('./common/commonUtils');

// exports.makeNewBase = base => new Promise((resolve, reject) => {
//   UI.confirm(L10n.getValue('utils-new-base-warning'), () => {
//     DBMS.setDatabase({ database: R.clone(base.data) }).then(() => {
//       resolve(true);
//       // TestUtils.addGroupTestingData();
//     }).catch(reject);
//   }, () => resolve(false));
// });

// exports.openHelp = () => {
//   window.open('extras/doc/nims.html');
// };

export const readTextFile = (evt: any) =>
  new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    // Retrieve the first (and only!) File from the FileList object
    const f = evt.target.files[0];

    if (f) {
      const r = new FileReader();
      r.onload = function (this: FileReader, e: ProgressEvent<FileReader>) {
        if (e.target === null) {
          reject(new Error("File reader target is null"));
        } else {
          resolve(e.target.result);
        }
      };
      r.readAsText(f);
    } else {
      reject(new Error("utils-base-file-loading-error"));
    }
  });
export const readJsonFile = (evt: any) =>
  new Promise((resolve, reject) => {
    // Retrieve the first (and only!) File from the FileList object
    const f = evt.target.files[0];

    if (f) {
      const r = new FileReader();
      r.onload = function (this: FileReader, e: ProgressEvent<FileReader>) {
        if (e.target === null) {
          reject(new Error("File reader target is null"));
        } else {
          const contents = e.target.result;
          try {
            const object = JSON.parse(contents as string);
            resolve(object);
          } catch (err) {
            reject(err);
          }
        }
      };
      r.readAsText(f);
    } else {
      // UI.alert(L10n.getValue('utils-base-file-loading-error'));
      reject(new Error("utils-base-file-loading-error"));
    }
  });

export const readBinaryFile = (evt: any) =>
  new Promise((resolve, reject) => {
    // Retrieve the first (and only!) File from the FileList object
    const f = evt.target.files[0];

    if (f) {
      const r = new FileReader();
      r.onload = function (this: FileReader, e: ProgressEvent<FileReader>) {
        if (e.target === null) {
          reject(new Error("File reader target is null"));
        } else {
          const contents = e.target.result;
          resolve({
            name: f.name,
            buffer: contents,
          });
        }
      };
      r.readAsArrayBuffer(f);
    } else {
      // UI.alert(L10n.getValue('utils-base-file-loading-error'));
      reject(new Error("utils-base-file-loading-error"));
    }
  });

// eslint-disable-next-line no-useless-escape
const illegalRe = /[\/\?<>\\:\*\|":]/g;
// eslint-disable-next-line no-control-regex
const controlRe = /[\x00-\x1f\x80-\x9f]/g;
const reservedRe = /^\.+$/;
const windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
// eslint-disable-next-line no-useless-escape
const windowsTrailingRe = /[\. ]+$/;

function sanitizeStr2FileName(input: string, replacement = ""): string {
  // replacement = replacement || '';
  const sanitized = input
    .replace(illegalRe, replacement)
    .replace(controlRe, replacement)
    .replace(reservedRe, replacement)
    .replace(windowsReservedRe, replacement)
    .replace(windowsTrailingRe, replacement);
  return sanitized.substring(0, 255);
}

export function makeFileName(
  root: string,
  extension: string,
  date?: Date,
): string {
  date = date || new Date();
  const timeStr = DateTime.fromJSDate(date).toFormat("dd-LLL-yyyy_HH-MM-ss", {
    locale: "en",
  });
  // const timeStr = dateFormat(date, 'dd-mmm-yyyy_HH-MM-ss');
  const fileName = `${root}_${timeStr}`;
  return `${sanitizeStr2FileName(fileName)}.${extension}`;
}

export function json2File(obj: any, fileName: string) {
  str2File(JSON.stringify(obj, null, "  "), fileName);
}

export function str2File(str: any, fileName: string) {
  const blob = new Blob([str], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, fileName);
}

// export {
//   json2File, makeFileName, readJsonFile, readBinaryFile, str2File,
// };

// function preprocessCsvStr(str) {
//   if (!(typeof str === 'string' || str instanceof String)) {
//     return str;
//   }
//   let result = str.replace(/"/g, '""');
//   if (result.search(/("|,|\n)/g) >= 0) {
//     result = `"${result}"`;
//   }
//   return result;
// }

// exports.arr2d2Csv = (arr, fileName) => {
//   const csv = `\ufeff${arr.map(dataArray => dataArray.map(preprocessCsvStr).join(';')).join('\n')}`;

//   const out = new Blob([csv], {
//     type: 'text/csv;charset=utf-8;'
//   });
//   saveAs(out, exports.makeFileName(fileName, 'csv'));
// };
