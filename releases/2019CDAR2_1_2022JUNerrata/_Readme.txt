## _Readme.txt for CDA R2.1 Schema Package

The package contains a number of files and (sub)directories. The most important ones are listed here:
- **index.html**                    - please start here, links to backbone.html
- **backbone.html**                 - the formal specification for CDA R2.1 with a perma link to the CDA schemas: https://hl7.org/permalink/?CDAR2.1schema

- **Readme.md**                     - this file
- **CTO Errata Letter.pdf**         - explains what changed in the 2021JAN erratum on CDA R2.1
- **CSDO Errata Letter.pdf**        - explains what changed in the 2022JUN erratum on CDA R2.1

- **infrastructure**                - directory
  - **cda_r2_1**                    - the CDA R2.1 specification
    - CDA_Changes.xlsx              - Excel overview of changes from CDA R2.0
    - CDA.xsl                       - very basic generic rendering tool. Please see [HL7s GitHub repository](https://github.com/hl7/cda-core-xsl) for more extensive support
    - POCD_HD000040UV02.xls         - Excel representation of the CDA Hierarchical Model Definition (HMD)
    - POCD_HD000040UV02.xlsx        - same as POCD_HD000040UV02.xls but for newer versions of Excel
    - SampleCDADocument.xml         - example instance of a CDA
    - POCD.html                     - copy of backbone.html but with local links to the CDA schemas
    - schemas.zip                   - zip file with the schemas folder for convenience
    - **schemas**
      - CDA.xsd                 - The base CDA R2.1 schema which by default references POCD_MT000040UV02.xsd
      - POCD_MT000040UV02.xsd   - The CDA R2.1 schema as maintained by HL7 Structured Documents Work Group
      - **coreschemas**             - directory of data types and other core parts for CDA. Datatypes R1 / RIM 2.35
        - datatypes.xsd		        - RIM Version 2.35 Data Types schema file
        - datatypes-base.xsd	    - RIM Version 2.35 Data Types schema file
        - datatypes-rX-cs.xsd	    - RIM Version 2.35 Data Types schema file
        - infrastructureRoot.xsd	- RIM Version 2.35 Infrastructure Root schema file
        - NarrativeBlock.xsd	    - CDA R2.1 handcrafted Narrative Block schema file
        - voc.xsd			        - CDA R2.1 updated RIM Version 2.35 Vocabulary file, approved by SDWG ballot
  - **datatypes**                       - supporting info on datatypes
  - **itsxml**                          - supporting info on Implementable Technology Specification (ITS)
  - **rim_2-35**                        - supporting info on Reference Information Model (RIM) version 2.35
  - **vocabulary_1086**                 - supporting info on applied version of the vocabulary 1086-20110315 in CDA R2.1
  - **vocabulary**                      - supporting info on default version of the vocabulary 1390-20170324 for RIM 2.35 
--------------------------------------------------------------------------------------------------------
**NOTE** 
The package contains a number of directories that are part of any HL7 V3 distribution. CDA R2.1 focusses on maximum compatibility with CDA R2.0 and as such is self contained under the infrastructure directory. Please **do not** use, copy, or implement anything from these directories: 
- **processable**
- **support**
- **welcome**
--------------------------------------------------------------------------------------------------------
**Also included in the package within the **infrastucture** / **cda_r2_1** folder: POCD_MT000040UVLegacy.xsd**

- POCD_MT000040UVLegacy.xsd         - (experimental) A version of the CDA R2.1 schema that contains "CDA R2" extensions. This will enable parsing of both legacy CDA R2 documents with extensions, as "CDA well as CDA R2.1 documents. 
					     
  Be aware, that using Legacy in the long term may make processing more complex, as there will be two locations for each element that was added to CDA R2.1  (CDA R2 extensions and new CDA R2.1 elements)

*** Follow these steps to replace the base POCD_MT000040UV02.xsd with the POCD_MT00004UVLegacy.xsd schema ***

1. Rename POCD_MT000040UV02.xsd to POCD_MT000040UV02(base).xsd     (Save a backup copy)
2. Rename POCD_MT00004UVLegacy.xsd to POCD_MT000040UV02.xsd        (Rename Legacy)