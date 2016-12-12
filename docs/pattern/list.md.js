webpackJsonp([101,204],{

/***/ 1736:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "交互"], ["h3", "显示详情信息"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "气泡显示示例",
	    "description": "使用『点击』触发时，应当保证激活／禁用的对称性，即在哪里打开，就在哪里关闭；另外。也支持用户点击空白区域关闭。使用『悬停』触发时，移入时设计约 0.5 秒的延时，然后激活详情气泡；移出时，立即关闭详情气泡。",
	    "src": "https://os.alipayobjects.com/rmsportal/GmpRYixxnePBPPW.png"
	  }]], ["p", "气泡显示：用户鼠标点击／悬停某个链接或内容时，在悬浮层上显示该条列表项少量的详情信息。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "列表嵌入示例1",
	    "src": "https://os.alipayobjects.com/rmsportal/WIoplWDRZspuuhD.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "列表嵌入示例2",
	    "src": "https://os.alipayobjects.com/rmsportal/tNAnTEaZtswRknD.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "列表嵌入示例3",
	    "src": "https://os.alipayobjects.com/rmsportal/MXXjEoLdnBxqcne.png"
	  }]], ["p", "列表嵌入：用户可以不用打开新页面或者打开弹框，只要通过点击，就可以直接在上下文中查看该列表项的详情信息。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "弹出层显示示例",
	    "src": "https://os.alipayobjects.com/rmsportal/HeqNyjscGEHyHmt.png"
	  }]], ["p", "弹出层显示：用户通过点击，在弹出框中查看该列表项的详情信息，但是当前列表项的上下文关系会被打断。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "双面板选择器示例",
	    "src": "https://os.alipayobjects.com/rmsportal/JXWVQXvlPSDlvyk.png"
	  }]], ["p", "双面板选择器：用户通过点击，在列表的一侧（一般为右侧）查看该列表项大量的详情信息。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "单窗口深入示例（窗口未弹出）",
	    "src": "https://os.alipayobjects.com/rmsportal/YTdIMZLeobNrjmU.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "单窗口深入示例（窗口弹出）",
	    "description": "用户通过点击，该列表项的详情信息会替换列表所在的显示区域；用户通过『面包屑』、按钮或者浏览器自带返回按钮，从详情返回列表。",
	    "src": "https://os.alipayobjects.com/rmsportal/uAeEOeoCAeTHgsQ.png"
	  }]], ["p", "单窗口深入：用户通过点击，在当前页查看大量的详情信息。此模式打破了整个列表项的上下文关系，适用在详情信息之间完全无关，或者屏幕空间实在狭小（eg：移动应用），又或者列表和内容可能非常多的应用场景中。"], ["h3", "显示更多文本"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "宽行示例",
	    "src": "https://os.alipayobjects.com/rmsportal/wWcixIvqaFXfTHd.png"
	  }]], ["p", "宽行：使某些列表项可以扩展为多行文本行来显示足够的文本内容。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "对等网格示例",
	    "src": "https://os.alipayobjects.com/rmsportal/VDhwGyyblTSJpeV.png"
	  }]], ["p", "对等网格：以网格或者矩阵的方式排列内容元素，其中每个元素都有相仿的视觉重量。"], ["h3", "显示图片"], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "走马灯示例",
	    "src": "https://os.alipayobjects.com/rmsportal/hKtAKuDfyfDpPrL.png"
	  }]], ["p", "走马灯：以一维的形式来显示图片，可用户主动触发或者系统自动播放。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "缩略图网格示例",
	    "src": "https://os.alipayobjects.com/rmsportal/LAnBHEYiqWSfQAS.png"
	  }]], ["p", "缩略图网格：以二维的形式来展现图片/Icon，具有强烈的视觉效果，可以吸引用户注意。"], ["h3", "显示长列表"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "description": "当系统性能是一个主要考虑因素时，适合使用分页器。",
	    "src": "https://os.alipayobjects.com/rmsportal/aZwrmpnaIEoxiXJ.png"
	  }]], ["p", "分页器：以分段的形式加载列表，将是否需要加载其他项的选择权交给用户。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "description": "当需要对数据进行频繁操作时，分页器会导致操作变的笨拙，尤其是出现一些跨页选择时，所以适合用无限加载；当倾向显示用户的个人所有的数据时（例如：个人订单），或者数据不是临时性的，适合使用无限加载。",
	    "src": "https://os.alipayobjects.com/rmsportal/afDpGUyoyQZFgks.png"
	  }]], ["p", "无限加载：当用户加载到第一段内容的最下方，通过监听滚轮事件或者用户点击按钮，继续加载下一段内容。"], ["h3", "显示分类或者层级的列表"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "两层折叠面板示例",
	    "src": "https://os.alipayobjects.com/rmsportal/efRpmejABrXjiwF.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "多层折叠面板示例",
	    "src": "https://os.alipayobjects.com/rmsportal/bXwBcaLQPAWTIQV.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "两层折叠面板表格",
	    "src": "https://os.alipayobjects.com/rmsportal/XaJeuLfHeSSXCJq.png"
	  }]], ["p", ["br"]], ["h2", ["span", {
	    "class": "waiting"
	  }, "案例（敬请期待）"]]],
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "列表",
	      "en-US": "List"
	    },
	    "filename": "docs/pattern/list.md"
	  },
	  "description": ["section", ["p", "列表是非常常见的界面元素，有多种使用场景："], ["ul", ["li", ["p", "获取概览"]], ["li", ["p", "逐项浏览"]], ["li", ["p", "查找特定列表项"]], ["li", ["p", "排序与过滤"]], ["li", ["p", "重新安排、添加、删除或重新分类列表项"]]]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#交互"
	  }, "交互"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#案例（敬请期待）"
	  }, ["span", {
	    "class": "waiting"
	  }, "案例（敬请期待）"]]]]
	};

/***/ }

});