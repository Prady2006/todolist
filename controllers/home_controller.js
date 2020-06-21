module.exports.home = function(req, res){
    // return res.end('<h1> home controller </h1>');
    return res.render('home');
};
module.exports.createTodo = function(req,res){
    console.log("data posted");
    console.log(req.body);
    // console.log(req);
    res.send('<h1>post</h1>');
};