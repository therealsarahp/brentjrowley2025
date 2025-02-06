import Melancholia from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/Melancholia.jpg'
import HauntI from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/Hauntologically Frozen I.jpg';
import HauntII from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/Hauntologically Frozen II.jpg';
import Yellow from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/The Yellow Christ (Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny).jpg';
import Only from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/Only Evil.jpg';
import Fenestration from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/Fenestration.jpg';
import Saint from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/Saint Sebastian.jpg';
import Triumph from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/The Triumph of Death (Echolalia).jpg';
import Trouble from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/The Trouble With Tragedy Is the Fuss It Makes.jpg';
import SurfI from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/This Droning of the Surf I.jpg';
import SurfIII from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/This Droning of the Surf III.jpg';
import Again from '../../../public/images/Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny/Again Gone.jpg';
import {StaticImageData} from "next/image";

export interface SeriesObj{
    title: string;
    description: string;
    images: PaintingObj[];
}

export type PaintingObj={
    img: {} | StaticImageData;
    size: string;
    price: string;
    series: string;
    writing: string;
    description: string;
    location: string;
    media: string;
    title: string;
    card: boolean;
    buyer: string
}

export const burrowingsSeries: SeriesObj={
    title: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
    description: "",
    images: [{
                title: "Melancholia",
                size: "8.5 x 12”",
                media: "Watercolor on paper",
                price: "$600.00",
                writing: "",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Home, framed",
                card: true,
                description: "",
                buyer: "",
                img: Melancholia,
            },
            {
                title: "Hauntologically Frozen II",
                size: "12 x 9”",
                media: "Watercolor, ink, and acrylic on Shizen handmade paper",
                price: "$400.00",
                writing: "",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Home, framed",
                card: true,
                description: "Pontormo two nudes brain eating",
                buyer: "",
                img: HauntII,
            },
            {
                title: "The Yellow Christ (Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny)",
                size: "12 x 9”",
                media: "Watercolor on Shizen handmade paper",
                price: "$600.00",
                writing: "Subterranean forces at work. Gaugin sees a picture on a trip to Italy in 1885. A mostly destroyed painting of a yellow Christ, skin seething like a wild beast. The image burrows into his brain, latching on like a parasite. Over the next year, it mutates and it grows. It wants to resurface. After all, who drives this boat? A spot of absinthe in the afternoon and the yellow Christ reappears in a delirium haze in a field in Brittany during the evening hour of Angelus, 1886.",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Home, boxed and framed",
                card: true,
                description: "",
                buyer: "",
                img: Yellow,
            },
            {
                title: "The Trouble With Tragedy Is the Fuss It Makes",
                size: "9 x 9”",
                media: "Watercolor and Wax pastel on Shizen handmade paper",
                price: "$400.00",
                writing: "",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Home, framed",
                card: true,
                description: "",
                buyer: "",
                img: Trouble,
            },
            {
                title: "Again Gone With What To Tell On Again Retell",
                size: "4 x 4”",
                media: "Watercolor, acrylic, and metallic alcohol ink on paper",
                price: "$200.00",
                writing: "",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Home, framed",
                card: true,
                description: "",
                buyer: "",
                img: Again,
            },
            {
                title: "Hauntologically Frozen I",
                size: "7 x 5”",
                media: "Watercolor, acrylic, and ink on Khadi handmade paper",
                price: "$200.00",
                writing: "",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Home, framed",
                card: true,
                description: "Close up woman’s face (yellow outline) with line-drawn figures",
                buyer: "",
                img: HauntI,
            },
            {
                title: "Only Evil Can Speak of Itself Now",
                size: "7 x 5",
                media: "Watercolor on Khadi handmade paper",
                price: "$200.00",
                writing: "",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Home, framed",
                card: true,
                description: "",
                buyer: "",
                img: Only,
            },
            {
                title: "The Triumph of Death (Echolalia)",
                size: "12 x 16”",
                media: "Watercolor, inktense pencils, and wax pastel on paper",
                price: "$1200.00",
                writing: "Echolalia\n1 . PSYCHIATRY\nmeaningless repetition of words just spoken by another person, occurring as a symptom of mental conditions.\n2. repetition of speech by a child learning to talk\n\nA symbol chews through its leash. It goes for a walk around the park. It shits in the grass, pees on the curb. It humps a lady’s leg. It runs off with another stray symbol and gives birth to more symbols. Monstrous little things with teeth. Soon the symbols overrun the park, shitting and pissing everywhere. The masters have to hide indoors. They complain about the symbols, but there is nothing they can do.",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Home, framed",
                card: true,
                description: "",
                buyer: "",
                img: Triumph,
            },
            {
                title: "Fenestration",
                size: "7 x 5”",
                media: "Watercolor and Wax pastel on Khadi handmade paper",
                price: "$200.00",
                writing: "You’re the king. You’ve got it all. The palace. The gold. The harem. The works. You see some " +
                    "upstart down in the courtyard, doing miracles. No way. Not today. Not in your town. You tell Joey " +
                    "to go and put one in the back of his head.\n\nYou watch from the window as Joey takes aim with his " +
                    "bow. *Zing* Everything turns to pain. You scream. You roll around. You clutch the shaft. You yell " +
                    "at your guards to arrest that asshole.\n\nYou watch through one eye. They drag him in and put him " +
                    "up on the chopping block. His name is Chris. You didn’t realize how big he is. Huge. A monstrosity." +
                    " They’re about to lop his head off. Good riddance. \n\n“Any last words?” you ask.\n\nHe looks at you " +
                    "and, with compassion in his eyes, says, “Tomorrow, when I am dead, take some of my blood, mix it with " +
                    "earth, put it on your eye, and you will be healed.\n" +
                    "“Bullshit,” you say. Chris’s head rolls on the ground like a ripe melon.\n" +
                    "\n" +
                    "The next day your eye socket throbs. You get to thinking. What if he was right. What could it hurt. \n" +
                    "\n" +
                    "Nonsense.\n" +
                    "\n" +
                    "But maybe.",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "",
                card: false,
                description: "",
                buyer: "",
                img: Fenestration,
            },
            {
                title: "Saint Sebastian",
                size: "7 x 5”",
                media: "Watercolor on Khadi handmade paper",
                price: "$200.00",
                writing: "",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Boswell Mourot",
                card: false,
                description: "",
                buyer: "",
                img: Saint,
            },
            {
                title: "This Droning of the Surf I",
                size: "10 x 8”",
                media: "Watercolor on Khadi handmade paper",
                price: "$170.00",
                writing: "",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Sold",
                card: false,
                description: "",
                buyer: "Tim",
                img: SurfI,
            },
            {
                title: "This Droning of the Surf II",
                size: "10 x 8”",
                media: "Watercolor on Khadi handmade paper",
                price: "$170.00",
                writing: "",
                series: "Burrowings in All the Directions of Chance, Possibility, Luck, or Destiny",
                location: "Sold",
                card: false,
                description: "",
                buyer: "Tim",
                img: SurfIII,
        }
]
}