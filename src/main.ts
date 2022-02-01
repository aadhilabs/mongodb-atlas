import * as core from '@actions/core';
import * as github from '@actions/github';

const run = async (): Promise<void> => {
    try {
        core.info('Hello world!');
        var message:string = "Hello World!!!!!!!!!!!!!!!!";
        console.log(message);
        core.info(github.context.repo.owner);

    } catch (err: any) {
        core.setFailed(err.message);
    }
}

export default run;
