const express = require('express');
const fetch = require('node-fetch');
const Harvest = require('harvest');
const base64 = require('base-64');
const authentication = require('./src/config.js')
const app = express();
const port = '8080';

const harvestInfo = authentication['harvestInfo'];


const basicauth = base64.encode(`${harvestInfo.username}:${harvestInfo.password}`);


//gets all the clients 

fetch(`https://${harvestInfo.domain}.harvestapp.com/clients/`, {
  method: 'GET',
  dataType: 'jsonp',
  headers: {
    Accept: 'application/json',
    'Content-Type': "application/json",
    Authorization: `Basic ${basicauth}`,
  },
})
.then(resp => resp.json())
.then(resp => {
  console.log({ resp });
})
.catch(err => {
  console.log(`err: ${err}`)
});

//create a dropdown list with all the client names 

//from clients get all projects associated with the client
// projects = /projects?client=${client.id};
//allow user to select clients from the list 

//send clientID back to the api and GET their time data 

