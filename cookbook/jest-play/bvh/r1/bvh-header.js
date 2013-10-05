var bvhHeader =
"HIERARCHY\n" +
"ROOT rForeArm\n" +
"{\n" +
"	OFFSET 0 0 20 \n" +
"	CHANNELS 6 Xposition Yposition Zposition Zrotation Yrotation Xrotation\n" +"	JOINT rHand\n" +
"	{\n" +
"		OFFSET 0 0 0\n" +
"		CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"		JOINT rThumb1\n" +
"		{\n" +
"			OFFSET -38 0 -15\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rThumb2\n" +
"			{\n" +
"				OFFSET -5 0 20\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rThumb3\n" +
"				{\n" +
"					OFFSET 0 0 25\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET 0 0 20\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rIndex1\n" +
"		{\n" +
"			OFFSET  -30 0 42\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rIndex2\n" +
"			{\n" +
"				OFFSET  0 0 30\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rIndex3\n" +
"				{\n" +
"					OFFSET -0 0 25\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET 0 0 30\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rMid1\n" +
"		{\n" +
"			OFFSET 0 0 52\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rMid2\n" +
"			{\n" +
"				OFFSET 0 0 30\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rMid3\n" +
"				{\n" +
"					OFFSET 0 0 30\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET 0 0 30\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rRing1\n" +
"		{\n" +
"			OFFSET 25 0 48\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rRing2\n" +
"			{\n" +
"				OFFSET 0 0 30\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rRing3\n" +
"				{\n" +
"					OFFSET 0 0 30\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET 0 0 20\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"		JOINT rPinky1\n" +
"		{\n" +
"			OFFSET 45 0 28\n" +
"			CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"			JOINT rPinky2\n" +
"			{\n" +
"				OFFSET 0 0 20\n" +
"				CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"				JOINT rPinky3\n" +
"				{\n" +
"					OFFSET 0 0 20\n" +
"					CHANNELS 3 Zrotation Yrotation Xrotation\n" +
"					End Site\n" +
"					{\n" +
"						OFFSET 1 0 20\n" +
"					}\n" +
"				}\n" +
"			}\n" +
"		}\n" +
"	}\n" +
"}\n" +
"MOTION\n";