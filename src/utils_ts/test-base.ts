
import { test as baseTest } from '@playwright/test'

interface testDataForOrder {
    email: string;
    password: string;
    productName: string;
}

export const customtest = baseTest.extend<{ testDataForOrder: testDataForOrder }>(
    {
        testDataForOrder: {
            email: "suyashguha04@gmail.com",
            password: "Strong@1234",
            productName: "ZARA COAT 3"
        }
    }
)