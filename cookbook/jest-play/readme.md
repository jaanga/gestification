jestPlay<br>- A Suite of Apps to<br>Record and Replay Leap Device Data Files
===================================================================================

Currently jestPlay is a suite of four apps - described as follows:


jestRecord BVH ~ record Leap data and save to BVH  
- Demo: http://jaanga.github.io/gestification/cookbook/jest-play/bvh/r1/jest-record-bvh.html  
- Requires Leap device  

jestReplay BVH  ~ replay BVH data from file  
- Demo: http://jaanga.github.io/gestification/cookbook/jest-play/bvh/r1/jest-replay-bvh.html  
- No Leap device is needed to replay files  

jestRecord JSON ~ record & replay Leap data to and from JSON files   
- Demo: http://jaanga.github.io/gestification/cookbook/jest-play/json/r1/jest-record-json.html  
- Requires Leap device  

jestReplay JSON ~ replay JSON data from file  
- Demo: http://jaanga.github.io/gestification/cookbook/jest-play/json/r1/jest-replay-json.html  
- No Leap device is needed to replay files  


Usage:  
1. Wave a hand and at least one finger over the Leap Motion device to start recording.  
2. Close or remove all hands to finish recording.  
3. Click on the 'Save File' button to save the recording to your computer.  
4. Click on the 'Choose File' to open a previously recorded file.  
5. Click the 'Replay' button to view in 3D the motions you recorded.  

You may have to reload the web page between replaying and recording sessions. 

Pressing the space-bar pauses all operations. Pressing the 'x' key clears the BVH or JSON data text area.

###Description
The jestPlay BVH and JSON apps enable you to record your hand movements by saving data from the [Leap Motion](http://leapmotion.com) 
device to your computer either as [BVH](http://en.wikipedia.org/wiki/Biovision_Hierarchy) or as [JSON](http://en.wikipedia.org/wiki/JSON) files. 
Once saved, you may open these files and watch a full 3D replay of the movements.

JSON is the native or raw for Leap devices. JSON files tend to get to be large. 
BVH is an industry standard format frequently used in character animation and is supported by programs such as DAZ and Blender. BVH files are compact.  

The jestPlay apps are 'cookbook' style apps. They are not fully-featured or even finished apps. 
Both do, however, provide you with a simple working FOSS example in a few hundred lines of code. 
Code that you may use to start developing your own code.

The apps provide full access to your operating systems file save and file open dialog boxes 
- which are features not normally found in JavaScript as they were recently introduced in HTML 5.

Based on the [Three.js](http://threejs.org) library, the apps allows you to zoom, pan and and rotate the views of the replays
 - thus, for example, you may see a replay from another person's point of view.

The JSON app supersedes '[save-json](https://github.com/jaanga/gestification/tree/gh-pages/work-in-hand/save-json)'.

###Road Map
* Capture pointables positions and length and create appropriate BVH header 
* Support for more than one hand
* Choice of detailed hands and fingers
* Exporting the data in smaller, more efficient, industry-standard [BVH][http://en.wikipedia.org/wiki/Biovision_Hierarchy] format files << 2013-09-29 done

###Issues
* Data is being recorded at a hundred times or more per second. The rate could br broght down closer to an animation industry standard of 24 frames per second.
* jestRecord BVH should be able to do an instand replay of a motion - similar to jestRecord JSON.
* Hand and fingers flashing on replay << 2013-09-03 fixed
* Should not need to have fingers displayed all the time << 2013-09-03 fixed


###License and Credits
[Copyright, License and Credits](https://github.com/jaanga/gestification/blob/gh-pages/cookbook/jest-play/copyright-license-credits.md)


###Change Log

2013-09-30 ~ Theo
* jestPlay JSON code cleanup
* Renaming the files to jestRecord *** an jestReplay ***


2013-09-29 ~ Theo
* Read-me reorganized to cover both BVH and JSON apps

2013-09-03 - Theo
* Text added to read-me
* jest-replay-only added
* Current issues mostly fixed

2013-09-02 ~ Theo
* Folders and Files added






