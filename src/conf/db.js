//存储的是数据库连接配置

const env = process.env.NODE_ENV //环境参数

//配置
let MYSQL_CONF
let REDIS_CONF

if(env === 'dev'){          //开发环境下的数据库配置
    MYSQL_CONF = {
        host: 'localhost',
        user :'root',            //mysql
        password: '123456',
        port: 3306,              //默认情况下都是3306
        database: 'myblog'
    }

    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1',      //redis
    }

}

if(env === 'production'){       //线上环境下的数据库配置
    MYSQL_CONF = {
        host: 'localhost',
        user :'root',            //mysql
        password: '123456',
        port: 3306,              //默认情况下都是3306
        database: 'myblog'
    }

    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1',      //redis
    }

}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}