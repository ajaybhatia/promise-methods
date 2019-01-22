import { Meteor } from "meteor/meteor";

Meteor.callWithPromise = (method, ...params) => new Promise((resolve, reject) => {
  Meteor.call(method, ...params, (error, response) => {
    if (error) reject(error);
    resolve(response);
  });
});