import React, { Component } from 'react'
import { Card, Button, Table,Alert } from 'antd';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getList} from '../../Store/Action/list'
import XLSX from 'xlsx'

let {Group} = Button;
@withRouter
class Article extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        isload:false,
        isPagenation:false,
        visible: false,
        columns : [
            {
                title: <h3 style = {{color:'#333'}}>name</h3>,
                dataIndex: 'name',
                align:'center',
            },
            {
                title: <h3 style = {{color:'#333'}}>email</h3>,
                dataIndex: 'email',
                align:'center',
            },
            {
                title: <h3 style = {{color:'#333'}}>内容</h3>,
                dataIndex: 'body',
                align:'center',
            },
            {
                title:<h3 style = {{color:'#333'}}>操作</h3>,
                width:150,
                align:'center',
                render:(text, record, index)=>{
                    // console.log(text, record, index)
                    return (
                        <div>
                            <Group>
                                <Button size = 'small' type = 'parmary' onClick = {this.toEdit.bind(this,{text, record, index})}>编辑</Button>
                                <Button size = 'small' type = 'danger' onClick = {this.toDel.bind(this,record)}>删除</Button>
                            </Group>
                        </div>
                    )
                }
            },
        ],
    };
    componentDidMount(){
        this.props.getList()
        // console.log(this.props)
    }
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    toEdit (obj)  {
        // console.log(obj.record.id)
        this.props.history.push(`/admin/article/edit/${obj.record.id}`)
    }
    toDel(msg,e){
        // console.log(msg)
        this.setState({ visible: true });
    }
    handleClose = () => {
        this.setState({ visible: false });
      };
    toExcel = () => {
        let title = [['name','email','body']]
        for(let i = 0 ; i < this.props.list.length ; i++){
            title.push([
                this.props.list[i].name,
                this.props.list[i].email,
                this.props.list[i].body,
            ])
        }
        // console.log(title)
        // let data = [["a","b"],[8,7],[8,7] ]
		let ws = XLSX.utils.aoa_to_sheet(title);
		let wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
		/* generate XLSX file and send to client */
		XLSX.writeFile(wb, "文章列表.xlsx")
    }
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [
                {
                    key: 'all-data',
                    text: 'Select All Data',
                    onSelect: () => {
                        this.setState({
                            selectedRowKeys: [...Array(46).keys()], // 0...45
                        });
                    },
                },
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
        };
        return (
            <Card
                title="文章列表"
                bordered={false}
                extra={<Button onClick = {this.toExcel}>导出Excel</Button>}
                >
                {this.state.visible ? (
                    <Alert
                    banner = {true}
                    message="Are you sure ？"
                    type="error"
                    closable
                    afterClose={this.handleClose}
                    showIcon
                  />
                    ) : null}
                <Table 
                    loading = {this.state.isload} 
                    rowSelection={rowSelection} 
                    columns={this.state.columns} 
                    loading = {this.props.isLoad}
                    dataSource={this.props.list}
                    pagination = {{
                        pageSize:6
                    }} />;
  
            </Card>
        )
    }
}

const getProps = props => {
    // console.log(props)
    return {
        list:props.reducer.datalist,
        isLoad:props.reducer.isLoad
    }
}
// kkk
 export default connect(getProps,{getList})(Article)