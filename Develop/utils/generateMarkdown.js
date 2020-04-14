function generateMarkdown(answers, user) {
  return `
# ${answers.title}
## Description 
${answers.description}
## Table of contents
-Installation
-Usage
-License
-Contribution
-Tests
## Installation
${answers.installation}
## Usage 
${answers.usage}
## License 
${answers.license}
## Contributing 
${answers.contributing}
## Tests 
${answers.test} 

## Picture
${user.avatar_url}

`;
}

module.exports = generateMarkdown;
