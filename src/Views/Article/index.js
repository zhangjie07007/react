import React, { Component } from 'react'
import { Card, Button, Table } from 'antd';
import { connect } from 'react-redux'
import {getList} from '../../Store/Action/list'
//https://jsonplaceholder.typicode.com/todos
//https://jsonplaceholder.typicode.com/comments
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'email',
        dataIndex: 'email',
    },
    {
        title: 'body',
        dataIndex: 'body',
    },
    {
        title: '操作',
        render:(text, record, index)=>{
            // console.log(text, record, index)
            return <Button icon = 'edit' size = 'small'>编辑</Button>
        }
    },
];

const data = [];
for (let i = 0; i < 6; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        // option:<Button icon = 'edit' size = 'small'>编辑</Button>
        
    });
}

class Article extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        isload:false,
        isPagenation:false,
        list:[
            {
                postId: 1,
                id: 1,
                name: "id labore ex et quam laborum",
                email: "Eliseo@gardner.biz",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            }
        ]
    };
    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         isload:false
        //     })
        // },1000)
        // setTimeout(()=>{
        //     this.setState({
        //         isPagenation:true
        //     })
        // },9000)
        this.props.getList()
        console.log(this.props.isLoad)
    }
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
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
                extra={<Button>导出Excel</Button>}
                style={{ height: 700 }}
            >
                <Table 
                    loading = {this.state.isload} 
                    rowSelection={rowSelection} 
                    columns={columns} 
                    loading = {this.props.isLoad}
                    dataSource={this.props.list}
                    pagination = {{
                        pageSize:6
                    }}
                   
                
                 />;

            </Card>
        )
    }
}

const getProps = props => {
    console.log(props)
    return {
        list:props.reducer.datalist,
        isLoad:props.reducer.isLoad
    }
}

 export default connect(getProps,{getList})(Article)