// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));

// 用户集合规则
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     }
// });
// // 文章集合规则
// const postSchema = new mongoose.Schema({
//     title: {
//         type: String
//     },
//     author: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }
// });
// // 用户集合
// const User = mongoose.model('User', userSchema);
// // 文章集合
// const Tost = mongoose.model('Tost', postSchema);

// 创建用户
// User.create({name: 'itheima'}).then(result => console.log(result));
// 创建文章
// Post.create({titile: '123', author: '5c0caae2c4e4081c28439791'}).then(result => console.log(result));
// Tost.find().populate('author').then(result => console.log(result))// 引入mongoose第三方模块 用来操作数据库
// User.create({
//     name: '小白'
// }).then(doc => console.log(doc));
// Tost.create({
//     title: '西游记',
//     author: '5e7d5caf5423d00dc43586ff',
//     ref: 'User'
// }).then(doc => console.log(doc));
//查询文章相关联的作者信息
// Tost.find().populate('author').then(doc => console.log(doc))
const pserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
// 创建文章集合规则
const txtSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pser'
    }
});
const Pser = mongoose.model('Pser', pserSchema);
const Txt = mongoose.model('Txt', txtSchema)
    // 创建文章文档
    // Pser.create({
    //     name: '小红'
    // }).then(doc => console.log(doc));
    // Txt.create({
    //     title: '三国演义',
    //     author: '5e7d61365c639522648a2786'
    // }).then(doc => console.log(doc));
    // 查询相关联的作者信息
Txt.find().populate('author').then(doc => console.log(doc))