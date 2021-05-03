"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svgEditorOptions = exports.optionInputOptions = exports.uploadOptions = exports.asyncVisualOptions = exports.tableOptions = void 0;

require("antd/es/message/style/css");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("../Table"));

var _Input = _interopRequireDefault(require("../Input"));

var _AsyncVisual = _interopRequireDefault(require("../AsyncVisual"));

var _Upload = _interopRequireDefault(require("../Upload"));

var _OptionInput = _interopRequireDefault(require("../OptionInput"));

var _SvgEditor = _interopRequireDefault(require("../SvgEditor"));

var _svg_demo = _interopRequireDefault(require("../assets/images/svg_demo.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tableOptions = [{
  title: '基本用法',
  code: 'const dataSource = [\n' + '        {\n' + '          key: \'1\',\n' + '          name: \'胡彦斌\',\n' + '          age: 32,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '        {\n' + '          key: \'2\',\n' + '          name: \'胡彦祖\',\n' + '          age: 42,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '      ];\n' + '\n' + '      const columns = [\n' + '        {\n' + '          title: \'姓名\',\n' + '          field: \'name\',\n' + '          key: \'name\',\n' + '        },\n' + '        {\n' + '          title: \'年龄\',\n' + '          field: \'age\',\n' + '          key: \'age\',\n' + '        },\n' + '        {\n' + '          title: \'住址\',\n' + '          field: \'address\',\n' + '          key: \'address\',\n' + '        },\n' + '      ];\n' + '\n' + '      return <Table data={dataSource} columns={columns} />;',
  desc: '简单的表格',
  render: function render() {
    var dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    var columns = [{
      title: '姓名',
      field: 'name',
      key: 'name'
    }, {
      title: '年龄',
      field: 'age',
      key: 'age'
    }, {
      title: '住址',
      field: 'address',
      key: 'address'
    }];
    return _react["default"].createElement(_Table["default"], {
      data: dataSource,
      columns: columns
    });
  }
}, {
  title: '固定首尾列',
  code: 'const dataSource = [\n' + '        {\n' + '          key: \'1\',\n' + '          name: \'胡彦斌\',\n' + '          age: 32,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '        {\n' + '          key: \'2\',\n' + '          name: \'胡彦祖\',\n' + '          age: 42,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '      ];\n' + '\n' + '      const columns = [\n' + '        {\n' + '          title: \'姓名\',\n' + '          field: \'name\',\n' + '          key: \'name\',\n' + '          fixed:\'left\',\n' + '          width:100,\n' + '        },\n' + '        {\n' + '          title: \'年龄\',\n' + '          field: \'age\',\n' + '          key: \'age\',\n' + '          width:2000,\n' + '        },\n' + '        {\n' + '          title: \'住址\',\n' + '          field: \'address\',\n' + '          key: \'address\',\n' + '          fixed:\'right\',\n' + '          width:100,\n' + '        },\n' + '      ];\n' + '\n' + '      return <Table data={dataSource} columns={columns} />;',
  desc: '简单的表格',
  render: function render() {
    var dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    var columns = [{
      title: '姓名',
      field: 'name',
      key: 'name',
      fixed: 'left',
      width: 100
    }, {
      title: '年龄',
      field: 'age',
      key: 'age',
      width: 2000
    }, {
      title: '住址',
      field: 'address',
      key: 'address',
      fixed: 'right',
      width: 100
    }];
    return _react["default"].createElement(_Table["default"], {
      data: dataSource,
      columns: columns
    });
  }
}, {
  title: '查询表格界面',
  code: 'const dataSource = [\n' + '        {\n' + '          key: \'1\',\n' + '          name: \'胡彦斌\',\n' + '          age: 32,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '        {\n' + '          key: \'2\',\n' + '          name: \'胡彦祖\',\n' + '          age: 42,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '      ];\n' + '\n' + '      const columns = [\n' + '        {\n' + '          title: \'姓名\',\n' + '          field: \'name\',\n' + '          key: \'name\',\n' + '        },\n' + '        {\n' + '          title: \'年龄\',\n' + '          field: \'age\',\n' + '          key: \'age\',\n' + '        },\n' + '        {\n' + '          title: \'住址\',\n' + '          field: \'address\',\n' + '          key: \'address\',\n' + '        },\n' + '      ];\n' + '\n' + '      const filterOptions = [\n' + '        {\n' + '          title:\'姓名\',\n' + '          field:\'name\',\n' + '          component:Input,\n' + '        },\n' + '        {\n' + '          title:\'年龄\',\n' + '          field:\'age\',\n' + '          component:Input,\n' + '        },\n' + '      ];\n' + '\n' + '      return <Table.Search filterOptions={filterOptions} loadData={() => ({list:dataSource,total:dataSource.length})} columns={columns} />;',
  desc: '查询表格界面，可添加后台接口、筛选条件',
  render: function render() {
    var dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    var columns = [{
      title: '姓名',
      field: 'name',
      key: 'name'
    }, {
      title: '年龄',
      field: 'age',
      key: 'age'
    }, {
      title: '住址',
      field: 'address',
      key: 'address'
    }];
    var filterOptions = [{
      title: '姓名',
      field: 'name',
      component: _Input["default"]
    }, {
      title: '年龄',
      field: 'age',
      component: _Input["default"]
    }];
    return _react["default"].createElement(_Table["default"].Search, {
      filterOptions: filterOptions,
      loadData: function loadData() {
        return {
          list: dataSource,
          total: dataSource.length
        };
      },
      columns: columns
    });
  }
}];
exports.tableOptions = tableOptions;
var asyncVisualOptions = [{
  title: '基本用法',
  desc: '当元素显示在可视区时加载',
  render: function render() {
    return _react["default"].createElement(_AsyncVisual["default"], {
      onShow: function onShow() {
        return _message2["default"].info('我在可视区了');
      }
    });
  },
  code: "<AsyncVisual onShow={() => message.info('\u6211\u5728\u53EF\u89C6\u533A\u4E86')} />"
}];
exports.asyncVisualOptions = asyncVisualOptions;
var uploadOptions = [{
  title: '基本用法',
  desc: '上传组件',
  render: function render() {
    return _react["default"].createElement(_Upload["default"], {
      onChange: function onChange(file) {
        return _message2["default"].success('收到文件，名称：' + file.name);
      }
    });
  },
  code: "<Upload onChange={(file) => message.success('\u6536\u5230\u6587\u4EF6\uFF0C\u540D\u79F0\uFF1A' + file.name)} />"
}, {
  title: '显示文件列表',
  desc: '上传组件',
  render: function render() {
    return _react["default"].createElement(_Upload["default"], {
      showList: true
    });
  },
  code: '<Upload showList />'
}, {
  title: '显示文件列表 + 显示预览图',
  desc: '上传组件',
  render: function render() {
    return _react["default"].createElement(_Upload["default"], {
      showList: true,
      showPreview: true
    });
  },
  code: '<Upload showList showPreview />'
}];
exports.uploadOptions = uploadOptions;
var optionInputOptions = [{
  title: '基本用法',
  desc: '基本用法',
  render: function render() {
    return _react["default"].createElement(_OptionInput["default"], null);
  },
  code: '<OptionInput />;'
}];
exports.optionInputOptions = optionInputOptions;
var svgEditorOptions = [{
  title: '线',
  desc: '线',
  render: function render() {
    var nodes = [{
      value: 'line',
      x1: 100,
      y1: 100,
      x2: 200,
      y2: 200,
      angle: 0,
      strokeWidth: 2,
      id: '1',
      strokeColor: '#ddd',
      zIndex: 10
    }];
    return _react["default"].createElement(_SvgEditor["default"], {
      value: nodes,
      height: 500
    });
  },
  code: 'const nodes = [\n' + '        {\n' + '          value:\'line\',\n' + '          x1:100,\n' + '          y1:100,\n' + '          x2:200,\n' + '          y2:200,\n' + '          angle:0,\n' + '          strokeWidth:2,\n' + '          id:\'1\',\n' + '          strokeColor:\'#ddd\',\n' + '          zIndex:10,\n' + '        }\n' + '      ];\n' + '      return <SvgEditor value={nodes} height={500} />;'
}, {
  title: '矩形',
  desc: '矩形',
  render: function render() {
    var nodes = [{
      value: 'rect',
      x: 100,
      y: 100,
      w: 100,
      h: 100,
      angle: 0,
      strokeWidth: 2,
      fillColor: 'transparent',
      strokeColor: '#ddd',
      id: '1',
      zIndex: 10
    }];
    return _react["default"].createElement(_SvgEditor["default"], {
      value: nodes,
      height: 500
    });
  },
  code: 'const nodes = [\n' + '        {\n' + '          value:\'rect\',\n' + '          x:100,\n' + '          y:100,\n' + '          w:100,\n' + '          h:100,\n' + '          angle:0,\n' + '          strokeWidth:2,\n' + '          fillColor:\'transparent\',\n' + '          strokeColor:\'#ddd\',\n' + '          id:\'1\',\n' + '          zIndex:10,\n' + '        }\n' + '      ];\n' + '      return <SvgEditor value={nodes} height={500} />;'
}, {
  title: '圆',
  desc: '圆',
  render: function render() {
    var nodes = [{
      value: 'circle',
      x: 100,
      y: 100,
      w: 100,
      h: 100,
      angle: 0,
      fillColor: 'transparent',
      strokeColor: '#ddd',
      strokeWidth: 2,
      id: '1',
      zIndex: 10
    }];
    return _react["default"].createElement(_SvgEditor["default"], {
      value: nodes,
      height: 500
    });
  },
  code: 'const nodes = [\n' + '        {\n' + '          value:\'circle\',\n' + '          x:100,\n' + '          y:100,\n' + '          w:100,\n' + '          h:100,\n' + '          angle:0,\n' + '          fillColor:\'transparent\',\n' + '          strokeColor:\'#ddd\',\n' + '          strokeWidth:2,\n' + '          id:\'1\',\n' + '          zIndex:10,\n' + '        }\n' + '      ];\n' + '      return <SvgEditor value={nodes} height={500} />;'
}, {
  title: '文本',
  desc: '文本',
  render: function render() {
    var nodes = [{
      value: 'text',
      x: 100,
      y: 100,
      angle: 0,
      text: '测试数据',
      strokeColor: '#ddd',
      id: '1',
      zIndex: 10
    }];
    return _react["default"].createElement(_SvgEditor["default"], {
      value: nodes,
      height: 500
    });
  },
  code: 'const nodes = [\n' + '        {\n' + '          value:\'text\',\n' + '          x:100,\n' + '          y:100,\n' + '          angle:0,\n' + '          text:\'测试数据\',\n' + '          strokeColor:\'#ddd\',\n' + '          id:\'1\',\n' + '          zIndex:10,\n' + '        }\n' + '      ];\n' + '      return <SvgEditor value={nodes} height={500} />;'
}, {
  title: '图片',
  desc: '图片',
  render: function render() {
    var nodes = [{
      value: 'img',
      img: _svg_demo["default"],
      x: 100,
      y: 100,
      w: 100,
      h: 100,
      angle: 0,
      zIndex: 10,
      id: '1'
    }];
    return _react["default"].createElement(_SvgEditor["default"], {
      value: nodes,
      height: 500
    });
  },
  code: 'const nodes = [\n' + '        {\n' + '          value:\'img\',\n' + '          img:SvgDemo,\n' + '          x:100,\n' + '          y:100,\n' + '          w:100,\n' + '          h:100,\n' + '          angle:0,\n' + '          zIndex:10,\n' + '          id:\'1\',\n' + '        }\n' + '      ];\n' + '      return <SvgEditor value={nodes} height={500} />;'
}];
exports.svgEditorOptions = svgEditorOptions;