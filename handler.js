"use strict";

module.exports.getImages = async (event) => {
  let x = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(getImagesFromDatabase()),
  };
  return x
};

module.exports.submitScore = async (event) => {
  insertScoreInDB()
  return {
    statusCode: 200,
    body: JSON.stringify({happy:"response"}),
  };
};

const getImagesFromDatabase =() => {
  return [  {
  image:1
},
{
  image:2
},
{
  image:3
},
{
  image:4
}
]}

const insertScoreInDB = () => {}