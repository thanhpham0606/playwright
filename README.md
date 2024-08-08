# README

## **Introduction**

This README file will guide you through collaborating with our team using Bitbucket. Bitbucket is a Git-based platform that facilitates version control and collaboration among team members.

Other than that, it provides you with some common used command lines to work with Playwright.

## Team collaboration with Bitbucket


### 1. Getting Started

- Have a Bitbucket account
- Git installed

### 2. Cloning the Repository

```bash
git clone <repository_url>
```

Replace <repository-url> with the actual URL of the repository.

### 3. Branching

The branch name should include a branch type and its name

- Type (prefix): feature, hotfix, bugfix, release, other
- Name: use hyphens for word separation, be descriptive, include issue or ticket numbers, testcase ID, keep it short, etc. (i.e. feature/add-readme, feature/CPS118-create-and-resolve-internal-dispute)


```bash
git checkout -b feature/branch-name
```

### 4. Making changes

Make your code changes on the branch you created. Ensure that your changes are clear, concise, and follow our coding standards.

### 5. Staging and committing changes

```bash
git add .
```

```bash
git commit -m "your commit message"GIT 
```

### 6. Pushing changes

Once your changes are ready, push your branch to the remote repository:

```bash
git push origin feature/branch
```

### 7. Creating a pull request

Create a pull request (PR) on the Bitbucket web interface to merge your changes into the branch “main”. Provide a detailed description of your changes and any relevant information.

### 8. Resolving Conflicts

If there are conflicts during the PR merge, resolve them locally on your branch. After resolving conflicts, push the changes again.

### 9. Reviewing and merging

All code changes must go through a code review process. Assign the PR to a team member for review, and make necessary adjustments based on the feedback.

**Note**

If others have made changes to the repository, pull those changes to your local machine:

```bash
git pull origin main

```

# Playwright

- Have Node.js installed (”version”: “20.11.4”) - https://nodejs.org/en

**Install Playwright**

```bash
npm i
npx playwright install
```

**Run all the tests**

```bash
npx playwright test
```

**Run a single test file**

```bash
npx playwright test tests/todo-page.spec.ts
```

**Run tests in interactive UI mode**

```bash
npx playwright test --ui
```

**HTML Test Reports**

By default, the HTML report is opened automatically if some of the tests failed.

```bash
npx playwright show-report
```

# Proxy
In case you need to access the application using proxy, please refer to the following and add it to the playwright.config.ts file
```tsx
launchOptions: {
      proxy: { server: 'per-context' }
    },
    proxy: {
      server: 'http://10.10.2.31:9090',
    }
```

# Naming Conventions

## Selectors

### 1. Web Element locator variable names

`<prefix><selectorName>`

| Prefix | Element Type |                Example |
|--------|:-------------|-----------------------:|
| btn    | Button       |               btnLogin |
| txt    | TextBox      |            txtUsername |
| link   | Link         |              linkAbout |
| btn    | Button       |               btnLogin |
| txt    | TextBox      |            txtUsername |
| link   | Link         |              linkAbout |
| lbl    | Label        |           lblNoteTitle |
| img    | Image        |             imgProfile |
| drp    | Dropdown     |              drpStatus |
| chk    | Checkbox     |        chkPrimarySkill |
| cbb    | ComboBox     | cbbJobSkillInterviewer |
| icon   | Icon         |         iconInfoActive |
| table  | Table        |         tableCampaigns |
| row    | Row          |               rowFirst |
| col    | Column       |            colJobTitle |
| cell   | Cell         |        cellRequestDate |
| tab    | Tab          |               tabOrder |
