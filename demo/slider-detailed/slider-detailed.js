$(document).ready(function() {
  $("#slider").slider({
      animate: true,
      value:1,
      min: 0,
      max: 1000,
      step: 10,
      slide: function(event, ui) {
          update(1,ui.value); //changed
      }
  });

  $("#slider2").slider({
      animate: true,
      value:0,
      min: 0,
      max: 500,
      step: 1,
      slide: function(event, ui) {
          update(2,ui.value); //changed
      }
  });

  //Added, set initial value.
  $("#amount").val(0);
  $("#duration").val(0);
  $("#amount-label").text(0);
  $("#duration-label").text(0);
  
  update();
});

//changed. now with parameter
function update(slider,val) {
  //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
  var $amount = slider == 1?val:$("#amount").val();
  var $duration = slider == 2?val:$("#duration").val();

  /* commented
  $amount = $( "#slider" ).slider( "value" );
  $duration = $( "#slider2" ).slider( "value" );
   */

   $total = "$" + ($amount * $duration);
   $( "#amount" ).val($amount);
   $( "#amount-label" ).text($amount);
   $( "#duration" ).val($duration);
   $( "#duration-label" ).text($duration);
   $( "#total" ).val($total);
   $( "#total-label" ).text($total);

   $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
   $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$duration+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}


// apply track user plugin
trackUser.start({
  mouseMovement: true,
  processTime: 5,
  processData: function(results){
    console.log(JSON.stringify(results));
  },
  actionItem: {
    processOnAction: true,
    selector: '#proceed-btn',
    event: 'click'
  },
});