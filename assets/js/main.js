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
    var screenWidth = $(window).width();
    if (screenWidth < 700) {
        $('.cloud-two').remove();
    }

    var clouds = [];
    var speeds = [0.2, 0.25, 0.1, 0.15, 0.3];
    var s = screenWidth / 5;
    var startingPos = [-s, s * 4, s * 2, s * 0.7, s * 1.3];

    var cloud = function (cloudEl, speed, xPos) {
        this.animate = function() {
            cloudEl.style.transform = 'translateX(' + (xPos += speed) + 'px)'; 
            if (xPos > screenWidth + 200) {
                xPos = -200;
            }
        };
    };

    var createClouds = function() {
        var cloudEls = document.querySelectorAll('.cloud');
        return Array.prototype.map.call(cloudEls, function(c, i) {
            var speed = speeds[i];
            var xPos = startingPos[i];
            return new cloud(c, speed, xPos);
        });
    };

    var render = function() {
        clouds.forEach(function(c) {
            c.animate();
        })
        requestAnimationFrame(render);
    };

    clouds = createClouds();
    render();
}