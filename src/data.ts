export interface Hangszer {
    nev: string;          // string
    tipus: string;        // string
    ar: number;           // number
    keszleten: boolean;   // boolean
}

export type OldalTipus = "index" | "mod" | "admin"

export const hangszerek: Hangszer[] = [
    {
        nev: "Zongora",
        tipus: "billentyűs",
        ar: 850000, keszleten: true
    },
    {
        nev: "Gitár",
        tipus: "pengetős",
        ar: 120000, keszleten: true
    },
    {
        nev: "Hegedű",
        tipus: "vonós",
        ar: 250000, keszleten: false
    },
    {
        nev: "Dobfelszerelés",
        tipus: "ütős",
        ar: 430000, keszleten: true
    },
    {
        nev: "Fuvola",
        tipus: "fúvós",
        ar: 95000, keszleten: false
    },
];