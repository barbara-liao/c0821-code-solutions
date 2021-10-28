function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

var medicalSchool = graduate('M.D.');
var lawSchool = graduate('Esq.');

console.log('medical school: ', medicalSchool('Barbara Liao'));
console.log('law school: ', lawSchool('Barbara Liao'));
