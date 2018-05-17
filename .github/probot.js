on('pull_request.closed')
  .filter(context => context.payload.pull_request.merged)
  .comment(`merge_commit_sha @{{ pull_request.merge_commit_sha }}`);
