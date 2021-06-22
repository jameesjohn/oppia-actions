/**
 * This function pings and assigns all pending reviewers to a pull request.
 * @param {import('@octokit/rest').Octokit} octokit
 * @param {import('@octokit/rest').Octokit.PullsGetResponse} pullRequest
 * @param {string[]} assignees
 * @param {string} comment
 */
 const pingAndAssignUsers = async (octokit, pullRequest, assignees, comment) => {
  await octokit.issues.createComment(
    context.repo({
      issue_number: pullRequest.number,
      body: comment,
    })
  );

  await octokit.issues.addAssignees(
    context.repo({
      issue_number: pullRequest.number,
      assignees: assignees,
    })
  );
};

module.exports = {
  pingAndAssignUsers
};
