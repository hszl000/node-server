const {
  CODE_ERROR,
  CODE_SUCCESS,
  CODE_ROKEN_EXPIRED
} = require('../utils/constant')

class Result {
  constructor(data,msg='操作成功',options){
    this.data = null
    if(arguments.length === 0){
      this.msg = '操作成功'
    }else if(arguments.length === 1){
      this.msg = data
    }else{
      this.data = data
      this.msg = msg
      if(options){
        this.options = options
      }
    }
  }

  createResult(){
    if(!this.error){
      this.error = CODE_SUCCESS
    }
    let base = {
      error:this.error,
      msg:this.msg
    }
    if(this.data){
      base.data = this.data
    }
    if(this.options){
      base = {...base,...this.options}
    }
    console.log(base)
    return base
  }

  json(res){
    res.json(this.createResult())
  }

  success(res){
    this.error = CODE_SUCCESS
    this.json(res)
  }

  fail(res) {
    this.error = CODE_ERROR
    this.json(res)
  }

  jwtError(res) {
    this.error = CODE_ROKEN_EXPIRED
    this.json(res)
  }
}

module.exports = Result