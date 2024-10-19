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
    <title>Downlode Instagram viedos</title>
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
    <script src="script.js">var Instagram = document.querySelector(".Instagram");
var hiddn = document.querySelector("hiddn");
var type = document.querySelector("type");

function direct (){
    if (Instagram.value !=""){
        const options = {
            method: 'GET',headers:{
                'X-RapidAPI-Key':'2b929025ddmshd3302ab633a818cp1ab4cdjsne14ca95e2a8d',
                'X-RapidAPI-Host': 'Instagram-downloader-download-Instagram-videos-stories.p.rapidapi.com'
            }
        };
        var url = 'https://instahram-downloader-download-instagram-videos-stories.p.rapidapi.com/index?url=' +instagram.value;
        fetch(url,options).then((Response) =>{
            return Response.json();
        }).then((data) =>{
            console.log(data);
            hiddn.classList.add('active');
            document.querySelector('.form-control').value =data.media;
            document.querySelector('.type').value = data.type;
            switch(type.value){
                case "post-video":
                document.querySelector('.ext').value = "mp4";
                break;
                case "story-video":
                document.querySelector('.ext').value = "mp4";
                break
                case "post-image":
                document.querySelector('.ext').value = "jpg";
                break
                case "story-image":
                document.querySelector('.ext').value = "jpg";
                break
            }
        }).catch(err => console.error(err));
    }
    else {
        alert('Enter your Instagram url');
    }
}
</script>
</body>
</html>
