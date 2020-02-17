<?php include('../connexion_php/index.php'); ?>

<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
			<title>Accueil</title>
			<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            <link href="../css/accueil_clair.css" type="text/css" rel="stylesheet" />
            <script src="../js/accueil_clair.js"></script>
        </head>
        <body>
            <section id="page" class="d-flex justify-content-center flex-column align-items-center">
                <h1 id="titre-haut" class="titre-commun">Welcome</h1>
                <h2 id="titre-milieu" class="titre-commun">to the</h2>
                <h1 id="titre-bas" class="titre-commun">Future</h1>
                <div id="message" class="flex-column show">
                    <p class="intro"> Je suis David SIMBA</p>
                    <p><a href="#" id="activ">Suite...</a></p><br>
                    <p id="pitch" class="switch">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, provident doloremque, sit consequatur quisquam illo, nisi placeat temporibus iusto modi repellendus voluptatibus sed! Aspernatur velit adipisci atque dolore a maiores?</p>
                    <p><a href="skillz_clair.php" id="skillz" class="message-lien">Compétences</a></p>
                    <p><a href="projet_clair.php" id="pro" class="message-lien">Projet</a></p>
                    <p><a href="portfolio_clair.php" id="port" class="message-lien">Portfolio</a></p>
                    <p><a href="#" id="contact" class="message-lien">Contact</a></p>
                    <div id="correspondance" class="switch">
                        <form action="#" method="POST">
                            <p>Pour tout contact:</p>
                            <input type="text" placeholder="Nom" name="nom">
                            <input type="text" placeholder="Prenom" name="prenom"><br>
                            <input type="text" placeholder="E-mail" name="mail">
                            <textarea cols="30" rows="10" id="case" placeholder="Ecrivez-nous ici" name="message"></textarea>
                            <button type="submit" class="btn btn-dark" name="sub">Envoyer</button>
                        </form>
                        <p>ou suivez-nous sur les reseaux sociaux</p>
                    </div>
                    <div id="bande" class="flex-row justify-content-start">
                        <a href="#"><img src="../img/facebook.png" alt="" class="message-logo"></a>
                        <a href="#"><img src="../img/insta.png" alt="" class="message-logo"></a>
                        <a href="#"><img src="../img/twitter.png" alt="" class="message-logo"></a> 
                    </div>
                    <img src="../img/exit.svg" alt="" id="close">
                </div>
                <video autoplay muted loop id="myVideo">
                    <source src="../img/futur3.mp4" type="video/mp4">
                </video>
                <video autoplay muted loop id="data-rain">
                    <source src="../img/snow3.mp4" type="video/mp4">
                </video>
                <img src="../img/hybrid.png" alt="" id="pc">
                <img src="../img/statue9.png" alt="" id="statue">
                <img src="../img/hamburger.png" alt="" id="hamburger">
            </section>
        </body>
    </html>