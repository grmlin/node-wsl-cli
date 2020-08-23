/* global jest */
const nodeWsl = jest.createMockFromModule("node-wsl");

// exports.run = jest.fn(async () => {
// 	console.log("running");
// });

module.exports = nodeWsl;
