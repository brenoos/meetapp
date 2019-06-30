import UserRepository from '../repositories/UserRepository';

class UserController {
  async store(req, res) {
    const { id, name, email } = await UserRepository.create(req, res);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const { id, name, email } = await UserRepository.update(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
