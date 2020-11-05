function openNav() {
    document.getElementById("mySidenav").style.width="250px";
}
   
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function loadHTML(html) {
    document.querySelector(".container").innerHTML=html;
}
function load(html) {
    $ajaxUtils.sendGetRequest(html,loadHTML,false);
}