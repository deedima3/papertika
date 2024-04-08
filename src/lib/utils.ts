function arrayEquals(a: unknown[], b: unknown[]) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

const checkEmptyString = (stringArray: string[]) => {
  if (!stringArray) {
    return true;
  }
  stringArray.map((value) => {
    if (value == "") {
      return true;
    }
  });
  return false;
};

export { arrayEquals, checkEmptyString };
