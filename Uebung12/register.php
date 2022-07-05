<?PHP

if (isset($_POST['account']) && isset($_POST['password'])) {

    $account = $_POST['account'];
    $passwd = $_POST['password'];

    $file = './raw_passwd.csv';
    $new_line = $account . ',' . $passwd . "\n";

    if(file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) {
        echo "<script>alert('Registered successfully!')</script>";
    }
}

