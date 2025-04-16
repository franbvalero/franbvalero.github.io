$("script[type='math/tex']").replaceWith(
  function(){
    var tex = $(this).text();
    return "<span class=\"inline-equation\">" +
           katex.renderToString(tex) +
           "</span>";
});


$("script[type='math/tex; mode=display']").replaceWith(
  function(){
    var tex = $(this).text();
    tex = tex.substring(12, tex.length - 5); // remove trailing %
    console.log(tex);
    return "<div class=\"equation\">" +
           katex.renderToString("\\displaystyle "+tex, {displayMode:true}) +
           "</div>";
});





