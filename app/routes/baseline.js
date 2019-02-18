const attachRoutes = (router) => {
  // BASELINE prototype routes beneath here

  // which user Branching
  router.post('/BASELINE/pregnant1-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let pregnant1yes = req.session.data['pregnant1']

    if (pregnant1yes === 'false') {
      res.redirect('/BASELINE/holding-page')
    } else {
      res.redirect('/BASELINE/what-is-your-name')
    }
  })

  // live with partner branching

  router.post('/BASELINE/live-with-partner-answer', function (req, res) {

    // Make a variable and give it the value from 'juggling-balls'
    var livePartner  = req.session.data['live-with-partner']

    // Check whether the variable matches a condition
    if (livePartner == "Yes"){
      // Send user to next page
      res.redirect('/BASELINE/does-partner-have-nino')
    }
    else {
      // Send user to address page
      res.redirect('/BASELINE/manual-card-address')
    }

  })

  // Partner has a NINO Branching
  router.post('/BASELINE/partner-nino-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let partnernino = req.session.data['partner-nino']

    if (partnernino === 'false') {
      res.redirect('/BASELINE/manual-card-address')
    } else {
      res.redirect('/BASELINE/partner-name')
    }
  })

  // check your answers
  router.get('/BASELINE/check-your-answers', function (req, res) {

    var CheckAnswers = req.query.CheckAnswers

    res.render('BASELINE/check-your-answers',{CheckAnswers})
  })
}

module.exports = {
  attachRoutes
}
