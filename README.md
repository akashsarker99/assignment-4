## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=> getElementById():
This method finds a specific element with a id which is unique. If that id doesn't exist then it returns null.

 getElementsByClassName(): 
This method finds all the elements with a specified class name and it returns a HTML collection of the elements with the same class name.

 querySelector(): This method uses CSS selector and finds the first element that matches a given selector it could be classname, tagname, id.
querySelectorAll(): This method uses CSS selector and finds all the elements that matches a given selector it could be classname, tagname, id. ANd it returns a Nodelist of matching elements.

## How do you create and insert a new element into the DOM?
 => At first we need to create a HTML element with {document.createElement()} and store it in a variable like
 let h2 = document.createElement("h2") and then we need a parent element in main html then this created element will be inserted in that parentElement with the help of appendChild() method.


## What is Event Bubbling? And how does it work?
=>When an element is clicked, an event occurs and then it moves upward to its parent elements like a water bubble goes upward. This means if a child element is clicked, its parent elements also detect the same event.

## What is Event Delegation in JavaScript? Why is it useful?
=>With this method we don't need to add event listeners to many child elements, we add a single event listener to their parent element. The parent element can detect which child triggered the event. It is more useful because we don't need to add many event listeners for every child elements which is more eficient and it optimizes web performance.

## What is the difference between preventDefault() and stopPropagation() methods?
=> preventDefault(): This is a method that prevents the browser from performing default action for an event.

stopPropagation(): This is a method that stops an event from moving up or down it mostly used to prevent event bubbling. Basically when an event like a click occurs on an element, it starts bubbling, and by calling stopPropagation() method it ensures that the event's journey will stop at that current element and any of the parent element will not be notified.