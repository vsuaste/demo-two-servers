/*
    Resolvers for basic CRUD operations
*/

const searchArg = require('../utils/search-argument');
const fileTools = require('../utils/file-tools');
var checkAuthorization = require('../utils/check-authorization');
const axios = require('axios');
const registry = require('../config/registry');

module.exports = {
    germplasms: async function() {
      console.log('trying to get all germplasms...');
      let result=[];
      let concatenated=[];

      for( i=0; i<registry.length; i++)
      {
        let d = await registry[i].germplasms();
        result.push(d);
      }

      for(i=0; i<result.length; i++ )
      {
        concatenated = concatenated.concat(result[i]);
      }

      return concatenated;
    },

    readOneGermplasm: async function({nameToSearch}) {
      let res;

      await registry.forEach( moduleBrapi => {
          if (moduleBrapi.matchesId(nameToSearch)){
            //console.log(moduleBrapi.name,"****", nameToSearch);
            res = moduleBrapi.readOneGermplasm({germplasmURI : nameToSearch});
          }
      });
      return res;
    },

    /*
    searchPlant: function({
        input
    }, context) {
        if (checkAuthorization(context, 'plants', 'read') == true) {
            let arg = new searchArg(input);
            let arg_sequelize = arg.toSequelize();
            return plant.findAll({
                where: arg_sequelize
            });
        } else {
            return "You don't have authorization to perform this action";
        }
    },
    */

    //addPlant: function(input, context) {
        //if (checkAuthorization(context, 'plants', 'create') == true) {
            //return plant.create(input)
                //.then(plant => {
                    //return plant;
                //});
        //} else {
            //return "You don't have authorization to perform this action";
        //}
    //},
//
    //bulkAddPlantXlsx: function(_, context) {
        //let xlsxObjs = fileTools.parseXlsx(context.request.files.xlsx_file.data.toString('binary'));
        //return plant.bulkCreate(xlsxObjs, {
            //validate: true
        //});
    //},
//
    //bulkAddPlantCsv: function(_, context) {
        ////delim = context.request.body.delim;
        ////cols = context.request.body.cols;
        //return fileTools.parseCsv(context.request.files.csv_file.data.toString())
            //.then((csvObjs) => {
                //return plant.bulkCreate(csvObjs, {
                    //validate: true
                //});
            //});
    //},
//
    //deletePlant: function({
        //id
    //}, context) {
        //if (checkAuthorization(context, 'plants', 'delete') == true) {
            //return plant.findById(id)
                //.then(plant => {
                    //return plant.destroy()
                        //.then(() => {
                            //return 'Item succesfully deleted';
                        //});
                //});
        //} else {
            //return "You don't have authorization to perform this action";
        //}
    //},
//
    //updatePlant: function(input, context) {
        //if (checkAuthorization(context, 'plants', 'update') == true) {
            //return plant.findById(id)
                //.then(plant => {
                    //return plant.update(input);
                //});
        //} else {
            //return "You don't have authorization to perform this action";
        //}
    //}
}
