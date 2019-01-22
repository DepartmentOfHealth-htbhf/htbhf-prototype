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

// Are you pregnant Branching 
router.post('/apply/pregnant-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let pregnantyes = req.session.data['pregnant']

  if (pregnantyes === 'false') {
    res.redirect('/apply/live-with-partner')
  } else {
    res.redirect('/apply/due-date')
  }
})

// Live with a partner Branching 
router.post('/apply/live-with-partner-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let partneryes = req.session.data['live-with-partner']

  if (partneryes === 'false') {
    res.redirect('/apply/card-address')
  } else {
    res.redirect('/apply/partner-name')
  }
})


module.exports = router
