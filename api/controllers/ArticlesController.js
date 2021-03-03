

/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */





module.exports = {
  list: function (req, res) {
    Articles.find({}).exec(function(err, articles){
      if (err) {
        res.send(500, { error: 'Database Error' });
      }
      res.view('list', { articles: articles });
    });
  },
  add: function (req,res) {
    res.view('add');
  },

  create: function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    var manifacturer = req.body.manifacturer;
    var foundingYear = req.body.foundingYear;
    var originCountry = req.body.originCountry;
    var price = req.body.price;

    Articles.create({title:title, description:description,manifacturer:manifacturer,foundingYear:foundingYear,originCountry:originCountry,price:price}).exec(function(err){
            if(err){
                res.send(500, {error: "Database error"})
            }
            res.redirect('/articles/list')
    });
  },

  delete: function(req,res){
    Articles.destroy({id:req.params.id}).exec(function(err){
        if(err){
            res.send(500, {error: "Database error"})
        }
        res.redirect('/articles/list')
    });
    return false;
  },

  edit: function(req,res){
    Articles.findOne({id:req.params.id}).exec(function(err,article){
        if(err){
            res.send(500, {error: "Database error"})
        }

       res.view('edit',{article:article}) 
    });
  },

  update: function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    var manifacturer = req.body.manifacturer;
    var foundingYear = req.body.foundingYear;
    var originCountry = req.body.originCountry;
    var price = req.body.price;

    Articles.update({id:req.params.id},{title:title, description:description,manifacturer:manifacturer,foundingYear:foundingYear,originCountry:originCountry,price:price}).exec(function(err){
            if(err){
                res.send(500, {error: "Database error"})
            }
            res.redirect('/articles/list')
    });

    return false;
  }

};
