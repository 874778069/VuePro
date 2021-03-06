/*
包含n个接口请求函数的模块
每个函数的返回值是promise
 */
import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = '/api';
//const BASE = ''; //打包

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax(BASE + '/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {latitude, longitude})

export const reqSendCode = phone => ajax(BASE + "/sendcode",{phone});

//http://localhost:5000/login_sms
export const reqLoginSms = (phone,code) => ajax(BASE + "/login_sms",{phone,code},"POST")

//http://localhost:5000/login_pwd
export const reqLoginPsw = (name,pwd,captcha) => ajax(BASE + "/login_pwd",{name,pwd,captcha},"POST")

export const reqUser = () => ajax(BASE + "/userinfo");

export const reqLoginOut = () => ajax(BASE + "/logout");

export const reqInfo = () => ajax("/info");
export const reqRatings = () => ajax("/ratings");
export const reqGoods = () => ajax("/goods");
