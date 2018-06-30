// import React from "react";
// import { Link } from "react-router-dom";
// import API from "../../utils/API";

// //load bcrypt
// const bCrypt = require('bcrypt-nodejs');

// module.exports = function(passport,user){

// var User = user;
// var LocalStrategy = require('passport-local').Strategy;

// //SESSIONS
// // used to SERIALIZE the user
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });

// // used to deserialize the user
// passport.deserializeUser(function(id, done) {
//     User.findById(id).then(function(user) {
//       if(user){
//         done(null, user.get());
//       }
//       else{
//         done(user.errors,null);
//       }
//     });
// });


// //LOCAL SIGNIN
// passport.use('local-signin', new LocalStrategy({
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true // allows us to pass back the entire request to the callback
//   },
// function(req, email, password, done) {
//   var User = user;
//   var isValidPassword = function(userpass,password){
//   return bCrypt.compareSync(password, userpass);
//   }
//     User.findOne({ where : { email: email}}).then(function (user) {

//       if (!user) {
//          return done(null, false, req.flash('signinMessage', 'Oops, the email or password you entered is incorrect. Please try again.'));
//       }
//        var userinfo = user.get();
//        return done(null,userinfo);
//      }).catch(function(err){
//     console.log("Error:",err);
//     return done(null, false, { message: 'Something went wrong with your Signin' });
//   });

// }
// ));

// }

// export default Passport;