function windowResize() {
    var w = window.innerWidth;
    if(w < 1210){
        document.getElementById("menu").setAttribute("style","visibility: hidden");
        document.getElementById("mobile-menu").setAttribute("style","height: 75px; position: fixed; line-height: 75px; top: 0; right: 5%;visibility: visible; color: #07569a; font-size: x-large;");
    }else{
        document.getElementById("menu").setAttribute("style","visibility: visible; float: right;");
        document.getElementById("mobile-menu").setAttribute("style","height: 75px; position: fixed; line-height: 75px; top: 0; right: 5%;visibility: hidden; color: #07569a;  font-size: x-large;");
    }
    if(w < 400){
        document.getElementById("menu_logo").setAttribute("style","color: #0074d9;font-size: x-large; margin-left: 0;");
    }else{
        document.getElementById("menu_logo").setAttribute("style","color: #0074d9;font-size: x-large; margin-left: 60px;");
    }
}
function showSubMenu(self,state) {
    if(state){
        self.nextElementSibling.setAttribute("style","width: 160%;padding: 5px 0;position: absolute;top: 100%;left: 0;z-index: 1;opacity: 1;transition: opacity linear 0.15s;box-shadow: 0 2px 3px rgba(0,0,0,0.2);background: #2e2728;");
    }else{
        self.lastElementChild.setAttribute("style","display: none; width: 160%;padding: 5px 0;position: absolute;top: 100%;left: 0;z-index: -1000;opacity: 0;transition: opacity linear 0.15s;box-shadow: 0 2px 3px rgba(0,0,0,0.2);background: #2e2728;");
    }
}
function setModalService(serviceName) {
    document.getElementById("room-type").innerHTML = serviceName;
}
$( document ).ready(function () {
    $('#mainGallery').justifiedGallery({
        rowHeight : 160,
        lastRow : 'justify',
        margins : 0
    });
    $('#kidsGallery').justifiedGallery({
        rowHeight : 120,
        lastRow : 'justify',
        margins : 0
    });
    $('#excursionsGallery').justifiedGallery({
        rowHeight : 120,
        lastRow : 'justify',
        margins : 0
    });
    $('#lastochkaGallery').justifiedGallery({
        rowHeight : 120,
        lastRow : 'justify',
        margins : 0
    });
    $('#seashoreGallery').justifiedGallery({
        rowHeight : 120,
        lastRow : 'justify',
        margins : 0
    });
    $('#biruchiyGallery').justifiedGallery({
        rowHeight : 120,
        lastRow : 'justify',
        margins : 0
    });
});

function fillGallery(gallery,count,path) {
    for(i = 1; i <= count; i++){
        $( gallery ).appendChild("<a href='img/gallery/"+ path + "/" + i +".jpg'> <img src='img/gallery/"+ path + "/" + i +".jpg'/> </a>");
    }
}