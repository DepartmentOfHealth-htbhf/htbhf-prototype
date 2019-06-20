const attachRoutes = (router) => {
  // BASELINE prototype routes beneath here


  //Scotland

router.post('/BASELINE/where-live-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var whereLive = req.session.data['where-live']

  // Check whether the variable matches a condition
  if (whereLive == "Yes"){
     // Send user to ineligible page
    res.redirect('/BASELINE/not-eligible-scotland')
  }
  else {
   // Send user to next page
    res.redirect('/BASELINE/date-of-birth')
  }

})



 //Benefits

router.post('/BASELINE/benefits-answer', function (req, res) {

  // Make a variable and give it the value from 'live-scotland'
  var Benefits = req.session.data['which-benefits']

  // Check whether the variable matches a condition
  if (Benefits == "Universal Credit"){
     // Send user to ineligible page
    res.redirect('/BASELINE/children-u4')
  }
  else {
   // Send user to next page
    res.redirect('/BASELINE/children-u4')
  }

})


  // CHILDREN

  router.post('/BASELINE/children-u4', function (req, res) {
    if (req.session.data['children-u4'] === '0') {
      return res.redirect('/BASELINE/are-you-pregnant')
    } 

    return res.redirect('/BASELINE/child1-date-of-birth')
  })
}



module.exports = {
  attachRoutes
}
