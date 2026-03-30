#!/usr/bin/env node
// Surchin plugin setup — runs on first plugin install via the Setup hook.
// Delegates to the surchin CLI for auth + agent config + instruction templates.
// If already authenticated, runs a non-interactive project config pass.

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

const configDir = process.env.XDG_CONFIG_HOME
  ? path.join(process.env.XDG_CONFIG_HOME, "surchin")
  : path.join(os.homedir(), ".config", "surchin");
const configFile = path.join(configDir, "config.json");

try {
  if (fs.existsSync(configFile)) {
    const config = JSON.parse(fs.readFileSync(configFile, "utf8"));
    const token = config.accessToken;

    if (token) {
      console.error("Surchin credentials found. Configuring project...");
      execSync("npx -y @surchin/surchin init --agents claude", {
        stdio: "inherit",
        timeout: 120_000,
        env: { ...process.env, SURCHIN_TOKEN: token },
      });
    } else {
      console.error("Welcome to Surchin! Let's set up your knowledge base.\n");
      execSync("npx -y @surchin/surchin init --agents claude", {
        stdio: "inherit",
        timeout: 300_000,
      });
    }
  } else {
    console.error("Welcome to Surchin! Let's set up your knowledge base.\n");
    execSync("npx -y @surchin/surchin init --agents claude", {
      stdio: "inherit",
      timeout: 300_000,
    });
  }
} catch (err) {
  console.error(`Setup notice: ${err.message}`);
  console.error(
    "You can run 'npx @surchin/surchin init' manually to complete setup."
  );
  process.exit(0);
}
