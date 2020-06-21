module.exports.home = function(req, res){
    // return res.end('<h1> home controller </h1>');
    return res.render('home',tasks);
};
const cat = ['','Personal','School','Office'];
tasks = [ 
    {
        description: "h",
        dueDate: "2020-06-02",
        category: cat[1]
    }
];
module.exports.createTodo = function(req,res){
    console.log("data posted");
    // console.log(req.body);
    tasks.push({
        category: cat[req.body.category],
        dueDate: req.body.dueDate,
        description: req.body.description
    });
    // console.log(tasks);
    res.redirect('/');
};