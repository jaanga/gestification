Pitch Roll & Yaw
================
<iframe src=pitch-roll-yaw/r2/pitch-roll-yaw.html width=96% height=300px style=margin:2% ></iframe>
Compares various methods for deriving pitch roll and yaw obtained from the Leap Motion device.

### Live Demo R2: 

[Pitch Roll & Yaw R2](http://jaanga.github.io/gestification/cookbook/pitch-roll-yaw/r2/pitch-roll-yaw.html)

* Left Side uses Three.js lookAt & rotateOnAxis to rotate the palm
* Right side uses pitch, roll and yaw that Kai added to leap.js
* Kai's method, while not perfect, is as good as the Three.js method, is library agnostic and requires fewer lines of code. Use it.

[Pitch Roll & Yaw R1](http://jaanga.github.io/gestification/cookbook/pitch-roll-yaw/r1/pitch-roll-yaw.html)

* Left Side uses Three.js lookAt & rotateOnAxis to rotate the palm
* Right side uses pure JavaScript. The right side is jumpy and generally has more issues than the left side.
* As of this writing, I have not been able to find a good way of displaying pitch, roll and yaw and am looking for help in finding better answers.

### Screen Capture

![Pitch Roll & Yaw](http://jaanga.github.io/gestification/cookbook/pitch-roll-yaw/r2/pitch-roll-yaw-screen-grab-320x240.png)

* 320 x 240 pixels. Second out of four images in R1 folder


### Copyright and License
Copyright &copy; 2013 Jaanga authors

MIT License

### Change Log

2013-11-02 ~ Theo

* Readme updates

2013-09-26 ~ Theo

* R2 added ~ with Kai's new pitch, roll and yaw tools

2013-08-19 ~ Theo
 
* Folder and r1 added