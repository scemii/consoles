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
      taille :"255mm x 85mm x 202mm",
      url2: "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo Game Boy",
      annee: "1990",
      description:
        "Tout le monde adore le Game Boy. Avec une si grande puissance contenue dans un si petit boîtier, cette petite console révolutionna le jeu vidéo à sa sortie au Japon en 1989. Depuis lors, cette console de poche a été vendue à plus de 100 millions d'exemplaires, offrant aux joueurs du monde entier la possibilité de jouer à leurs jeux favoris - comme Tetris, Super Mario et Pokémon - quel que soit l'endroit où ils se trouvent.",
      url:
        "https://cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1990-Gameboy_large_support_carousel_image.png",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
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
      url2: 
        "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
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
      taille: "Longueur 260mm, largeur 190mm, hauteur 73mm",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
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
      taille: "Largeur 75mm, épaisseur 27mm, longueur 133mm",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "GameBoy Advance",
      annee: "2001",
      description:
      "C'est en 2001 que Nintendo a mis en circulation dans les mains des gamers les plus exigeants la nouvelle génération du jeu portable. Avec le Game Boy Advance c'est une qualité de jeu de console de salon que vous pouvez maintenant vous mettre dans la poche. C'est coloré, éclatant et le design très intuitif des contrôles est toujours un grand classique.",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2001_Gameboy_Advanced_large_support_carousel_image.png",
      cpu: "32-Bit ARM avec mémoire intégrée",
      memoire: "32 Kbyte + 96 Kbyte VRAM (dans CPU), 256 Kbyte WRAM (externe au CPU)",
      affichage: "2.9'' écran réflecteur TFT, résolution 240x160, taille d'écran 40,8 mm x 61,2 mm, 32 768 couleurs possibles, 511 couleurs simultanément en mode personnage, 32 768 couleurs simultanément en mode bitmap",
      taille: "Largeur 144,5 mm / Profondeur 24,5 mm / Hauteur 82 mm",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo GameCube",
      annee: "2002",
      description:
      "Petit, mignon et désirable - c'est le Nintendo GameCube. Disponible en violet, noir et en éditions spéciales de différentes couleurs, le design unique du Nintendo GameCube et sa forme compacte (11.4cm x 15cm x 16cm) démontrent bien la volonté de Nintendo de perpétuer l'originalité et l'innovation dans le monde des jeux vidéo. Et avec toute la puissance qu'il y a sous le capot pour un si petit prix, Nintendo GameCube est un investissement plus que rentable.",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2002_Nintendo_Gamecube_large_support_carousel_image.png",
      cpu: "IBM Power PC modifié 485 mhz",
      memoire: "24 Mo de SRAM type MoSys (accès en 1 cycle, temps d'accès moyen de 10 ns)",
      affichage: "Flipper personnalisé ATI/Nintendo",
      taille: "11.4cm (H) x 15cm (L) x 16cm (P)",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "GameBoy Advance SP",
      annee: "2002",
      description:
      "On a gardé tout ce que vous adorez du Game Boy Advance, rêvé toute une série de nouvelles spécificités (nouvel écran éclairé intégré rabattable, nouvelle batterie rechargeable) et réussi le tour de force de mettre le tout dans la portable au style le plus épuré que vous ayez jamais vu. Désormais, à vous tous les jeux Game Boy et Game Boy Advance sur une console ''first class'' !",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2003_gameboy_color_large_support_carousel_image.png",
      cpu: "32 bits ARM avec mémoire intégrée",
      memoire: "32 Ko + 96 Ko VRAM (interne CPU), 256 Ko WRAM (externe CPU)",
      affichage: "Écran diffusant 2,9'' TFT avec éclairage intégré, résolution 240 x 160, taille de l'écran 40,8 mm x 61,2 mm, 32768 couleurs possibles, 511 couleurs simultanées en mode personnage, 32768 images simultanées en mode image par points.",
      taille: "Largeur 82 mm / Epaisseur 24,3 mm / Longueur 84,6 mm",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo DS",
      annee: "2005",
      description:
      "Avec deux écrans LCD rétro-éclairés d'une très grande définition, la Nintendo DS Lite offre une nouvelle approche du jeu. Les possibilités sont illimitées : l'un des écrans peut servir à montrer l'action principale tandis qu'un autre peut être utilisé pour montrer les cartes, inventaires, ou point de vue secondaire, mais les deux écrans peuvent être utilisés simultanément pour montrer les immenses boss !",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2005_Nintendo_DS_large_support_carousel_image.png",
      cpu: "na",
      memoire: "na",
      affichage: "na",
      taille: "na",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "GameBoy Micro",
      annee: "2005",
      description:
      "Nous avons repris les meilleurs éléments du Game Boy Advance et les avons miniaturisés. Avec un écran doté d´un éclairage parfait, quatre designs de console très stylés et plus de 500 jeux à disposition. Game Boy Micro apporte une puissance ludique qui tient dans la poche !",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2005_gameboy_micro_large_support_carousel_image.png",
      cpu: "32 bit RISC-CPU + 8 bit CISC-CPU",
      memoire: "2 Ko WRAM + 96 Ko VRAM (interne CPU), 256 Ko WRAM (externe CPU)",
      affichage: "Taille : 2 pouces (28,32 mm x 42,48 mm) / Résolution : 240 x 160 Pixels / Fréquence d'affichage : 60 Hz",
      taille: "101 x 50 x 17,2 mm",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo DS Lite",
      annee: "2006",
      description:
      "Avec deux écrans LCD rétro-éclairés d'une très grande définition, la Nintendo DS Lite offre une nouvelle approche du jeu. Les possibilités sont illimitées : l'un des écrans peut servir à montrer l'action principale tandis qu'un autre peut être utilisé pour montrer les cartes, inventaires, ou point de vue secondaire, mais les deux écrans peuvent être utilisés simultanément pour montrer les immenses boss !",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2006_DS_Lite_large_support_carousel_image.png",
      cpu: "na",
      memoire: "na",
      affichage: "na",
      taille: "na",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo Wii",
      annee: "2006",
      description:
      "La Wii est une console de jeux de salon sortie en 2006. Console de la septième génération, tout comme la Xbox 360 et la PlayStation 3 avec lesquelles elle est en rivalité, elle est la console de salon la plus vendue de sa génération et a comme particularité d'utiliser un accéléromètre capable de détecter la position, l'orientation et les mouvements dans l'espace de la manette.",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2006_Wii_large_support_carousel_image.png",
      cpu: "IBM Broadway 729Mhz 90 nm SOI",
      memoire: "une unique puce externe de 64 Mio de GDDR3 sur un bus 32 bit",
      affichage: "Chip graphique, nom de code Hollywood, développé par ATI",
      taille: "44 mm de large, 157 mm de haut et 215,4 mm de profondeur dans sa position verticale",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo DSi",
      annee: "2009",
      description:
      "Grâce à l'appareil photo Nintendo DSi et au studio son Nintendo DSi, vous pouvez désormais retoucher vos photos et écouter vos chansons et vos podcasts préférés partout où vous le souhaitez. Vous pouvez également visiter la boutique Nintendo DSi pour personnaliser votre console. Utilisez vos Nintendo DSi Points pour profiter de la gamme Nintendo DSiWare, une sélection de jeux et d'applications qui tirent parti des nouvelles fonctionnalités de la Nintendo DSi. La boutique Nintendo DSi accueille sans cesse de nouveaux produits : n'hésitez pas à revenir aussi souvent que vous le souhaitez !",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2009_DSi_large_support_carousel_image.png",
      cpu: "na",
      memoire: "na",
      affichage: "na",
      taille: "na",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo DSi XL",
      annee: "2010",
      description:
      "Appréhendez le monde à travers les yeux de votre Nintendo DSi ou Nintendo DSi XL grâce aux deux objectifs, intérieur et extérieur, de son appareil photo numérique intégré. La Nintendo DSi vous permet de prendre des photos et de les sauvegarder dans la mémoire interne de la console ou sur une carte SD. 11 filtres sont à votre disposition pour retoucher vos photos. Vous pouvez même créer votre propre journal photo et partager vos clichés favoris avec vos amis via la connexion sans fil !",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2010_DS_XL_large_support_carousel_image.png",
      cpu: "na",
      memoire: "na",
      affichage: "na",
      taille: "na",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo 3DS",
      annee: "2011",
      description:
      "La 3DS est une console portable de huitième génération développée par Nintendo, ayant pour particularité l'affichage en 3D auto-stéréoscopique (sans lunettes). La Nintendo 3DS succède à la Nintendo DS, et est rétrocompatible avec les logiciels de cette dernière. Elle est disponible au lancement sous deux coloris : Bleu Lagon et Noir Cosmos4. Sa concurrente principale est la PlayStation Vita de Sony.",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2011_Nintendo_3DS_large_support_carousel_image.png",
      cpu: "SOC (CTR)",
      memoire: "128 Mo de mémoire vive",
      affichage: "16m de couleurs, 800 × 240 pixels ",
      taille: "134 × 74 × 21 mm",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo 3DS XL",
      annee: "2012",
      description:
      "La 3DS XL est la version « grand format » de la Nintendo 3DS. Sa sortie a été annoncée lors du Nintendo Direct du 22 juin 2012. C'est en France à l'IDEF que la 3DS XL a pu être découverte pour la première fois, un mois tout juste avant sa sortie.",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2012_Nintendo_3DS_XL_large_support_carousel_image.png",
      cpu: "na",
      memoire: "na",
      affichage: "na",
      taille: "na",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo Wii-U",
      annee: "2012",
      description:
      "La Wii U est une console de jeu vidéo commercialisée par Nintendo, succédant à la Wii. Elle est sortie le 18 novembre 2012 en Amérique du Nord, le 30 novembre 2012 en Europe et le 8 décembre 2012 au Japon. Première console de jeu vidéo de huitième génération à sortir dotée d'une manette avec écran tactil, elle est en concurrence avec la PlayStation 4 et la Xbox One.",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2012_WiiU_black_large_support_carousel_image.png",
      cpu: "processeur tri-cœur IBM basé sur l'architecture IBM Power",
      memoire: "2Go",
      affichage: "AMD Radeon HD « Latte » ",
      taille: "17,5 × 26,8 × 4,6 cm",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
    },
    {
      title: "Nintendo Wii Mini",
      annee: "2013",
      description:
      "La Wii Mini est une variante compacte de la console de jeux vidéo Wii de Nintendo. Elle est annoncée le 27 novembre 2012 et commercialisée le 7 décembre 2012 au Canada et le 22 mars 2013 en Europe, au prix conseillé de 99 euros, soit le prix de sortie le moins cher pour une Wii.",
      url:"//cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2013_WiiMini_large_support_carousel_image.png",
      cpu: "na",
      memoire: "na",
      affichage: "na",
      taille: "na",
      url2: 
      "https://cdn.freebiesupply.com/logos/large/2x/nintendo-2-logo-png-transparent.png",
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
      url: "http://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sega_SG-1000.jpg/220px-Sega_SG-1000.jpg",
      url2: "https://upload.wikimedia.org/wikipedia/commons/4/41/SEGA_logo.png"
    },
  ];
};

const SonyReducer = () => {
  return [
    {
      title: "Sony Playstation",
      annee: "1994",
      description:
        "La PlayStation (プレイステーション) est une console de jeux vidéo de cinquième génération, produite par Sony Computer Entertainment à partir de 1994. La PlayStation originale fut la première machine de la gamme PlayStation, déclinée ensuite en PSone (une version plus petite et plus légère que l'originale)",
      url: "//upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/220px-PSX-Console-wController.png",
      url2: "http://pngimg.com/uploads/sony_playstation/sony_playstation_PNG17533.png"
    },
    {
      title: "Sony Playstation 2",
      annee: "2000",
      description:
        "La PlayStation 2 (PS2) est une console de sixième génération lancée en 2000. Elle connut un succès encore plus fulgurant que son aînée, avec plus de 150 millions d'unités vendues à travers le monde3, ce qui en fait la console de salon la plus vendue de l'histoire du jeu vidéo. La PlayStation 2 utilise le support DVD-ROM et fait office de lecteur de DVD. Réputée difficile à programmer, la PlayStation 2 propose pourtant une vaste ludothèque. Une version compacte de la PS2 est sortie en 2004.",
      url: "//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/SCPH-30000_vertical.jpg/150px-SCPH-30000_vertical.jpg",
      url2: "http://pngimg.com/uploads/sony_playstation/sony_playstation_PNG17533.png"
    },
    {
      title: "Sony Playstation 3",
      annee: "2007",
      description:
        "La PlayStation 3 (PS3) est une console de septième génération lancée en 2006 au Japon et en Amérique du Nord, puis en 2007 en Europe. Conçu comme un système de divertissement numérique, c'est le premier système à être équipé en série du lecteur haute définition Blu-ray, elle possède aussi un disque dur. Elle possède de nombreuses autres caractéristiques, telles que la possibilité de lire de multiples formats vidéo et musicaux et permet aussi une visualisation de photographies transférées au préalable. Elle est compatible avec les jeux PlayStation et pour le modèle 60 GB avec les jeux PlayStation 2. Elle propose un service en ligne, le PlayStation Network, plus étoffé que son aînée.",
      url: "//upload.wikimedia.org/wikipedia/commons/thumb/4/43/Playstation3vector.svg/150px-Playstation3vector.svg.png",
      url2: "http://pngimg.com/uploads/sony_playstation/sony_playstation_PNG17533.png"
    },
    {
      title: "Sony Playstation 4",
      annee: "2013",
      description:
        "La PlayStation 4 (PS4) est une console de huitième génération annoncée le 20 février 20138 et présentée à l'E3 20139. La console a été lancé le 15 novembre aux États-Unis et le 29 novembre en Europe10. Elle est conçue sur la base des générations PlayStation précédentes, proposant un véritable centre de divertissement numérique (Jeux/Blu-Ray/Films/3D/Musiques) toujours équipée d'un lecteur Blu-Ray et d'un disque dur. Contrairement à son aînée, elle est connue au près des développeurs comme la console la plus simple à programmer de sa génération. L'accent est misé sur la puissance et la fiabilité de la console ainsi que sur sa nouvelle manette, la DualShock 4, qui signe une réelle différence par rapport aux manettes des générations précédentes.",
      url: "//upload.wikimedia.org/wikipedia/commons/thumb/7/7e/PS4-Console-wDS4.jpg/220px-PS4-Console-wDS4.jpg",
      url2: "http://pngimg.com/uploads/sony_playstation/sony_playstation_PNG17533.png"
    },
  ];
};



const selectedConsoleReducer = (selectedConsole = null, action) => {
  if (action.type === "CONSOLE_SELECTED") {
    return action.payload;
  }
  return selectedConsole;
};

export default combineReducers({
  nintendo: NintendoReducer,
  sega: SegaReducer,
  sony: SonyReducer,
  selectedConsole: selectedConsoleReducer
});
