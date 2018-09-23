$(function() {
    new TypeIt('#element', {
      speed: 50
    })
    .type('Alice Dai is an engineer.')
    .pause(400)
    .delete(12)
    .type('a designer.')
    .pause(400)
    .delete(9)
    .type('coder.')
    .pause(400)
    .delete(6)
    .type('writer.')
    .pause(400)
    .delete(7)
    .type('radio personality.')
    .pause(400)
    .delete(20)
    .type('an amateur jiu jitsuer.')
    .pause(400)
    .delete(23)
    .type('a cookie eater.')
    .pause(400)
    .delete(13)
    .type('bug lover.')
    .pause(400)
    .delete(15)
    .type('makes things with art and technology. ')
    .pause(500)
    .options({speed:40})
    .type('She\'s a junior at Duke studying Electrical Engineering and English. ')
    .pause(400)
    .type('Contact alice.dai@duke.edu ')
    .pause(500)
    .type('💃')
 	.destroy()
    });

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("sofia.jpg")) {
        image.src = "codeBoy.jpg";
    }
}

function changeCity() {
    var image = document.getElementById('SF');
    if (image.src.match("sofia.jpg")) {
        image.src = "sf.jpg";
    }
}

function brazil() {
    var image = document.getElementById('brazil');
    if (image.src.match("sofia.jpg")) {
        image.src = "brazil.png";
    }
}
