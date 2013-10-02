var bvhHeader =
"HIERARCHY\n" +
"ROOT rForeArm\n" +
"{\n" +
"	OFFSET 0 50 0 \n" +
"	CHANNELS 6 Xposition Yposition Zposition Zrotation Yrotation Xrotation\n" +"	JOINT rHand\n" +
"	{\n" +
"		OFFSET 0 0 15\n" +
"		CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"		JOINT rThumb1\n" +
"		{\n" +
"			OFFSET 15 0 5\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rThumb2\n" +
"			{\n" +
"				OFFSET 5 0 7.5\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rThumb3\n" +
"				{\n" +
"					OFFSET 0 0 7\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET 0 0 3\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rIndex1\n" +
"		{\n" +
"			OFFSET  9.5 0 22\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rIndex2\n" +
"			{\n" +
"				OFFSET  0.5 0 11.0\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rIndex3\n" +
"				{\n" +
"					OFFSET -0.6 0 7.0\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET 0 0 5.0\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rMid1\n" +
"		{\n" +
"			OFFSET 2.2 0 24\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rMid2\n" +
"			{\n" +
"				OFFSET 0 0 11.66\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rMid3\n" +
"				{\n" +
"					OFFSET 0 0.18 5.50\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET 0.63 0 5.0\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rRing1\n" +
"		{\n" +
"			OFFSET -5.1 0 24\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rRing2\n" +
"			{\n" +
"				OFFSET 0.7 0 9.8\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rRing3\n" +
"				{\n" +
"					OFFSET 0.8 0 4.2\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET 0 0 5.0\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rPinky1\n" +
"		{\n" +
"			OFFSET -11 0 21\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rPinky2\n" +
"			{\n" +
"				OFFSET 1 0 7.5\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rPinky3\n" +
"				{\n" +
"					OFFSET 1 0 3.5\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET 1 0 5.0\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"	}\n" +
"}\n" +
"MOTION\n";