
const Todo = require("../models/tasks");


module.exports.home = function(req, res){

    // return res.render('home',tasks);
    Todo.find({},function(error , result ){
        if(error){
            console.log("error in fetching document from database ");
            return res.send('<h1>error in finding records<h1>');
        }
        return res.render('home',{
            tasks : result 
        })
    });

};

// const cat = ['','Personal','School','Office'];
// tasks = [ 
//     {
//         description: "h",
//         dueDate: "2020-06-02",
//         category: cat[1]
//     }
// ];


module.exports.createTodo = function(req,res){
    console.log("data posted");
    // console.log(req.body);
    obj = {
        category: cat[req.body.category],
        dueDate: req.body.dueDate,
        description: req.body.description
    };
    Todo.create(obj,function(error , newTask){
        if(error){
            console.log("cant create new task in db ");
            return res.send('<h1>error in creating object</h1>');
        }
        console.log("********",newTask);
        return res.send(obj);
    });
    // tasks.push(obj);
    // res.send(obj);
};