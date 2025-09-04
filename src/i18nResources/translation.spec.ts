import { ruTranslation } from "./ruTranslation";
import { enTranslation } from "./enTranslation";

// проверяет, что в обоих переводах НЕ совпадают значения
describe("Translations check", () => {
  it("should have different values for ru and en", () => {
    const differences: ValueDiff[] = [];
    translationComparator(enTranslation, ruTranslation, [], differences);
    if (differences.length > 0) {
      console.log("Found identical translation values:", differences);
    }
    expect(differences).toEqual([]);
  });
});

type ValueDiff = {
  key: string;
  ru: string;
  en: string;
};

function translationComparator(
  enObj: any,
  ruObj: any,
  path: string[] = [],
  differences: ValueDiff[] = [],
): void {
  if (typeof enObj === "string") {
    if (enObj === ruObj) {
      differences.push({
        key: path.join("."),
        ru: ruObj,
        en: enObj,
      });
    }
  } else {
    const keys = Object.keys(enObj);
    for (const key of keys) {
      translationComparator(
        enObj[key],
        ruObj[key],
        [...path, key],
        differences,
      );
    }
  }
}
