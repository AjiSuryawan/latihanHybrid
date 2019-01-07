<?php
include 'koneksi.php';
$email= $_GET['email'];
$password= $_GET['password'];
$sql = "SELECT * FROM tb_user where email='$email' and password='$password'";
$result_sql = mysqli_query($koneksi,$sql);
$cek = mysqli_num_rows($result_sql);
if($cek > 0){
    echo "Berhasil masuk";
}else{
    echo "Gagal masuk";
}
?>