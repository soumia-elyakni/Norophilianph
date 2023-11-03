document.addEventListener("DOMContentLoaded", function() {
    // Tableau d'URLs d'images de fond
    const backgroundImages = [
        'url("logo/Extra Cozy Hygge Box Hug in Box Gift Set for Him Birthday - Etsy.jpeg")',
        'url("logo/Babytiful packaging.jpeg")',
        'url("logo/ba01f79c-a059-40e1-8448-01ed7d429f3d.jpeg")',
        'url("logo/b7157a2b-19c3-46be-86c2-dbdad21ddb8d.jpeg")',
        'url("logo/ae02d47e4ecab4496325281c25fc8293.jpg")',
        'url("logo/Insta @bllv7_.jfif")',
        'url("logo/822a4a89-9ad1-4f55-b8fa-ddf82fecf804.jpeg")',
        'url("logo/6ff5ed28-90b1-4b12-af99-a76a652c730a.jpeg")'
        // Ajoutez autant d'URLs d'images que vous le souhaitez
    ];

    // Générer un indice aléatoire pour choisir une image de fond
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);

    // Appliquer l'image de fond aléatoire au corps (body)
    document.body.style.backgroundImage = backgroundImages[randomIndex];
});

document.addEventListener("DOMContentLoaded", function () {
    // Chargement des traductions depuis le fichier JSON
    fetch("lang.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Le chargement des traductions a échoué");
        }
        return response.json();
      })
      .then(translations => {
        // Récupérez la boîte de sélection de langue
        const languageSelect = document.getElementById("languageSelect");
  
        // Écoutez les changements de sélection de langue
        languageSelect.addEventListener("change", function () {
          const selectedLang = languageSelect.value;
          updatePageLanguage(translations, selectedLang);
        });
  
        // Fonction pour mettre à jour la langue de la page
        function updatePageLanguage(translations, selectedLang) {
          document.getElementById("greeting").textContent = translations[selectedLang]["greeting"];
          document.getElementById("description").textContent = translations[selectedLang]["description"];
        }
  
        // Sélectionnez la langue par défaut en fonction de la boîte de sélection
        const userLang = languageSelect.value;
        updatePageLanguage(translations, userLang);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des traductions : " + error);
        document.getElementById("greeting").textContent = "Erreur lors du chargement des traductions.";
        document.getElementById("description").textContent = "Veuillez vérifier le fichier 'lang.json'.";
      });
  });
