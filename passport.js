const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
  
passport.serializeUser((user , done) => {
    done(null , user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});
  
passport.use(new GoogleStrategy({
    clientID:"1674362509-h2vtjkvb6sbununh55q0e14ba9htdpag.apps.googleusercontent.com", // Your Credentials here.
    clientSecret:"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", // Your Credentials here.
    callbackURL:"http://localhost:5000/auth/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));