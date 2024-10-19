var Instagram = document.querySelector(".Instagram");
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
// var url = document.querySelector('.form-control');
// var ext = document.querySelector('.ext');

// function download() {
//     const anchor = download.creatElement("a");
//     anchor.href = url.value;
//     anchor.download ='MWC.'+ ext.value;
//     document.body.appendChild(anchor);
//     anchor.click();
//     document.body.removeChild(anchor);
// }