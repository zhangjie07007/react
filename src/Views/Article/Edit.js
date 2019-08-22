import React, { Component } from 'react'
import {Card} from 'antd'
import './edit.less'
export default class Edit extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='edit-box' style={{ background: '#ECECEC', padding: '30px' }}>
                <Card 
                title='编辑文章' 
                bordered={false}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}
