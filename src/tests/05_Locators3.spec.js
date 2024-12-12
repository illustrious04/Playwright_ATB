// Buit -in Locators.
/**
 * page.getByAltText() to locate an element, usually image, by its text alternative.
 * page.getByPlaceholder() to locate an input by placeholder.
 * page.getByRole() to locate by explicit and implicit accessibility attributes. (button is a role)
 * page.getByText() to locate by text content. 
 */

import{test, expect} from '@playwright/test'

const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

test('Verify that the Logo image is visible', async ({page})=>{
    await page.goto(URL)
    
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', {type: 'submit'}).click()
    
    const username = await page.locator("//p[@class='oxd-userdropdown-name']")
    await expect(page.getByText(username)).toBeVisible()

})

/**
 * CODEGEN Options:
 * 
 Options:
  -o, --output <file name>             saves the generated script to a file

  --target <language>                  language to generate, one of javascript, playwright-test, python, python-async, 
                                       python-pytest, csharp,
                                       csharp-mstest, csharp-nunit, java, java-junit (default: "playwright-test")

  --save-trace <filename>              record a trace for the session and save it to a file

  --test-id-attribute <attributeName>  use the specified attribute to generate data test ID selectors

  -b, --browser <browserType>          browser to use, one of cr, chromium, ff, firefox, wk, webkit (default: "chromium")

  --block-service-workers              block service workers

  --channel <channel>                  Chromium distribution channel, "chrome", "chrome-beta", "msedge-dev", etc

  --color-scheme <scheme>              emulate preferred color scheme, "light" or "dark"

  --device <deviceName>                emulate device, for example  "iPhone 11"

  --geolocation <coordinates>          specify geolocation coordinates, for example "37.819722,-122.478611"

  --ignore-https-errors                ignore https errors

  --load-storage <filename>            load context storage state from the file, previously saved with --save-storage

  --lang <language>                    specify language / locale, for example "en-GB"
  --proxy-server <proxy>               specify proxy server, for example "http://myproxy:3128" or "socks5://myproxy:8080"
  --proxy-bypass <bypass>              comma-separated domains to bypass proxy, for example ".com,chromium.org,.domain.com"
  --save-har <filename>                save HAR file with all network activity at the end
  --save-har-glob <glob pattern>       filter entries in the HAR by matching url against this glob pattern
  --save-storage <filename>            save context storage state at the end, for later use with --load-storage
  --timezone <time zone>               time zone to emulate, for example "Europe/Rome"
  --timeout <timeout>                  timeout for Playwright actions in milliseconds, no timeout by default
  --user-agent <ua string>             specify user agent string
  --viewport-size <size>               specify browser viewport size in pixels, for example "1280, 720"
  -h, --help                           display help for command

Examples:

  $ codegen
  $ codegen --target=python
  $ codegen -b webkit https://example.com
 */