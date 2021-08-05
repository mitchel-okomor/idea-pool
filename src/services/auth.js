import bcrypt from 'bcrypt-nodejs';
import { issueJwt, responseInfo } from '../helpers/common';
import db from '../models';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK,
  HTTP_SERVER_ERROR,
} from '../helpers/httpCodes';
import util from 'util';
import '../config/global';

const User = db.User;
const genSalt = util.promisify(bcrypt.genSalt);
const hashPassword = util.promisify(bcrypt.hash);
const comparePasswords = util.promisify(bcrypt.compare);

/**
 * Authenticates User with valid credentials
 * @param {string} userEmail
 * @param {string} password
 * @returns User's login information with a signed token
 */
export const loginUser = async (userEmail, password) => {
  try {
    const user = await User.findOne({
      where: { email: userEmail },
    });
    if (user === null) {
      const error = new Error('Incorrect Email or Password');
      return responseInfo(HTTP_BAD_REQUEST, 'error', null, error.message);
    }

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) {
      const error = new Error('Incorrect Email or Password');
      return responseInfo(HTTP_BAD_REQUEST, 'error', null, error.message);
    }

    const loggedInUser = user.dataValues;

    const { id, name, email } = loggedInUser;
    const jwt = issueJwt(loggedInUser);
    if (!jwt) {
      const error = new Error(
        'The system encountered an error trying to sign you in. Please try again.'
      );
      return responseInfo(HTTP_BAD_REQUEST, 'error', null, error.message);
    }

    const newUser = {
      user: {
        id,
        name,
        email,
      },
      token: jwt.token,
      expiresIn: jwt.expires,
    };
    return responseInfo(HTTP_OK, 'success', newUser, 'LoggedIn successfully');
  } catch (err) {
    //console.log(err);
    // eslint-disable-next-line no-undef
    return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
  }
};

/**
 * Creates a user in the database and returns the user's basic detials.
 *
 * @param {object} data
 * @returns User object
 */
export const createUser = async (data) => {
  const { name, email, password } = data;
  console.log(data);

  try {
    const user = await User.findOne({
      where: { email },
    });

    if (user !== null) {
      return responseInfo(
        HTTP_BAD_REQUEST,
        'error',
        null,
        'User already exists!'
      );
    }

    const salt = await genSalt(10);
    const hashedPassword = await hashPassword(password, salt, null);

    const createdUser = await User.create({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
    });

    const newUser = {
      user: {
        id: createdUser.id,
        name: createdUser.name.trim(),
        email: createdUser.email.trim(),
      },
    };

    return responseInfo(
      HTTP_CREATED,
      'success',
      newUser,
      'Registration Successfull! Kindly login to your email account confirm your email address.'
    );
  } catch (err) {
    console.log(err);
    if (err) {
      return responseInfo(
        HTTP_SERVER_ERROR,
        'error',
        null,
        'A server error occured'
      );
    }
  }
};

export const updateUser = async (id, data) => {
  const { name, email } = data;
  console.log(id);
  try {
    const newIdea = await User.update(
      {
        name,
        email,
      },
      {
        where: {
          id: id,
        },
      }
    );
    console.log(newIdea);
    return responseInfo(
      HTTP_CREATED,
      'success',
      newIdea,
      'User updated successful'
    );
  } catch (err) {
    if (err) {
      console.log(err);
      return responseInfo(
        HTTP_SERVER_ERROR,
        'error',
        null,
        'A server error occured!'
      );
    }
  }
};
