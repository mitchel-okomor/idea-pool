import { createUser, loginUser } from '../../../services/auth';
import db from '../../../models';
import { errorObject, responseObject } from '../../../Helpers/common';

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

  const { firstName, lastName, email, password, phone } = req.body;

  const reqData = { firstName, lastName, email, password, phone };

  try {
    const user = await createUser(reqData);
    const { rCode, rState, rData, rMessage } = user;

    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err) {
    console.log(err);

    return errorObject(res, 500, JSON.parse(err.message));
  }
};

export default AuthController;
