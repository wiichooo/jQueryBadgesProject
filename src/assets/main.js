$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/wiichooo.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response);
      $("#data").append(
        //"<img src='"+response.user.avatar+"'>"+
        //"<h4>" + response.user.username + "</h4>"
        "<h4>Luis Godinez</h4>"
      );
      response.courses.completed.forEach(function(data) {
          $("#badges_c").append(
          "<div class='course'>" 
          +"<h3>" + data.title + "</h3>"+
          "<img src='"+data.badge+"'>"+
          "<a href='"+data.url+"' target='_blank' class='btn btn-primary'>See Course</a>"      
          +"</div>");
      });
      response.courses.in_progress.forEach(function(data) {
        $("#badges_p").append(
        "<div class='course'>" 
        +"<h3>" + data.title + "</h3>"+
        "<img src='"+data.badge+"'>"+
        "<a href='"+data.url+"' target='_blank' class='btn btn-primary'>See Course</a>"      
        +"</div>");
    });
    }
  });

});
