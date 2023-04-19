// In ReactSnap it is necessary to process page a bit differently
// 1. To prerender the page in Russian
// 2. To not render background in CharSheetBody by default.
//   Image is extremely heavy in base64 mode.
// This is flag isArtificialBrowser
// Check is based on node_modules\react-snap\index.js internals

export function envInfo() {
  return {
    isArtificialBrowser: navigator.userAgent === "ReactSnap",
  };
}
