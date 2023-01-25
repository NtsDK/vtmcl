import { Attributes, AttributesConfig } from "../../domain";

export const physicalAttributesArr: (keyof Attributes)[] = [
  "strength", 'dexterity', 'stamina'
];
export const socialAttributesArr: (keyof Attributes)[] = [
  "charisma", 'manipulation', 'appearance'
];
export const mentalAttributesArr: (keyof Attributes)[] = [
  "perception", 'intelligence', 'wits'
];

export const attributesConfig: AttributesConfig = [{
  header: 'physical',
  items: physicalAttributesArr
}, {
  header: 'social',
  items: socialAttributesArr
}, {
  header: 'mental',
  items: mentalAttributesArr
}];
