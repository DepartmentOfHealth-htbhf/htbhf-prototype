const attachRoutes = (router) => {
  // APPLY_1_2 prototype routes beneath here

  // which user Branching
  router.post('/apply-1-2/applyyou-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let applyyouyes = req.session.data['applyyou']

    if (applyyouyes === 'false') {
      res.redirect('/apply-1-2/holding-page')
    } else {
      res.redirect('/apply-1-2/what-is-your-name')
    }
  })

  // DESCRIBE YOURSELF

  router.post('/apply-1-2/describe-yourself-answer', function (req, res) {

    // Make a variable and give it the value from 'describe-yourself'
    var describeyou = req.session.data['describe-yourself']

    // Check whether the variable matches a condition
    if (describeyou == "I am more than 10 weeks pregnant"){
      // Send user to next page
      res.redirect('/apply-1-2/due-date')
    }
    else {
      // Send user to your name page
      res.redirect('/apply-1-2/national-insurance-number')
    }

  })
}

module.exports = {
  attachRoutes
}
