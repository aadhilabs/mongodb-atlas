import * as core from '@actions/core';
import * as github from '@actions/github';

export async function run() {
    try {
        core.info('Hello world!');
        var message:string = "Hello World!!!!!!!!!!!!!!!!";
        console.log(message);
        core.info(github.context.repo.owner);

    } catch (err: any) {
        core.setFailed(err.message);
    }
}
