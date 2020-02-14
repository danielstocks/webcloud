const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto(process.env.DEPLOY_URL);
  await percySnapshot('homepage');

  await page.goto(process.env.DEPLOY_URL + "/cv/");
  await percySnapshot('cv');

  await page.goto(process.env.DEPLOY_URL + "/blog/2020-02-02-personal-website-2020-tech-stack/");
  await percySnapshot('blog post');
});
