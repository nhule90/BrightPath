const users = []
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
unknownUser = {
  username: "NA",
  email: "NA",
  firstName: 'NA',
  lastName: 'NA',
}
module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const authenticated = bcrypt.compareSync(password, users[i].passwordHash)
          if (authenticated) {
            let userToReturn = {...users[i]}
            delete userToReturn.passwordHash
            res.status(200).send(userToReturn)
          }
          else {
            res.status(400).send(unknownUser)
          }
        }
        else {
          res.status(400).send(unknownUser)
        }
      }
      // res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        const { username, email, firstName, lastName, password } = req.body
        const passwordHash = bcrypt.hashSync(password, salt)
        let user = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        }
        users.push(user)
        let userToReturn = {...user}
        delete userToReturn.passwordHash
        res.status(200).send(userToReturn)
    }
}