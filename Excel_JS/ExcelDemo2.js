const ExcelJS = require('exceljs')

//Approch-2 Handle Promise with function async await.
async function excelTest()
{
    const file_path = 'C:/Selenium/08_Playwright/Playwright_ATB/Excel_JS/download.xlsx'

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(file_path)

    const worksheet = workbook.getWorksheet('Sheet1')
    //Print all the values of the excel sheet
    worksheet.eachRow((row,rowNumber)=>
        {
        row.eachCell((cell,colNumber)=>
            {
            console.log(cell.value)
    
            })
        })
}
excelTest()