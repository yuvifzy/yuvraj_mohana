import os
import subprocess

def run(cmd):
    subprocess.run(cmd, shell=True, check=True)

run('git config user.email "yuvrajmohana07@gmail.com"')
run('git config user.name "yuvifzy"')

run('git stash')

with open('index.html', 'r') as f:
    idx = f.read()

idx1 = idx.replace("""                    <div class="section-header fade-in">
                        <span class="section-number">01</span>
                        <h2 class="section-title"
                            style="color: #ffffff !important; background: none !important; -webkit-text-fill-color: #ffffff !important; background-clip: border-box !important; -webkit-background-clip: border-box !important;">
                            About Me</h2>
                    </div>""", """                    <div class="section-header fade-in">
                        <span class="section-number">01</span>
                        <h2 class="section-title"
                            style="color: #ffffff !important; background: none !important; -webkit-text-fill-color: #ffffff !important; background-clip: border-box !important; -webkit-background-clip: border-box !important;">
                            About Me</h2>
                        <div class="orb-wrapper" id="contactOrbWrapper">
                            <button class="contact-orb" id="contactOrb" aria-expanded="false" aria-controls="orbLinksContainer" aria-label="Open contact links">
                                <span class="orb-core"></span>
                                <span class="orb-glow"></span>
                            </button>
                            <span class="orb-label">SAY HI</span>
                            
                            <!-- Expanded Links -->
                            <div class="orb-links-container" id="orbLinksContainer">
                                <!-- Injected via script.js -->
                            </div>
                        </div>
                    </div>""")

idx1 = idx1.replace("""                <!-- Right Column: Contact Orb -->
                <div class="about-right-col fade-in orb-col">
                    <div class="orb-wrapper" id="contactOrbWrapper">
                        <button class="contact-orb" id="contactOrb" aria-expanded="false" aria-controls="orbLinksContainer" aria-label="Open contact links">
                            <span class="orb-core"></span>
                            <span class="orb-glow"></span>
                        </button>
                        <span class="orb-label">SAY HI</span>
                        
                        <!-- Expanded Links -->
                        <div class="orb-links-container" id="orbLinksContainer">
                            <!-- Injected via script.js -->
                        </div>
                    </div>
                </div>""", """                <!-- Right Column: Removed for Orb Repositioning -->""")

with open('index.html', 'w') as f:
    f.write(idx1)

with open('style.css', 'r') as f:
    css = f.read()

css1 = css.replace(""".section-header {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: var(--space-md);
    position: relative;
    padding-bottom: var(--space-md);
}

.section-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    /* Shortened divider */
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
}""", """.section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: var(--space-md);
    position: relative;
    padding-bottom: var(--space-md);
}

.section-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    /* Full width divider */
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
}""")

css1 = css1.replace(""".orb-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}""", """.orb-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-left: 2rem;
}""")

css1 = css1.replace(""".orb-links-container {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s ease;
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1rem;
    min-width: 150px;
    z-index: 10;
}""", """.orb-links-container {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s ease;
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    min-width: max-content;
    z-index: 10;
}""")

with open('style.css', 'w') as f:
    f.write(css1)

run('git add index.html style.css')
run('git commit -m "UI: Move contact orb next to About Me and set links as horizontal pill"')

idx2 = idx1.replace("""                <img src="" alt="Project Preview" id="modal-image" loading="lazy">""", """                <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Project Preview" id="modal-image" loading="lazy">""")

with open('index.html', 'w') as f:
    f.write(idx2)

run('git add index.html')
run('git commit -m "Fix: Add transparent placeholder for project preview image to avoid broken icon"')

idx3 = idx2.replace("""            <!-- Easter Egg -->
            <div class="easter-egg-container" id="easterEgg">
                <div class="pixel-char">👾</div>
                <div class="pixel-envelope">✉️</div>
            </div>""", """            <!-- Easter Egg -->
            <div class="easter-egg-container" id="easterEgg">
                <a href="https://github.com/yuvifzy" target="_blank" rel="noopener noreferrer" aria-label="View my GitHub" class="easter-egg-link">
                    <div class="pixel-char">👾</div>
                </a>
                <a href="mailto:yuvrajmohana07@gmail.com" aria-label="Email me" class="easter-egg-link">
                    <div class="pixel-envelope">✉️</div>
                </a>
            </div>""")

with open('index.html', 'w') as f:
    f.write(idx3)

css3 = css1.replace(""".easter-egg-container.visible {
    opacity: 1;
    transform: translateX(0);
}""", """.easter-egg-container.visible {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
}

.easter-egg-link {
    text-decoration: none;
    display: block;
    transition: transform 0.3s ease, filter 0.3s ease;
    cursor: pointer;
}

.easter-egg-link:hover {
    transform: scale(1.2) translateY(-2px);
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}""")

with open('style.css', 'w') as f:
    f.write(css3)

run('git add index.html style.css')
run('git commit -m "Fix: Wire up contact section easter egg links and add hover styles"')

css4 = css3.replace(""".marquee-content span {
    font-family: 'Harmond Display', 'Playfair Display', serif;
    font-style: italic;
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 300;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
    opacity: 0.4;
    padding-right: 0.3em;
    line-height: 1;
    display: inline-block;
}""", """.marquee-content span {
    font-family: 'Harmond Display', 'Playfair Display', serif;
    font-style: italic;
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 300;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
    opacity: 0.4;
    padding-right: 0.3em;
    line-height: 1;
    display: inline-block;
}

.footer-marquee .marquee-content span {
    opacity: 1;
}""")

with open('style.css', 'w') as f:
    f.write(css4)

run('git add style.css')
run('git commit -m "UI: Increase opacity of footer marquee for better visibility"')

run('git push origin main')
