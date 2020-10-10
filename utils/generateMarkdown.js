// function to generate markdown for README
function generateMarkdown(data) {

return `# ${data.title}

${generateBadge(data.licenses)}

## Description
${data.description}

## Table of Contents 
* [Installation](#installation) 
* [Usage](#usage) 
* [Contributing](#contributing) 
* [Testing](#testing) 
* [Questions](#questions) 


## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage 
${data.usage}

## Contributing
${data.contributing}

## Testing
\`\`\`
${data.test}
\`\`\`

## Questions
GitHub Profile: [${data.github}](http://www.github.com/${data.github})  
Email: ${data.email}

`;
}

function generateBadge (licenses){
  let license= " ";
  if (licenses === "MIT"){
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)"
  } 
  else if (licenses === "APACHE 2.0") {
    license = "[![License: APACHE 2.0](https://img.shields.io/badge/License-apache2.0-orange.svg)](https://opensource.org/licenses/apache2.0)"
  }
  else if (licenses === "GPL 3.0") {
    license = "[![License: GPL 3.0](https://img.shields.io/badge/License-gpl3.0-yellow.svg)](https://opensource.org/licenses/GPL-3.0)"
  }
  else{
    license = "[![License: BSD 3](https://img.shields.io/badge/License-bsd3-yellowgreen.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  return license;
}

module.exports = generateMarkdown;
