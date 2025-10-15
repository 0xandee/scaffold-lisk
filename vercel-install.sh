#!/bin/bash
# Vercel install script that disables native module builds

# Add enableScripts: false to .yarnrc.yml temporarily
echo "" >> .yarnrc.yml
echo "enableScripts: false" >> .yarnrc.yml

# Run yarn install
yarn install

# Restore original .yarnrc.yml
git checkout .yarnrc.yml
