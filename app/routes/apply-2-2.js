const attachRoutes = (router) => {
  // apply-2-2 prototype routes beneath here


  //Scotland

router.post('/apply-2-2/where-live-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var whereLive = req.session.data['where-live']

  // Check whether the variable matches a condition
  if (whereLive == "Yes"){
     // Send user to ineligible page
    res.redirect('/apply-2-2/not-eligible-scotland')
  }
  else {
   // Send user to next page
    res.redirect('/apply-2-2/date-of-birth')
  }

})

//ON benefits?

router.post('/apply-2-2/are-you-on-benefits-answer', function (req, res) {

  // Make a variable and give it the value from 'on-benefits'
  var onBens = req.session.data['on-benefits']

  // Check whether the variable matches a condition
  if (onBens == "Yes"){
     // Send user to ineligible page
    res.redirect('/apply-2-2/which-benefits')
  }
  else {
   // Send user to next page
    res.redirect('/apply-2-2/are-you-pregnant')
  }

})

// ID verification APPLY
  router.post('/apply-2-2/choose-channel-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let channelyes = req.session.data['verify']

    if (channelyes === 'false') {
      res.redirect('/apply-2-2/email-passcode')
    } else {
      res.redirect('/apply-2-2/mobile-passcode')
    }
  })

//yes no kids

router.post('/apply-2-2/do-you-have-kids-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var kidsYes = req.session.data['do-you-have-kids']

  // Check whether the variable matches a condition
  if (kidsYes == "Yes"){
     // Send user to ineligible page
    res.redirect('/apply-2-2/children-u4')
  }
  else {
   // Send user to next page
    res.redirect('/apply-2-2/are-you-pregnant')
  }

})


  // CHILDREN

  router.post('/apply-2-2/children-u4-answer', function (req, res) {
    if (req.session.data['children-u4'] === '0') {
      return res.redirect('/apply-2-2/are-you-pregnant')
    } 

    return res.redirect('/apply-2-2/child1-date-of-birth')
  })
}



module.exports = {
  attachRoutes
}
