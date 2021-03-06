const { UserModel } = require('../models/index.js');
const BaseRepository =  require('./baseRepository.js');

class UserRepository extends BaseRepository {
  getAllUsers(params) {
    return this.getAll(params);
  }

  // getUserById(id) {
  //   return this.getById(id);
  // }

  async createUser(user) {
    const { login, email, password, username, avatar, private_stream_key, public_stream_key } = user;

    if (await this.model.findOne({ email })){
      throw Error('EMAIL_EXISTS');
    }

    if (await this.model.findOne({ login })){
      throw Error('LOGIN_EXISTS');
    }

    if (await this.model.findOne({ username })){
      throw Error('USERNAME_EXISTS');
    }

    return this.create(user);
  }

  getByLogin(login) {
    return this.model.findOne({ login });
  }

  updateUserById(userId, data) {
    return this.updateById(userId, data);
  }

  deleteUserById(userId) {
    return this.deleteById(userId)
  }
}

module.exports = new UserRepository(UserModel);
