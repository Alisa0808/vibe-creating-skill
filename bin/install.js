#!/usr/bin/env node
'use strict';

/**
 * Vibe Creating skill installer.
 *
 * The skill is a single SKILL.md following the open Agent Skills standard,
 * so it works across agents — only the install directory differs. This
 * copies the `vibe-creating-prompt` folder into the right skills directory.
 *
 * Usage:
 *   npx github:Alisa0808/vibe-creating-skill              # auto-detect installed agents
 *   npx github:Alisa0808/vibe-creating-skill --all        # install for every known agent
 *   npx github:Alisa0808/vibe-creating-skill claude codex # specific agents
 *   npx github:Alisa0808/vibe-creating-skill --dir ./path # a custom skills directory
 */

const fs = require('fs');
const os = require('os');
const path = require('path');

const SKILL = 'vibe-creating-prompt';
const SRC = path.join(__dirname, '..', 'skills', SKILL);

const AGENTS = {
  claude: { name: 'Claude Code', home: '.claude', dir: '.claude/skills' },
  codex: { name: 'Codex CLI', home: '.codex', dir: '.codex/skills' },
  openclaw: { name: 'OpenClaw', home: '.openclaw', dir: '.openclaw/skills' },
  hermes: { name: 'Hermes', home: '.hermes', dir: '.hermes/skills' },
};

function parseArgs(argv) {
  const out = { agents: [], dir: null, all: false, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--all') out.all = true;
    else if (a === '--help' || a === '-h') out.help = true;
    else if (a === '--dir') out.dir = argv[++i];
    else if (a === '--agent') out.agents.push((argv[++i] || '').toLowerCase());
    else if (AGENTS[a.toLowerCase()]) out.agents.push(a.toLowerCase());
  }
  return out;
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function installTo(skillsDir, label) {
  const dest = path.join(skillsDir, SKILL);
  fs.mkdirSync(skillsDir, { recursive: true });
  copyRecursive(SRC, dest);
  console.log('  ✓ ' + label + '  →  ' + dest);
}

function printHelp() {
  console.log([
    '',
    '  Vibe Creating skill installer',
    '',
    '  Usage:',
    '    npx github:Alisa0808/vibe-creating-skill            auto-detect installed agents',
    '    npx github:Alisa0808/vibe-creating-skill --all      install for every known agent',
    '    npx github:Alisa0808/vibe-creating-skill claude codex   specific agents',
    '    npx github:Alisa0808/vibe-creating-skill --dir <path>   a custom skills directory',
    '',
    '  Known agents: ' + Object.keys(AGENTS).join(', '),
    '',
  ].join('\n'));
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) return printHelp();

  if (!fs.existsSync(SRC)) {
    console.error('Could not find the skill source at ' + SRC);
    process.exit(1);
  }

  console.log('\n  🎬 Vibe Creating — installing the skill\n');

  if (args.dir) {
    installTo(path.resolve(args.dir), 'custom directory');
    return done();
  }

  let keys = args.agents.filter((k) => AGENTS[k]);
  if (args.all) keys = Object.keys(AGENTS);

  // Auto-detect: install into every agent whose home directory already exists.
  if (keys.length === 0) {
    keys = Object.keys(AGENTS).filter((k) =>
      fs.existsSync(path.join(os.homedir(), AGENTS[k].home))
    );
    if (keys.length) {
      console.log('  Detected: ' + keys.map((k) => AGENTS[k].name).join(', ') + '\n');
    }
  }

  // Fallback: nothing detected — default to Claude Code's location.
  if (keys.length === 0) {
    console.log('  No agent detected; defaulting to Claude Code.\n');
    keys = ['claude'];
  }

  for (const k of keys) {
    installTo(path.join(os.homedir(), AGENTS[k].dir), AGENTS[k].name);
  }
  done();
}

function done() {
  console.log('\n  Done. Restart your agent and describe what you want to film.');
  console.log('  Docs: https://github.com/Alisa0808/vibe-creating-skill\n');
}

main();
