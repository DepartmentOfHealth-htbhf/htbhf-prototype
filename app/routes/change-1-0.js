const attachRoutes = (router) => {
  // Change-1-0 prototype routes beneath here


  // ID verification APPLY
  router.post('/change-1-0/choose-channel-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let channelyes = req.session.data['verify']

    if (channelyes === 'false') {
      res.redirect('/change-1-0/email-passcode')
    } else {
      res.redirect('/change-1-0/mobile-passcode')
    }
  })

//Scotland

router.post('/change-1-0/where-live-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var whereLive = req.session.data['where-live']

  // Check whether the variable matches a condition
  if (whereLive == "Scotland"){
     // Send user to ineligible page
    res.redirect('/change-1-0/you-need-to-tell')
  }
  else {
   // Send user to next page
    res.redirect('/change-1-0/what-is-your-new-name')
  }

})



 //Changed 2

router.post('/change-1-0/changed-answer', function (req, res) {

  // Make a variable and give it the value from 'what-has-changed'
  var Changed = req.session.changed

  // Check whether the variable matches a condition
  if (Changed == "Name"){
     // Send user to ineligible page
    res.redirect('/change-1-0/have-you-told')
  }
  else {
   // Send user to next page
    res.redirect('/change-1-0/which-benefits')
  }

})


 //Benefits

router.post('/change-1-0/benefits-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var Benefits = req.session.benefits

  // Check whether the variable matches a condition
  if (Benefits == "Universal Credit"){
     // Send user to ineligible page
    res.redirect('/change-1-0/have-you-told')
  }
  else {
   // Send user to next page
    res.redirect('/change-1-0/have-you-told')
  }

})


  // CHILDREN

  router.post('/change-1-0/children-u4', function (req, res) {
    if (req.session.data['children-u4'] === '0') {
      return res.redirect('/change-1-0/are-you-pregnant')
    } 

    return res.redirect('/change-1-0/child1-date-of-birth')
  })
}



module.exports = {
  attachRoutes
}
