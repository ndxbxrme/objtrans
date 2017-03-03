(function() {
  'use strict';
  var newUser, objtrans, pattern, user;

  objtrans = require('../index');

  user = {
    name: 'jimmy',
    emails: ['jam@jam.com', 'jef@jef.com', 'zam@zam.com'],
    local: {
      email: 'jim@jim.com',
      password: '23goh32fgdf'
    },
    firstname: 'Jim',
    horrible: {
      obj: {
        surname: 'Smith'
      }
    }
  };

  pattern = {
    nameDetails: {
      name: true,
      username: 'name'
    },
    email: 'emails[first]',
    firstname: function(input) {
      if (input) {
        return input.toUpperCase();
      }
    },
    lastname: [
      'horrible.obj.surname', function(input) {
        if (input) {
          return input.toLowerCase();
        }
      }
    ],
    details: {
      fullname: function(input) {
        return input.firstname + ' ' + input.horrible.obj.surname;
      }
    }
  };

  newUser = objtrans(user, pattern);

  console.log(JSON.stringify(newUser, null, '  '));

}).call(this);

//# sourceMappingURL=test.js.map
