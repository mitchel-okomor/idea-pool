import { responseInfo } from '../helpers/common';
import { HTTP_CREATED, HTTP_SERVER_ERROR } from '../helpers/httpCodes';
import db from '../models';

// eslint-disable-next-line no-unused-vars
const { Idea } = db;

export const createFarmer = async (userId, IdeaInfo) => {
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
