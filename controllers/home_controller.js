module.exports.home = function(req, res){
    // return res.end('<h1> home controller </h1>');
    return res.render('home',{
        load: "Loading ..."
    });
};