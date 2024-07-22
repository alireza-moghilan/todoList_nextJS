import { Space, Col, Row } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import FormData from "../component/form/formData";
import t from "@/component/language/lang";
import Login from "@/component/Auth/login";
import SingUp from "@/component/Auth/singUp";

export default function Home() {
  return (
    <>
      <Space className="text-center w-100" size={'large'} direction="vertical" align="center">
        <h1 className="main-color">{t('firstTitleSite')}</h1>
        <Space style={{ width: '55%' }}>
          <p>{t('firstDescriptionSite')}</p>
        </Space>
        <Space>
          {
            false &&
            <>
              <p>{t('subTitleSiteNotEntered')}</p>
              <Link href={'#todoForm'}><DownCircleOutlined className="icon-font-size main-color" spin={true} twoToneColor={'#0b41a5'} /></Link>
            </>
          }
          {
            true &&
            <p>{t('subTitleSiteLogged')}</p>
          }
        </Space>
      </Space>

      <Row className="mt-5" gutter={[24, 24]} justify={'center'}>
        <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
          {
            true &&
            <FormData />
          }
          {
            true &&
            <Login />
          }
          {
            true &&
            <SingUp />
          }
        </Col>
      </Row>
    </>
  );
}
