import hljs from 'highlight.js';

export default function chunkIt(arr) {
	if (arr.length) {
		const headArr = arr.shift();
		headArr.forEach(function (el) {
			hljs.highlightBlock(el);
		});
		setTimeout(() => chunkIt(arr), 1000);
	}
}