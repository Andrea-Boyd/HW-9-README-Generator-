// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Waddup

## This is all written in Markdown Format

### These are my cats: ${data.cats}
`;
}

module.exports = generateMarkdown;
