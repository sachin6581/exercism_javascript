//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const dnaToRnaMap = new Map();
dnaToRnaMap.set('G', 'C');
dnaToRnaMap.set('C', 'G');
dnaToRnaMap.set('T', 'A');
dnaToRnaMap.set('A', 'U');

export const toRna = (dna) => {
    let rna = "";
    [...dna].forEach((strand) => {
        rna += dnaToRnaMap.get(strand);
    });
    return rna;
};
