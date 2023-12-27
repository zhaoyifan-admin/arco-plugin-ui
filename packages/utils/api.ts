import request from "./request";

export function getOptions(params?: object) {
    return request({
        url: '/admin/dict/type/work_type',
        method: 'get',
        params,
    });
}