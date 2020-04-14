function generateMarkdown(answers, user) {
  return `
![Markdown](https://img.shields.io/badge/100%25-Javascript-yellow)
# ${answers.title}
## Description 
${answers.description}
## Table of contents
- Installation\n
- Usage\n
- License\n
- Contribution\n
- Tests\n
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
![Profile Image](${user.avatar_url})\n
- **Email** ${user.html_url}

`;
}

module.exports = generateMarkdown;
