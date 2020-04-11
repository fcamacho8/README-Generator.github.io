function generateMarkdown(answers, user) {
  return `
# ${answers.title}
## Description 
${answers.description}
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



`;
}

module.exports = generateMarkdown;
