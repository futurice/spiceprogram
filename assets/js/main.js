$(function() {
    $('#shareThisLink').on('click', function() {
        var dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.setAttribute('id', 'dummy_id');
        document.getElementById('dummy_id').value = 'http://spiceprogram.org';
        dummy.select();
        var successfull = document.execCommand('copy');
        if (successfull) {
            $(this).find('span').remove();
            $(this).append('<span>Copied to clipboard</span>');
        }
        document.body.removeChild(dummy);
    });

    $('#shareThisLink').on('mouseout', function() {
        $(this).find('span').remove();
    });

    doClouds();
});

var doClouds = function() {
    var screenWidth = window.screen.width
    var clouds = document.querySelectorAll('.cloud');
    var animatedClouds = [];

    var cloud = function (cloudEl) {
        var xPos = Math.random() * screenWidth;
        var speed = Math.random();

        this.animate = function() {
            cloudEl.style.transform = 'translateX(' + (xPos += speed) + 'px)'; 
            if (xPos > screenWidth + 200) {
                xPos = -200;
            }
        };
    };

    var createClouds = function() {
        return Array.prototype.map.call(clouds, function(c) {
            return new cloud(c, screenWidth);
        });
    };

    var render = function() {
        animatedClouds.forEach(function(c) {
            c.animate();
        })
        requestAnimationFrame(render);
    };

    animatedClouds = createClouds();
    render();
}