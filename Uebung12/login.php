<?php

$lines = file('./raw_passwd.csv');
$exists = false;

foreach ($lines as $line_num => $line) {
    list($user, $passwd) = explode(",", $line);

    if(trim($user) == trim($_POST['account'])) {
        $exists = true;
        if(trim($_POST['password']) == trim($passwd)) {
            echo "<script>alert('Sie sind erolfgreich angemeldet')</script>";
        } else {
            echo "<script>alert('Passwort ist falsch.')</script>";
        }
    }
}
if(!$exists) {
    echo "<script>alert('User existiert nicht.')</script>";
}


