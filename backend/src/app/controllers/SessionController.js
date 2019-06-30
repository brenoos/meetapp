import Auth from '../services/AuthService';

class SessionController {
  async store(req, res) {
    const session = await Auth.create(req, res);

    return res.json(session);
  }
}

export default new SessionController();
