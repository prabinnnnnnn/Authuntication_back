// import dotenv from "dotenv";
// dotenv.config();
// import passport from "passport";
// import { Strategy as GithubStrategy } from "passport-github2";

// passport.use(
//   new GithubStrategy(
//     {
//       clientID: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       callbackURL: "http://localhost:3002/auth/github/callback",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       return done(null, profile);
//     },
//   ),
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });
