var posts = [];
var addComment = function (comment, id) {
var post = {
              comment: comment,
              id: posts.length
            };
    posts.push(post);
 };

  var publishComment = function() {
    $('.posts').empty();
    for (i = 0; i < posts.length; i++) {
    $('.posts').append("<li>" +"<button type='button' class='btn-remove'> remove </button>" + " " + posts[i].comment + ", ID - "  + posts[i].id + "</li>");
    }
  };

  $('.posts').on('click', 'button', function () {
    $(this).closest("li").remove();
  });

  $('.btn').on('click', function()  {
    addComment($('.new-comment').val());
    publishComment();
  });
