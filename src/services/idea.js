import { responseInfo } from '../helpers/common';
import { HTTP_CREATED, HTTP_SERVER_ERROR } from '../helpers/httpCodes';
import db from '../models';

// eslint-disable-next-line no-unused-vars
const { Idea } = db;

export const createIdea = async (userId, IdeaInfo) => {
  const { text, impact, ease, confidence } = IdeaInfo;

  try {
    const newIdea = await Idea.create({
      userId,
      text,
      impact,
      ease,
      confidence,
    });

    return responseInfo(HTTP_CREATED, 'success', newIdea, 'Successful');
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

export const deleteIdea = async (id) => {
  try {
    const newIdea = await Idea.destroy({
      where: {
        userId: id,
      },
    });

    console.log(newIdea);

    return responseInfo(
      HTTP_CREATED,
      'success',
      newIdea,
      'Idea deleted successful'
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

export const updateIdea = async (id, IdeaInfo) => {
  const { text, impact, ease, confidence } = IdeaInfo;
  console.log(id);
  try {
    const newIdea = await Idea.update(
      {
        text,
        impact,
        ease,
        confidence,
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
      'Idea updated successful'
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

export const getUserIdeas = async (id) => {
  try {
    const newIdea = await Idea.findAll({
      where: {
        id: id,
      },
    });
    console.log(newIdea);
    return responseInfo(HTTP_CREATED, 'success', newIdea, '');
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
