on('pull_request.closed')
  .filter(context => context.payload.pull_request.merged)
  .comment(`This pull request was merged to [master](https://github.com/badges/shields/tree/master) branch. Now this change is waiting for deployment. 
  Deploys usually happen every few weeks. After deployment changes are copied to [gh-pages](https://github.com/badges/shields/tree/gh-pages) branch. 
  
  This badge displays deployment status:
  ![](https://img.shields.io/badge/deploy%20status-not%20in%20gh--pages-yellow.svg)

  https://img.shields.io/github/commit-status/gh-pages/{{ pull_request.merge_commit_sha }}?label=deploy%20status`)