'use strict'

objtrans = require '../index'

user =
  name: 'jimmy'
  emails: [
    'jam@jam.com'
    'jef@jef.com'
    'zam@zam.com'
  ]
  local:
    email: 'jim@jim.com'
    password: '23goh32fgdf'
  firstname: 'Jim'
  horrible:
    obj:
      surname: 'Smith'
    
pattern = 
  nameDetails:
    name: true
    username: 'name'
  email: 'emails[first]'
  firstname: (input) ->
    if input
      input.toUpperCase()
  lastname: ['horrible.obj.surname', (input) ->
    if input
      input.toLowerCase()
  ]
  details:
    fullname: (input) ->
      input.firstname + ' ' + input.horrible.obj.surname
      
newUser = objtrans user, pattern

console.log JSON.stringify(newUser, null, '  ')