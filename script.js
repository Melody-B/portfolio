particlesJS("particles-js", { "particles": { "number": { "value": 114, "density": { "enable": true, "value_area": 789.1476416322727 } }, "color": { "value": "#b1b1b1" }, "shape": { "type": "circle", "stroke": { "width": 4, "color": "#859fde" }, "polygon": { "nb_sides": 6 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 4.008530152163807, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.12025590456491421, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "top-right", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false, "mode": "bubble" }, "resize": true }, "modes": { "grab": { "distance": 158.35505639876231, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });

const app = Vue.createApp({
    data(){
        return {
            blablas: [
                {skin: "Blabla 1",
            description: "Ce skin permet de découvrir un nouveau monde",
            image: "./images/nabi.png",
            url: "http://www.koreaherald.com/index.php",
            disponible: true,
            tags: ["blabla", "mouton", "papillon"],
            variants: [
                { id: 1615, color: 'vert', image: "./images/nabi2.png"},
                { id: 1616, color: 'rose', image: "./images/nabi.png"},
            ]
        },
        {skin: "Blabla 2",
            description: "Ce skin permet de découvrir un nouveau monde",
            image: "./images/nabi.png",
            url: "http://www.koreaherald.com/index.php",
            disponible: true,
            tags: ["blabla", "mouton", "papillon"],
            variants: [
                { id: 1615, color: 'vert', image: "./images/nabi2.png"},
                { id: 1616, color: 'rose', image: "./images/nabi.png"},
            ]
        },
            ]
            
        }
    },
    methods: {
        updateImage(index, variantImage) {
            this.blablas[index].image = variantImage
        }
    }
})
