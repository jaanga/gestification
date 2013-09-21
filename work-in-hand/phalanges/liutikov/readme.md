Liutikov's Phalanges
==================

Live demo: http://jaanga.github.io/gestification/work-in-hand/phalanges/liutikov/liutikov.html

This app is an adaptation of the orginal code by Roman Liutokov of Chernihiv, Ukraine.

Liutikov's code is interesting for a number of reasons. He generally follows the BVH method of storing motion data. 
The general goal is to provide six dregrees of freedom with the minimum data. 
Since the distances between joints is known and fixed, the only data that needs updating is the angles.

The nicest thing about Liutikov's code is that he provides a clear and simple method for going 
from a Blender model to a skinned mesh ready to be imported into Three.js.

The code is, however, not without issues. 
The overall movement of the hand is not always appropriate and the movements of the fingers is limited and laggy.
Nevertheless. Liutikov's code is the best FOSS provides the best example of skin and bones for Leap Motion data that we have seen to date. 


The Jaanga version of the app is a simplified, de-objectified version of the original code.
At 135 lines, it is about a hundred lines shorter than the orginal.  
The functionaity is similar to the original though this app may handle palm rotation somewhat better than the original. 
Palm rotation will be much better once a mesh can be sourced that is rotated to align with the Leap Motion hand.
Finger movement may also slightly better because the app tries to follow the Euler order in carrying out the rotations of the finger tips.

There are also minor tweaks such as adding a bit of color to the skin and providing a surface to cast shadows upon.
 



###Credits

Blog post:  
http://blog.romanliutikov.com/post/60899246643/manipulating-rigged-hand-with-leap-motion-in-three-js

Demo:
http://demo.romanliutikov.com/three/10/
  
