//creating generate Markdown function to be exported to index.js as module
function generateMarkdown(data) {
//crearing a dynamic license changing based on user input using literals
  return `# ${data.title}

  ## Licensing:
  ![License: MIT](https://img.shields.io/badge/License-${data.licensing}-yellow.svg)
  ## Videos and Application Images
  <iframe  title="YouTube video player" width="480" height="390" src="https://www.youtube.com/watch?v=3NE0NLoVIeg&ab_channel=EsraAl-Abduljabar" frameborder="0" allowfullscreen></iframe>

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