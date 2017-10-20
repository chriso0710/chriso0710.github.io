$(function(){
    var typed = new Typed(".typed", {
        stringsElement: '#typed-strings',
        typeSpeed: 60,
        backSpeed: 30,
        loop: false,
        onComplete: function(self) {
            setTimeout(function(){
                typed.destroy();
                var allbio = $.map($("#typed-strings p"), function(item) {
                    return $(item).text();
                }).join(", ");
                $('.typed').text(allbio);
            }, 2000);
        }
    });
});
