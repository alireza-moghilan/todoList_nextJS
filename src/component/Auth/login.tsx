"use client";
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { AddBtn } from '../btn/btn';
import t from '../language/lang';
import { redirect } from 'next/navigation';
import { GetUserDataTodos, GetUsersOfApi, PutDataUser } from '../query';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

interface UserInfo {
    userName: string,
    password: string
}

const Login = () => {
    const { data } = GetUsersOfApi();
    const mutationUpdate = PutDataUser();

    const router = useRouter();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        data?.data?.forEach((index: any) => {
            if (index.userName === values?.username && index.password === values?.password) {
                // save in localStorage
                localStorage.setItem("token", index.token);
                localStorage.setItem("userId", index.userId);
                
                // data update
                mutationUpdate.mutate({ ...index, logined: true })
            }
        })
    };


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

                <Form.Item wrapperCol={{ offset: 0, span: 24 }} className='mb-0'>
                    <AddBtn title={t('loginBtn')} />
                </Form.Item>
                <Space className='w-100' direction="vertical" align="center"><Link href="/singUp">{t("notRegistered")}</Link></Space>
            </Form>
        </>
    )
}

export default Login;