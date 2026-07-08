# How to Manage Open Source Issues

As the project maintainer, your job is to guide contributors so they can write code for you effectively. Since you are building the Voice2Web project in the MERN stack with the help of the open-source community, here is exactly how you should operate.

## 1. Use GitHub Issues

While this folder contains a list of tasks, you should transfer them to **GitHub Issues**. 
* Go to your repository on GitHub.
* Click the "Issues" tab.
* Click "New Issue".
* Copy one of the small tasks from the `ISSUE_TRACKER.md` file and paste it there. 
* Add tags (labels) like `good first issue`, `frontend`, `backend`, or `help wanted`.

## 2. Breaking Down Tasks (The Golden Rule)

The issues in `ISSUE_TRACKER.md` are deliberately kept **small**. 
Contributors, especially beginners, get overwhelmed by large tasks. 
* **Bad Issue:** "Build the backend AI integration."
* **Good Issue:** "Create a mock LLM service function that returns JSON."

## 3. The Workflow for Assigning

When a contributor wants to work on something:
1. They will comment on the GitHub issue saying "Can I work on this?"
2. You reply: "Assigned to you! Let me know if you need any help." and assign them via the GitHub UI.
3. They will fork the repository, write the code, and submit a **Pull Request (PR)**.
4. You review their PR. Look at their code, run it locally if needed, and if it looks good, click **Merge**.

## 4. Reviewing Pull Requests

When reviewing PRs from contributors:
* Be kind and encouraging.
* Check if they followed the `CONTRIBUTING.md` guidelines.
* Don't be afraid to ask for changes. For example: *"Great job! Could you just change this variable name to be more descriptive?"*

## Next Steps

Open the `ISSUE_TRACKER.md` file in this folder. Start by copying the "Phase 1" issues into your GitHub repository to attract your first contributors!
