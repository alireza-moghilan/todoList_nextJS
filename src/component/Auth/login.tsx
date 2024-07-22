"use client"
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { AddBtn } from '../btn/btn';
import t from '../language/lang'

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login = () => {

    return (
        <>
            <h2>{t('loginTitle')}</h2>
            <Form
                name="basic"
                className='w-100'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ minWidth: '100%' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label={t('userName')}
                    name="username"
                    rules={[{ required: true, message: t('errorTextUserName') }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label={t('password')}
                    name="password"
                    rules={[{ required: true, message: t('errorTextPassword') }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 0, span: 16 }}
                >
                    <Checkbox>{t('remember')}</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                    <AddBtn title={t('loginBtn')} />
                </Form.Item>
            </Form>
        </>
    )
}

export default Login;