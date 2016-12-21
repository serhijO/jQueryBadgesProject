$(function() {
  $.ajax({
    dataType: 'jsonp',
    url: 'https://www.codeschool.com/users/wch_codeschool.json',
    success: function(response) {
      var res = response.courses.completed;
      var title,
          badge,
          url;
      for (i =0; i<res.length; i++) {
        title = response.courses.completed[i].title;
        badge = response.courses.completed[i].badge;
        url   = response.courses.completed[i].url;
        // console.log(response.courses.completed[i].title);
       $("#badges").append('<div class="course"><h3>' + title + '</h3><img src="'+ badge  +'"><a href="'+ url +'" target="_blank" class="btn btn-primary">See Course</a></div>');
      }
    }
  });

});
