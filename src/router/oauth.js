/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Autodesk Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

'use strict' // http://www.w3schools.com/js/js_strict.asp

// token handling in session
// web framework
var express = require('express')
var router = express.Router()

// APS config information, such as client ID and secret
var config = require('./config')

var cryptiles = require('cryptiles')

// this end point will logoff the user by destroying the session
// as of now there is no APS endpoint to invalidate tokens
router.get('/user/logoff', function (req, res) {
  console.log('/user/logoff')

  req.session.destroy()

  res.end('/')
})
// return the APS authenticate url
router.get('/user/authenticate', function (req, res) {
  req.session.csrf = cryptiles.randomString(24)

  console.log('using csrf: ' + req.session.csrf)

  console.log('/user/authenticate')

  // redirect the user to this page
  var url =
    'https://developer.api.autodesk.com' +
    '/authentication/v1/authorize?response_type=code' +
    '&client_id=' +
    config.credentials.client_id +
    '&redirect_uri=' +
    config.callbackURL +
    '&state=' +
    req.session.csrf +
    '&scope=' +
    config.scopeInternal.join(' ')
  res.end(url)
})

// wait for Autodesk callback (oAuth callback)
module.exports = router
