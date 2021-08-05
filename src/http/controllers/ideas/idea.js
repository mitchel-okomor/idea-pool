import { responseObject } from '../../../Helpers/common';
import {
  createIdea,
  deleteIdea,
  updateIdea,
  getUserIdeas,
} from '../../../services/idea';
import { HTTP_UNAUTHORIZED } from '../../../helpers/httpCodes';

class IdeaController {}

IdeaController.createIdea = async (req, res, next) => {
  const user = req.user;
  const ideaInfo = req.body;

  // if (!userId)
  //   responseObject(
  //     res,
  //     HTTP_UNAUTHORIZED,
  //     'error',
  //     null,
  //     'Kindly login to access this resource'
  //   );

  const newIdea = await createIdea(1, ideaInfo);

  const { rCode, rState, rData, rMessage } = newIdea;

  return responseObject(res, rCode, rState, rData, rMessage);
};

IdeaController.deleteIdea = async (req, res, next) => {
  const user = req.user;
  const ideaId = req.params.id;

  // if (!userId)
  //   responseObject(
  //     res,
  //     HTTP_UNAUTHORIZED,
  //     'error',
  //     null,
  //     'Kindly login to access this resource'
  //   );

  const newIdea = await deleteIdea(ideaId);

  const { rCode, rState, rData, rMessage } = newIdea;

  return responseObject(res, rCode, rState, rData, rMessage);
};

IdeaController.updateIdea = async (req, res, next) => {
  const user = req.user;
  const ideaId = req.params.id;
  const ideaInfo = req.body;

  // if (!userId)
  //   responseObject(
  //     res,
  //     HTTP_UNAUTHORIZED,
  //     'error',
  //     null,
  //     'Kindly login to access this resource'
  //   );

  const ideaData = await updateIdea(ideaId, ideaInfo);

  const { rCode, rState, rData, rMessage } = ideaData;

  return responseObject(res, rCode, rState, rData, rMessage);
};

IdeaController.fetchUserIdeas = async (req, res, next) => {
  const user = req.user;
  const userId = req.params.userId;

  // if (!userId)
  //   responseObject(
  //     res,
  //     HTTP_UNAUTHORIZED,
  //     'error',
  //     null,
  //     'Kindly login to access this resource'
  //   );

  const ideaData = await getUserIdeas(userId);

  const { rCode, rState, rData, rMessage } = ideaData;

  return responseObject(res, rCode, rState, rData, rMessage);
};

export default IdeaController;
