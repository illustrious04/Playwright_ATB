const ExcelJS = require('exceljs')

// Here we are trying to make the excel handling more dynamic. with different methods. and function parameters.

async function readExcel(worksheet, searchText) {
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber)=>
        {
        row.eachCell((cell,colNumber)=>
            {
            if(cell.value == searchText){
                output = { row: rowNumber, column: colNumber }
                console.log(rowNumber)
                console.log(colNumber)
            }
    
            })
        })
        return output
} 
//readExcel()

async function writeExcel(searchText, replaceText) {
    const file_path = 'C:/Selenium/08_Playwright/Playwright_ATB/Excel_JS/Data1.xlsx'
        
    
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(file_path)
        const worksheet = workbook.getWorksheet('Sheet1')
        const output = await readExcel(worksheet, searchText);

        // Check if a valid row and column were found
        if (output.row === -1 || output.column === -1) 
            {
                throw new Error('"${searchText}" not found in the worksheet.');
            } 

        //Replace the value and reuse it.
    const cell = worksheet.getCell(output.row, output.column)
    cell.value= replaceText;
    await workbook.xlsx.writeFile(file_path)

    //console.log('Replaced ${searchText} with "${replaceText}" in row ${output.row}, column ${output.column}.');
    //console.log('Replace', {searchText}, 'with', {replaceText})
    
}
writeExcel('Orange','Suyash')