// apply track user plugin
trackUser.start({
  mouseMovement: true,
  processTime: 5,
  processData: function(results){
    console.log(JSON.stringify(results));
  },
  actionItem: {
    processOnAction: true,
    selector: '#login-btn',
    event: 'click'
  },
});