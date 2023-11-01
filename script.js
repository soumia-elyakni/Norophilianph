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
