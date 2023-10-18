# cda-core-2.1
CDA Schema and FHIR Definition for CDA R2.1

## IMPORTANT NOTICE - READ THIS BEFORE IMPLEMENTING CDA R2.1
May 24, 2023. After consultation with implementers across the globe and with a recommendation from the CDA methodology group, Structured Document Work Group, CMG voted on 
May 11, 2023 to NOT reaffirm HL7 base standard CDA R2.1 as an ANSI standard. The current plan will be to submit an HL7 Withdrawal ballot by September 2024. After withdrawal, the specification will remain on the HL7 product grid with a status of Retired.

CMG expressed sincere appreciation for the hard work that went into creating CDA R2.1. This will continue to be a valuable reference to guide decisions about further sdtc extension design that may be made to CDA R2.0 in order to expand alignment with FHIR.

CDA R2.0, an ISO recognized HL7 standard (ISO/HL7 27932:2009), will continue to be the base standard for Consolidated CDA (C-CDA) and other CDA implementation guides. Work is continuing on future versions of C-CDA (see http://hl7.org/cda/stds/ccda/draft1/).

## CDA Schema

The `schema/normative` folder contains the original published CDA Schema. This is the schema which is published with the base/core standard. This is mainly used for historical reference. See "CDA Schema Extensions" below for the latest version that includes all extensions; which most people will want to use.

The `schema/normative` directory includes the following files:

| File | Description |
| ---- | ----------- |
| CDA.xsd | The base CDA R2.1 schema which by default references POCD_MT000040UV02.xsd |
| POCD_MT000040UV02.xsd | The CDA R2.1 schema as maintained by HL7 Structured Documents Work Group |
| POCD_MT000040UVLegacy.xsd (experimental)| **See "Legacy Schema" below for more information** |
| coreschemas/datatypes.xsd | RIM Version 2.35 Data Types schema file |
| coreschemas/datatypes-base.xsd | RIM Version 2.35 Data Types schema file |
| coreschemas/datatypes-rX-cs.xsd | RIM Version 2.35 Data Types schema file |
| coreschemas/infrastructureRoot.xsd | RIM Version 2.35 Infrastructure Root schema file |
| coreschemas/NarrativeBlock.xsd | CDA R2.1 handcrafted Narrative Block schema file |
| coreschemas/voc.xsd | CDA R2.1 updated RIM Version 2.35 Vocabulary file, approved by SDWG ballot |

Note: The files were retrieved from: https://hl7.org/permalink/?CDAR2.1schema

#### Legacy Schema

A version of the CDA R2.1 schema that contains "CDA R2" extensions. This will enable parsing of legacy CDA R2 documents, but those extenstions create redundant elements to those added to CDA R2.1!

**Contact the HL7 Structured Documents Work Group before using POCD_MT000040UVLegacy.xsd**

Be aware, that using Legacy in the long term may make processing more complex, as there will be two locations for each element that was added to CDA R2.1  (CDA R2 extensions and new CDA R2.1 elements).

Follow these steps to replace the base POCD_MT000040UV02.xsd with the POCD_MT00004UVLegacy.xsd schema:

1. Rename POCD_MT000040UV02.xsd to POCD_MT000040UV02(base).xsd      	(Save a backup copy)
2. Rename POCD_MT00004UVLegacy.xsd to POCD_MT000040UV02.xsd		(Rename Legacy)

### CDA Stylesheet

The CDA Stylesheet is located [here](https://github.com/HL7/cda-core-xsl). It is currently being managed by Alex Hanket for SDWG.

## CDA Schema Extensions

**No extensions have been defined for CDA R2.1, yet.**

## FHIR Definition for CDA R2.1

**The FHIR Definition for CDA R2.1 has not been created, yet.**

## Releases Folder

The `releases` folder contains snapshots of Publication Package releases. 