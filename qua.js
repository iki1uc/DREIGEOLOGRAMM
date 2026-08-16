export function qua(x) {
  return {
    quant: x * 9,
    phi: 1.618,
    res: (x * 9) / 1.618,
    mode: "QUANT"
  };
}
