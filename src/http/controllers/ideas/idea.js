import { responseObject } from '../../../Helpers/common';
import { createIdea } from '../../../services/idea';
import { HTTP_UNAUTHORIZED } from '../../../helpers/httpCodes';

class IdeaController {}

IdeaController.createFarmerAccount = async (req, res, next) => {
  const userId = req.params.userId;
  const ideaInfo = req.body;

  if (!userId)
    responseObject(
      res,
      HTTP_UNAUTHORIZED,
      'error',
      null,
      'Kindly login to access this resource'
    );

  const newIdea = await createIdea(userId, ideaInfo);

  const { rCode, rState, rData, rMessage } = newIdea;

  return responseObject(res, rCode, rState, rData, rMessage);
};

export default IdeaController;
