import Papa from "papaparse";

export async function loadCSV(path) {
  const res = await fetch(path);
  const text = await res.text();

  const parsed = Papa.parse(text, {
    header: true,
    skipEmptyLines: true
  });

  return parsed.data.map((row, index) => ({
    rowNo: index + 1,
    ...row
  }));
}
