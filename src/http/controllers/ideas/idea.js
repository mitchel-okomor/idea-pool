import { responseObject } from '../../../helpers/common';
import {
  createIdea,
  deleteIdea,
  updateIdea,
  getUserIdeas,
} from '../../../services/idea';
import db from '../../../models';

const Idea = db.Idea;

class IdeaController {}

IdeaController.createIdea = async (req, res, next) => {
  const userId = req.user.id;
  const ideaInfo = req.body;

  //   validate payload
  const validate = await Idea.validatePostData(req);
  if (validate !== true) {
    const { rCode, rState, rMessage } = validate;
    return responseObject(res, rCode, rState, null, rMessage);
  }

  const newIdea = await createIdea(userId, ideaInfo);

  const { rCode, rState, rData, rMessage } = newIdea;

  return responseObject(res, rCode, rState, rData, rMessage);
};

IdeaController.deleteIdea = async (req, res, next) => {
  const ideaId = req.params.id;

  const newIdea = await deleteIdea(ideaId);

  const { rCode, rState, rData, rMessage } = newIdea;

  return responseObject(res, rCode, rState, rData, rMessage);
};

IdeaController.updateIdea = async (req, res, next) => {
  const ideaId = req.params.id;
  const ideaInfo = req.body;

  const ideaData = await updateIdea(ideaId, ideaInfo);

  const { rCode, rState, rData, rMessage } = ideaData;

  return responseObject(res, rCode, rState, rData, rMessage);
};

IdeaController.fetchUserIdeas = async (req, res, next) => {
  const userId = req.params.userId;
  const ideaData = await getUserIdeas(userId);

  const { rCode, rState, rData, rMessage } = ideaData;

  return responseObject(res, rCode, rState, rData, rMessage);
};

export default IdeaController;
