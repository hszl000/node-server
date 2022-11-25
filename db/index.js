const mysql = require('mysql')

const config = require('./config')
const { debug } = require('../utils/constant')

const connect = () => {
  return mysql.createConnection({
    ...config,
    multipleStatements: true,
  })
}

// 查询 sql
const querySql = (sql) => {
  const conn = connect()
  debug && console.log(sql)
  return new Promise((resolve, reject) => {
    try {
      conn.query(sql, (err, results) => {
        if (err) {
          debug && console.log('查询失败，原因：' + JSON.stringify(err))
          reject(err)
        } else {
          debug && console.log('查询成功', JSON.stringify(results))
          resolve(results)
        }
      })
    } catch (err) {
      reject(err)
    } finally {
      conn.end()
    }
  })
}

// 用户查询
const queryOne = (sql) => {
  return new Promise((resolve, reject) => {
    querySql(sql).then(result=>{
      if(result && result.length){
        resolve(result[0])
      }else{
        reject(null)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}

module.exports = {
  querySql,
  queryOne
}