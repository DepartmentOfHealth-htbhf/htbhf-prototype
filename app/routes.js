const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// which user Branching 
router.post('/apply/pregnant1-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let pregnant1yes = req.session.data['pregnant1']

  if (pregnant1yes === 'false') {
    res.redirect('/apply/holding-page')
  } else {
    res.redirect('/apply/what-is-your-name')
  }
})

// live with partner branching

router.post('/apply/live-with-partner-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var livePartner  = req.session.data['live-with-partner']

  // Check whether the variable matches a condition
  if (livePartner == "Yes"){
    // Send user to next page
    res.redirect('/apply/does-partner-have-nino')
  }
  else {
    // Send user to address page
    res.redirect('/apply/manual-card-address')
  }

})

// Partner has a NINO Branching 
router.post('/apply/partner-nino-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let partnernino = req.session.data['partner-nino']

  if (partnernino === 'false') {
    res.redirect('/apply/manual-card-address')
  } else {
    res.redirect('/apply/partner-name')
  }
})

// check your answers 
router.get('/apply/check-your-answers', function (req, res) {

  var CheckAnswers = req.query.CheckAnswers
  
  res.render('apply/check-your-answers',{CheckAnswers})
})



// JUGGLING

router.post('/juggling-licence/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-licence/juggling-trick')
  }
  else {
    // Send user to ineligible page
    res.redirect('/juggling-licence/ineligible')
  }

})



module.exports = router
