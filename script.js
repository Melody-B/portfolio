particlesJS("particles-js", {"particles":{"number":{"value":240,"density":{"enable":true,"value_area":1100}},"color":{"value":"#fff9fc"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":119.88011988011988,"size":0,"duration":2,"opacity":0.6313686313686314,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

window.addEventListener("mousemove",function(e){
    document.getElementById("cursor").style.left = e.pageX + "px";
    document.getElementById("cursor").style.top = e.pageY + "px";
})

var links = document.getElementsByClassName("lien-cursor");

Array.prototype.forEach.call(links, function(e) {
    e.addEventListener("mouseover", () => {
        document.getElementById("cursor").classList.add("lien");
    });
    e.addEventListener("mouseleave", () => {
        document.getElementById("cursor").classList.remove("lien");
    })
});
