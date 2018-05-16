const axios = require('axios');
const https = require('https');

module.exports = {
  name : 'vib',

    germplasms: function() {
      let agent = new https.Agent({ rejectUnauthorized: false });
      return axios.get('https://pippa.psb.ugent.be/pippa_experiments/brapi/v1/germplasm-search',{httpsAgent: agent})
      .then( response =>{
        console.log(response.data.result.data);
        return response.data.result.data;
      })
      .catch( error => {
        console.log(error);
      });
    },

    readOneGermplasm: function({germplasmURI}) {
      let agent = new https.Agent({ rejectUnauthorized: false });
      return axios.get('https://pippa.psb.ugent.be/pippa_experiments/brapi/v1/germplasm-search', {params :{ germplasmName : germplasmURI},
      httpsAgent: agent}).then( response =>{
        console.log(response.data.result.data[0]);
        return response.data.result.data[0];
      })
      .catch( error => {
        console.log(error);
      });
    },

    matchesId: function(idToMatch){
      if(!(idToMatch.includes('m3p'))){
        return true;
      }
      return false;
    }
}
