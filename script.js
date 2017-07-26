$(document).ready(function() {
   var url = " https://newsapi.org/v1/sources";
   var data = {language:"en", country:"us"};
   
   $.ajax({
       url: url,
       data: data,
       type: "GET",
       success: function(response) {
          //console.log(response);
          //console.log(response.sources[2]);
          var sources = response.sources;
          //console.log(sources[2]);
          var html = "<select class='form-control' id='sourceOption'>";
          $.each(sources, function(index, source) {
              //console.log(source);
              html += "<option value='" + source.id + "'>" + source.name + "</option>";
          });
          html += "</select>";
         // console.log(html);
          $(".form-group").html(html);
       }
   });
   
   $("#source").submit(function(event) {
       event.preventDefault();//tell \s to do this instead
       var id = $('#sourceOption').val();
       var url = "https://newsapi.org/v1/articles";
       var data = {apiKey:"a2951ada0edd40f1a1b000a054ace8c5", source: id};
       $.ajax({
           url: url,
           data: data,
           type: "GET",
           success: function(response) {
              // console.log(response);
               var articles = response.articles;
               var html = "<ul class='list-group'>";
               $.each(articles, function(index, article) {
                  html += "<li class='list-item'>" + article.title + "</li>"; 
               });
               html += "</ul>";
               $("#articles").html(html);
           }
       });
   });
});

//