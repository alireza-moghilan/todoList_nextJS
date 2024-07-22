import { Button, Form } from 'antd';
// import {Childre}
const AddBtn = (props:
    { title: string }
  ) => {
    return (
        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button className="bg-main w-100" type="primary" htmlType="submit">
                {props.title}
            </Button>
        </Form.Item>
    )
}

export {AddBtn}
