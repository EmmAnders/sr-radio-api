export const convertToDateObject = (s) => {
  return new Date(
    // eslint-disable-next-line no-useless-escape
    parseInt(s.replace(/[\/\(\)date]/gi, ""))
  ).toLocaleString();
};
