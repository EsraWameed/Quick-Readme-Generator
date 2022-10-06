//creating generate Markdown function to be exported to index.js as module
function generateMarkdown(data) {
//crearing a dynamic license changing based on user input using literals
  return `# ${data.title}

  ## Licensing:
  ![License: MIT](https://img.shields.io/badge/License-${data.licensing}-yellow.svg)
  ## Videos and Application Images
  [README.md generator](readme.mp4)
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Additional Info:
  - Github: [${data.githubUser}](https://github.com/${data.githubUser})
  - Email: ${data.email} `;
}
//to export package to index.js
module.exports = generateMarkdown;