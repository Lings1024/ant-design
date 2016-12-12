webpackJsonp([135,204],{

/***/ 1609:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "A Selector similar to Select2."], ["h2", "When To Use"], ["ul", ["li", ["p", "A dropdown menu for choosing, an elegant alternative to the native select component."]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "/components/radio/"
	  }, "Radio"], " is a better solution when options amount is too little (less than 5)."]]]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "title": "Select",
	    "filename": "components/select/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lucy<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>lucy<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Select>\n  <Option value=\"lucy\">lucy</Option>\n</Select>"]], ["h3", "Select props"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "value"], ["td", "Current selected option."], ["td", "string/Array", ["string"]], ["td", "-"]], ["tr", ["td", "defaultValue"], ["td", "Initial selected option."], ["td", "string/Array", ["string"]], ["td", "-"]], ["tr", ["td", "multiple"], ["td", "Allow multiple select."], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "allowClear"], ["td", "Show clear button, working in single mode only."], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "filterOption"], ["td", "If true, filter options by input, if function, filter options against it. The function will receive two arguments, ", ["code", "inputValue"], " and ", ["code", "option"], ", if the function returns ", ["code", "true"], ", the option will be included in the filtered set; Otherwise, it will be excluded."], ["td", "boolean or function(inputValue, option)"], ["td", "true"]], ["tr", ["td", "tags"], ["td", "When tagging is enabled the user can select from pre-existing options or create a new tag by picking the first choice, which is what the user has typed into the search box so far."], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "onSelect"], ["td", "Called when a option is selected. param is option's value and option instance."], ["td", "function(value, option)"], ["td", "-"]], ["tr", ["td", "onDeselect"], ["td", "Called when a option is deselected. param is option's value. only called for multiple or tags, effective in multiple or tags mode only."], ["td", "function(value)"], ["td", "-"]], ["tr", ["td", "onChange"], ["td", "Called when select an option or input value change, or value of input is changed in combobox mode"], ["td", "function(value, label)"], ["td", "-"]], ["tr", ["td", "onSearch"], ["td", "Callback function that is fired when input changed."], ["td", "function(value: String)"], ["td"]], ["tr", ["td", "onBlur"], ["td", "Called when blur"], ["td", "function"], ["td", "-"]], ["tr", ["td", "onFocus"], ["td", "Called when focus"], ["td", "function"], ["td", "-"]], ["tr", ["td", "placeholder"], ["td", "Placeholder of select"], ["td", "string"], ["td", "-"]], ["tr", ["td", "notFoundContent"], ["td", "Specify content to show when no result matches.."], ["td", "string"], ["td", "'Not Found'"]], ["tr", ["td", "dropdownMatchSelectWidth"], ["td", "Whether dropdown's with is same with select."], ["td", "boolean"], ["td", "true"]], ["tr", ["td", "optionFilterProp"], ["td", "Which prop value of option will be used for filter if filterOption is true"], ["td", "string"], ["td", "value"]], ["tr", ["td", "optionLabelProp"], ["td", "Which prop value of option will render as content of select."], ["td", "string"], ["td", ["code", "children"]]], ["tr", ["td", "combobox"], ["td", "Enable combobox mode(can not set multiple at the same time)."], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "size"], ["td", "Size of Select input. ", ["code", "large"], " ", ["code", "small"]], ["td", "String"], ["td", "default"]], ["tr", ["td", "showSearch"], ["td", "Whether show search input in single mode."], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "disabled"], ["td", "Whether disabled select"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "dropdownStyle"], ["td", "style of dropdown menu"], ["td", "object"], ["td", "-"]], ["tr", ["td", "dropdownClassName"], ["td", "className of dropdown menu"], ["td", "string"], ["td", "-"]], ["tr", ["td", "getPopupContainer"], ["td", "Parent Node which the selector should be rendered to. Default to ", ["code", "body"], ". When position issues happen, try to modify it into scrollable content and position it relative.", ["a", {
	    "title": null,
	    "href": "http://codepen.io/anon/pen/xVBOVQ?editors=001"
	  }, "example"]], ["td", "function(triggerNode)"], ["td", "() => document.body"]], ["tr", ["td", "labelInValue"], ["td", "whether to embed label in value"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "tokenSeparators"], ["td", "Separator used to tokenize on tag/multiple mode"], ["td", "string[]?"], ["td"]]]], ["h3", "Option props"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "disabled"], ["td", "Disable this option"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "key"], ["td", "if react request you to set this property, you can set it to value of option, and then ignore value property."], ["td", "String"], ["td"]], ["tr", ["td", "value"], ["td", "default to filter with this property"], ["td", "String"], ["td", "-"]]]], ["h3", "OptGroup props"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "label"], ["td", "Group label"], ["td", "String/React.Element"], ["td", "-"]], ["tr", ["td", "key"], ["td"], ["td", "String"], ["td", "-"]]]]]
	};

/***/ }

});