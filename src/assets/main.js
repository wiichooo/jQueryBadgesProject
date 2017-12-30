$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/wiichooo.json',
    dataType: 'jsonp',
    success: function(response) {
      response.courses.completed.forEach(function(data) {
          $("#badges").append(
          "<div class='course'>" 
          +"<h3>" + data.title + "</h3>"+
          "<img src='"+data.badge+"'>"+
          "<a href='"+data.url+"' target='_blank' class='btn btn-primary'>See Course</a>"
          
          +"</div>");
      });
    }
  });

});
