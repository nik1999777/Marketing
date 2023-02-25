import { translit } from "./translit";

export const replaceSpaceAndTranslateEnglish = (str: string) => {
  return translit(str).replace(/\s/gi, "_");
};
