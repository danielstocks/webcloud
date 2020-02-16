# Running GitHub Actions on Preview Deploys

![The MX 518](/github-deploy-action.jpg)

<Intro>
Ever wanted to run CI/CD tools like Lighthouse or Visual Regression tests against preview deploys (eg. on Netlify or Zeit Now) using GitHub actions? This is how I did it.
</Intro>

Many existing examples of testing static sites with GitHub actions involved running `npm install` and `npm build`, and then running a HTTP server to test against localhost. While this works, I wanted to run these tests against an actual preview deploy. The benefits of this would be:

1. Efficiency. Only running the tests if a preview deploy succeeded. If the deploys fails in the first step why even bother attempting running the rest of the CI/CD toolchain.

2. Trust. Running the CI/CD tests against a production-grade environment gives me more confidence in the test feedback and results.

## Workflow

To understand all moving parts here, let's examine the full workflow written in text:

1. Commit code to a branch, push to GitHub
2. Open a Pull Request
3. **Action**: Immediately Run Static Checks:
    * Unit tests
    * ESlint/Prettier check
4. Deploy Changes to a "Preview Deploy"
5. **Action**: When preview deploy is done:
    * Run Lighthouse tests against Preview Deploy URL
    * Run Visual Regression tests against Preview Deploy URL

When all of the above steps are done, that's when you can review the PR and merge to master with confidence.


## GitHub Deployments

If you've setup preview deploys correctly there should be a link to "environments" on your repository page. Here you'll see "Deployed to Production" an "Deployed to Preview". 

The nice thing about GitHub Deployments is that they are events that we can hook into. We want to run the action once the deployment has finished but only if it's successful. We can do this by triggering our workflow on the `deployment_status` event, but only run the job if `github.event.deployment_status.state` equals `success`.

### Example Workflow: deploy_status conditional build

```yaml
# .github/workflows/example_workflow.yml
name: Successful Deploy Action Example
on: deployment_status
jobs:
  build:
    if: github.event.deployment_status.state == 'success'
    runs-on: ubuntu-latest
    steps:
      - name: XYZ
        run: npm run xyz
        env:
          DEPLOY_URL: ${{ github.event.deployment_status.target_url }}
```

You'll also notice that i set the `DEPLOY_URL` environment variable here, retrieved from `github.event.deployment_status.target_url`. This will allow my NPM script to access the URL to the preview deploy through `process.env.DEPLOY_URL`.
