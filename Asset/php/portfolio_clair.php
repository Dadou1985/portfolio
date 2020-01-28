<?php include('../connexion_php/index.php'); ?>

<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Portfolio</title>
			<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            <link href="../css/portfolio_clair.css" type="text/css" rel="stylesheet" />
            <script src="../js/portfolio_clair.js"></script>
        </head>
        <body>
            <section id="page" class="d-flex justify-content-flex-start flex-column align-items-center">
                <video autoplay muted loop id="myVideo">
                    <source src="../img/cam.mp4" type="video/mp4">
                </video>
                <h1>Portfolio</h1>
                    <a href="#"><img src="../img/back.jpg" alt="" id="back" class="picture change"></a>
                    <a href="#"><img src="../img/back2.jpg" alt="" id="back2" class="picture change"></a>
                    <a href="#"><img src="../img/back3.jpg" alt="" id="back3" class="picture change"></a>
                <div id="message">
                    <p id="zapStory">Changez de chaîne</p><br>
                    <p><a href="accueil_clair.php" id="accueil" class="message-lien">Accueil</a></p>
                    <p><a href="skillz_clair.php" id="skillz" class="message-lien">Competences</a></p>
                    <p><a href="projet_clair.php" id="pro" class="message-lien">Projet</a></p>
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
                    <div id="bande" class="d-flex flex-row justify-content-start">
                        <a href="#"><img src="../img/facebook.png" alt="" class="message-logo"></a>
                        <a href="#"><img src="../img/insta.png" alt="" class="message-logo"></a>
                        <a href="#"><img src="../img/twitter.png" alt="" class="message-logo"></a> 
                    </div>
                    <img src="../img/exit.svg" alt="" id="close">
                </div>
                <video autoplay muted loop id="light-screen">
                    <source src="../img/snow.mp4" type="video/mp4">
                </video>
                <img src="../img/television.png" alt="" id="tv">
                <img src="../img/regard_croisé2_blue.png" alt="" id="crossSight">
                <img src="../img/television_negatif.png" alt="" id="blackTv">
                <img src="../img/hamburger.png" alt="" id="hamburger">
                <div id="button"></div>
            </section>
        </body>
    </html>