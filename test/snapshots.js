const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto(process.env.DEPLOY_URL);
  await percySnapshot('homepage');
  await page.click('#toggle-theme');
  await percySnapshot('homepage - dark');

  await page.goto(process.env.DEPLOY_URL + "/cv/");
  await percySnapshot('cv');
  await page.click('#toggle-theme');
  await percySnapshot('cv - dark');

  await page.goto(process.env.DEPLOY_URL + "/blog/2020-02-02-personal-website-2020-tech-stack/");
  await percySnapshot('blog post');
  await page.click('#toggle-theme');
  await percySnapshot('blog post - dark');
});
