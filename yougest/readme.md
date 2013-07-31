youGest
=======

Demo: http://jaanga.github.io/gestification/yougest/r2/ 


###Road Map###
* Add stableized hand and pointables << 2013-07-27
* Add shadows << 2013-07-27
* Display either custon strings or Leap.js toString() data
* Better handling of gestures ~ first thing: define what 'better handling' means. ;-)  
* Save and replay JSON data using normal OS file dialog boxes  
* Export motion data as BVH files  
* Display the data that relates to the Frame object  
* Fingers have the correct roll  
* Total hand has better display of motion  
* Fix Palm to stop display of gymbol lock issues  
* Provide 'in-world' objects to touch and manipulate  
* Provide a mesh that looks like a hand that overlays the 'bones'  
* Have that hand mesh animate in unison with the bones  
* Bones change color in relation to their velocity in a visible and useful manner  


###Contributions###
* quever: QA feeback, pointed out ghost fingers ~ 2013-07-25
* Joe Ward (LM): provided code to capture the wrist roll ~ 2013-07-24


###Issues###
'Ghost fingers' - fingers and palms do not always hide after real hand moves off screen


###Change Log###

2013-07-27 ~ Theo
& added stableized hands and pontables
* Added light and shadows
* Added cubes to show frame data
* Added frame data readout in center
* Added home icon and homing routine

2013-07-25
* make the fingers thicker, wider. palm is square
* Add this readme
* check all ten fingers for ghosting. Still some issues if you exit quickly
* improve display of text status data


###Copyright and License
Copyright &copy; 2013 Jaanga authors

MIT License
