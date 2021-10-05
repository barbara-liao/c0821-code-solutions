/* exported titleCase */

/*
- create storage for output
- create temporary storage for output
- look at each character one by one
- if space and second from the last character in output is ':',
  - capitalize the character and add to the temporary output
  - add temp output to output
  - clear temporary output
- and if space and temporary storage is 'in, for, of, the',
  - make temporary storage lower case
  - add a space to the end of the temporary output
  - add the temporary output to the output
  - clear the temporary output
- and if space and temporary storage is "Javascript",
  - add 'JavaScript ' to the output
  - clear the temporary output
- and if space and temporary storage is "Api",
  - add 'API ' to the output
  - clear the temporary output
- and if the character before the previous is a dash,
  - capitalize the character and add to the temporary output
- and if the character before the previous is a space,
  - capitalize the character and add to the temporary output
- and if the character before the previous is not a space
  - lower case the character and add to temporary output
- add the temporary storage to the output
- return output
*/

function titleCase(title) {
  var output = '';
  var tempOutput = title[0].toUpperCase();

  for (var i = 1; i < title.length; i++) {
    if (title[i] === ' ' && output[(output.length - 2)] === ':') {
      tempOutput += title[i].toUpperCase();
      output += tempOutput;
      tempOutput = '';
    } else if (title[i] === ' ' && output !== '' && (tempOutput === 'In' || tempOutput === 'For' || tempOutput === 'Of' || tempOutput === 'The' || tempOutput === 'To')) {
      output += (tempOutput.toLowerCase() + ' ');
      tempOutput = '';
    } else if (tempOutput === 'Javascript') {
      output += 'JavaScript' + title[i];
      tempOutput = '';
    } else if (title[i] === ' ') {
      output += (tempOutput + ' ');
      tempOutput = '';
    } else if (tempOutput[tempOutput.length - 1] === '-') {
      tempOutput += title[i].toUpperCase();
    } else if (title[i - 1] === ' ') {
      tempOutput += title[i].toUpperCase();
    } else if (title[i - 1] !== ' ') {
      tempOutput += title[i].toLowerCase();
    }
  }
  if (tempOutput === 'Api') {
    tempOutput = 'API';
  }
  output += tempOutput;
  return output;
}
