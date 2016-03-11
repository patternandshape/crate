$(document).ready(function() {
  // toggles login form on sidebar
  $('.login-toggle').click(function() {
    $('.account-form').slideUp();
    $('.login').slideToggle('slow');
    $('.search').slideToggle('slow');
    $('.login-form').show('slow');
    $('.create-account').html("Create An Account");
  })

  // toggles create account form on sidebar
  $('.create-account').click(function() {
    $('.create-account').html("New Account Info:");
    $('.login-form').slideUp('slow');
    $('.account-form').slideDown('slow');
  })
});
