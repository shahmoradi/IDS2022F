// Generate for each header, a different anchor link symbol
// $(function() {
//   return $("h2, h3, h4, h5, h6").each(function(i, el) {
//     var $el, icon, id;
//     $el = $(el);
//     id = $el.attr('id');
//     icon = '&nbsp;&nbsp;<i class="fa fa-link"></i>';
//     if (id) {
//       return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
//     }
//   });
// });

$(function() {
  return $("h2").each(function(i, el) {
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = '&nbsp;&nbsp;<i class="fa fa-link"></i>';
    if (id) {
      return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
    }
  });
});

$(function() {
  return $("h3").each(function(i, el) {
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = '&nbsp;&nbsp;<i class="fa fa-link"></i><i class="fa fa-link"></i>';
    if (id) {
      return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
    }
  });
});

$(function() {
  return $("h4").each(function(i, el) {
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = '&nbsp;&nbsp;<i class="fa fa-link"></i><i class="fa fa-link"></i><i class="fa fa-link"></i>';
    if (id) {
      return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
    }
  });
});

$(function() {
  return $("h5").each(function(i, el) {
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = '&nbsp;&nbsp;<i class="fa fa-link"></i><i class="fa fa-link"></i><i class="fa fa-link"></i><i class="fa fa-link"></i>';
    if (id) {
      return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
    }
  });
});

$(function() {
  return $("h6").each(function(i, el) {
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = '&nbsp;&nbsp;<i class="fa fa-link"></i><i class="fa fa-link"></i><i class="fa fa-link"></i><i class="fa fa-link"></i><i class="fa fa-link"></i>';
    if (id) {
      return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
    }
  });
});