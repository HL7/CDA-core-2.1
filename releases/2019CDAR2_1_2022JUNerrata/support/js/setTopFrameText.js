function setHeadingTextFromFileName(href) {
	setHeadingTextFromFileName(href, "");
}

function openNavFolder(href){
	var lastSlash = href.lastIndexOf('/');
	var fileName = href.substr(lastSlash);
	fileName = fileName.toLowerCase();
	var replacestring = '|_=+~`*[]{}%$#@! -?,;:()';
	fileName = fileName.replace('?','');
	fileName = fileName.replace('(','');
	fileName = fileName.replace(')','');
	fileName = fileName.replace('[','');
	fileName = fileName.replace(']','');
	fileName = fileName.replace(/\.|-|_|\s+|,|\//g,'');
	fileName = fileName.replace('/','');
	var firstTest = fileName.replace('#','');
	
	var folderObj;
	//alert("firsttest:" + firstTest);
	folderObj = parent.treeframe.findObj(firstTest);
	//alert(folderObj);
	if (folderObj != null){
		openFolderInTree(firstTest);
	}else{
		var xid = parent.treeframe.findObjFuzzy(fileName);
		//alert(xid);
		if (xid != null){
			openFolderInTree(xid);
		}
			
	}

}

   function expandTree(folderObj) {
    var childObj;
    var i;

    // Open the folder
    if (!folderObj.isOpen)
      parent.treeframe.clickOnNodeObj(folderObj)

    // Call this function for all children
    for (i=0 ; i < folderObj.nChildren; i++)  {
      childObj = folderObj.children[i]
      if (typeof childObj.setState != "undefined") { // If this is a folder
        expandTree(childObj)
      }
    }
   }

   // The collapseTree function closes all nodes in the tree. 
   function collapseTree() {
    // Close all folder nodes
    parent.treeframe.clickOnNodeObj(parent.treeframe.foldersTree)
    // Restore the tree to the top level
    parent.treeframe.clickOnNodeObj(parent.treeframe.foldersTree)
   }

   // The openFolderInTree function open all children nodes of the specified 
   // node.  Note that in order to open a folder, we need to open the parent
   // folders all the way to the root.  (Of course, this does not affect 
   // selection highlight.)
   function openFolderInTree(linkID) {
    var folderObj;
    folderObj = parent.treeframe.findObj(linkID);
    folderObj.forceOpeningOfAncestorFolders();
    if (!folderObj.isOpen)
     parent.treeframe.clickOnNodeObj(folderObj);
   } 

   // The loadSynchPage function load the appropriate document, as if
   // the specified node on the tree was clicked.  This function also
   // synchronizes the frames and highlights the selection (if highlight 
   // is enabled).
   function loadSynchPage(linkID) {
    var folderObj;
    docObj = parent.treeframe.findObj(linkID);
    docObj.forceOpeningOfAncestorFolders();
    parent.treeframe.clickOnLink(linkID,docObj.link,'basefrm'); 

    // Scroll the tree to show the selected node.
    // For this function to work with frameless pages, you will need to
    // remove the following code and also probably change other code in 
    // these functions.
    if (typeof parent.treeframe.document.body != "undefined") // To handle scrolling not working with NS4
     parent.treeframe.document.body.scrollTop=docObj.navObj.offsetTop
   } 
function setHeadingTextFromFileName(href, optionalSubdivnName) {
	if (!href.match("toc=true")){
		openNavFolder(href);
	}

	var lastSlash = href.lastIndexOf('/');
	var fileName = href.substr(lastSlash);
	var lastPeriod = href.lastIndexOf('.');
	var fileName = href.substring(lastSlash +1, lastPeriod);
	var domainsHash = getDomainsHash();  
	var uppercaseFileName = fileName.toUpperCase();
	if(fileName.length  == 4){
	var baseFileName = uppercaseFileName.substring(0,4);
	}
	else if(fileName.length  == 5){
		var baseFileName = uppercaseFileName.substring(0,5);
	}
	var artifactID = uppercaseFileName.substring(5,7);
	var underscore = uppercaseFileName.substring(7,8);
	var artifactType = fileName.substring(8,10);
	if(hashKeyExists(baseFileName, domainsHash)){
	      var domainLabel = getHashValue(baseFileName,domainsHash);
		if (fileName.length == 4){
			setHeadingText(domainLabel);
		}
		else if (fileName.length > 4){
			var artifactIDHash = getArtifactIDHash();
			var artiFactTypeHash = getArtifactTypeHash();
			
			if (optionalSubdivnName != null){
				var baseClassName = getCamelCase(fileName);
				setHeadingText(domainLabel + "<br>" + optionalSubdivnName);
			}			
			else if((underscore != '_') | (artifactID != 'DO') ){
				var baseClassName = getCamelCase(fileName);
				setHeadingText(domainLabel + "<br>" + baseClassName);
			}else{
				var artifactIDLabel = getHashValue(artifactID,artifactIDHash);
				var artifactTypeLabel =getHashValue(artifactType,artifactTypeHash);
				setHeadingText(domainLabel + "<br>" + artifactTypeLabel);
			}
		}
	}
	else{
			var foundationsHash = getFoundationsHash();
			var foundationLabel=getHashValue(uppercaseFileName,foundationsHash);
			setHeadingText(foundationLabel);
		}
	
}
function getDomainsHash(){
	var domains = [      
		{key: "UVAB",  value: 'Domain: Account and Billing'},                    
		{key: "UVAI",  value: 'Domain: Message Control Act Infrastructure'},                    
		{key: "UVBB",  value: 'Domain: Blood, Tissue and Organ'},
		{key: "UVCD",  value: 'Domain: Structured Documents'}, 
		{key: "UVCG",  value: 'Domain: Clinical Genomics'}, 
		{key: "UVCI",  value: 'Domain: Transmission Infrastructure'},                    
		{key: "UVCP",  value: 'Domain: Common Product Model'},                    
		{key: "UVCR",  value: 'Domain: Claims &amp; Reimbursement'},                    
		{key: "UVCS",  value: 'Domain: Clinical Statement'},
		{key: "UVCT",  value: 'Domain: Common Message Element Types'},                    
		{key: "UVDI",  value: 'Domain: Diagnostic Imaging'},
		{key: "UVDS",  value: 'Domain: Clinical Decision Support'},                    
		{key: "UVEM",  value: 'Domain: Emergency Medical Services'}, 
		{key: "UVII",  value: 'Domain: Imaging Integration'}, 
		{key: "UVIZ",  value: 'Domain: Immunization'}, 
		{key: "UVLB",  value: 'Domain: Laboratory'},     
		{key: "UVME",  value: 'Domain: Medication'},  
		{key: "UVMI",  value: 'Domain: Master File / Registry Infrastructure'},                    
		{key: "UVMM",  value: 'Domain: Materials Management'},
		{key: "UVMR",  value: 'Domain: Medical Records'},                    
		{key: "UVMT",  value: 'Domain: Shared  Messages'},                    
		{key: "UVNU",  value: 'Domain: Diet &amp; Nutrition'},                    
		{key: "UVOB",  value: 'Domain: Observations'},
		{key: "UVOR",  value: 'Domain: Orders'},
		{key: "UVPA",  value: 'Domain: Patient Administration'},                    
		{key: "UVPC",  value: 'Domain: Care Provision'},                    
		{key: "UVPH",  value: 'Domain: Public Health'},                    
		{key: "UVPM",  value: 'Domain: Personnel Management'},                    
		{key: "UVQI",  value: 'Domain: Query Infrastructure'},
		{key: "UVQM",  value: 'Domain: Quality Measures'},                    
		{key: "UVRG",  value: 'Domain: Registries'},
		{key: "UVRP",  value: 'Domain: Regulated Product Submissions'},
		{key: "UVRR",  value: 'Domain: Regulated Reporting'},
		{key: "UVRT",  value: 'Domain: Regulated Studies'},
		{key: "UVRX",  value: 'Domain: Pharmacy'},
		{key: "UVSC",  value: 'Domain: Scheduling'},                    
		{key: "UVSP",  value: 'Domain: Specimen'},                    
		{key: "UVTD",  value: 'Domain: Therapeutic Devices'},
		{key: "GBLB",  value: 'Domain: UK Laboratory'},              
		{key: "GBCT",  value: 'Domain: UK Common Message Element Types'}               
		]
	return domains;
}
function getArtifactIDHash(){
	var artifactIDHash = [ 
		{key: "DO",  value: 'Domain'},
		{key: "SB",  value: 'Message Definitions'},
		{key: "QU",  value: 'Query Based'},
		{key: "MF",  value: 'Master Files'}
		]
	return artifactIDHash;
}
function getArtifactTypeHash(){
	var artifactTypeHash = [ 
		{key: "CT",  value: 'CMETs'},
		{key: "CM",  value: 'Refined Message Information Models / Hierarchical Message Descriptions'},
		{key: "DM",  value: 'Domain Message Information Model'},
		{key: "ST",  value: 'Story Boards'},
		{key: "AR",  value: 'Application Roles'},
		{key: "HD",  value: 'Hierarchical Message Descriptions'},
		{key: "IN",  value: 'Interactions'},
		{key: "XX",  value: 'Interaction Indicies'},
		{key: "TE",  value: 'Trigger Events'},
		{key: "RM",  value: 'Refined Message Information Models'}
		]
	return artifactTypeHash;
}

function getFoundationsHash(){
	var foundationsHash = [
		{key: "INTRO",  value: 'Introduction to HL7 Version 3 Normative Edition'},                    
		{key: "VOCABULARY",  value: 'Vocabulary'},                    
		{key: "BACKBONE",  value: 'Package Notes to Readers'},                   
		{key: "V3GUIDE",  value: 'HL7 V3 Guide'},                    
		{key: "RIM",  value: 'Reference Information Model'},                    
		{key: "CONFORMANCE",  value: 'Refinement, Constraint and Localization'},                    
		{key: "GLOSSARY",  value: 'Glossary'},                    
		{key: "DATATYPES",  value: 'Data Types: Abstract Specification'},                    
		{key: "DATATYPES_R2",  value: 'Data Types: Abstract Specification, Release 2'}, 
		{key: "V3MODELCOREPRINCIPLES", value: 'Core Principles and Properties of V3 Models'},
		{key: "HDATAAPI", value: 'hData RESTful API, Release 1'},
		{key: "HDATADF", value: 'hData Record Format, Release 1'},
		{key: "DATATYPES_ITS_XML",  value: 'ITS: XML Data Types, Release 1'}, 
		{key: "DATATYPES_R1DOT1_ITS_XML",  value: 'ITS: XML Data Types, Release 1.1'}, 
		{key: "RIM-SERIALIZATION",  value: 'ITS: RIM Serializations, Release 1'}, 
		{key: "DATATYPES_ITS_XML_r2",  value: 'ITS: XML Data Types, Release 2'},
		{key: "MESSAGING_ITS_XML",  value: 'ITS: XML Structures'},    
		{key: "MESSAGING_ITS_XML1DOT1",  value: 'ITS: XML for V3 Structures 1.1'},    
		{key: "MESSAGING_ITS_XML2DOT0",  value: 'ITS: XML for V3 Structures 2.0'},    
		{key: "DATATYPES_ITS_XML_R2WFC",  value: 'ITS: XML - Data Types - Abstract DT R2 Implemented in Wire Format Compatible With DT R1, Release 1'},    
		{key: "MESSAGING_ITS_XML_R2WFC",  value: 'ITS: XML - Structures - Abstract DT R2 Implemented in Wire Format Compatible With DT R1, Release 1'},    
		{key: "NEWITSSPEC",  value: 'ITS: XML Implementation Technology Specification, Release 2'},    
		{key: "NEWITSGUIDE",  value: 'ITS: XML Implementation Technology Specification R2 GUIDE, Release 1'},    
		{key: "ISODATATYPES",  value: 'ITS: ISO DATA TYPES, Release 1'},  
		{key: "SAIFCD",  value: 'FOUNDATION: Service-Aware Interoperability Framework: Canonical Definition, Release 1'},
		{key: "TRANSPORT_ABSTRACT",  value: 'Abstract Transport Specification'},        
		{key: "TRANSPORT_INTRO",  value: 'Transport Specifications'},        
		{key: "TRANSPORT_EBXML", value: 'Transport Specifications: ebXML'},
		{key: "TRANSPORT_MLLP", value: 'Transport Specifications: MLLP'},
		{key: "TRANSPORT_WSPROFILES", value: 'Transport Specifications: SOAP/WSDL Profiles'},
		{key: "TRANSPORT_RMMI", value: 'Transport Specifications: ISO 9660 Removable Media'},
		{key: "TRANSPORT_EBMS2", value: 'Transport Specifications: ebXML Using ebMS 2.0'},
		{key: "DATATYPES_ITS_UML",  value: 'ITS: UML Data Types'},
		{key: "SECURITY_OVERVIEW", value: 'Privacy and Security'},
		{key: "SECURITY", value: 'Healthcare Access Control Catalog (HACC)'},
		{key: "SECURITY_ONTOLOGY", value: 'Security and Privacy Ontology'},
		{key: "DS4P", value: 'Data Segmentation for Privacy'},
		{key: "HEALTHCARE_CLASS_SYS", value: 'Healthcare Privacy and Security Classification System (HCS)'},
		{key: "HDF", value: 'HL7 Development Framework'},
		{key: "HDFAPPENDIX", value: 'HDF Appendix'},
		{key: "HDFIMPLPROFILING", value: 'HDF Implementation Profiling'},
		{key: "HDFPROJECTINITIATION", value: 'HDF Project Initiation'},
		{key: "HDFREQUIREMENTSDOC", value: 'HDF Requirements Documentation'},
		{key: "HDFSPECAPPROVAL", value: 'HDF Specification Approval'},
		{key: "HDFSPECDOCUMENTATION", value: 'HDF Specifications Documentation'},
		{key: "HDFSPECMODELING", value: 'HDF Specification Modeling'},
		{key: "HDFSPECPUBLICATION", value: 'HDF Specification Publication'},	
		{key: "TERMINFO", value: 'Using SNOMED CT'},
		{key: "RLUS", value: 'Resource Location and Updating Service'},
		{key: "EIS", value: 'Identification Service'},
		{key: "DSS", value: 'Decision Support Service, Release 1'},
		{key: "DSS_R2", value: 'Decision Support Service, Release 2'},
		{key: "HCSPDIR", value: 'Healthcare, Community and Services Provider Directory'},
		{key: "SOA4HL7", value: 'SOA4HL7 Methodology'},
		{key: "SERVICES_ORDERSRVINT", value: 'Ordering Service Interface'},
		{key: "SERVICES_USUNIFIEDCOMMUNICATION", value: 'Unified Communication Service Interface'},
		{key: "SERVICES_EVENTPUBSUB", value: 'Event Publish and Subscribe Service Interface'},
		{key: "PASS_SLS", value: 'PASS Security Labeling Service'},
		{key: "PFG", value: 'Version 3 Publishing Facilitators Guide'},
		{key: "SUBS", value: 'Substantive Change'},
		{key: "CDA",  value: 'Clinical Document Architecture'},
		{key: "CTS",  value: 'Common Terminology Services, Release 1'},
		{key: "CTS_R2",  value: 'Common Terminology Services, Release 2'},
		{key: "TEMPLATES", value: 'Templates Project'},
		{key: "CONSTRAINTS", value: 'Constraints Project'},
		{key: "GELLO",  value: 'GELLO R1: An OCL-Like Common Expression Language'},
		{key: "GELLO2",  value: 'GELLO R2: An OCL-Like Common Expression Language'},
		{key: "GELLO2",  value: 'V3 GELLO R1: An OCL-Based Common Expression Language'},
		{key: "MITA", value: 'Medicaid Information Technology Architecture Style Guide'},
		{key: "SCHEMAS",  value: 'V3 Schemas'},
		{key: "EXAMPLES",  value: 'V3 Examples from All Domains Where Available'},
		{key: "UVANS",  value: 'DAM: Preoperative Anethesiology'},
		{key: "UVBHA",  value: 'DAM: Behavioral Health Assessment'},
		{key: "UVCGN",  value: 'DAM: Clinical Genomics'},
		{key: "UVCRD",  value: 'DAM: Cardiology'},
		{key: "UVEMS",  value: 'DAM: Emergency Medical Services'},
		{key: "UVDCM",  value: 'DAM: Detailed Clinical Models'},
		{key: "UVDMD",  value: 'DAM: Detailed Clinical Models for Medical Devices'},
		{key: "UVIMZ",  value: 'DAM: Immunization'},
		{key: "UVMDD",  value: 'DAM: Major Depressive Disorder'},
		{key: "UVNUT",  value: 'DAM: Nutrition'},
		{key: "UVPCD",  value: 'DAM: Composite Privacy Consent Directive'},
		{key: "UVREG",  value: 'DAM: Interdependent Registries'},
		{key: "UVSCZ",  value: 'DAM: Schizophrenia'},
		{key: "UVSEC",  value: 'DAM: Healthcare Security'},
		{key: "UVSHI",  value: 'DAM: Semantic Health Information Performance and Privacy Standard (SHIPPS)'},
		{key: "UVTBS",  value: 'DAM: Tuberculosis Surveillance, Diagnosis, Treatment and Research'},
		{key: "UVTRM",  value: 'DAM: Trauma Registry Data Submission'},
		{key: "UVULC",  value: 'DAM: Pressure Ulcer Prevention'},
		{key: "UVVMR",  value: 'DAM: Virtual Medical Record (vMR)'},
		{key: "UVVRC",  value: 'DAM: Vital Records'},
		]
return foundationsHash;
}

function hashKeyExists(key, hashTable){
    	 for (var n in hashTable) {
        	 if (hashTable[n].key == key)
            	 return true;
    	}
    	return false;
}

function getHashValue(key, hashTable){
    	 for (var n in hashTable) {
        	 if (hashTable[n].key == key)
            	 return hashTable[n].value;
    	}
	return '';
}
function setHeadingText(text) {
	top.heading.document.getElementById('headingText').innerHTML=text;
}
function find(what) {
    for (var i=0;i<parent.frames.length;i++) {
         if (parent.frames[i].name == what)
             return true;
    }
    return false;
}
function getCamelCase(fileName){
				var camelCase = fileName.substr(7,fileName.length);
				var txt;
				for (i =0;i<=camelCase.length;i++){
					if (i ==0){
						txt = camelCase.substr(i,1);
					}else{
						var c = camelCase.substr(i,1);
						if(c=='A'||c=='B'||c=='C'||c=='D'||c=='E'||c=='F'||c=='G'||c=='H'||c=='I'||c=='J'||c=='K'||c=='L'||c=='M'||c=='N'||c=='O'||c=='P'||c=='Q'||c=='R'||c=='S'||c=='T'||c=='U'||c=='V'||c=='W'||c=='X'||c=='Y'||c=='Z'){
							txt =  txt + " " + c;
						}
						else{
							txt =  txt + c;
						}
						
					}

				}
				return txt;
}