'use strict';

export const getIp = async () => {
  return await $.getJSON('https://api.ipify.org?format=json', function(data){
      return data;
  });
};
