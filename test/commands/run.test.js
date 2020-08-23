/* global jest, describe, beforeEach, test, expect */

"use strict";

jest.mock("node-wsl");
const execa = jest.requireActual("execa");
const { spawnSync } = require("child_process");

describe("node-wsl run", () => {
	test("arguments", async () => {
		const result = await execa("./cli.js", ["run", "uptime"], {
			stdio: "pipe",
			env: process.env,
			shell: true,
		});
		console.log({ result });
	});
});
