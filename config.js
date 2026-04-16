const Config = {
  // --- PARAMÈTRES GÉNERAUX ---
  ServerName: "MD STUDIO",
  Subtitle: "LA VILLE DE DEMAIN VOUS ATTEND",
  AccentColor: "#00f2fe", // Couleur principale (Boutons, barre de chargement)

  // --- MÉDIAS (Mets tes fichiers dans le dossier 'assets') ---
  Background: "assets/fond.jpg",
  Logo: "assets/logo.png",
  Music: "assets/music.mp3",
  MusicVolume: 0.1,

  // --- LIEN EXTERNE ---
  WebsiteURL: "https://ton-site-web.com", // Le lien de ton site (ou Discord)

  // --- L'ÉQUIPE (STAFF) ---
  // Ajoute autant de membres que tu veux.
  Staff: [
    {
      name: "Multi",
      role: "Fondateur",
      image: "assets/staff1.jpg",
      color: "#fa0202",
    },
    {
      name: "Developpement",
      role: "Gérant",
      image: "assets/LOGO2.png",
      color: "#ffa502",
    },
    {
      name: "MD STUDIO",
      role: "Développeur",
      image: "assets/LOGO1.png",
      color: "#2ed573",
    },
  ],

  // --- LES RÈGLES (Courtes et percutantes) ---
  Rules: [
    "Le Freekill, Carkill et Metagaming sont strictement interdits.",
    "Respectez le Pain RP et la règle de la Nouvelle Vie (NLR).",
    "Le HRP vocal est interdit en jeu. Utilisez les tickets Discord.",
    "Restez courtois et respectueux avec tous les joueurs.",
  ],

  // --- LES TOUCHES (Pour aider les nouveaux) ---
  Controls: [
    { key: "F2", action: "Ouvrir l'inventaire" },
    { key: "F3", action: "Menu Animations" },
    { key: "F5", action: "Menu Téléphone" },
    { key: "E", action: "Interagir / Parler" },
    { key: "T", action: "Ouvrir le Tchat" },
    { key: "K", action: "Ceinture de sécurité" },
  ],
};
