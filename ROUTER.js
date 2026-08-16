import { dreiecke } from "./dreiecke.js";
import { kreis } from "./kreis.js";
import { zeit } from "./zeit.js";
import { invert } from "./invert.js";

export function router(SYN, QUANT) {
  const phi = 1.618;
  const R = (SYN + QUANT) / phi;

  if (R > 0.66) {
    return {
      bahn: "TOP",
      dreiecke: dreiecke.top,
      respo: ["OK", "FLOW", "ROOT"],
      vector: kreis.vector,
      zeit: zeit.forward
    };
  }

  if (R < 0.33) {
    return {
      bahn: "BOTTOM",
      dreiecke: dreiecke.bottom,
      respo: ["NOK", "BREAK", "ECHO"],
      vector: kreis.vector,
      zeit: zeit.neutral
    };
  }

  return {
    bahn: "TOR",
    dreiecke: invert.tor,
    respo: ["TOR", "TOR_INVERT", "TOR_ECHO"],
    vector: invert.vector,
    zeit: zeit.reverse
  };
}
