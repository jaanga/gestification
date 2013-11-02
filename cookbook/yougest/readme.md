youGest
=======
Displays incoming Leap Motion data both as numbers and as Three.js 3D objects that update in rel-time

 
### Live Demo 

[youGest R4](http://jaanga.github.io/gestification/cookbook/yougest/r4/)


### Road Map
* Add stableized hand and pointables << 2013-07-27
* Add shadows << 2013-07-27
* Display either custom strings or Leap.js toString() data
* Better handling of gestures ~ first thing: define what 'better handling' means. ;-)  
* Save and replay JSON data using normal OS file dialog boxes  
* Export motion data as BVH files  
* Display the data that relates to the Frame object  << 2013-08-07
* Fingers have the correct roll  << 2013-08-07 ~ 
* Total hand has better display of motion  << 2013-08-07
* Fix Palm to stop display of gymbol lock issues  
* Provide 'in-world' objects to touch and manipulate  << 2013-08-07 ~ 
* Provide a mesh that looks like a hand that overlays the 'bones'  
* Have that hand mesh animate in unison with the bones  
* Bones change color in relation to their velocity in a more visible and useful manner  

### Screen Captures

![youGest R4](http://jaanga.github.io/gestification/cookbook/yougest/r4/index-screen-grab-320x240.png)

* 320 x 240 pixels. Second out of four images in R1 folder

###Contributions
* quever: QA feeback, pointed out ghost fingers ~ 2013-07-25
* Joe Ward (LM): provided code to capture the wrist roll ~ 2013-07-24


### Issues
'Ghost fingers' - fingers and palms do not always hide after real hand moves off screen

### Copyright and License
Copyright &copy; 2013 Jaanga authors

MIT License

### Change Log

2013-11-02 ~ Theo

* Readme updates

2013-08-07 ~ Theo

* Now calling modec utils r3 with improved toolbar
* Light changed to from spot to direction
* Comments added 
* Big code cleanup, many more functions
* Better dispay of text data
* Added About page and more help
* Added second joints for all 10 fingers 

2013-08-05 ~ Theo

* Added r4 folder
* fingers are numbered
* other minor cleanup

2013-08-01 ~ Theo

* Added youGest r3 folder
* Added r2 toolbar
* Frame cubes have titles
* Added ambient light
* Added Stemkoski collision detection
 
2013-07-27 ~ Theo

* added stableized hands and pontables
* Added light and shadows
* Added cubes to show frame data
* Added frame data readout in center
* Added home icon and homing routine

2013-07-25

* make the fingers thicker, wider. palm is square
* Add this readme
* check all ten fingers for ghosting. Still some issues if you exit quickly
* improve display of text status data


