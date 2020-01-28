<?php
      try{
        $bdd = new PDO('mysql:host=localhost;dbname=contact_portfolio', 'david', 'antivirus');
      }
      catch (Exception $e)
      {
        die('Erreur : ' . $e->getMessage());
      }

      if(isset($_POST['sub'])){
        if(!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['mail']) && !empty($_POST['message'])){
            $nom = ($_POST['nom']);
            $prenom = ($_POST['prenom']);
            $mail = ($_POST['mail']);
            $message = ($_POST['message']);

            $insertion = $bdd->prepare("INSERT INTO contact SET nom = :nom, prenom = :prenom, mail = :mail, message = :message, date = NOW()");
            $insertion->execute(array('nom' => $nom, 'prenom' => $prenom, 'mail' => $mail, 'message' => $message));
        }
        
      }
?>