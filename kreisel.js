export function kreisel(state) {
  return {
    spin: state * 1.618,
    vector: "VECTOR_STRICH",
    mode: "KREISEL"
  };
}
