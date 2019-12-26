import Mock from 'mockjs'
import list from './list'

// modules
Mock
  .mock('/list', 'get', () => {
    return {
      code: 200,
      result: list
    }
  })
