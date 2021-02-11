var Job = require("../models/job");
// var Comment = require("../models/comment");

var middlewareObj = {};

// middlewareObj.checkJobOwnership = function (req, res, next) {
//   //is user logged in?
//   if (req.isAuthenticated()) {
//     Job.findById(req.params.id, function (err, foundJob) {
//       if (err) {
//         req.flash("error", "Job not found");
//         res.redirect("back");
//       } else {
//         //does user own campground
//         if (req.user._id.equals(foundJob.author.id)) {
//           next();
//         } else {
//           req.flash("error", "You don't have permission to do that");
//           res.redirect("back");
//         }
//       }
//     });
//   } else {
//     req.flash("error", "You need to be logged in to do that");
//     res.redirect("back");
//   }
// };

// middlewareObj.checkCommentOwnership = function (req, res, next) {
//   //is user logged in?
//   if (req.isAuthenticated()) {
//     Comment.findById(req.params.comment_id, function (err, foundComment) {
//       if (err) {
//         req.flash("error", "Job not found");
//         res.redirect("back");
//       } else {
//         //does user own campground
//         if (req.user._id.equals(foundComment.author.id)) {
//           next();
//         } else {
//           req.flash("error", "You don't have permission to do that");
//           res.redirect("back");
//         }
//       }
//     });
//   } else {
//     req.flash("error", "You need to be logged in to do that");
//     res.redirect("back");
//   }
// };

middlewareObj.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("You need to be logged in to that!");
};

module.exports = middlewareObj;
