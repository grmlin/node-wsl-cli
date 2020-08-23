"use strict";

const fs = require("fs");
const { exportDistribution } = require("node-wsl");
const { terminal } = require("terminal-kit");

/**
 * Export a distribution into a file
 */

module.exports = (program) => {
	program
		.command("export <distribution> <fileName>")
		.description(
			`
Export a distribution and save it as a tar file

Examples:
$ node-wsl export Ubuntu ~/ubuntu-export.tar
  `
		)
		.action(async (distribution, fileName) => {
			console.log("");
			terminal
				.bgBlue(" Please be patient ☕ ")
				.blue("\nExporting the distribution will take some time.")("\n\n");
			const spinner = await terminal.spinner("lineSpinner");
			terminal(" ");
			terminal.bgBlue(" EXPORTING ")(` ${distribution}`);

			try {
				// await exportDistribution(distribution, fileName, { stdio: 'inherit' });
				spinner.destroy();
				terminal
					.eraseLine()
					.column(0)(`🥳  successfully exported ${distribution} to `)
					.underline(fileName)("\n")(
						JSON.stringify(fs.statSync(fileName), null, 2)
					)
					.processExit();
			} catch (err) {
				spinner.destroy();
				terminal
					.eraseLine()
					.column(0)
					.bgRed("EXPORT FAILED")("\n")
					.red(err)
					.processExit(1);
			}

			terminal.processExit();
		});
};
