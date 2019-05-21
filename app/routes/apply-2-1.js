const attachRoutes = (router) => {
  // APPLY_2_1 prototype routes beneath here

//Did you get invite letter

router.post('/apply-2-1/get-letter-answer', function (req, res) {

  // Make a variable and give it the value from 'get-letter'
  var getLetter = req.session.data['get-letter']

  // Check whether the variable matches a condition
  if (getLetter == "No"){
     // Send user to new user journey
    res.redirect('/apply-2-1/transfer-2-1/no-letter')
  }
  else {
   // Send user to transfer journey
    res.redirect('/apply-2-1/transfer-2-1/enter-security-code')
  }

})


//Do you get HS vouchers

router.post('/apply-2-1/get-vouchers-answer', function (req, res) {

  // Make a variable and give it the value from 'live-vouchers'
  var getVouchers = req.session.data['get-vouchers']

  // Check whether the variable matches a condition
  if (getVouchers == "No"){
     // Send user to new user journey
    res.redirect('/apply-2-1/do-you-live-in-scotland')
  }
  else {
   // Send user to transfer journey
    res.redirect('/apply-2-1/transfer-2-1/did-you-get-the-letter')
  }

})


  //Scotland

router.post('/apply-2-1/where-live-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var whereLive = req.session.data['where-live']

  // Check whether the variable matches a condition
  if (whereLive == "Scotland"){
     // Send user to ineligible page
    res.redirect('/apply-2-1/not-eligible-scotland')
  }
  else {
   // Send user to next page
    res.redirect('/apply-2-1/date-of-birth')
  }

})

// live with partner branching

  router.post('/apply-2-1/transfer-2-1/address-changed-answer', function (req, res) {

    // Make a variable and give it the value from 'chabged-address'
    var livePartner  = req.session.data['address-changed']

    // Check whether the variable matches a condition
    if (livePartner == "Yes"){
      // Send user to next page
      res.redirect('/apply-2-1/transfer-2-1/moved-address-unhappy')
    }
    else {
      // Send user to address page
      res.redirect('/apply-2-1/transfer-2-1/what-is-your-name')
    }

  })


  // ID verification APPLY
  router.post('/apply-2-1/choose-channel-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let channelyes = req.session.data['verify']

    if (channelyes === 'false') {
      res.redirect('/apply-2-1/email-passcode')
    } else {
      res.redirect('/apply-2-1/mobile-passcode')
    }
  })


    // ID verification TRANSFER
  router.post('/apply-2-1/transfer-2-1/choose-channel-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let channelyes = req.session.data['verify']

    if (channelyes === 'false') {
      res.redirect('/apply-2-1/transfer-2-1/email-passcode')
    } else {
      res.redirect('/apply-2-1/transfer-2-1/mobile-passcode')
    }
  })

 //Benefits

router.post('/apply-2-1/benefits-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var Benefits = req.session.data['which-benefits']

  // Check whether the variable matches a condition
  if (Benefits == "Universal Credit"){
     // Send user to ineligible page
    res.redirect('/apply-2-1/children-u4')
  }
  else {
   // Send user to next page
    res.redirect('/apply-2-1/children-u4')
  }

})


  // CHILDREN

  router.post('/apply-2-1/children-u4', function (req, res) {
    if (req.session.data['children-u4'] === '0') {
      return res.redirect('/apply-2-1/are-you-pregnant')
    } 

    return res.redirect('/apply-2-1/child1-date-of-birth')
  })
}



module.exports = {
  attachRoutes
}
