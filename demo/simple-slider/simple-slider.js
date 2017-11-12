$(document).ready(function() {
  var $element = $('input[type="range"]');
  var $handle;

  $element.rangeslider({
    polyfill: false,
    onInit: function() {
      $handle = $('.rangeslider__handle', this.$range);
      updateHandle($handle[0], this.value);
      $("#amount-label").html('<span class="pricing__dollar">€</span>' + this.value);
    }
  }).on('input', function() {
    updateHandle($handle[0], this.value);
    $("#amount-label").html('<span class="pricing__dollar">€</span>' + this.value);
  });

  function updateHandle(el, val) {
    el.textContent = val;
  }

  $('input[type="range"]').rangeslider();

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
    selector: '#range-slider',
    event: 'click'
  },
});