
        //
        // Copyright (c) 2006 by Conor O'Mahony.
        // For enquiries, please email GubuSoft@GubuSoft.com.
        // Please keep all copyright notices below.
        // Original author of TreeView script is Marcelino Martins.
        //
        // This document includes the TreeView script.
        // The TreeView script can be found at http://www.TreeView.net.
        // The script is Copyright (c) 2006 by Conor O'Mahony.
        //
        
        USETEXTLINKS = 1;  
        STARTALLOPEN = 0;
        HIGHLIGHT = 1;
        PRESERVESTATE = 1;
        GLOBALTARGET="R";
        ICONPATH = '../../support/graphics/';
        foldersTree = gFld("HL7 Version 3 Standard", "../../help/backbone/backbone.htm#bbwelco");
        _1 = gFld("Introduction","");
                _1.xID = "_1";
            _1.iconSrcClosed = ICONPATH + "book-closed-green.gif";
        _1.iconSrc = ICONPATH + "book-open-green.gif";
        	_1_1 = gLnk("T","Normative Edition 2017 Welcome","../../welcome/introduction/index.html");
                
                
                _1_1.xID = "_1_1";
                
            _1_1.iconSrcClosed = ICONPATH + "book-closed-green.gif";
        _1_1.iconSrc = ICONPATH + "book-closed-green.gif";
        	_1.addChildren([_1_1]);
           
       _2 = gFld("Foundation","");
                _2.xID = "_2";
            _2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2.iconSrc = ICONPATH + "book-open-none.gif";
        	_2_1 = gFld("Privacy and Security","");
                _2_1.xID = "_2_1";
            _2_1.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_1.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2 = gFld("Vocabulary","../../infrastructure/vocabulary/vocabulary.html");
                _2_2.xID = "_2_2";
            _2_2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2.iconSrc = ICONPATH + "book-open-none.gif";
        	_2_2_1 = gFld("Table of Contents","../../infrastructure/vocabulary/vocabulary.html");
                _2_2_1.xID = "_2_2_1";
            _2_2_1.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_1.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2_2 = gFld("Introduction","../../infrastructure/vocabulary/vocabulary.html#introduction");
                _2_2_2.xID = "vocabularyhtmlintroduction";
            _2_2_2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_2.iconSrc = ICONPATH + "book-open-none.gif";
        	_2_2_2_1 = gFld("Overview","../../infrastructure/vocabulary/vocabulary.html#overview");
                _2_2_2_1.xID = "_2_2_2_1";
            _2_2_2_1.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_2_1.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2_2_2 = gFld("Content","../../infrastructure/vocabulary/vocabulary.html#content");
                _2_2_2_2.xID = "vocabularyhtmlcontent";
            _2_2_2_2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_2_2.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2_2.addChildren([_2_2_2_1,_2_2_2_2]);
           
       _2_2_3 = gFld("HL7 Concept Domains","../../infrastructure/vocabulary/vocabulary.html#voc-domains");
                _2_2_3.xID = "vocabularyhtmlvocdomains";
            _2_2_3.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_3.iconSrc = ICONPATH + "book-open-none.gif";
        	_2_2_3_1 = gFld("Index to Concept Domains","../../infrastructure/vocabulary/vocabulary.html#VD-intro");
                _2_2_3_1.xID = "_2_2_3_1";
            _2_2_3_1.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_3_1.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2_3_2 = gFld("Guide to Concept Domain Tables","../../infrastructure/vocabulary/vocabulary.html#VD-help");
                _2_2_3_2.xID = "vocabularyhtmlvdhelp";
            _2_2_3_2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_3_2.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2_3.addChildren([_2_2_3_1,_2_2_3_2]);
           
       _2_2_4 = gFld("HL7-supported Code Systems","../../infrastructure/vocabulary/vocabulary.html#voc-systems");
                _2_2_4.xID = "vocabularyhtmlvocsystems";
            _2_2_4.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_4.iconSrc = ICONPATH + "book-open-none.gif";
        	_2_2_4_1 = gFld("Index to Code Systems","../../infrastructure/vocabulary/vocabulary.html#VC-Intro");
                _2_2_4_1.xID = "_2_2_4_1";
            _2_2_4_1.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_4_1.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2_4_2 = gFld("Guide to Code System Tables","../../infrastructure/vocabulary/vocabulary.html#VC-help");
                _2_2_4_2.xID = "vocabularyhtmlvchelp";
            _2_2_4_2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_4_2.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2_4.addChildren([_2_2_4_1,_2_2_4_2]);
           
       _2_2_5 = gFld("HL7 Value Sets","../../infrastructure/vocabulary/vocabulary.html#voc-sets");
                _2_2_5.xID = "vocabularyhtmlvocsets";
            _2_2_5.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_5.iconSrc = ICONPATH + "book-open-none.gif";
        	_2_2_5_1 = gFld("Index to Value Sets","../../infrastructure/vocabulary/vocabulary.html#VS-Intro");
                _2_2_5_1.xID = "_2_2_5_1";
            _2_2_5_1.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_5_1.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2_5_2 = gFld("Guide to Value Set Tables","../../infrastructure/vocabulary/vocabulary.html#VS-help");
                _2_2_5_2.xID = "vocabularyhtmlvshelp";
            _2_2_5_2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_5_2.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2_5.addChildren([_2_2_5_1,_2_2_5_2]);
           
       _2_2_6 = gFld("HL7 Deprecated Vocabulary Elements","../../infrastructure/vocabulary/vocabulary.html#deprecated-elements");
                _2_2_6.xID = "vocabularyhtmldeprecatedelements";
            _2_2_6.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_6.iconSrc = ICONPATH + "book-open-none.gif";
        	_2_2_6_1 = gFld("Listing of Deprecated Elements","../../infrastructure/vocabulary/vocabulary.html#Deprecation-Intro");
                _2_2_6_1.xID = "_2_2_6_1";
            _2_2_6_1.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _2_2_6_1.iconSrc = ICONPATH + "book-closed-none.gif";
        	_2_2_6.addChildren([_2_2_6_1]);
           
       _2_2.addChildren([_2_2_1,_2_2_2,_2_2_3,_2_2_4,_2_2_5,_2_2_6]);
           
       _2.addChildren([_2_1,_2_2]);
           
       _3 = gFld("Specification Infrastructure","");
                _3.xID = "_3";
            _3.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _3.iconSrc = ICONPATH + "book-open-none.gif";
        	_3_1 = gFld("Messaging","");
                _3_1.xID = "_3_1";
            _3_1.iconSrcClosed = ICONPATH + "book-closed-red.gif";
        _3_1.iconSrc = ICONPATH + "book-closed-red.gif";
        	_3_2 = gFld("Transport Specifications","");
                _3_2.xID = "_3_2";
            _3_2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _3_2.iconSrc = ICONPATH + "book-closed-none.gif";
        	_3.addChildren([_3_1,_3_2]);
           
       _4 = gFld("Implementation Technology Specifications","");
                _4.xID = "_4";
            _4.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _4.iconSrc = ICONPATH + "book-open-none.gif";
        	_4_1 = gFld("XML Guide","");
                _4_1.xID = "_4_1";
            _4_1.iconSrcClosed = ICONPATH + "book-closed-yellow.gif";
        _4_1.iconSrc = ICONPATH + "book-closed-yellow.gif";
        	_4_2 = gFld("XML Data Types","");
                _4_2.xID = "_4_2";
            _4_2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _4_2.iconSrc = ICONPATH + "book-closed-none.gif";
        	_4_3 = gFld("XML Structure","");
                _4_3.xID = "_4_3";
            _4_3.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _4_3.iconSrc = ICONPATH + "book-closed-none.gif";
        	_4.addChildren([_4_1,_4_2,_4_3]);
           
       _5 = gFld("Services","");
                _5.xID = "_5";
            _5.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _5.iconSrc = ICONPATH + "book-closed-none.gif";
        	_6 = gFld("Domain Analysis Models","");
                _6.xID = "_6";
            _6.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _6.iconSrc = ICONPATH + "book-closed-none.gif";
        	_7 = gFld("Universal Domains","");
                _7.xID = "_7";
            _7.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _7.iconSrc = ICONPATH + "book-closed-none.gif";
        	_8 = gFld("US Realm","");
                _8.xID = "_8";
            _8.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _8.iconSrc = ICONPATH + "book-closed-none.gif";
        	_9 = gFld("Background Documents","");
                _9.xID = "_9";
            _9.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _9.iconSrc = ICONPATH + "book-open-none.gif";
        	_9_1 = gFld("Glossary","../../help/glossary/glossary.html");
                _9_1.xID = "_9_1";
            _9_1.iconSrcClosed = ICONPATH + "book-closed-red.gif";
        _9_1.iconSrc = ICONPATH + "book-open-red.gif";
        	_9_1_1 = gFld("Table of Contents","../../help/glossary/glossary.html#contents");
                _9_1_1.xID = "_9_1_1";
            _9_1_1.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _9_1_1.iconSrc = ICONPATH + "book-closed-none.gif";
        	_9_1_2 = gFld("Introduction to the Glossary","../../help/glossary/glossary.html#glossaryintroduction");
                _9_1_2.xID = "glossaryhtmlglossaryintroduction";
            _9_1_2.iconSrcClosed = ICONPATH + "book-closed-red.gif";
        _9_1_2.iconSrc = ICONPATH + "book-closed-red.gif";
        	_9_1_3 = gFld("Glossary Contents","../../help/glossary/glossary.html#gl-");
                _9_1_3.xID = "glossaryhtmlgl";
            _9_1_3.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _9_1_3.iconSrc = ICONPATH + "book-closed-none.gif";
        	_9_1.addChildren([_9_1_1,_9_1_2,_9_1_3]);
           
       _9.addChildren([_9_1]);
           
       _10 = gFld("Support Files","");
                _10.xID = "_10";
            _10.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _10.iconSrc = ICONPATH + "book-open-none.gif";
        	_10_1 = gFld("Schemas","");
                _10_1.xID = "_10_1";
            _10_1.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _10_1.iconSrc = ICONPATH + "book-open-none.gif";
        	_10_1_1 = gFld("Multicache Schemas","../../processable/multicacheschemas/schemas.html");
                _10_1_1.xID = "_10_1_1";
            _10_1_1.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _10_1_1.iconSrc = ICONPATH + "book-closed-none.gif";
        	_10_1_2 = gFld("Multicache Schemas R2B","");
                _10_1_2.xID = "_10_1_2";
            _10_1_2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _10_1_2.iconSrc = ICONPATH + "book-closed-none.gif";
        	_10_1.addChildren([_10_1_1,_10_1_2]);
           
       _10_2 = gFld("Examples","../../processable/examples/examples.html");
                _10_2.xID = "_10_2";
            _10_2.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _10_2.iconSrc = ICONPATH + "book-closed-none.gif";
        	_10.addChildren([_10_1,_10_2]);
           
       _11 = gFld("Known Issues","../../welcome/issues/issues.html");
                _11.xID = "_11";
            _11.iconSrcClosed = ICONPATH + "book-closed-none.gif";
        _11.iconSrc = ICONPATH + "book-closed-none.gif";
        	
        foldersTree.addChildren([_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11]);
            foldersTree.treeID = "L1"; 
        foldersTree.xID = "bigtree";
    