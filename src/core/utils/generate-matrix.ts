export const generateMatrix = (columns: number, rows: number): number[][] => {
  return Array.from(Array(rows).keys()).map((row) =>
    Array.from(Array(columns).keys())
  );
};
