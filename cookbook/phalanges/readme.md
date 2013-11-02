Phalanges
=========
Phalanges, using Leap.js, parses incoming Leap Motion data then, using Three.js, creates and updates 3D objects 
that mirror the live motion of hands and fingers on screen in real-time.

### Live Demos

Demo R7: [Phalanges R7](http://jaanga.github.io/gestification/cookbook/phalanges/r7/phalanges.html)  

* Finally, a solution that doesn't suck much. If you are lucky, you might be able to approximate an OK sign. 
Generally you should be able to see your virtual right hand move around the screen with little lag, not have fingers disappear if some of the fingers are occlude or clenched.
Support for one right hand only. Support for moderate pitch, roll and yaw only. 

Demo R6: [Phalanges R6](http://jaanga.github.io/gestification/cookbook/phalanges/r6/phalanges.html) 

* A hybrid solution. The short finger tips display Leap Motion data. The long finger tips display calculated date. One way or another there's always a finger showing.

Demo R5: [Phalanges R5](http://jaanga.github.io/gestification/cookbook/phalanges/r5/phalanges.html)

* Much better than r4. This release is not ready for skinning, but is much closer to a potential starting point.

Demo R4: [Phalanges R4](http://jaanga.github.io/gestification/cookbook/phalanges/r4/phalanges.html) 

* Note that finger tips display at awkward inappropriate angles

Demo R3: [Phalanges R3](http://jaanga.github.io/gestification/cookbook/phalanges/r3/phalanges.html) 

* Note that fingers disappear and connect to inappropriate bases

Demo R2: [Phalanges R2](http://jaanga.github.io/gestification/cookbook/phalanges/r2/phalanges.html) 

* Note that fingers disappear

Demo R1: [Phalanges R1](http://jaanga.github.io/gestification/cookbook/phalanges/r1/phalanges.html)

* Note that finger bases cross each other and tips connect to inappropriate bases


### Description

_Phalanges is the Latin name given to the bones in the hand._

Please do read the 'Road Map / Goals' section further down.

And watch the gentle progress of each new revision:

See also: [phalanx bone](https://en.wikipedia.org/wiki/Phalanx_bone)

### Screen Captures

![Phalnges R7](http://jaanga.github.io/gestification/cookbook/phalanges/r7/phalanges-screen-grab-320x240.png)

* 320 x 240 pixels. Second out of four images in R7 folder

### References

<http://leap.quitebeyond.de/accure-hand-finger-recognition-3d-space/>

### Related Work / Links
Roman Liutikov is doing some excellent work as described here:

<http://blog.romanliutikov.com/post/60899246643/manipulating-rigged-hand-with-leap-motion-in-three-js>

With demo file here:

<http://demo.romanliutikov.com/three/10/>

Roman's code was been re-written here:

Demo: [Liutikov redux](http://jaanga.github.io/gestification/cookbook/phalanges/liutikov/liutikov.htm))

With more information and background here:

[Liutikov readme](https://github.com/jaanga/gestification/tree/gh-pages/cookbook/phalanges/liutikov)

 
### Road Map / Goals
The idea is to create the procedures required to display, correctly and in real-time, a user-manipulated 3D skin and bones setup.

The demo app should provide sample or generic FOSS JavaScript code that may later be used to create complete apps that will:

* record, save and replay Leap data in BVH format
* generate realtime visualizations of human-like hands or claws or other appendages with full skins and flexible surfaces

The bones are the armature which positions and angles the whole

The skin could be a human-hand-like mesh, robot appendage or creature claw.

The code should be able to operate seamlessly with code that reads and writes gestures and movement via BVH files.

* The bones are comprised of at least two joints per finger and a palm - on two or more hands.
* Movement is fast and smooth, no visible lags
* The ten joints and palm should never disappear even when occluded or when fingers clumped together
* Handles rolling of palms from down to fully up both clockwise and counter-clockwise
* Handles palm pitch and yaw appropriately 
* The ten joints should move and position themselves in a realistic manner and remain connected so that a skin may function appropriately.
* The fingers never cross inappropriately
* Finger tips never connect to the incorrect finger base
* Finger tips never change length
* The bones should never leave 'trash' on the screen or become disjointed from the palm
* It is acceptable to require 'seeing' five fingers on a hand before recognition starts
* After that first five finger view, Leap device pointables data may start and stop incoming, but fingers should remain visible and in the appropriate position related to where they were last seen


### Copyright and License
Copyright &copy; 2013 Jaanga authors

MIT License

### Change Log

2013-10-01 ~ Theo  

* R7 Minor text changes and code cleanup
* Files copied over to Cookbook

2013-09-30 ~ Theo  

* R7 info screen updated
* R7 code cleanup
* read-me updated

2013-09-29 ~ Theo  

* R7 added
* This read-me updated

2013-09-24 ~ Theo  

* R6 added - progress being made

2013-09-22 ~ Theo  

* r5 added
* Hybrid solution: 
	* Finger tips move independently from the palm and finger bases
	* Finger bases and palm are children of hand3D. finger tips are their own objects
* Pitch and yaw are good. Roll works to about half way over.
* When five fingers are visible, motions are good and there not much jumpiness
* After five fingers have been seen:
	* Seeing just three or four fingers sometimes is almost OK.
	* Fingers mostly do not disappear or become completely disjointed
	* Many issues when palm itches, rolls and yaws
 
2013-09-19 ~ Theo  

* r4 ~ been working on this for last few mornings
* Almost looks OK when your hand is flat, but 'OK' sign still a fail
* Fails when sees only one or two fingers

2013-08-21 ~ Theo  

* r3 - All day on this and a bit of progress
* Now supports just one hand and some of the joints - sometime.
* Still a ways to go.

2013-08-06 ~ Theo  

* r2 - phalanges wobble less - but it's a cheat

2013-08-05 ~ Theo  

* r1 - Folder and app started

