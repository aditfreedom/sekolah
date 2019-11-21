<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Guru | Sekolah Pintar</title>
    <link rel="stylesheet" href="css/tambahguru.css"/>
    <script src="js/jquery-3.4.1.min.js"></script>
</head>
<body>
    <p class="title">Registrasi Akun Guru Baru</p>
    <form action="" method="post" >
    <table class="formregis" >
        <tr>
            <td><label>Nama</label><br>
            <input type="text" name="nama"></td>
            <td><label>Tempat Lahir</label><br>
            <input type="text" name="tempatlahir"></td></td>
        </tr>
        <tr>
            <td><label>NIP</label><br>
            <input type="text" name="nip"></td>
            <td><label>Tanggal Lahir</label><br>
            <input type="date" name="tanggallahir"></td>
        </tr>
        <tr>
            <td><label>PIN</label><br>
            <input type="text" name="pin"></td>
            <td><label>E-Mail</label><br>
            <input type="text" name="email"></td></td>
        </tr>
        <tr>
            <td><label>Jenis Pegawai</label><br>
            <select name="jenispegawai">
                <option value="guru">Guru</option>
                <option value="siswa">Siswa</option>
                <option value="admin">Admin</option>
            </select></td>
            <td><label>Foto</label><br>
            <input type="file" name="foto"></td></td>
        </tr>
        <tr>
            <td><button type="submit" name="submit" id="submit">Daftar</button></td>
        </tr>
    </table>
    </form>
    <script src="js/tambahguru.js"></script>
</body>
</html>