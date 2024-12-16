
class APIUtils{

    constructor(APIContext,loginpayLoad){
        this.APIContext = APIContext;
        this.loginpayLoad;

    }
    async getToken(){

        const loginResponse = await this.APIContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
            {
                data:this.loginpayLoad
            })
            //expect(loginResponse.ok()).toBeTruthy();
        
            const loginResponseJson = await loginResponse.json()
            const token = loginResponseJson.token;
            console.log(token)
            return token
        
    }

    async creteOrder(orderPayload){
        //---------------------Handle Oredr API.----------------
        let respose = {};
        respose.token = await this.getToken();
            const orderReponse = await this.APIContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
            {
                data: orderPayload,
                headers: {
                    'Authorization' : respose.token,
                    'Content-type' : 'application/json'
                }       
            })
        
            const orderResponseJson = await orderReponse.json();
            console.log(orderResponseJson)
            orderid = orderResponseJson.orders[0] // Here we have an issue.
            respose.orderid = orderid;
            return respose;
    }
}
module.exports = {APIUtils};