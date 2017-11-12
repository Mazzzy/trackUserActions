# trackUserActions
A pure javascript based plugin that tracks user behavior  events in any given page.

# It records :
* User's client machine / browser info
* Page time - on which user is active
* Clicks on node (html element), click position and counts.
* Co-ordinates (x,y) of mouse movement
* Key press details

# Usage : 
Include it as :

  ``` <script src="track-user-actions.js"></script> ```

Start the plugin as : 

  ``` trackUser.start(); ```
  
For above by default options are applied.

You can apply custom options as :
```
	trackUser.start({
	  mouseMovement: true,
	  processTime: 5,
	  processData: function(results){
	  	// api call to send result
	  	// API.post(results)
	  }
	});
```