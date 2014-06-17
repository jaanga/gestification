Three.js - Leap.js - Boilerplate Read Me
========================================

### Live Demo

<iframe src=latest/index.html width=96% height=400px style=margin:2% >
[There is an `iframe` here that is not visible when viewed on github.com. 
To view, please see Project Links below.]
</iframe>
_Cropped iframe view of Three.js - Leap.js - Boilerplate. Wave your hands to say 'Hello World!'_

Full screen: [Three.js - Leap.js - Boilerplate (latest)](http://jaanga.github.io/gestification/cookbook/boilerplate/latest/ )

### Update 2014-06-17

User jacobischwartz reports issues running the boilerplate on a Mac. We are investigating. 

A big issue is that Theo-Armour does not currently have a Mac for testing. So until he gets one, any help very much appreciated.


### Description

This HTML/JavaScript file provides a minimum amount of code that loads the [Three.js](http://threejs.org) 
and [Leap Motion]( https://developer.leapmotion.com/leapjs/welcome ) libraries 
and creates a simple display of one hand and its fingers moving in 3D. 


### References

This file was featured by the Leap Motion labs web site on 15 October 2013 in a post titled:  
'[Thinking as a Designer: What’s a Good Leap + Three.js Boilerplate?](http://labs.leapmotion.com/post/64166391272/thinking-as-a-designer-whats-a-good-leap-three-js])'

Here's a link to the YouTube video:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=gLxXUcSJyJw" target="_blank">
<img src="http://img.youtube.com/vi/gLxXUcSJyJw/0.jpg" alt="boilerplate video" />
</a>


### Screen Capture

![Three.js - Leap.js - Boilerplate](http://jaanga.github.io/gestification/cookbook/boilerplate/r1/leap-threejs-boilerplate-screen-grab-320x240.png)

* 320 x 240 pixels. Second out of four images in R1 folder

## Project Links

You have two ways of viewing the Jaanga files:

* Web page hosted on GitHub: [jaanga.github.io]( http://jaanga.github.io/gestification/cookbook/boilerplate/ "view the files as apps." ) <input value="<< You are now probably here." size=28 style="font:bold 12pt monospace;border-width:0;" >  
* Source code on GitHub: [github.com/jaanga]( https://github.com/jaanga/gestification/tree/gh-pages/cookbook/boilerplate "View the files as source code." ) <scan style=display:none ><< You are now probably here.</scan>


### System Requirements

In order to view the files on this site you will need a device and browser that provides good support for [WebGL](http://get.webgl.org/)
WebGL is the JavaScript API for rendering interactive 3D graphics and 2D graphics within any compatible web browser without the use of plug-ins. 

Generally this means a computer with an Intel Core i5 processor or better with an external GPU such as one made by Nvidia. 
Successful use of the apps on a phone or tablet is highly unlikely. 
A mouse or other pointing device with a scroll wheel is also highly recommended so that you can zoom, pant and rotate in 3D.
 
The apps here are currently being built and tested with the Google Chrome browser. 
Bugs on browsers other than Chrome need not be reported until such time as the work settles down and an effort to support more browsers is initiated.



### Copyright and License

[Jaanga copyright notice and license]( https://github.com/jaanga/jaanga.github.io/blob/master/jaanga-copyright-and-mit-license.md )

This repository contains files that are  at an early and volatile stage. Not all licensing requirements may have been fully met let alone identified. It is the intension of the authors to play fair and all such requirements will either be met or the feature in question will turned off.


### Change Log

2014-06-10 ~ 

* Issue: Palm is not moving as anticipated in Z-direction ( in/out of screen ) 
	* Fix: Change from hand.stabilizedalmPosition[] to hand.palmPosition[]
	* RTFM: "Smoothing and stabilization is performed in order to make this value more suitable for interaction with 2D content."
		* This boilerplate is for 3D

2014-04-27 ~ Theo

* R4 fixes issues when more than five pointables are seen
* Palm uses lookAt instead of Pitch Roll and Yaw

2014-04-24 ~ Theo

* R3 first commit
* Read Me: many updates

2013-11-02 ~ Theo

* Readme updates

2013-10-31 ~ Theo  

* readme updated
* index.html added
 
2013-10-01 ~ Theo
  
* Folder and files added