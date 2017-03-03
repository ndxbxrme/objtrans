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
    firstname: 'jim',
    horrible: {
      obj: {
        surname: 'smith'
      }
    }
  };

  pattern = {
    'username': 'name',
    email: 'emails[first]',
    details: {
      fullname: function(input) {
        return input.firstname + ' ' + input.horrible.obj.surname;
      }
    }
  };

  newUser = objtrans(user, pattern);

  console.log(newUser);

}).call(this);

//# sourceMappingURL=test.js.map
