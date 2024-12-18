const ExcelJS = require('exceljs')

//Approch-1 andle Promise like this.
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('C:/Selenium/08_Playwright/Playwright_ATB/Excel_JS/download.xlsx').then(function()
{
    const worksheet = workbook.getWorksheet('Sheet1')
    //Print all the values of the excel sheet
    worksheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            console.log(cell.value)
    
        })
})
})

