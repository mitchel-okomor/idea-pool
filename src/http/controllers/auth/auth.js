import { createUser, loginUser, updateUser } from '../../../services/auth';
import db from '../../../models';
import { errorObject, responseObject } from '../../../helpers/common';

const User = db.User;

class AuthController {}

// Login Route
AuthController.login = async function (req, res, next) {
  const { email, password } = req.body;
  try {
    const loggedInUser = await loginUser(email, password);
    const { rCode, rState, rData, rMessage } = loggedInUser;
    req.session.User = rData;
    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err) {
    if (err) {
      return errorObject(res, 500, JSON.parse(err.message));
    }
  }
};

// Registration Route
AuthController.registerUser = async function (req, res, next) {
  //   validate payload
  const validate = await User.validatePostData(req);
  if (validate !== true) {
    const { rCode, rState, rMessage } = validate;
    return responseObject(res, rCode, rState, null, rMessage);
  }

  const { name, email, password } = req.body;

  const reqData = { name, email, password };

  try {
    const user = await createUser(reqData);
    const { rCode, rState, rData, rMessage } = user;

    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err) {
    console.log(err);

    return errorObject(res, 500, JSON.parse(err.message));
  }
};

// Registration Route
AuthController.updateUser = async function (req, res, next) {
  //   validate payload
  const id = req.user.id;
  const { name, email } = req.body;

  const reqData = { name, email };

  try {
    const response = await updateUser(id, reqData);
    const { rCode, rState, rData, rMessage } = response;

    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err) {
    console.log(err);

    return errorObject(res, 500, JSON.parse(err.message));
  }
};

export default AuthController;
