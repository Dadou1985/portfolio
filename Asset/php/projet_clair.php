<?php include('../connexion_php/index.php'); ?>

<!DOCTYPE html>
    <html>
        <head>
            <title>Projet</title>
			<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            <link href="../css/projet_clair.css" type="text/css" rel="stylesheet" />
            <script src="../js/projet_clair.js"></script>
        </head>
        <body>
            <section id="page" class="d-flex justify-content-flex-start flex-column align-items-center">
                <video autoplay muted loop id="myVideo">
                    <source src="../img/hitch4.mp4" type="video/mp4">
                </video>
                <h1>Life Style</h1>
                <div id="message">
                    <p>#1000projetspour1vie</p>
                    <p><a href="#" id="activ" class="message-activ message-activhov">Mindset</a></p>
                    <p id="details" class="switch details_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente dolores recusandae a eligendi repellat nemo quaerat saepe ad non optio quibusdam corrupti ratione iste assumenda asperiores omnis, fugit vel!</p>
                    <p><a href="#" id="activ2" class="message-activ message-activhov">Passions</a></p>
                    <p id="details2" class="switch details_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente dolores recusandae a eligendi repellat nemo quaerat saepe ad non optio quibusdam corrupti ratione iste assumenda asperiores omnis, fugit vel!</p>
                    <p><a href="#" id="activ3" class="message-activ message-activhov">Motto</a></p>
                    <p id="details3" class="switch details_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente dolores recusandae a eligendi repellat nemo quaerat saepe ad non optio quibusdam corrupti ratione iste assumenda asperiores omnis, fugit vel!</p>
                    <p><a href="accueil_clair.php" id="accueil" class="message-lien">Accueil</a></p>
                    <p><a href="skillz_clair.php" id="Skillz" class="message-lien">Competences</a></p>
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
                    <div id="bande" class="d-flex flex-row justify-content-start">
                        <a href="#"><img src="../img/facebook.png" alt="" class="message-logo"></a>
                        <a href="#"><img src="../img/insta.png" alt="" class="message-logo"></a>
                        <a href="#"><img src="../img/twitter.png" alt="" class="message-logo"></a> 
                    </div>
                    <img src="../img/exit.svg" alt="" id="close">
                </div>
                <video autoplay muted loop id="light-screen">
                    <source src="../img/hitch.mp4" type="video/mp4">
                </video>
                <video autoplay muted loop id="tv">
                    <source src="../img/snow.mp4" type="video/mp4">
                </video>
                <img src="../img/hamburger.png" alt="" id="hamburger">
                <img src="../img/cyberg3.png" alt="" id="cyberg">
                <img src="../img/cyberg_fluo.png" alt="" id="blackCyberg">
            </section>
        </body>
    </html>