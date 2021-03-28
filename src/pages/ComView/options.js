import Table, {TableSearch} from "../../components/Table";
import React from "react";
import Input from "../../components/Input";


export const tableOptions = [
  {
    title:'基本用法',
    code:'const dataSource = [\n' +
      '        {\n' +
      '          key: \'1\',\n' +
      '          name: \'胡彦斌\',\n' +
      '          age: 32,\n' +
      '          address: \'西湖区湖底公园1号\',\n' +
      '        },\n' +
      '        {\n' +
      '          key: \'2\',\n' +
      '          name: \'胡彦祖\',\n' +
      '          age: 42,\n' +
      '          address: \'西湖区湖底公园1号\',\n' +
      '        },\n' +
      '      ];\n' +
      '\n' +
      '      const columns = [\n' +
      '        {\n' +
      '          title: \'姓名\',\n' +
      '          field: \'name\',\n' +
      '          key: \'name\',\n' +
      '        },\n' +
      '        {\n' +
      '          title: \'年龄\',\n' +
      '          field: \'age\',\n' +
      '          key: \'age\',\n' +
      '        },\n' +
      '        {\n' +
      '          title: \'住址\',\n' +
      '          field: \'address\',\n' +
      '          key: \'address\',\n' +
      '        },\n' +
      '      ];\n' +
      '\n' +
      '      return <Table data={dataSource} columns={columns} />;',
    desc:'简单的表格',
    render:() => {
      const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];

      const columns = [
        {
          title: '姓名',
          field: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          field: 'age',
          key: 'age',
        },
        {
          title: '住址',
          field: 'address',
          key: 'address',
        },
      ];

      return <Table data={dataSource} columns={columns} />;
    },
  },
  {
    title:'查询表格界面',
    code:'const dataSource = [\n' +
      '        {\n' +
      '          key: \'1\',\n' +
      '          name: \'胡彦斌\',\n' +
      '          age: 32,\n' +
      '          address: \'西湖区湖底公园1号\',\n' +
      '        },\n' +
      '        {\n' +
      '          key: \'2\',\n' +
      '          name: \'胡彦祖\',\n' +
      '          age: 42,\n' +
      '          address: \'西湖区湖底公园1号\',\n' +
      '        },\n' +
      '      ];\n' +
      '\n' +
      '      const columns = [\n' +
      '        {\n' +
      '          title: \'姓名\',\n' +
      '          field: \'name\',\n' +
      '          key: \'name\',\n' +
      '        },\n' +
      '        {\n' +
      '          title: \'年龄\',\n' +
      '          field: \'age\',\n' +
      '          key: \'age\',\n' +
      '        },\n' +
      '        {\n' +
      '          title: \'住址\',\n' +
      '          field: \'address\',\n' +
      '          key: \'address\',\n' +
      '        },\n' +
      '      ];\n' +
      '\n' +
      '      return <Table data={dataSource} columns={columns} />;',
    desc:'查询表格界面，可添加后台接口、筛选条件',
    render:() => {
      const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];

      const columns = [
        {
          title: '姓名',
          field: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          field: 'age',
          key: 'age',
        },
        {
          title: '住址',
          field: 'address',
          key: 'address',
        },
      ];

      const filterOptions = [
        {
          title:'姓名',
          field:'name',
          component:Input,
        },
        {
          title:'年龄',
          field:'age',
          component:Input,
        },
      ];

      return <TableSearch filterOptions={filterOptions} loadData={() => ({list:dataSource,total:dataSource.length})} columns={columns} />;
    },
  }
];
