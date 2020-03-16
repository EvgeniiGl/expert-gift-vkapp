import bridge, {ErrorData, ReceiveData, RequestMethodName, RequestProps} from '@vkontakte/vk-bridge';
import {isProduction} from "../../../config";
import {mock_bridge} from "../../../mock_bridge";

type ResponseError = {
    error_type: string,
    error_data: ErrorData
}

type Response = {
    status: boolean
    data?: ReceiveData<any> | ResponseError
}

//TODO define all types
class VkBridge {
    send = async (message: RequestMethodName, data: RequestProps = {}): Promise<Response> => {
        try {
            const response = await bridge.send(message, data);
            return response ?
                {status: true, data: response} : {status: false};
        } catch (e) {
            return {status: false, data: e};
        }
    };
}

export const vk_bridge = isProduction ? new VkBridge() : mock_bridge;
