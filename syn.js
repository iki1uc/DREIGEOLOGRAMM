function respoRouter(SYN, QUANT) {
    const phi = 1.618;
    const R = (SYN + QUANT) / phi;

    if (R > 0.66) return ["OK", "FLOW", "ROOT"];
    if (R < 0.33) return ["BREAK_invert", "NOK", "ECHO"];
    return ["NOK", "BREAK_invert", "ECHO"];
}
