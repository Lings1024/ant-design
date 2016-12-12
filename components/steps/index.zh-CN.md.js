webpackJsonp([128,204],{

/***/ 1634:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "引导用户按照流程完成任务的导航条。"], ["h2", "何时使用"], ["p", "当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。"]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "步骤条",
	    "type": "Navigation",
	    "cols": 1,
	    "title": "Steps",
	    "filename": "components/steps/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Steps</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Step</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>第一步<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Step</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>第二步<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Step</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>第三步<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Steps</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Steps>\n  <Step title=\"第一步\" />\n  <Step title=\"第二步\" />\n  <Step title=\"第三步\" />\n</Steps>"]], ["h3", "Steps"], ["p", "整体步骤条。"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "current"], ["td", "指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 ", ["code", "status"], " 属性覆盖状态"], ["td", "Number"], ["td", "0"]], ["tr", ["td", "status"], ["td", "指定当前步骤的状态，可选 ", ["code", "wait"], " ", ["code", "process"], " ", ["code", "finish"], " ", ["code", "error"]], ["td", "String"], ["td", "process"]], ["tr", ["td", "size"], ["td", "指定大小，目前支持普通（", ["code", "default"], "）和迷你（", ["code", "small"], "）"], ["td", "String"], ["td", "default"]], ["tr", ["td", "direction"], ["td", "指定步骤条方向。目前支持水平（", ["code", "horizontal"], "）和竖直（", ["code", "vertical"], "）两种方向"], ["td", "String"], ["td", "horizontal"]]]], ["h3", "Steps.Step"], ["p", "步骤条内的每一个步骤。"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "status"], ["td", "指定状态。当不配置该属性时，会使用 Steps 的 ", ["code", "current"], " 来自动指定状态。可选：", ["code", "wait"], " ", ["code", "process"], " ", ["code", "finish"], " ", ["code", "error"]], ["td", "String"], ["td", "wait"]], ["tr", ["td", "title"], ["td", "标题"], ["td", "React.ReactNode"], ["td", "-"]], ["tr", ["td", "description"], ["td", "步骤的详情描述，可选"], ["td", "React.ReactNode"], ["td", "-"]], ["tr", ["td", "icon"], ["td", "步骤图标的类型，可选"], ["td", "string or React.ReactNode"], ["td", "-"]]]]]
	};

/***/ }

});