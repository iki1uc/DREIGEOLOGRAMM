function atlantisTor(vector) {
    switch(vector) {
        case "TOR": return "ROOT";          // Rückkehr
        case "TOR_invert": return "BREAK";  // Gegen-Zeit
        case "TOR_echo": return "ECHO";     // Spiegelung
    }
}
