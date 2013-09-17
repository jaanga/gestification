var bvhHeader =
"HIERARCHY\n" +
"ROOT rForeArm\n" +
"{\n" +
"	OFFSET 0 50 0 \n" +
"	CHANNELS 6 Xposition Yposition Zposition Zrotation Yrotation Xrotation\n" +"	JOINT rHand\n" +
"	{\n" +
"		OFFSET -15 0 0 \n" +
"		CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"		JOINT rThumb1\n" +
"		{\n" +
"			OFFSET -5 0 15 \n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rThumb2\n" +
"			{\n" +
"				OFFSET -7.5 0 5\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rThumb3\n" +
"				{\n" +
"					OFFSET -7 0 0\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET -8 0 0 \n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rIndex1\n" +
"		{\n" +
"			OFFSET -22 0 9.5 \n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rIndex2\n" +
"			{\n" +
"				OFFSET -11.048796 0 0.524952 \n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rIndex3\n" +
"				{\n" +
"					OFFSET -7.105805 0 -0.624839 \n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET -5.084757 0 0 \n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rMid1\n" +
"		{\n" +
"			OFFSET -24 0 2.187303 \n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rMid2\n" +
"			{\n" +
"				OFFSET -11.665614 0 0 \n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rMid3\n" +
"				{\n" +
"					OFFSET -5.501778 0 0.137071 \n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET -2.761851 0 0.627683 \n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rRing1\n" +
"		{\n" +
"			OFFSET -24 0 -5.1\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rRing2\n" +
"			{\n" +
"				OFFSET -9.8 0 0.7\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rRing3\n" +
"				{\n" +
"					OFFSET -4.2 0 0.8 \n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET -1.8 0 0 \n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rPinky1\n" +
"		{\n" +
"			OFFSET -21 0 -11\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rPinky2\n" +
"			{\n" +
"				OFFSET -7.4 0 0.3\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rPinky3\n" +
"				{\n" +
"					OFFSET -3.5 0 0.5\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET -3.6 0 0.3\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"	}\n" +
"}\n" +
"MOTION\n";