const core = require('@actions/core')
const github = require('@actions/github')

async function run () {
  const ms = core.getInput('msg')
  core.info(`${ms}`)

  try {
    core.debug((new Date()).toTimeString()) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    core.info(github.context.repo.owner)

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
