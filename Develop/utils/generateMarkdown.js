function generateMarkdown(answers, user) {
  return `
![Markdown](https://img.shields.io/badge/100%25-Javascript-yellow)
![Markdown](https://img.shields.io/badge/User-Francisco-blue)

# ${answers.title}
## Description 
${answers.description}
## Table of contents
- Installation\n
- Usage\n
- License\n
- Contribution\n
- Tests\n
- Questions\n
## Installation
${answers.installation}
## Usage 
${answers.usage}
## License 
${answers.license}
## Contributing 
${answers.contributing}
## Test
${answers.test} 

---

If there is any questions, please contact:\n
- ${user.name}\n
- **Email** ${user.html_url}\n
![Profile Image](${user.avatar_url})\n
`;
}

module.exports = generateMarkdown;
