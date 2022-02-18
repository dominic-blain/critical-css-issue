const critical = require('critical')

critical.generate({
	base: 'test/',
	inline: true,
	src: "index.html",
	target: "index-critical.html"
});
