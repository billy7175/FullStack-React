exports.getPosts = (req, res) => {
  // res.send("Hello World From Node JS!!")
  res.json({
    posts:[
      {id:1 , title:'First post'},
      {id:2 ,title:'Second post'}
    ]
  })
}