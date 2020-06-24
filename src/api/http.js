import axios from "axios";
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据
import store from '@/store/index';

axios.defaults.timeout = 10000; //10s 请求超时
axios.defaults.header.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //post的请求头

// 请求拦截器

