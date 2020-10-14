# Xerini Coding Challenge

    This repository contains the complete source code for the runtime of Xerini Coding Challenge.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scenario & requirements

### Summary

You are asked to build a simple ReactJS front-end-only app that allows a user to log in, navigate to their “profile” page, update it and verify their profile has changed.

No back-end services are expected or required. A simple json file is given below that you should return via a function that mocks connecting to a backend service.

We expect to see the whole project with a structure that you would typically employ that contains the HTML, CSS, JavaScript and image files, plus any other translation or compilation files or configuration (e.g. Webpack) you would typically use.

### User story

1. A user logs in through a simple username and password form, page or modal.

2. The user is presented with a simple navigation menu on which “Profile” is one option (you can add or mock others just to make it obvious there are other navigation options, but these don’t need to be implemented)
3. The user clicks “Profile” and is take to a profile page which lists a collection of user data. Two buttons are also presented: Edit and Cancel. Cancel takes the user back to the first page (2).
4. The user clicks Edit and is shown the user data in editable form along with two buttons: Save and Cancel. Cancel returns the user to the “Profile” page in 3.
5. The user changes the values and clicks Save.
6. The user is presented with the updated user data in non-editable form.
7. The user presses Back and goes back to (2).
8. The user clicks the “Profile” link again and goes to the profile page which should, again, show the updated data they edited in step (5).

### Prerequisites

- Nodejs
- Git

### Installing

Install [npm](https://nodejs.org/en/download/) or [Yarn](https://yarnpkg.com)

Clone whole source code as follows and go to xerini-user-profile-challenge folder

```
git clone https://github.com/umitkaraogul/xerini-user-profile-challenge
```

```
cd xerini-user-profile-challenge
```

## Running

```
    cd xerini-user-profile-challenge
    yarn install
    yarn start
```

> The front end will start on [port 3000](http://localhost:3000)

## Deployment

This project deployed on [Netlify](https://netlify.app/)

You can test [the application on Netlify.](https://xerini-user-profile-challenge.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/83b81df8-7a20-4950-bcbf-52a95da73d84/deploy-status)](https://app.netlify.com/sites/xerini-user-profile-challenge/deploys)

## Built With

- [yarn](https://yarnpkg.com/) - JavaScript Package Manager

## Authors

- **Umit Karaogul** - _Initial work_ - [xerini-user-profile-challenge](https://github.com/umitkaraogul/xerini-user-profile-challenge)
