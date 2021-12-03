/*
 * retourner la chanson en fonction du nombre de kilomètres
 *
 * ex: song(2) =>
 *      1 km à pied, ça use, ça use, ça use,
 *      1 km à pied, ça use les souliers
 *      2 km à pied, ça use, ça use, ça use,
 *      2 km à pied, ça use les souliers
 *
 * Voir le fichier de tests associé (spec/songSpec.js)
 */
function song(km) {
    // CODE HERE
    let nbKm = 0;
    let lyrics = "";

    while (nbKm < km) {
        lyrics += (nbKm + 1) + " km à pied, ça use, ça use, ça use,\n" + (nbKm + 1) + " km à pied, ça use les souliers\n";
        ++nbKm;
    }
    return lyrics;
}
export { song };