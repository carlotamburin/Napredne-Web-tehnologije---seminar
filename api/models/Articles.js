/**
 * Articles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  
  attributes: {
    title: {
      type: 'string',
      required:true
    },
    description:{
      type:'string',
      required:true

    },
    manifacturer:{
      type:'string',
      required:true
    },
    foundingYear:{
      type:'number',
      required:true
    },
    originCountry:{
      type:'string',
      required:true
    },
    price:{
      type:'number',
      required:true
    }
  }
 
};
