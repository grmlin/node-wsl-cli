"use strict";

const { run } = require("node-wsl");

/**
 * Run a command inside a distro with `wsl.exe`
 */
module.exports = (program) => {
	program
		.command("run <command>")
		.description(
			`
Run a command inside a distro with wsl.exe.

Examples:
$ node-wsl run "ls -la
$ node-wsl run uptime'
    `
		)
		.option(
			"-d, --distribution [distribution]",
			"Run the specified distribution. If missing the default distribution will be used"
		)
		.option("-u, --user [user]", "Run as the specified user.")
		.action(async (command, { distribution, user }) => {
			try {
				await run(command, { distribution, user }, { stdio: "inherit" });
			} catch (err) {
				console.error(err);
			}
		});
};
