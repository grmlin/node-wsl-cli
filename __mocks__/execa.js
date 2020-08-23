/* global jest */

"use strict";

module.exports = jest.fn(async (file, command) => {
	return { stdout: `${file} ${command.join(" ")}` };
});
