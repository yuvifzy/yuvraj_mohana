import subprocess
import os

def run(cmd):
    subprocess.run(cmd, shell=True, check=True)

# Setup Git
run('git config user.email "yuvrajmohana07@gmail.com"')
run('git config user.name "yuvifzy"')

# Stash current changes
run('git stash')

# --- STEP 1: UI Layout: Orb Repositioning ---
run('git checkout stash@{0} -- index.html style.css')
# We need to unapply other changes to commit only step 1.
# It is easier to just restore from HEAD, and re-apply step 1 via patch or python regex.
