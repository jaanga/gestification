Phalanges
=========
_The phalanges is the Latin name we give to bones in your hand._



Watch the gentle progress of each revision:


Demo: http://jaanga.github.io/gestification/work-in-hand/phalanges/r1/phalanges.html  
- Note that finger bases cross each other and tips connect to inappropriate bases

Demo: http://jaanga.github.io/gestification/work-in-hand/phalanges/r2/phalanges.html  
- Note that fingers disappear

Demo: http://jaanga.github.io/gestification/work-in-hand/phalanges/r3/phalanges.html  
- Note that fingers disappear and connect to inappropriate bases

Demo: http://jaanga.github.io/gestification/work-in-hand/phalanges/r4/phalanges.html  
- Note that finger tips display at awkward inappropriate angles
 
###Road map / Goals
The idea is to create the procedures required to display, correctly and in real-time, a user-manipulated 3D skin and bones setup.

The bones are the armature which positions and angles the whole

The skin could be a human-hand-like mesh, robot appendage or creature claw.

The code should be able to operate seamlessly with code that reads and writes gestures and movement via BVH files.

* The bones are comprised of at least two joints per finger and a palm - on two or more hands.
* Movement is fast and smooth, no visible lags
* The ten joints and palm should never disappear even when occluded or when fingers clumped together
* Handles rolling of palms from down to fully up both clockwise and counter-clockwise
* Handles palm pitch and yaw appropriately 
* The ten joints move and position themselves in a realistic manner and remain connected so that a skin may function appropriately.
* The fingers never cross and never change base and never change length
* The bones should never leave 'trash' on the screen
* OK to require 'seeing' five fingers on a hand before recognition starts
* After that first five finger view, fingers may come and go 


See also: https://en.wikipedia.org/wiki/Phalanx_bone

### Change Log

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


###Copyright and License
Copyright &copy; 2013 Jaanga authors

MIT License