// adopted from http://stackoverflow.com/questions/187619/is-there-a-javascript-solution-to-generating-a-table-of-contents-for-a-page

String.prototype.repeat = function(num) {
	return new Array(num + 1).join(this);
}

var ToC =
  "<nav role='navigation' class=''>" +
    "<h3>Table of contents</h3>" +
    "<ul>";

var newLine, el, title, link, level, baseLevel;

$("article h2, article h3, article h4, article h5, article h6").each(function() {

	el = $(this);
	title = el.text();
	link = "#" + el.attr("id");
 
	var prevLevel = level || 0;
	level = this.nodeName.substr(1);
	if(!baseLevel) { // make sure you start with highest level of heading or it won't work
		baseLevel = level;
	}

	
 
	if(prevLevel == 0) {
		newLine = '<li>';
	} else if(level == prevLevel) {
		newLine = '</li><li>';
	} else if(level > prevLevel) {
		newLine = '<ul><li>'.repeat(level - prevLevel);
	} else if(level < prevLevel) {
		newLine = '</li></ul>'.repeat(prevLevel - level) +
		'</li><li>';
	}
	newLine += "<a href='" + link + "'>" + title 
               // + prevLevel + level
               + "</a>";

	ToC += newLine;

});

ToC += '</li></ul>'.repeat(level - baseLevel) +
			"</li>" +
		"</ul>" +
	"</nav><br>";

$(".post_toc").prepend(ToC);
