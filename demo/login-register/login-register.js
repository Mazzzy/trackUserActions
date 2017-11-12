$(function() {
    $('#login-form-link').click(function(e) {
      $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

});

// apply track user plugin
trackUser.start({
  mouseMovement: true,
  processTime: 5,
  processData: function(results){
    console.log(JSON.stringify(results));
  },
  actionItem: {
    processOnAction: true,
    selector: '#register-submit',
    event: 'click'
  }
});