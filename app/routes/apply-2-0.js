const attachRoutes = (router) => {
  // APPLY_2_0 prototype routes beneath here


  //Scotland

router.post('/apply-2-0/where-live-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var whereLive = req.session.data['where-live']

  // Check whether the variable matches a condition
  if (whereLive == "Scotland"){
     // Send user to ineligible page
    res.redirect('/apply-2-0/not-eligible-scotland')
  }
  else {
   // Send user to next page
    res.redirect('/apply-2-0/date-of-birth')
  }

})


  // ID verification
  router.post('/apply-2-0/choose-channel-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let channelyes = req.session.data['verify']

    if (channelyes === 'false') {
      res.redirect('/apply-2-0/email-passcode')
    } else {
      res.redirect('/apply-2-0/mobile-passcode')
    }
  })

 //Benefits

router.post('/apply-2-0/benefits-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var Benefits = req.session.data['which-benefits']

  // Check whether the variable matches a condition
  if (Benefits == "Universal Credit"){
     // Send user to ineligible page
    res.redirect('/apply-2-0/children-u4')
  }
  else {
   // Send user to next page
    res.redirect('/apply-2-0/children-u4')
  }

})


  // CHILDREN

  router.post('/apply-2-0/children-u4', function (req, res) {
    if (req.session.data['children-u4'] === '0') {
      return res.redirect('/apply-2-0/are-you-pregnant')
    } 

    return res.redirect('/apply-2-0/child1-date-of-birth')
  })
}



module.exports = {
  attachRoutes
}
