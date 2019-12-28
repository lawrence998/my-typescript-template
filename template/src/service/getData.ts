/**
 * Created by qyc on 2019/4/9.
 *用户所有的接口均在这里调用
 */
import fetch from '../config/fetch';
import {getCookie} from '../common/utils/utils';
import {baseUrl} from '../config/env';

async function getData(url:string, data:any, type:string, ParameterType?:string, options?:any){
  let otherOptions:any = {};
  if(options){
    //这里写授权或者追加请求头的逻辑
    otherOptions={...otherOptions,...options};
  } else {
    const defaultHeader = {
      headers: {
        Authorization: getCookie('Authorization').replace(/^("|')|("|')$/g, '')
      }
    };
    otherOptions = {...otherOptions, ...defaultHeader};
  }

  let response= await fetch(url, data, type, ParameterType, otherOptions);

  if(response.success){
    return response.res.data
  }else{
    throw new Error('接口调用出错，状态码'+response.code);
  }
}

let login:any //用户接口;

login = (params: any) => getData(baseUrl+'/list', params,'get', '', {needAuth:true,authType:1});

export {
  login
}
