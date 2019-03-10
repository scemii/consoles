import { combineReducers } from "redux";


const NintendoReducer = () => {
  return [
    {
      title: "Nintendo Entertainment System",
      annee: "1986",
      description:
        "Ce qui était au départ le Famicom (Family Computer) au Japon finit par devenir la machine qui sauva l'industrie du jeu vidéo. Après une chute énorme du marché des jeux à l'ouest, le Nintendo Entertainment System a démenti les experts en se vendant par millions. Les joueurs se ruèrent pour voir et pour jouer à des classiques comme Super Mario Bros, The Legend of Zelda et Excitebike, autant de titres qui étaient déjà tellement en avance sur ceux des autres consoles de salon.",
      url:
        "https://cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1986_Nintendo_Entertainment_System_large_support_carousel_image.png",
      cpu: "8-bit, 1.66 Mhz",
      memoire: "2 Ko RAM - Video RAM 2 Ko",
      affichage: "256 x 240 pixel de résolution maximum, 52 couleurs, 8 x 16 pixels de taille maximum de sprite, 64 sprites à l'écran",
      taille :"255mm x 85mm x 202mm"
    },
    {
      title: "Nintendo Game Boy",
      annee: "1990",
      description:
        "Tout le monde adore le Game Boy. Avec une si grande puissance contenue dans un si petit boîtier, cette petite console révolutionna le jeu vidéo à sa sortie au Japon en 1989. Depuis lors, cette console de poche a été vendue à plus de 100 millions d'exemplaires, offrant aux joueurs du monde entier la possibilité de jouer à leurs jeux favoris - comme Tetris, Super Mario et Pokémon - quel que soit l'endroit où ils se trouvent.",
      url:
        "https://cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1990-Gameboy_large_support_carousel_image.png",

      cpu: "Personnalisé 8 - Bit CMOS, 2.2Mhz",
      memoire: "64-Kbit RAM statique",
      affichage: "STN type dot matrix LCD, 160 x 144 pixels, 4 nuances de gris",
      taille: "90mm x 148mm x 32mm"
    },
    {
      title: "Super Nintendo",
      annee: "1992",
      description:
        "À sa sortie en Europe en 1992, la console Super Nintendo Entertainment époustoufla les joueurs avec ses graphismes et sa jouabilité qui propulsaient le monde des jeux vidéo dans une ère spectaculairement nouvelle. La Super Nintendo offre un vrai son stéréo, des décors déroulants multiples, et une mémoire intégrée deux fois plus grande que sur son aînée NES - ainsi que des cartouches de taille géante qui permettent au système de recréer d'immenses mondes qu'il faut des semaines pour explorer.",
      url:
        "https://cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1992_Super_Nintendo_large_support_carousel_image.png", 
      cpu: "16-bit 65816 processor, 2.68 Mhz",
      memoire: "RAM : 1 Mbit, RAM Vidéo : 0.5 Mbit, Taille de carte : 2 Mbit - 48 Mbit",
      affichage:"512 x 448 pixels de résolution maximum, 32,768 couleurs, 256 couleurs à l'écran, 64 x 64 pixels de taille maximum de sprite, 128 sprites à l'écran",
      taille: "200mm x 72mm x 242mm"
    },
    {
      title: "Nintendo 64",
      annee: "1997",
      description:
      "Le chiffre '64' pour les 64 bits de riches graphismes que la Nintendo 64 apporte dans votre télévision. Exploitant chaque astuce graphique existante, la Nintendo 64 vous invite à explorer des mondes époustouflants en 3D qui regorgent de couleurs s'animent à l'aide d'effets graphiques en temps réel et séduisent vos oreilles avec un son de qualité CD.",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1997_Nintendo_64_large_support_carousel_image.png",
      cpu: "MIPS 64-bit RISC CPU (série personnalisée R4000), 93.75 MHz",
      memoire: "RAMBUS D-RAM 36M bit, Vitesse de transfert : 4 500M bit/sec. maximum",
      affichage: "256 x 224 ~ 640 x 480 points, option mode sans Flicker entrecroisé",
      taille: "Longueur 260mm, largeur 190mm, hauteur 73mm"
    },
    {
      title: "Gameboy Color",
      annee: "1998",
      description:
      "Le Game Boy Color fait partie d'une famille de consoles portables qui ont révolutionné la manière de jouer du monde entier. En trente ans, le Game Boy est devenu la console préférée sur la planète - plus de 100 millions d'unités vendues en font le système de loin le plus populaire. Le Game Boy Color apporte un fantastique arc-en-ciel de plus de 32 000 couleurs possibles sur un écran de 44 x 39 mm, ajouté à un processeur deux fois plus puissant que celui de son petit frère.",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1999_Gameboy_Color_large_support_carousel_image.png",
      cpu: "8-bit Z80",
      memoire: "32 Kbyte + 96 Kbyte VRAM (intégré CPU), 256 Kbyte WRAM (externe au CPU)",
      affichage: "Écran couleur LCD, taille 44 x 39mm, résolution 160x140, 32 768 couleurs possibles, 56 couleurs simultanément",
      taille: "Largeur 75mm, épaisseur 27mm, longueur 133mm"
    },
    {
      title: "Gameboy Advance",
      annee: "2001",
      description:
      "C'est en 2001 que Nintendo a mis en circulation dans les mains des gamers les plus exigeants la nouvelle génération du jeu portable. Avec le Game Boy Advance c'est une qualité de jeu de console de salon que vous pouvez maintenant vous mettre dans la poche. C'est coloré, éclatant et le design très intuitif des contrôles est toujours un grand classique.",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2001_Gameboy_Advanced_large_support_carousel_image.png",
      cpu: "32-Bit ARM avec mémoire intégrée",
      memoire: "32 Kbyte + 96 Kbyte VRAM (dans CPU), 256 Kbyte WRAM (externe au CPU)",
      affichage: "2.9'' écran réflecteur TFT, résolution 240x160, taille d'écran 40,8 mm x 61,2 mm, 32 768 couleurs possibles, 511 couleurs simultanément en mode personnage, 32 768 couleurs simultanément en mode bitmap",
      taille: "Largeur 144,5 mm / Profondeur 24,5 mm / Hauteur 82 mm"
    }
  ];
};

const SegaReducer = () => {
  return [
    {
      title: "Sega SG 1000",
      annee: "1983",
      description:
        "La SG 1000 également connue sous le nom Sega Game 1000, est une console de jeux vidéo de troisième génération conçue et commercialisée par le constructeur japonais Sega Enterprises, Ltd. La console marque l'entrée de Sega dans le jeu vidéo à domicile et constitue une base pour la plus fructueuse Master System. Dévoilée en 1983, la SG-1000 sort le même jour que la Famicom de Nintendo au Japon. Elle est mise sur le marché sous plusieurs formes, comprenant l'ordinateur SC-3000 et la version redessinée SG-1000 II lancée en 1984.",
      url: "http://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sega_SG-1000.jpg/220px-Sega_SG-1000.jpg"
    },
  ];
};

const selectedConsoleReducer = (selectedConsole = null, action) => {
  if (action.type === "CONSOLE_SELECTED") {
    return action.payload;
  }
  return selectedConsole;
};


const selectedConsoleSegaReducer = (selectedConsoleSega = null, action) => {
  if (action.type === "CONSOLE_SELECTED_SEGA") {
    return action.payload;
  }
  return selectedConsoleSega;
};

export default combineReducers({
  nintendo: NintendoReducer,
  sega: SegaReducer,
  selectedConsole: selectedConsoleReducer,
  selectedConsoleSega: selectedConsoleSegaReducer
});
