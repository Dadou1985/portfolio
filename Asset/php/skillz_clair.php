<?php include('../connexion_php/index.php'); ?>

<!DOCTYPE html>
    <html>
        <head>
			<title>Compétences</title>
			<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            <link href="../css/skillz_clair.css" type="text/css" rel="stylesheet" />
            <script src="../js/skillz_clair.js"></script>
        </head>
        <body>
            <section id="page" class="d-flex justify-content-flex-start flex-column align-items-center">
                <h1>Competences</h1>
                <a href="#"><img src="../img/rubix skillz_3D.png" alt="" id="rubix"></a>
                <img src="../img/rubix.png" alt="" id="rubix2">
                <div id="message">
                    <p class="appel" >Survolez le Rubix Skillz...</p><br>
                    <p id="details" class="change">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente dolores recusandae a eligendi repellat nemo quaerat saepe ad non optio quibusdam corrupti ratione iste assumenda asperiores omnis, fugit vel!</p>
                    <p><a href="accueil_clair.php" id="accueil" class="message-lien">Accueil</a></p>
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
                    <div id="bande" class="d-flex flex-row justify-content-start">
                        <a href="#"><img src="../img/facebook.png" alt="" class="message-logo"></a>
                        <a href="#"><img src="../img/insta.png" alt="" class="message-logo"></a>
                        <a href="#"><img src="../img/twitter.png" alt="" class="message-logo"></a> 
                    </div>
                    <img src="../img/exit.svg" alt="" id="close">
                </div>
                <video autoplay muted loop id="myVideo">
                    <source src="../img/futur2.mp4" type="video/mp4">
                </video>
                <video autoplay muted loop id="energy">
                    <source src="../img/energy.mp4" type="video/mp4">
                </video>
                <img src="../img/don.png" alt="" id="gift">
                <img src="../img/gift2.png" alt="" id="gift2">
                <img src="../img/hamburger.png" alt="" id="hamburger">
                <div id="skill_slide">
                    <img src="" alt="" id="blaze">
                    <h3 id="denomination"></h3>
                    <p id="info"></p>
                </div>
                <div id="sql" class="cube"></div>
                <div id="css" class="cube"></div>
                <div id="ajax" class="cube"></div>
                <div id="html" class="cube"></div>
                <div id="js" class="cube"></div>
                <div id="php" class="cube"></div>
                <div id="git" class="cube"></div>
                <div id="jquery" class="cube"></div>
                <div id="bootstrap" class="cube"></div>
                <div id="photoshop" class="cube"></div>
                <div id="agile" class="cube"></div>
                <div id="opquast" class="cube"></div>
                <div id="trust" class="cube"></div>
                <div id="créativité" class="cube"></div>
                <div id="ambition" class="cube"></div>
                <div id="communication" class="cube"></div>
                <div id="avenant" class="cube"></div>
                <div id="time_management" class="cube"></div>
                <div id="trouble_solver" class="cube"></div>
                <div id="stress_master" class="cube"></div>
                <div id="vision" class="cube"></div>
                <div id="motivation" class="cube"></div>
                <div id="proposition_joe" class="cube"></div>
                <div id="collectif" class="cube"></div>
                <div id="bitcoin" class="cube"></div>
                <div id="star" class="cube"></div>
                <div id="lannister" class="cube"></div>
            </section>
        </body>
    </html>