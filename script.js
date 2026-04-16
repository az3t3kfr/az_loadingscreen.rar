document.addEventListener("DOMContentLoaded", () => {
  // 1. APPLICATION DE LA CONFIGURATION
  if (typeof Config !== "undefined") {
    document.documentElement.style.setProperty(
      "--accent-color",
      Config.AccentColor,
    );

    document.getElementById("background").style.backgroundImage =
      `url('${Config.Background}')`;
    document.getElementById("logo").src = Config.Logo;
    document.getElementById("server-name").innerText = Config.ServerName;
    document.getElementById("server-subtitle").innerText = Config.Subtitle;
    document.getElementById("progress-bar").style.backgroundColor =
      Config.AccentColor;

    const audio = document.getElementById("audio-player");
    if (audio) {
      audio.src = Config.Music;
      audio.volume = Config.MusicVolume;
    }
    // BOUTON SITE INTERNET
    if (Config.WebsiteURL && Config.WebsiteURL !== "") {
      document.getElementById("website-container").style.display = "block";

      document.getElementById("website-btn").addEventListener("click", () => {
        try {
          // C'est cette commande qui force l'ouverture sur le navigateur du PC
          window.invokeNative("openUrl", Config.WebsiteURL);
        } catch (e) {
          // Sécurité si tu testes l'écran sur Google Chrome directement au lieu de FiveM
          window.open(Config.WebsiteURL, "_blank");
        }
      });
    }

    // GÉNÉRATION DU STAFF
    const staffContainer = document.getElementById("staff-container");
    Config.Staff.forEach((member) => {
      staffContainer.innerHTML += `
                <div class="staff-card" style="border-bottom-color: ${member.color}">
                    <img src="${member.image}" alt="${member.name}" onerror="this.src='assets/logo.png'">
                    <h3>${member.name}</h3>
                    <p style="color: ${member.color}">${member.role}</p>
                </div>
            `;
    });

    // GÉNÉRATION DES RÈGLES
    const rulesContainer = document.getElementById("rules-container");
    Config.Rules.forEach((rule) => {
      rulesContainer.innerHTML += `<li>${rule}</li>`;
    });

    // GÉNÉRATION DES TOUCHES
    const controlsContainer = document.getElementById("controls-container");
    Config.Controls.forEach((control) => {
      controlsContainer.innerHTML += `
                <div class="control-item">
                    <div class="control-key" style="background-color: ${Config.AccentColor}">${control.key}</div>
                    <div class="control-action">${control.action}</div>
                </div>
            `;
    });
  }

  // 2. GESTION DES ONGLETS (Interactivité Souris)
  const navButtons = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Retirer l'état actif de tout
      navButtons.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Activer le bouton cliqué et son contenu
      btn.classList.add("active");
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // 3. BARRE DE CHARGEMENT FIVEM
  window.addEventListener("message", function (e) {
    if (e.data.eventName === "loadProgress") {
      let progress = Math.round(e.data.loadFraction * 100);
      document.getElementById("progress-bar").style.width = progress + "%";
      document.getElementById("progress-percent").innerText = progress + "%";
    }
  });
});
