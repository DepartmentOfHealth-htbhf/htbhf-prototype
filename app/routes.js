const express = require('express')
const router = express.Router()
const apply = require('./routes/apply')
const applyOneTwo = require('./routes/apply-1-2')
const baseline = require('./routes/baseline')

// Attach "apply" routes
apply.attachRoutes(router)

// Attach "apply 1 2" routes
applyOneTwo.attachRoutes(router)

// Attach "baseline" routes
baseline.attachRoutes(router)

// Add your routes here - above the module.exports line

// JUGGLING

router.post('/juggling-licence/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "3 or more"){
    // Send user to next page
    res.redirect('/TEST_notprototype/juggling-licence/juggling-trick')
  }
  else {
    // Send user to ineligible page
    res.redirect('/TEST_notprototype/juggling-licence/ineligible')
  }

})

module.exports = router
