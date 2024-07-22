"use client"
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import t from "@/component/language/lang";
import { AddBtn } from '../btn/btn';


type FieldType = {
    title?: string;
    description?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormData = () => {
    return (
        <>
            <h2>{t('addTask')}</h2>
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
                    label={t('title')}
                    name="title"
                    rules={[{ required: true, message: t('errorTextTitle') }]}
                >
                    <Input placeholder={t('inputTitle')} />
                </Form.Item>

                <Form.Item<FieldType>
                    label={t('description')}
                    name="description"
                >
                    <Input.TextArea placeholder={t('inputDescription')} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                    <AddBtn title={t('addBtn')} />
                </Form.Item>
            </Form>
        </>
    )
}

export default FormData;