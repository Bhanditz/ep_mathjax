var path = require('path'), 
    express = require('ep_etherpad-lite/node_modules/express'),
    eejs = require("ep_etherpad-lite/node/eejs");

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_mathjax/templates/editbarButtons.ejs", {}, module);
  return cb();
}

exports.eejsBlock_body = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_mathjax/templates/modals.ejs", {}, module);
  return cb();
}

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_mathjax/templates/scripts.ejs", {}, module);
  return cb();
}

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_mathjax/templates/styles.ejs", {}, module);
  return cb();
}
