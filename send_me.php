<?php

    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);

    $to = "kevynhdasilva@proton.me";
    $assunto = addslashes($_POST['assunto']);

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email.;

    $cabeca = "From hsskevyn@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($to,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o e-mail!");
    }

?>