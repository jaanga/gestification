jestPlay BVH and jestPlay JSON<br>- Record and Replay Leap Device Data Files
===================================================================================

BVH demo: http://jaanga.github.io/gestification/cookbook/jest-play/bvh/r1/jest-play.html

JSON demo: http://jaanga.github.io/gestification/cookbook/jest-play/json/r1/jest-play.html  
JSON demo replay only: http://jaanga.github.io/gestification/cookbook/jest-play/json/r1/jest-replay.html

Usage:  
1. Wave a hand and at least one finger over the Leap Motion device to start recording.  
2. Close or remove all hands to finish recording.  
3. Click on the 'Save File' button to save the recording to your computer.  
4. Click on the 'Choose File' to open a previously recorded file.  
5. Click the 'Replay' button to viewin 3D the motions you recorded.  

You may have to re;load the webpage between replaying and recording sessions. 
Pressing the spacebar pauses all operations. Pressing the 'x' key clears the JSON data text area.

###Description
The jestPlay BVH and jestPlay JSON apps enable you to record your hand movements by saving data from the [Leap Motion](http://leapmotion.com) 
device to your computer either as [BVH](http://en.wikipedia.org/wiki/Biovision_Hierarchy) or as [JSON](http://en.wikipedia.org/wiki/JSON) files. Once saved, you can open these files and watch a full 3D replay of the movements.

The apps are 'cookbook' style apps. They are not fully-featured or even finished apps. 
Both do, however, provide you with a simple working FOSS example in a few hundred lines of code. 
Code that you can use to start developing your own code.

The apps provide full access to your operating systems file save and file open dialog boxes 
- which are features not normally found in JavaScript as they were recently introduced in HTML 5.

Based on the [Three.js](http://threejs.org) library, the apps allows you to zoom, pan and and rotate the views of the replays
 - so you can see them from another person's point of view.

The JSON app supersedes '[save-json](https://github.com/jaanga/gestification/tree/gh-pages/work-in-hand/save-json)'.

###Road Map
* Support for more than one hand
* More detailed hands and fingers
* Exporting the data in smaller, more efficient, industry-standard [BVH][http://en.wikipedia.org/wiki/Biovision_Hierarchy] format filea << 2013-09-29 done

###Issues
* Hand and fingers flashing on replay << 2013-09-03 fixed
* Should not need to have fingers displayed all the time << 2013-09-03 fixed


###License and Credits
[Copyright, License and Credits](https://github.com/jaanga/gestification/blob/gh-pages/cookbook/jest-play/copyright-license-credits.md)


###Change Log

2013-09-29 ~ Theo
* Readme reorganixed to cover both BVH and JSON apps


2013-09-03 - Theo
* Text added to readme
* jest-replay-only added
* Current issues mostly fixed

2013-09-02 ~ Theo
* Folders and Files added






