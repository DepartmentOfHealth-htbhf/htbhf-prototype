This README will capture instructions
1. for making updates to the prototype repository hosted here (https://github.com/DepartmentOfHealth-htbhf/htbhf-prototype) and auto-deploy  updates to heroku https://htbhf-prototype.herokuapp.com.
2. set up a prototype application on heroku


For now, the instructions assume that the team is running OSX on mac machines.


## Making updates to the prototype

Any code changes to the master branch of https://github.com/DepartmentOfHealth-htbhf/htbhf-prototype will auto-deploy to the version of the prototype hosted here: https://htbhf-prototype.herokuapp.com.


### Pre-requisites for being able to pull and push prototype code from github (and auto-deploy to heroku)

* You will need a working git installation (brew install git)
* You will need a Github account and account is part of https://github.com/DepartmentOfHealth-htbhf organisation (ask msmith@equalexperts.com)
* You will need a working SSH key registered with your Github account (https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

### Working with the Github repository

* To get the latest code in the master branch, you will need to clone the respository: git clone git@github.com:DepartmentOfHealth-htbhf/htbhf-prototype.git

* After you have made changes to the master branch, add them to the local commit log, commit to the local branch and then push to the github (origin) master branch

git add {list of modified files delimited with spaces}

git commit -m "{JIRA ID some meaningful message}"

git push

* Don't forget to pull regularly from the origin as this will minimise merge conflicts.



### Pre-requisites for being able to push / pull changes to heroku

* It's useful to have latest version of xcode tools running on OSX (xcode-select --install) N.B. It's generally required that latest version of xcode should be running on latest version(s) of OSX, so it is good to make sure that you have latest version of OSX running.
* You will need to install the heroku CLI (https://devcenter.heroku.com/articles/heroku-cli#download-and-install) (brew install heroku/brew/heroku)
* And also need to have a Heroku free account (https://signup.heroku.com/)

### Instructions for publishing a prototype nodejs app on heroku

Can be found here: https://govuk-prototype-kit.herokuapp.com/docs/publishing-on-heroku


