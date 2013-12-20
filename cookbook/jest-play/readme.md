jestPlay Read Me
================

Cropped iframe view of jestPlay:
<iframe src=jest-play/bvh/r1/jest-replay-bvh.html width=96% height=300px style=margin:2% ></iframe>
<p>Suite of Apps to Record and Replay Leap Device Data Files</p>


### Live Demos
Currently jestPlay is a suite of four apps - described as follows:


jestRecord BVH ~ record Leap data and save to BVH  

* Demo: [jestRecord BVH](http://jaanga.github.io/gestification/cookbook/jest-play/bvh/r1/jest-record-bvh.html)
* Requires Leap device  

jestReplay BVH  ~ replay BVH data from file  

* Demo: [jestReplay BVH](http://jaanga.github.io/gestification/cookbook/jest-play/bvh/r1/jest-replay-bvh.html)
* No Leap device is needed to replay files  

jestRecord JSON ~ record & replay Leap data to and from JSON files   

* Demo: [jestRecord JSON](http://jaanga.github.io/gestification/cookbook/jest-play/json/r1/jest-record-json.html)
* Requires Leap device  

jestReplay JSON ~ replay JSON data from file  

* Demo: [jestReplay JSON](http://jaanga.github.io/gestification/cookbook/jest-play/json/r1/jest-replay-json.html)
* No Leap device is needed to replay files  


### Description

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


### Usage  

1. Wave a hand and at least one finger over the Leap Motion device to start recording.  
2. Close or remove all hands to finish recording.  
3. Click on the 'Save File' button to save the recording to your computer.  
4. Click on the 'Choose File' to open a previously recorded file.  
5. Click the 'Replay' button to view in 3D the motions you recorded.  

You may have to reload the web page between replaying and recording sessions. 

Pressing the space-bar pauses all operations. Pressing the 'x' key clears the BVH or JSON data text area.


### Road Map

* Capture pointables positions and length and create appropriate BVH header 
* Support for more than one hand
* Choice of detailed hands and fingers
* Exporting the data in smaller, more efficient, industry-standard [BVH][http://en.wikipedia.org/wiki/Biovision_Hierarchy] format files << 2013-09-29 done

### Issues

* jestRecord BVH: be able to adjust parameters for size and spacing of fingers
* Data is being recorded at a hundred times or more per second. The rate could be brought down closer to an animation industry standard of 24 frames per second. << 2013-10-05? Done
* jestRecord BVH should be able to do an instant replay of a motion - similar to jestRecord JSON.
* Hand and fingers flashing on replay << 2013-09-03 fixed
* Should not need to have fingers displayed all the time << 2013-09-03 fixed

### Screen Capture

![jestPlay](http://jaanga.github.io/gestification/cookbook/jest-play/json/r1/jest-record-json-screen-grab-320x240.png)

* 320 x 240 pixels. Second out of four images in R1 folder

### License and Credits
[Copyright, License and Credits](https://github.com/jaanga/gestification/blob/gh-pages/cookbook/jest-play/copyright-license-credits.md)


### Change Log

2013-11-02 ~ Thep

* Readme updated

2013-10-02/04 ~ Theo

* jestReplay BVH: continuing code refining cleanup
* jestRecord BVH: continuing code refining cleanup
* BVH samples: building and refining the collection

2013-10-01 ~ Theo

* Continued work on BVH capabilities

2013-09-30 ~ Theo

* jestPlay JSON code cleanup
* Renaming the files to jestRecord and jestReplay


2013-09-29 ~ Theo

* Read-me reorganized to cover both BVH and JSON apps

2013-09-03 - Theo

* Text added to read-me
* jest-replay-only added
* Current issues mostly fixed

2013-09-02 ~ Theo

* Folders and Files added






