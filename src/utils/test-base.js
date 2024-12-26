const base = require('@playwright/test')

exports.customtest = base.test.extend(
    {
        testDataForOrder : {
        email: "suyashguha04@gmail.com",
        password: "Strong@1234",
        productName: "ZARA COAT 3"
        }
    }
)