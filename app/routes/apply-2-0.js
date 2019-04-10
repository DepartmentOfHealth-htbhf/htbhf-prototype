const attachRoutes = (router) => {
  // APPLY_1_2 prototype routes beneath here

  // which user Branching
  router.post('/apply-2-0/applyyou-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let applyyouyes = req.session.data['applyyou']

    if (applyyouyes === 'false') {
      res.redirect('/apply-2-0/holding-page')
    } else {
      res.redirect('/apply-2-0/date-of-birth')
    }
  })

    // which benefits Branching
  router.post('/apply-2-0/benefits-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let applyyouyes = req.session.data['benefits']

    if (applyyouyes === 'false') {
      res.redirect('/apply-2-0/holding-page')
    } else {
      res.redirect('/apply-2-0/children')
    }
  })

// live with partner branching

  router.post('/apply-2-0/live-with-partner-answer', function (req, res) {

    // Make a variable and give it the value from 'juggling-balls'
    var livePartner  = req.session.data['live-with-partner']

    // Check whether the variable matches a condition
    if (livePartner == "Yes"){
      // Send user to next page
      res.redirect('/apply-2-0/does-partner-have-nino')
    }
    else {
      // Send user to address page
      res.redirect('/apply-2-0/manual-card-address')
    }

  })

  // Partner has a NINO Branching
  router.post('/apply-2-0/partner-nino-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let partnernino = req.session.data['partner-nino']

    if (partnernino === 'false') {
      res.redirect('/apply-2-0/manual-card-address')
    } else {
      res.redirect('/apply-2-0/partner-name')
    }
  })


  // DESCRIBE YOURSELF

  router.post('/apply-2-0/describe-yourself-answer', function (req, res) {

    // Make a variable and give it the value from 'describe-yourself'
    var describeyou = req.session.data['describe-yourself']

    // Check whether the variable matches a condition
    if (describeyou === "I have one or more children under the age of 4"){
      // Send user to next page
      res.redirect('/apply-2-0/national-insurance-number')
    }
    else {
      // Send user to your name page
      res.redirect('/apply-2-0/due-date')
    }

  })
}



module.exports = {
  attachRoutes
}
