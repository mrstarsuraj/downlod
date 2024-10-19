<?php
    if(isset($_POST["submit"])){
        $file_url = $_POST["url"];
        $file_name = basename($file_url);
        $file_ext = $_POST["ext"];
        header("cache-control: public");
        header("content-Description: file Transfet");
        header("content-type: application/$file_ext");
        header("content-transfer-Encoding: binary");
        readfile($file_url);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styel.css">
    <title>Downlode</title>
</head>
<body>
    <div class="form">
        <h1>Instagram srp downloader</h1>
        <input type="text" class="link Instagram" placeholder="Enter Your Instagram Url..."/>
        <button class="Get" onclick="direct()">Get</button>
        <div class="hidden">
            <form action="" method="post" class="form">
                <input type="text" class="link type"name="type" hidden>
                <input type="text" class="link ext"name="ext" hidden>
                <div>
                    <input type="url" name="url" id="url" class="link form-control" placeholder="enter your URL" 
                    required hidden>
                </div>
                <button type="submit" name="submit" class="Get">Download</button>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>