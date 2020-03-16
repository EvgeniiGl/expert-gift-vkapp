export const mock_bridge = {
    send: (msg: string, data?: any): any => {
        switch (msg) {
            case 'VKWebAppCallAPIMethod':

                return {
                    status: true,
                    data: {
                        response: [...Array(19).keys()].map((i, index) =>
                            index % 2 ?
                                {
                                    id: 151079225,
                                    first_name: "Евгений",
                                    last_name: "Глечиков",
                                    photo_200: "https://sun9-70.userapi.com/c639127/v639127225/8ecf/ecFoax3YGYk.jpg?ava=1",
                                    score: 2323232225
                                } :
                                {
                                    id: 12666859,
                                    first_name: "Светлана",
                                    last_name: "Еремеева",
                                    photo_200: "https://sun4-16.userapi.com/c853420/v853420718/e9d3c/XijjNG6Y8iI.jpg?ava=1",
                                    score: 14
                                })
                    }
                };
            case "VKWebAppGetUserInfo":
                return {data: {id: 151079225}};
            default:
                return [];
        }

    }

};
