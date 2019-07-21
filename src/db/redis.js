const redis = require('redis')
const {REDIS_CONF} = require('../conf/db')

//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.host)
redisClient.on('error',err =>{
    console.error(err)
})

function set(key, val){
    if (typeof val === 'object'){
        val = JSON.stringify(val)
    }
    redisClient.set(key,val,redis.print)
}

function get(key){
    const promise = new Promise((resolve,reject) =>{
        redisClient.get(key,(err,val)=>{
            if (err){
                reject(err)
                return
            }
            if(val == null){
                resolve(null)
                return
            }
            
            try{
                resolve(
                    JSON.parse(val)             //变成一个json对象形式返回
                )

            }catch(ex){
                resolve(val)                    //如果不是json格式就返回
            }
        })
    })
    return promise
}

module.exports ={
    set,
    get
}