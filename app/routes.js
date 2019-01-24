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

// Live with a partner Branching 
router.post('/apply/live-with-partner-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let partneryes = req.session.data['live-with-partner']

  if (partneryes === 'false') {
    res.redirect('/apply/manual-card-address')
  } else {
    res.redirect('/apply/does-partner-have-nino')
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


module.exports = router
