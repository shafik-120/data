import puppeteer from 'puppeteer';
import fs from 'fs';

let browser; // Declare browser variable outside the function scope
let data = []; // Initialize an empty array to store data outside the function scope

async function fbDetails(usernames) {
  try {
    // Open browser outside the loop to keep it persistent until all usernames are processed
    browser = await puppeteer.launch();

    for (const username of usernames) {
      const page = await browser.newPage();
      let url = '';

      if (typeof username === 'number') {
        url = `https://www.facebook.com/profile.php?id=${username}`;
      } else if (typeof username === 'string') {
        url = `https://www.facebook.com/${username}`;
      } else {
        console.error('Invalid username type.');
        await page.close(); // Close the page if the username is invalid
        continue; // Move to the next iteration
      }

      await page.goto(url);
      await page.waitForFunction(() => {
        return (
          document.evaluate(
            '/html/body/div[1]/div/div[1]/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[2]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
          ).singleNodeValue !== null
        );
      });

      const result = await page.evaluate(() => {
        const mainPath =
          '/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div/div/div[4]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[2]/div[2]/div/ul/';
        const elements = document.evaluate(
          `${mainPath}div`,
          document,
          null,
          XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
          null
        );
        const data = {};

        for (let i = 0; i < elements.snapshotLength; i++) {
          const element = elements.snapshotItem(i);
          const iconElement = element.querySelector('img');
          data[`element_${i}`] = { 
            textContent: element ? element.textContent.trim() : 'Element not found',
            iconSrc: iconElement ? iconElement.src : '' // Get src attribute of img element
          };
        }

        data['element_100'] = { url: window.location.href }; // Add URL separately
        return data;
      });

      // Push result to data array
      data.push(result);

      // Write data to file immediately after collecting it
      const fileName = 'output.json';
      fs.writeFileSync(fileName, JSON.stringify(data, null, 2));

      console.log(`Data has been written to ${fileName} for ${url}`);

      await page.close();
    }
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    if (browser) {
      await browser.close(); // Close the browser at the end
    }
  }
}

// Example usage
fbDetails([
  'TroyMichaelPhotgraphy',
  'SpiritOfTheTetonsPhotography',
  'profile.php?id=61552158826567',
  'pameladunnparrishphotographer',
  'popofpurephotography',
  'AquariusDreamscapesPhotography',
  'kwdesignsphotography',
  'profile.php?id=100084885063354',
  'mephotodesign',
  'PhotographbyChris',
  'NicholeMCHPhotography',
  'GenPalmerPhotography',
  'photographyddianaphilly',
  'junebugsmemories',
  'KtLizPhotography',
  'katiekayphotography',
  'kaylasphotographypitman',
  'photosbykh',
  'intriguephotographycompany',
  'oliviaannephotography',
  'jennycastrophotography',
  'MCMPHOTO',
  'profile.php?id=100064236153182',
  'azzphoto',
  'margaretkoningphotography',
  'larkbuntingphotography',
  'Jessicadelphoto',
  'forrestseuserphotography',
  'ThroughTheLookingGlass19',
  'brynmarae.photography',
  'itsasmallworldphotography',
  'NoelPhotographytx',
  'Bluegillphotography',
  'margaretkoningphotography',
  'MegBowmanPhotography',
  'Jessicadelphoto',
  'ashleymckeephotography',
  'kwdesignsphotography',
  'BritniGirardPhoto',
  'spokenforphotography',
  'mackenziestevensonphotography',
  'nikibryantpics',
  'brandypacephotography',
  'ValerieKayPhoto',
  'crimsoncloverstudios',
  'kaykroshus',
  'sweetsunshinephotographyllc',
  'BridgetteWilliamsPhotography',
  'chirpydphotography',
  'simplyphotographyco',
  'heatherrichardsonphotographer',
  'MaiShuPhotography',
  'simplyphotographyco',
  'heatherrichardsonphotographer',
  'MaiShuPhotography'
]);
