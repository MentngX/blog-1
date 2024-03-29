const {exec} = require('../db/mysql')

const getList = (author, keyword) =>{
    let sql = `select * from blogs where 1=1 `
    if(author){
        sql += `and author = '${author}' `
    }
    if(keyword){
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc; `

    //返回 promise
    return exec(sql)

}

const getDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows =>{
        return rows[0]     //把数组的第一个对象取出来，返回一个对象
    })
}

const newBlog = (blogData = {}) => {
    //blogData 是一个博客对象，包含 title content author 属性
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createtime = Date.now()

    const sql = `
        insert into blogs (title, content, createtime, author)
        values ('${title}','${content}',${createtime},'${author}');
    `

    return exec(sql).then(insertData =>{
        console.log('insertData is ',insertData)
        return {
            id: insertData.insertId
        }

    })

}

const updateBlog = (id, blogData = {}) => {
    //id就是要更新博客的id
    //blogData 是一个博客对象，包含 title content 属性

    console.log('update blog',id,blogData)
    return true
}

const delBlog = (id) => {
    // id就是要删除博客的 id

    return true
}


module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}