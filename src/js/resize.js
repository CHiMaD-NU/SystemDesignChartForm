//attach listener on window resize and run it once to start

function resizer(){


		//resize svg as needed
		params.svg
			.style('width',d3.select('#container').node().getBoundingClientRect().width - 20)
			.style('height',d3.select('#container').node().getBoundingClientRect().height);

		//redefine the clipping mask
		params.svg.select('#myClip').selectAll('rect').remove();
		defineSVGclip();

		//remove arrows and add them back
		d3.selectAll('.arrow').remove();
		addArrows();

		//resize the form
		var el = document.getElementById("form");
		el.height = window.innerHeight - el.getBoundingClientRect().top - 0.02*window.innerWidth; //not sure what to subtract here (or why it is needed!). I think this must be because of the margin, but I can't seem to get the browser to give me the current value (it always returns 0)
}