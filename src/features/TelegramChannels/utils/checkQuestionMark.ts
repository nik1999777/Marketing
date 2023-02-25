export const checkQuestionMark = (str: string) => {
  const lastSymbol = str.slice(-1);
  if (lastSymbol === "?") {
    str += "&";
  } else {
    str += "?";
  }

  return str;
};
