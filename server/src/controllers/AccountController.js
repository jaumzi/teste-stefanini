const { User } = require('../db/models');
// const EmailController = require('./EmailController');
var jwt = require('jsonwebtoken');

const Cryptography = require('../util/Cryptography');
const EnumCookies = require('../util/EnumCookies');
const EnumPermission = require('../util/EnumPermission');
const UserService = require('../domain/repositories/UserService');
// const DatabaseService = require('../services/DatabaseService');

const SystemParams = require('../util/SystemParams');

const userService = new UserService(User);

const userFormatter = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  permission: user.permission,
});

module.exports = {
  async insertUserBasic(req, res) {
    const {
      name,
      email,
      password,
      cpf,
      birthday
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Nome não informado!' });
    }
    if (!email) {
      return res.status(400).json({ error: 'Email não informado!' });
    }
    if (!password) {
      return res.status(400).json({ error: 'Senha não informada!' });
    }
    if (!cpf) {
      return res.status(400).json({ error: 'CPF não informado!' });
    }
    const birthdayDate = new Date(birthday);
    if (birthdayDate == 'Invalid Date') {
      return res.status(400).json({ error: 'Data de nascimento inválida!' });
    }
    const user = await userService.GetCompleteByEmail(email);
    if (user) {
      return res
        .status(400)
        .json({ error: 'Email já cadastrado para um usuário!' });
    }

    const hash = await Cryptography.Encrypt(password);
    await userService
      .Insert({
        name,
        email,
        password: hash,
        cpf,
        birthday: birthdayDate,
        permission: EnumPermission.BASIC
      })
      .then(data =>
        res.json(userFormatter(data))
      )
      .catch(err =>
        res.status(400).json({ error: 'Erro ao salvar Usuario! - ' + err })
      );
  },

  async login(req, res) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email não informado!' });
    }
    if (!password) {
      return res.status(400).json({ error: 'Senha não informada!' });
    }

    const user = await userService.GetCompleteByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Usuario não encontrado!' });
    }

    const passwordEncrypt = await Encrypt(password);
    if (user.password !== passwordEncrypt) {
      return res.status(400).json({ error: 'Senha inválida!' });
    }

    const { params } = await SystemParams();

    const userJWT = jwt.sign(
      userFormatter(user),
      params.jwt,
      {
        expiresIn: 60 * 60 * 24 * 120 // ultimo digito é numéro de dias
      }
    );

    res.cookie(EnumCookies.USER, userJWT, {
      maxAge: 1000 * 60 * 60 * 24 * 120, // ultimo digito é numéro de dias
      httpOnly: true
    });

    const userResult = {
      id: user.id,
      name: user.name,
      email: user.email,
      permission: user.permission,
      [EnumCookies.USER]: userJWT
    };

    // if (usuario.UsuarioLojista && usuario.UsuarioLojista.length > 0) {
    //   userResult['Loja'] = usuario.UsuarioLojista[0].Loja;
    // }

    return res.json(userResult);
  },

  async loginValidate(req, res) {
    const { currentUser } = req;

    if (!currentUser) {
      return res.status(400).json({ error: 'Usuário não autenticado!' });
    }

    const { params } = await SystemParams();
    const userJWT = jwt.sign(
      { email: currentUser.email, password: currentUser.password },
      params.jwt,
      {
        expiresIn: 60 * 60 * 24 * 120 // ultimo digito é numéro de dias
      }
    );

    res.cookie(EnumCookies.USER, userJWT, {
      maxAge: 1000 * 60 * 60 * 24 * 120, // ultimo digito é numéro de dias
      httpOnly: true
    });

    const user = {
      id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
      permission: currentUser.permission,
      [EnumCookies.USER]: userJWT
    };

    // if (currentUser.UsuarioLojista && currentUser.UsuarioLojista.length > 0) {
    //   user['Loja'] = currentUser.UsuarioLojista[0].Loja;
    // }

    return res.json(user);
  },

  // async forgotPassword(req, res) {
  //   const { email } = req.body;

  //   if (!email) {
  //     return res.status(400).json({ error: 'Email não informado!' });
  //   }
  //   const usuario = await userService.ObterCompletoPorEmail(email);
  //   if (!usuario) {
  //     return res.status(400).json({ error: 'Usuario não encontrado!' });
  //   }

  //   const enviado = await EmailController.sendEmail_ForgotPassword(email);

  //   return res.json({ enviado });
  // }
};
