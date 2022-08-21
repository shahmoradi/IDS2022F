/*
<script>
function openAll() {
    var x = document.getElementsByTagName("details markdown="1"");
    var i;
    for (i = 0; i < x.length; i++) {
         x[i].setAttribute("open", "true");
    }
}
</script>

<script>
$('#openAll').on('click', function() {
    $('.openMe').each(function() {
        var coll = $(this);
        coll.trigger('expand');
    });
});
$('#closeAll').on('click', function() {
    $('.openMe').each(function() {
        var coll = $(this);
        coll.trigger('collapse'); 
    });
});
</script>
*/


/*
<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
</script>
/*