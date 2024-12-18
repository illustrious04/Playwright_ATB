const ExcelJS = require('exceljs')



//Change the Cell value with hardcoded value. 
async function excelTest()
{
    const file_path = 'C:/Selenium/08_Playwright/Playwright_ATB/Excel_JS/Data1.xlsx'

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(file_path)

    const worksheet = workbook.getWorksheet('Sheet1')
    //Print all the values of the excel sheet
    worksheet.eachRow((row,rowNumber)=>
        {
        row.eachCell((cell,colNumber)=>
            {
            if(cell.value == 'Apple'){
                console.log(rowNumber)
                console.log(colNumber)
            }
    
            })
        })

    //Replace the value
    const cell = worksheet.getCell(3,2)
    cell.value = 'iPhone'
    await workbook.xlsx.writeFile(file_path)
}
//excelTest()

// Avoiding the hardcoding for the row and column.
async function AvoidingHardCodeValue() {
    const file_path = 'C:/Selenium/08_Playwright/Playwright_ATB/Excel_JS/Data1.xlsx'
    let output = {row:-1, column:-1}

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(file_path)

    const worksheet = workbook.getWorksheet('Sheet1')
    worksheet.eachRow((row, rowNumber)=>
        {
            row.eachCell((cell,colNumber)=>
            {
                if(cell.value == 'Banana')
                {
                    output.row= rowNumber
                    output.column = colNumber
    
                }
            })
        })
    //Replace the value and reuse it.
    const cell = worksheet.getCell(output.row, output.column)
    cell.value= 'Republic'
    await workbook.xlsx.writeFile(file_path)
    
}

AvoidingHardCodeValue()