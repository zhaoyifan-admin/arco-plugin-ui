import axios from 'axios';
import { Message, Modal, Notification } from '@arco-design/web-vue';

const baseURL = `/api`;

// 配置新建一个 axios 实例
const service = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});
// 添加请求拦截器
service.interceptors.request.use(
  (config: any) => {
    // 在发送请求之前做些什么 token
    const language = 'zh-CN';
    const tenantId = '1';
    const token = 'ae1e3418-006c-4d77-b78e-c1e7dd9ccfbe';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // token
    }
    if (tenantId) {
      config.headers['TENANT-ID'] = tenantId;
    }
    if (language) {
      // config.headers['Enhan-language'] = language;
      config.headers['rtdp-language'] = language;
    } else {
      // config.headers['Enhan-language'] = 'zh-CN';
      config.headers['rtdp-language'] = 'zh-CN';
    }
    return config;
  },
  (error:any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response:any) => {
    // 对响应数据做点什么
    const status = Number(response.status) || 200;
    const message = response.data.msg;
    const res = response.data;
    if (res.code && res.code !== 0) {
      // `token` 过期或者账号已在别处登录
      if (res.code === 401 || res.code === 4001) {
        // Session.clear(); // 清除浏览器全部临时缓存
        window.location.href = '/'; // 去登录页
        Modal.warning({
          title: '提示',
          content: '你已被登出，请重新登录',
        });
      }
      if (status !== 200 || res.code === 1) {
        Message.error(message);
        return Promise.reject(new Error(message));
      }
    }
    return response.data;
  },
  (error:any) => {
    // 对响应错误做点什么
    if (error.message.indexOf('timeout') !== -1) {
      Notification.error({
        title: '错误警示',
        content: '网络连接请求超时，请稍后重试。',
        closable: true,
      });
    } else if (error.message === 'Network Error') {
      Notification.error({
        title: '错误警示',
        content: '网络连接错误。',
        closable: true,
      });
    } else if (error.message.indexOf('500') !== -1) {
      Notification.error({
        title: '错误警示',
        content: '服务不可用，请联系管理员。',
        closable: true,
      });
    } else if (error.message.indexOf('503') !== -1) {
      Notification.error({
        title: '错误警示',
        content: '服务不可用，请联系管理员。',
        closable: true,
      });
    } else if (error.response.data) Message.error(error.response.statusText);
    else Message.error('接口路径找不到');
    return Promise.reject(error);
  }
);

// 导出 axios 实例
export default service;
