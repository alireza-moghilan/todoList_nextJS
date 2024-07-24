import SingUp from "@/component/Auth/singUp";
import { Col, Row } from "antd";

export default function page() {
    return (
        <>
            <Row className="mt-5" gutter={[24, 24]} justify={'center'}>
                <Col xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
                    <SingUp />
                </Col>
            </Row>
        </>
    )
}