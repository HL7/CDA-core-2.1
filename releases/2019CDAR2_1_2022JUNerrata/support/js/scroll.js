NS = (document.layers) ? 1 : 0;
IE = (document.all) ? 1 : 0;

function init() {

leftFrame = parent.frames.leftf;
topFrame = parent.frames.topf;
mainFrame=parent.frames.main;
lineupframes();

	if (IE) onscroll = syncFrames;
}


function lineupframes()
{
	if(IE)
	{
		syncFrames();
	}
	if(NS)
	{
		monitorFrame();
	}
}


function syncFrames() {
leftFrame = parent.frames.leftf;
topFrame = parent.frames.topf;
mainFrame=parent.frames.main;

  leftFrame.document.body.scrollTop = document.body.scrollTop;
  topFrame.document.body.scrollLeft = document.body.scrollLeft;
}

function monitorFrame() {

leftFrame = parent.frames.leftf;
topFrame = parent.frames.topf;
mainFrame=parent.frames.main;

  if (leftFrame.scrollbars.visible) {setInterval("scrollFrame()",10);}
  else {setInterval("scrollLayer()",10);}
}

function scrollLayer() {

leftFrame = parent.frames.leftf;
topFrame = parent.frames.topf;
mainFrame=parent.frames.main;

	//alert(topFrame.document.layers[0].left);
	//alert(pageXOffset);
	//alert(leftFrame.document.layers[0].top);
	//alert(pageYOffset);

	//alert(topFrame.document.layers[2].name);
	topFrame.document.layers[2].left = -pageXOffset;
	

	leftFrame.document.layers[0].top = -pageYOffset;
}


function scrollFrame() {

leftFrame = parent.frames.leftf;
topFrame = parent.frames.topf;
mainFrame=parent.frames.main;

  leftFrame.scrollTo(leftFrame.pageXOffset,pageYOffset);
  topFrame.scrollTo(pageXOffset,topFrame.pageYOffset);
}

function setStatus(columndesc) {
  status = columndesc
  return true
}