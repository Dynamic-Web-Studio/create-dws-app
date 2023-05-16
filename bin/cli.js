#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.log("Failed to execute command: ", command);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Dynamic-Web-Studio/create-dws-app.git ${repoName}`;
const installCommand = `cd ${repoName} && npm install`;
console.log(`Cloning ${repoName}...`);
const checkout = runCommand(gitCheckoutCommand);
if (!checkout) process.exit(-1);
console.log(`Installing dependencies...`);
const installDeps = runCommand(installCommand);
if (!installDeps) process.exit(-1);
