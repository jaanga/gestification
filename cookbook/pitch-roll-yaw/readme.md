Pitch Roll & Yaw Read Me
========================

Cropped iframe view of Pitch Roll & Yaw:
<iframe src=latest/index.html width=96% height=300px style=margin:2% >
[There is an `iframe` here that is not visible when viewed on github.com. To view, please see Project Links below.]
</iframe>
Compares various methods for deriving pitch roll and yaw obtained from the Leap Motion device.

###  Live Demo

[Pitch Roll & Yaw (latest)](http://jaanga.github.io/gestification/cookbook/pitch-roll-yaw/latest/)

* Left Side uses Three.js lookAt & rotateOnAxis to rotate the palm
* Right side uses pitch, roll and yaw that Kai added to leap.js
* Kai's method, while not perfect, is as good as the Three.js method, is library agnostic and requires fewer lines of code. Use it.

<!--
### Live Demo R2: 

[Pitch Roll & Yaw R2](http://jaanga.github.io/gestification/cookbook/pitch-roll-yaw/r2/pitch-roll-yaw.html)

* Left Side uses Three.js lookAt & rotateOnAxis to rotate the palm
* Right side uses pitch, roll and yaw that Kai added to leap.js
* Kai's method, while not perfect, is as good as the Three.js method, is library agnostic and requires fewer lines of code. Use it.

[Pitch Roll & Yaw R1](http://jaanga.github.io/gestification/cookbook/pitch-roll-yaw/r1/pitch-roll-yaw.html)

* Left Side uses Three.js lookAt & rotateOnAxis to rotate the palm
* Right side uses pure JavaScript. The right side is jumpy and generally has more issues than the left side.
* As of this writing, I have not been able to find a good way of displaying pitch, roll and yaw and am looking for help in finding better answers.
--->

### Screen Capture

![Pitch Roll & Yaw](http://jaanga.github.io/gestification/cookbook/pitch-roll-yaw/r2/pitch-roll-yaw-screen-grab-320x240.png)

* 320 x 240 pixels. Second out of four images in R1 folder


## Project Links

You have two ways of viewing the Jaanga files:

* Web page hosted on GitHub: [jaanga.github.io]( http://jaanga.github.io/gestification/cookbook/pitch-roll-yaw/ "view the files as apps." ) <input value="<< You are now probably here." size=28 style="font:bold 12pt monospace;border-width:0;" >  
* Source code on GitHub: [github.com/jaanga]( https://github.com/jaanga/gestification/tree/gh-pages/cookbook/pitch-roll-yaw/ "View the files as source code." ) <scan style=display:none ><< You are now probably here.</scan>


### System Requirements

In order to view the files on this site you will need a device and browser that provides good support for [WebGL](http://get.webgl.org/)
WebGL is the JavaScript API for rendering interactive 3D graphics and 2D graphics within any compatible web browser without the use of plug-ins. 

Generally this means a computer with an Intel Core i5 processor or better with an external GPU such as one made by Nvidia. 
Successful use of the apps on a phone or tablet is highly unlikely. 
A mouse or other pointing device with a scroll wheel is also highly recommended so that you can zoom, pant and rotate in 3D.
 
The apps here are currently being built and tested with the Google Chrome browser. 
Bugs on browsers other than Chrome need not be reported until such time as the work settles down and an effort to support more browsers is initiated.


### Copyright and License
Copyright &copy; 2014 Jaanga authors

MIT License

### Change Log

2014-04-27 ~ Theo

* Loads latest beta Leap.js
* CubeGeometry changed to BoxGeometry

2013-11-02 ~ Theo

* Readme updates

2013-09-26 ~ Theo

* R2 added ~ with Kai's new pitch, roll and yaw tools

2013-08-19 ~ Theo
 
* Folder and r1 added