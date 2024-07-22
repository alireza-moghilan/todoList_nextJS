import i18next from "i18next";
import { Config } from "../../../config";

i18next.init({
    lng:Config.lng, // if you're using a language detector, do not define the lng option
        // debug: true, 
        resources: {
            en: {
                translation: {
                    "firstTitleSite": "Todo List",
                }
            },
            fa: {
                translation: {
                    "firstTitleSite": "برنامه ریزی روزانه",
                    "firstDescriptionSite": "اینجا می تونی به راحتی تمام تسک های خودت رو وارد کنی و آنها رو سازمان دهی کنی، به علاوه ی همه ی این موارد می می تونی از روزمرگی خودت خبر داشته باشی و اشتباهاتت رو دیگه انجام ندی.",
                    "subTitleSiteNotEntered": "می خوای از امکانات ما استفاده کنی پس سریع ثبت نام کن!",
                    "subTitleSiteLogged": "می تونی شروع به کار کنی!",

                    "addTask":'تسک خود را وارد کنید',
                    "singUpTitle":'ثبت نام',
                    "loginTitle":'ورود',


                    "inputTitle":'عنوان را وارد کنید:',
                    "inputDescription":'توضیحات را وارد کنید:',

                    "title":'عنوان :',
                    "userName":"نام کاربری",
                    "password":"رمزعبور",
                    "rePassword":"تکرار رمزعبور",
                    "passwordNotMach":"تطابق ندارد!",
                    "description":'توضیحات :',
                    "remember":"به خاطر بسپار",

                    "addBtn":'افزودن',
                    "submitBtn":'ثبت نام',
                    "loginBtn":'ورود',

                    "errorTextUserName":"لطفا نام کاربری خود را وارد کنید!",
                    "errorTextPassword":"لطفا رمز عبور خود را وارد کنید!",
                    "errorTextRePassword":"لطفا رمز عبور خود را تایید کنید!",
                    "errorTextTitle":"لطفا نام کاربری خود را وارد کنید!",
                    "errorTextDescription":"لطفا فیلد توضیح را پر کنید!",
                }
            },
        }
})

export default i18next.t;