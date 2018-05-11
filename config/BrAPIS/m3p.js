const axios = require('axios');


module.exports = {
    name: 'm3p',

    germplasms: function() {
      //get token for access
      return axios.get('http://147.100.175.100:8080/phenomeapi/resources/token',{
        params:{
          username:'guestphis@supagro.inra.fr',
          password:'guestphis'
        }
      }).then( response =>{
        let token = response.data.session_token;
        console.log(token);
        //get actual data
        return axios.get('http://147.100.175.100:8080/phenomeapi/resources/germplasms',{
          params:{
            //will get all germplasms from this experiment (just for demonstration purposes)
            experimentURI: 'http://www.phenome-fppn.fr/m3p/ARCH2017-03-30',
            sessionId: token
          }
        }).then(response_germ => {
          console.log(response_germ.data.result.data);
          return response_germ.data.result.data;
        }).catch( error_germ => {
          console.log(error_germ);
        });
      }).catch( error => {
        console.log(error);
      });
    },

    readOneGermplasm: function({germplasmURI}) {
      //get token for access
      return axios.get('http://147.100.175.100:8080/phenomeapi/resources/token',{
        params:{
          username:'guestphis@supagro.inra.fr',
          password:'guestphis'
        }
      }).then( response =>{
        let token = response.data.session_token;
        console.log(token);
        //get actual data
        return axios.get('http://147.100.175.100:8080/phenomeapi/resources/germplasms/'+germplasmURI,{
          params:{
            //germplasmURI: germplasmURI,
            sessionId: token
          }
        })
        .then(response_germ => {
          console.log(response_germ.data.result.data[0]);
          return response_germ.data.result.data[0];
        }).catch( error_germ => {
          console.log(error_germ);
        });
      }).catch( error => {
        console.log(error);
      });
    },

    matchesId: function(idToMatch){
      if(idToMatch.includes('m3p')){
        return true;
      }
      return false
    }
}
