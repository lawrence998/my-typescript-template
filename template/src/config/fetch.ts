/**
 * 接口封装方式.
 */
import axios from 'axios';

export default async (url='', data={}, type='GET', ParameterType = 'data', options:any={}) => {
  type = type.toLowerCase();

  interface Config {
    method: string,
    url: string,
    params?: Object,
    ParameterType?: string
  }

  const config: Config = {
    method:type,
    url:url
  };

  type === 'get'
    ? config.params = data
    : config[ParameterType] = data

  let i:any;

  for(i in options){
    config[i]=options[i];
  }
  console.log(config)
  const response:any = await axios(config).then( (res:any) =>{
    return{
      success:true,
      res:res
    }
  }).catch(function (error:any) {
    return{
      success:false,
      code:error && error.response
    }
  });
  return response
}
