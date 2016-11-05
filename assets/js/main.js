$(function() {
    $('#shareThisLink').on('click', function() {
        var dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.setAttribute('id', 'dummy_id');
        document.getElementById('dummy_id') .value = 'http://spiceprogram.org';
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
});
