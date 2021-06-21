### In This Article

In this article, you will find the answers to these questions

- What should my group accomplish by the **afternoon of Day 1**?
- How should we plan our app?
- What procedures (pull requests, question queue, etc.) should we follow as we move forward?

For the exact expectations and parameters of this assignment, see the [Review Site Requirements](https://learn.launchacademy.com/lessons/review-site-apprenti) article

### Introduction

During this challenge, you'll build a web application in a group of developers. We're building this project for a few reasons:

1. To touch on several of the key features of basic Spring apps, such as CRUD functionality, building out internal APIs, storing photos, and search.

- To utilize your understanding of React.js to create a seamless front-end experience for users.
- To gain more experience collaborating on an app and using git workflows.

This project will require you to learn how to work as a part of a team. The EEs will observe and assist you as managers and will require you to practice good team workflow, including agile methodology (in the form of daily stand-up and stand-down meetings), git version control, user stories, and acceptance criteria.

**Expect these two weeks to be challenging!** Collaboration can be tough, both organizationally and personally. Treat this project as an opportunity to strengthen your communication and organizational skills. Employers value developers who can communicate well with others and are patient and good-natured with their team members.

#### MUST Do Before Day 1 Afternoon Meeting

##### Setting up your Team

- Select a note-taker for the day
- [Create your private group Slack channel](https://get.slack.help/hc/en-us/articles/201402297-Create-a-channel) (different from a group DM!) and add all EEs
- Decide on the topic of the review site you'll be making together
- Create an ER diagram and user stories for your first two features
- Have your note-taker post your two user stories into your Slack channel

##### Create Your App

##### **On one person's machine...**

- Get the starting code base

  ```no-highlight
  et get review-site-introduction-apprenti
  cd review-site-introduction-apprenti
  createdb review_site
  idea .
  ```

- Take a moment to look at what has been provided as a team.

- There is an empty `V1.0.0__init.sql` migration included, so that spring boot can run initially without erroring out due to an empty migrations folder.

- Edit the README.md to include the name and a brief description of the project as well as a list of all the authors.

- Don't do any further work on your app yet!

##### Create Your Repo

1. Have every team member run the following command to ensure that `git init` will create a `main` branch by default and not a master branch.

   ```no-highlight
   git config --global init.defaultBranch main
   ```

- **On the person's machine who has the starter code**

  1. Create a repository on Github, add all group members and all EEs as collaborators, and push your starting code ("initial commit") up to the remote repo following GitHub's instructions for importing an existing repository.

  On each other person's machine...

  2. **Clone** (do not fork or download as a zip) the remote repo to set up a local copy of the code. Remember to create the database locally too!

##### Check Your Environment

**On each person's machine...**

Ensure that the correct postgres username and password are set up for the following (for most users this is `postgres` and `password` respectively).

```
spring.datasource.username
spring.datasource.password
flyway.user
flyway.password
```

Also ensure that you are using Java 11, mismatching Java versions could lead to unexpected consequences.

#### Planning Your App

After the Day 1 meeting, you will get to work on your project! You'll find that the first step is to plan out your first few features. Check out this guide to roadmapping a challenge: [Roadmapping a Challenge](https://learn.launchacademy.com/lessons/roadmapping-a-challenge) and the [User Stories and Acceptance Criteria](https://learn.launchacademy.com/lessons/user-stories-and-acceptance-criteria) article when organizing your features.

You may also choose to use a Trello board, Jamboard, shared Google doc, or some other kind of organizational tool for assigning and keeping track of tasks.

#### Daily Procedure

**Please read this section carefully and refer to it often! Take following these instructions as seriously as you would if this were an actual workplace.**

##### Morning Stand-Up and Notes

Adhering to Agile methodology, you are to have a stand-up meeting each morning at a time agreed to by your group (no later than 12PM ET/9AM PT). You will select a note-taker for the day, discuss what you accomplished the previous day, and state your goals for the day. _Your note-taker should then post your stand-up notes in your Slack channel by 12:30ET/9:30PT each morning_.

An example of good stand-up notes is below:

```no-highlight
Yesterday:
- Pat and Dan A worked on adding Google Maps to the restaurant show page.
  - They got stuck on getting the map to render, and will be talking to AmyLynn for some tips from her prior project.
- AmyLynn and Dan P worked on adding reviews and the new review form.

Today:
- Pat and Dan A will finish up implementing the Google Maps.
- AmyLynn and Dan P will move on to adding the reviews to the proper restaurant show pages.

We are a bit behind the suggested schedule on the show page for our restaurants, but we hope to be caught up by the end of today!
```

##### Proper Feature Workflow

Once you have a team plan for the day, make sure you are following proper team workflow to get your features shipped! A step-by-step guide for each new feature is below. Note that these steps should be followed together for EACH feature (for example, **one branch or PR should include _one_ feature**, such as "adding a new review" or "restaurant show page"). You can find some more detailed examples in the [Pull Request Workflow Practice](https://learn.launchacademy.com/lessons/pull-request-workflow-practice-js) article.

1. Write your user story.

- Add your acceptance criteria.
- Check out a new branch for your feature.
- Write the code for your feature.
- Commit your changes and push your branch up to Github.
- On Github, create a Pull Request.
- Make sure that your code adheres to style guides (proper spacing, no partial code, no extraneous comments, and no `debugger`s).
- Copy the PR link and post in the questions channel tagging the EE on PR Review that shift.
- If you run into questions, add a Question Queue question with **all required information** (including code snippets, steps this far, and error message text).

##### Dealing with Project Blockers

There will be times when you're waiting on your manager to resolve a QQ question or merge a PR request. The beauty of the git workflow and good planning is that, for the most part, you should be able to organize your branches so that you can work on additional features while waiting.

However, sometimes you may have a PR waiting for review or a question in the queue that is blocking your progress on **all other features**. It is extremely important to learn how to properly communicate this to your manager! You will only want to communicate in this way when you have truly hit a standstill: we don't want any situations of the wolf who cried "kid" 😉.

When posting a question or PR which is fully blocking your group, be sure to tag your PR Manager in Slack with a note indicating that this issue is blocking your team's progress forward and why. This way, your PR manager will know where to best focus their time to help you move forward productively!

##### End of day Stand-Down

There will also be a brief stand-down at the end of each day. Aim to have these by 6:30ET/3:30PT each afternoon. You will select a note-taker for the day, discuss what you accomplished, what is left on the current story, and any blockers that you have. _Your note-taker should then post your stand-down notes in your Slack channel after this meeting_.

An example of good stand-down notes is below:

```no-highlight
Today:
- Pat and Dan A were able to get google maps to render on the page!
  - Currently we are using a hardcoded address, but will update this tomorrow to get a users IP address and use that for the initial location.

- AmyLynn and Dan P were able to get reviews displaying on the item show page.
  - The reviews table, controller, and model have been created.
  - Tomorrow we will add a form page to add a new review to the item show page.

We were able to make good progress today and are hopeful to wrap up these features tomorrow!
```

Stand-up and stand-down meetings are meant to be brief and serve has a way to provide context to the team at large on what you are currently working on. Avoid letting these turn in hour long debugging sessions as that won't be fair or respectful to the other group members time.

Afterwards you can make your final WIP (Work In Progress) commits for the day and push to github, so your work is saved and available to all members of the team. Make it a habit push up code at the end of the day to avoid any issues if your computer was to die. All groups should be done working by 7:00ET/4:00PT each day. You are not allowed to work on completing features after hours.
