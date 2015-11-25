$(function() {
    var iframes = $('.vimeoplayer');
    $.each(iframes, function(index, value) {
        var player = $f(value);

        player.addEvent('ready', function() {
            player.addEvent('finish', onFinish);
        });
    });

    function onFinish(id) {
        var finishedIframe = $('#' + id)[0];
        var finishedPlayer = $f(finishedIframe);
        finishedPlayer.element.src = finishedPlayer.element.src;
    }
});
