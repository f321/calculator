<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
$.expr[':'].withText = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().match("^" + arg + "$");
    };
});
}
</script>
