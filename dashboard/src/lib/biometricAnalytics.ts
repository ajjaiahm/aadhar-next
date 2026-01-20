// 1️⃣ CSV row shape
export interface BiometricRow {
  fingerprint?: string;
  iris?: string;
  face?: string;
}

// 2️⃣ Processed row with row number
export interface BiometricProcessedRow {
  rowNo: number;
  fingerprint: number;
  iris: number;
  face: number;
  total: number;
}

// 3️⃣ Final summary shape
export interface BiometricSummary {
  fingerprint: number;
  iris: number;
  face: number;
  total: number;
  rows: BiometricProcessedRow[];
}

// 4️⃣ Function
export function processBiometricData(
  rows: BiometricRow[]
): BiometricSummary {
  const summary: BiometricSummary = {
    fingerprint: 0,
    iris: 0,
    face: 0,
    total: 0,
    rows: [] // ✅ NOW TS KNOWS THIS EXISTS
  };

  rows.forEach((row, index) => {
    const fp = Number(row.fingerprint ?? 0);
    const ir = Number(row.iris ?? 0);
    const fc = Number(row.face ?? 0);

    summary.fingerprint += fp;
    summary.iris += ir;
    summary.face += fc;
    summary.total += fp + ir + fc;

    summary.rows.push({
      rowNo: index + 1,
      fingerprint: fp,
      iris: ir,
      face: fc,
      total: fp + ir + fc
    });
  });

  return summary;
}
