"use client";
import { Space, Col, Row, Button } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import FormData from "../component/form/formData";
import t from "@/component/language/lang";
import Login from "@/component/Auth/login";
import SingUp from "@/component/Auth/singUp";
import GetAndShowData from "@/component/page/getAndShowData";

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
            localStorage.getItem('token') &&
            <>
             <p>{t('subTitleSiteLogged')}</p>
             <Link href={'#todoForm'}><DownCircleOutlined className="icon-font-size main-color" spin={true} twoToneColor={'#0b41a5'} /></Link>
            </>
          }
          {

            !localStorage.getItem('token') &&
            <>
            <p>{t('subTitleSiteNotEntered')}</p>
              <Link href={"/login"}><Button className="bg-main" type="primary">{t('notLoginedText')}</Button></Link>
            </>
          }
        </Space>

      </Space>

      {
        localStorage.getItem('token') &&
        <div className="container">
          <Row className="mt-5" gutter={[24, 24]} justify={'center'}>
            <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <div id="todoForm">
              <FormData />
          </div>
            </Col>
          </Row>


          <GetAndShowData />
        </div>
      }
    </>
  );
}
