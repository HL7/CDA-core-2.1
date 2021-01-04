# cda-core-2.1
CDA Schema and FHIR Logical model for CDA (supports the CCDA on FHIR guide, and other CDA/FHIR mapping projects)

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

## FHIR Logical Models for CDA

**The FHIR Logical Model for CDA R2.1 has not been created, yet.**
