const attachRoutes = (router) => {
  // change-2-3 prototype routes beneath here


  //Scotland

router.post('/change-2-3/where-live-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var whereLive = req.session.data['where-live']

  // Check whether the variable matches a condition
  if (whereLive == "Yes"){
     // Send user to ineligible page
    res.redirect('/change-2-3/not-eligible-scotland')
  }
  else {
   // Send user to next page
    res.redirect('/change-2-3/date-of-birth')
  }

})

//What do you want to report?

router.post('/change-2-3/whats-changed-answer', function (req, res) {

  // Make a variable and give it the value from 'whats-changed'
  var whatsChanged = req.session.data['whats-changed']

  // Check whether the variable matches a condition
  if (whatsChanged == "pregnancy"){
     // Send user to ineligible page
    res.redirect('/change-2-3/due-date')
  }
  else {
   // Send user to next page
    res.redirect('/change-2-3/new-due-date')
  }

})

// ID verification APPLY
  router.post('/change-2-3/choose-channel-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let channelyes = req.session.data['verify']

    if (channelyes === 'false') {
      res.redirect('/change-2-3/email-passcode')
    } else {
      res.redirect('/change-2-3/mobile-passcode')
    }
  })

//yes no kids

router.post('/change-2-3/do-you-have-kids-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var kidsYes = req.session.data['do-you-have-kids']

  // Check whether the variable matches a condition
  if (kidsYes == "Yes"){
     // Send user to ineligible page
    res.redirect('/change-2-3/children-u4')
  }
  else {
   // Send user to next page
    res.redirect('/change-2-3/are-you-pregnant')
  }

})


  // CHILDREN

  router.post('/change-2-3/children-u4-answer', function (req, res) {
    if (req.session.data['children-u4'] === '0') {
      return res.redirect('/change-2-3/are-you-pregnant')
    } 

    return res.redirect('/change-2-3/child1-date-of-birth')
  })
}



module.exports = {
  attachRoutes
}
