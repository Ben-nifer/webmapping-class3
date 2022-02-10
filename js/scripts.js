

// Consolidated listeners for all albums
$('.artist-container').on('click', function(){
  var albumArt = $(this).data('album-art')
  $(".right-half").html(`<img src='${albumArt}'/>`);
  // $(".right-half").html(`<img src=\'' + albumArt + albumYear + albumPeak '\''/>`);

})
