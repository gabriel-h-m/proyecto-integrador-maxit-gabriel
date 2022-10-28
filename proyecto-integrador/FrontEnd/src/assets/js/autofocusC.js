function foco(campo) {
    $(document).ready(function () {
        setTimeout(function () {
            $("#"+campo).focus();
        }, 1500);
    });
}