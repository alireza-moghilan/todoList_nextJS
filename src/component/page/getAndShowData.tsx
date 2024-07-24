import { Card, Col, Row } from "antd";
import { GetUserDataTodos } from "../query";
import style from "./styles.module.scss";

const GetAndShowData = () => {
    const { data, isPending } = GetUserDataTodos();

    return (
        <>
            <h1>روزمرگی ها</h1>
            {!data && isPending && <h1>Loding ...</h1>}
            <Row gutter={[24, 24]} justify={'start'}>
                {
                    data?.data.map((index: any) => {
                        return (
                            <>
                                <Col xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
                                    <Card className={style.styleCard} title={index.title} bordered={false}>
                                        <p className={style.stylePCard}>{index.description}</p>
                                    </Card>
                                </Col>
                            </>
                        )
                    })
                }

            </Row>
        </>
    )

}

export default GetAndShowData