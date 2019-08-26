import React, { Component } from 'react'
import { Form, Icon, Input, Button, Card } from 'antd';
import './edit.less'
@Form.create()
class Edit extends Component {
    render() {
        // console.log(this.props)

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <div className='edit-box' style={{ background: '#ECECEC', padding: '30px' }}>
                <Card
                    title='编辑文章'
                    bordered={false}
                >
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <Form.Item >
                            {getFieldDecorator('username', {
                                rules: [
                                    { 
                                        required: true, 
                                        message: 'Please input your username!' 
                                    },{
                                        min:6,
                                        message:'最少六位'
                                    }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Edit