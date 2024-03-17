// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ## Contents 
  [Description](#description)
  [Requirements](#requirements)
  [Usage](#usage)
  [Contact](#contact)
  [Contributors](#contributors)
  [Testing](#testing)
## Description
${data.description}
## Requirements 
${data.requirements}
## Usage
${data.usage}
## Contact
Name - ${data.name}
Email - ${data.email}
GitHub - ${data.creator}
## Contributors 
${data.contributors}
## Testing 
${data.test}

`;
}

module.exports = generateMarkdown;
