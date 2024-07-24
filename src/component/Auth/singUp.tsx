"use client"
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { AddBtn } from '../btn/btn';
import t from '../language/lang'
import { uid } from 'uid';
import { CreateNewUser } from '../query';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const SingUp = () => {
    const createNewUser = CreateNewUser()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        const dataUser = {
            userId: uid(2),
            userName: values.username,
            password: values.password,
            logined: true,
            token: uid(32)
        }
        // save in localStorage
        localStorage.setItem('token', dataUser.token)
        localStorage.setItem('userId', dataUser.userId)

        // post data
        createNewUser.mutate({ ...dataUser })
    };

    return (
        <>
            <h2>{t('singUpTitle')}</h2>
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

                <Form.Item
                    name="confirm"
                    label={t('rePassword')}
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: t('errorTextRePassword'),
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error(t('passwordNotMach')));
                            },
                        }),
                    ]}
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
                    <AddBtn title={t('submitBtn')} />
                </Form.Item>
            </Form>
        </>
    )
}

export default SingUp;