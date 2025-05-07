import { AuthenticatedRequest } from "../../interfaces/interfaces";
import { success } from "../../utils/response";

export async function createCampaign(req: AuthenticatedRequest){


    return success({
        message: "Campaign created successfully",
    }, 200)
}