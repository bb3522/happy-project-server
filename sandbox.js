
const { Post, User, Category, CustomerPost } = require('./models/index')
//sequelize model:generate --name User --attributes username:string,email:string,password:string,role:string,phoneNumber:string,address:string

//sequelize model:generate --name Category --attributes name:string

//sequelize model:generate --name Post --attributes title:string,content:text,imgUrl:string,categoryId:integer,authorId:integer

CustomerPost.findAll({
  where: {
    customerId: 2
  },
  include: [{
    model: Post,
    include: [{
      model: Category
    }, {
      model: User
    }]
  }]
}).then(posts => {
  console.log(posts);
  // console.log(posts[0].Post.title, posts[0].Post.Category.name, posts[0].Post.User.username )

}).catch(err => {
  console.log(err)
})
