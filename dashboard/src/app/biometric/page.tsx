"use client";

import { useEffect, useState } from "react";
import {
  processBiometricData,
  BiometricSummary,
  BiometricProcessedRow
} from "../../lib/biometricAnalytics";
import { loadCSV } from "../../lib/utils/loadCSV";
import { calculateBHI } from "../../lib/biometricHealthIndex";

type BiometricUIState = BiometricSummary & {
  bhi: number;
};

export default function BiometricPage() {
  const [data, setData] = useState<BiometricUIState | null>(null);

  useEffect(() => {
    async function loadData() {
      const rows = await loadCSV(
        "/data/aadhaar_biometric_updates/api_data_aadhaar_biometric_0_500000.csv"
      );

      const summary = processBiometricData(rows);
      const bhi = calculateBHI(summary.total);

      setData({ ...summary, bhi });
    }

    loadData();
  }, []);

  if (!data) return <p>Loading biometric analytics...</p>;

  return (
    <main style={{ padding: "20px" }}>
      <h1>Aadhaar Biometric Updates</h1>

      <ul>
        {data.rows.slice(0, 5).map((r: BiometricProcessedRow) => (
          <li key={r.rowNo}>
            Row {r.rowNo}: Total Updates = {r.total}
          </li>
        ))}
      </ul>
    </main>
  );
}
