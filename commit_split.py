import subprocess

def run(cmd):
    subprocess.run(cmd, shell=True, check=True)

# 1. Stash all changes
run('git stash')

# 2. Checkout script.js from the stash
run('git checkout stash@{0} -- script.js')
run('git add script.js')

# 3. Create a patch for style.css Hunk 3 (orbit fix)
orbit_patch = """--- style.css
+++ style.css
@@ -2555,20 +2555,18 @@
         height: 260px;
     }
 
-    .signal-nodes.active .signal-node:nth-child(1) {
-        transform: translate(-50%, -50%) translate(0, -80px) scale(1);
-    }
-
-    .signal-nodes.active .signal-node:nth-child(2) {
-        transform: translate(-50%, -50%) translate(80px, 0) scale(1);
-    }
-
-    .signal-nodes.active .signal-node:nth-child(3) {
-        transform: translate(-50%, -50%) translate(0, 80px) scale(1);
-    }
-
-    .signal-nodes.active .signal-node:nth-child(4) {
-        transform: translate(-50%, -50%) translate(-80px, 0) scale(1);
+    .signal-nodes.active .signal-node::before {
+        width: 80px; 
+    }
+
+    @keyframes node-orbit {
+        from {
+            transform: translate(-50%, -50%) rotate(var(--start-angle)) translate(80px) rotate(calc(0deg - var(--start-angle)));
+        }
+    
+        to {
+            transform: translate(-50%, -50%) rotate(calc(var(--start-angle) + 360deg)) translate(80px) rotate(calc(0deg - var(--start-angle) - 360deg));
+        }
     }
 
     .node-tooltip {
"""
with open('orbit.patch', 'w') as f:
    f.write(orbit_patch)

run('git apply orbit.patch')
run('git add style.css')
run('git commit -m "Fix: Rework Start a Signal orbit logic and mobile responsiveness"')

# 4. Create a patch for the UI marquee and easter egg
ui_patch = """--- style.css
+++ style.css
@@ -406,7 +406,9 @@
 .footer-marquee {
     position: relative;
     top: auto;
-    transform: rotate(-2deg);
+    width: 100vw;
+    left: 50%;
+    transform: translateX(-50%) rotate(-2deg);
     margin-top: 5rem;
     opacity: 1; /* Always visible, not dependent on hero reveal */
 }
@@ -2486,7 +2488,7 @@
 /* Easter Egg */
 .easter-egg-container {
     position: absolute;
-    bottom: 2rem;
+    bottom: 10rem;
     right: 2rem;
     display: flex;
     gap: 8px;
"""
with open('ui.patch', 'w') as f:
    f.write(ui_patch)

run('git apply ui.patch')
run('git add style.css')
run('git commit -m "UI: Expand footer marquee to full width and reposition easter egg"')

run('git push origin main')
run('git stash drop')
