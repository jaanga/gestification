Pitch Roll & Yaw
================
Compares various methods for deriving pitch roll and yaw obtained from the Leap Motion device.

Demo R2: http://jaanga.github.io/gestification/cookbook/pitch-roll-yaw/r2/pitch-roll-yaw.html  
* Left Side uses Three.js lookAt & rotateOnAxis to rotate the palm
* Right side uses pitch, roll and yaw that Kai added to leap.js
* Kai's method, while not perfect, is as good as the Three.js method, is library agnostic and requires fewer lines of code. Use it.

Demo R1: http://jaanga.github.io/gestification/cookbook/pitch-roll-yaw/r1/pitch-roll-yaw.html

* Left Side uses Three.js lookAt & rotateOnAxis to rotate the palm
* Right side uses pure JavaScript. The right side is jumpy and generally has more issues than the left side.
* As of this writing, I have not been able to find a good way of displaying pitch, roll and yaw and am looking for help in finding better answers.

###Change Log###

2013-09-26 ~ Theo
* R2 added ~ with Kai's new pitch, roll and yaw tools

2013-08-19 ~ 
* Folder and r1 added