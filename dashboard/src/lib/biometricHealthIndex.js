export function calculateBHI(totalUpdates, population = 1000000) {
  if (!totalUpdates) return 100;
  return Number((population / totalUpdates).toFixed(2));
}
