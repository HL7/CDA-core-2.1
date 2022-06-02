/*
 * Paul V. Biron (paul.v.biron@kp.org)
 * 2005-09-26
 *
 * based on functions written by someone else (I'm not sure who) that
 * where IE-specific.  These functions are known to work in IE 6 and
 * NS 7.2...but should work in any browser that conforms to the DOM
 * Level 2 Cpre spec (http://www.w3.org/TR/DOM-Level-2-Core)
 */

/*
 * swaps the background color on a table row between
 * black and olive
 */
function highlightRow (tr, toggle) {
	tr.style.background = (toggle == 1 ? "#800000" : "black") ;
	}

/*
 * Toggles the CSS display property of table row between
 * none (hidden) and empty (shown).
 *
 * the row that is toggled is the row following the one
 * passed as the tr parameter
 *
 * \u25ba and \u25bc are the unicode codepoints (i.e., characters)
 * for right and down arrows
 */
function toggle (tr) {
	var nextTr = firstSiblingElement (tr) ;
	nextTr.style.display = (nextTr.style.display == 'none' ? '' : 'none') ;

	var td = firstChildElement (tr.childNodes) ;
	var span = firstChildElement (td.childNodes).firstChild ;
	span.nodeValue = (span.nodeValue == '\u25ba' ? '\u25bc' : '\u25ba') ;
	}

/*
 * firstChildElement (and firstSiblingElement) is necessary because
 * IE 6 and NS 7 return different things for node.firstChild:
 *
 *    IE 6 seems to strip out "ignorable" whitespace nodes, whereas
 *    NS 7 will return the whitespace Text node
 *
 * As far as I can tell, NS 7 is correct
 *
 * Another bug in IE 6 is that it doesn't know about
 * the Node.ELEMENT_NODE constant, hence we have to
 * use 'nodeType == 1' instead
 */
function firstChildElement (children) {
	var i ;
	var child ;
	for (i = 0 ; i < children.length ; i++) {
		child = children.item (i) ;
		if (child.nodeType == 1) {
			break ;
			}
		}
	if (i == children.length) {
		return (null) ;
		}
	return (child) ;
	}
function firstSiblingElement (node) {
	var sib = node.nextSibling ;
	while (sib.nodeType != 1) {
		sib = sib.nextSibling ;
		}
	return (sib) ;
	}