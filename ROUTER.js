import { dreigeologramm } from "./3eck.js";

export function ROUTER(SYN, QUANT) {
  const phi = 1.618;
  const R = (SYN + QUANT) / phi;

  if (R > 0.66) return dreigeologramm.top;
  if (R < 0.33) return dreigeologramm.bottom;
  return dreigeologramm.mid;
}
