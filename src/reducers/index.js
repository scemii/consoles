import { combineReducers } from "redux";


const NintendoReducer = () => {
  return [
    {
      title: "Nintendo Entertainment System",
      annee: "1986",
      description:
        "Ce qui était au départ le Famicom (Family Computer) au Japon finit par devenir la machine qui sauva l'industrie du jeu vidéo. Après une chute énorme du marché des jeux à l'ouest, le Nintendo Entertainment System a démenti les experts en se vendant par millions. Les joueurs se ruèrent pour voir et pour jouer à des classiques comme Super Mario Bros, The Legend of Zelda et Excitebike, autant de titres qui étaient déjà tellement en avance sur ceux des autres consoles de salon.",
      url:
        "https://cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1986_Nintendo_Entertainment_System_large_support_carousel_image.png"
    },
    {
      title: "Nintendo Game Boy",
      annee: "1990",
      description:
        "Tout le monde adore le Game Boy. Avec une si grande puissance contenue dans un si petit boîtier, cette petite console révolutionna le jeu vidéo à sa sortie au Japon en 1989. Depuis lors, cette console de poche a été vendue à plus de 100 millions d'exemplaires, offrant aux joueurs du monde entier la possibilité de jouer à leurs jeux favoris - comme Tetris, Super Mario et Pokémon - quel que soit l'endroit où ils se trouvent.",
      url:
        "https://cdn03.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_1990-Gameboy_large_support_carousel_image.png",

      cpu: "Personnalisé 8 - Bit CMOS, 2.2Mhz",
      memoire: "64-Kbit RAM statique"
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
