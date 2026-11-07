# Contributing to RHCSA Study Guide

First off, thank you for considering contributing to the RHCSA Study Guide! 🎉

This project is built to empower aspiring Linux system administrators and DevOps engineers to prepare for and pass the Red Hat Certified System Administrator (RHCSA EX200) certification. Every contribution—whether fixing a typo, updating an outdated command, adding troubleshooting tips, or improving accessibility—is deeply appreciated.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs or Content Errors](#reporting-bugs-or-content-errors)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Style Guide & Conventions](#style-guide--conventions)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Community & Questions](#community--questions)

---

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## How Can I Contribute?

### Reporting Bugs or Content Errors

If you find a technical mistake in the commands, explanation errors, broken links, or UI glitches:
1. Check existing [GitHub Issues](https://github.com/Jani-shiv/rhcsa-study-guide/issues) to avoid duplicate reports.
2. If not already reported, open a new issue using our **Bug Report** template.
3. Provide:
   - Specific chapter or file name.
   - The erroneous command/explanation and what the correct behavior should be according to RHEL 9.3+ / RH199.
   - Screenshots or terminal output if applicable.

### Suggesting Enhancements

Have ideas for new practice labs, quiz questions, or UI improvements?
1. Open a new issue using the **Feature Request** template.
2. Describe the feature, why it is beneficial for RHCSA candidates, and how you envision it working.

### Pull Requests

1. **Fork the repository** and clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/rhcsa-study-guide.git
   cd rhcsa-study-guide
   ```
2. **Create a topic branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/chapter-typo
   ```
3. **Make your changes**:
   - Keep changes focused and atomic.
   - Verify accuracy against RHEL 9 documentation.
   - Note that both root files (`index.html`, `chapters/`) and the capacitor folder (`www/`) should remain synchronized.
4. **Test your changes locally** in a browser.
5. **Commit your changes** following the [Commit Message Guidelines](#commit-message-guidelines).
6. **Push to your fork** and submit a Pull Request targeting `main`.

---

## Development Setup

The project uses standard web technologies (HTML, CSS, JavaScript) alongside Capacitor for mobile packaging:

```bash
# Clone the repository
git clone https://github.com/Jani-shiv/rhcsa-study-guide.git
cd rhcsa-study-guide

# Install dependencies
npm install

# Test locally using any static file server, for example:
npx serve .
# or Python's built-in server:
python -m http.server 8000
```

---

## Style Guide & Conventions

- **RHEL 9 Standard**: All commands and explanations must adhere to RHEL 9 / CentOS Stream 9 standards (e.g., `systemd`, `nmcli`, `dnf`, `firewalld`, modern SELinux tools).
- **Clean Markdown / HTML**: Maintain accessible semantic HTML5 (`<main>`, `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<aside>`).
- **Code Blocks**: Always specify clear syntax highlighting and commands that users can safely test in an isolated VM/lab environment.

---

## Commit Message Guidelines

We follow standard conventional commit conventions:

- `feat:` Adds a new feature or chapter content
- `fix:` Fixes an error or typo
- `docs:` Documentation improvements
- `style:` Styling and CSS updates without logic changes
- `refactor:` Code improvements without changing functionality
- `chore:` Dependency, build, or configuration updates

Example:
```text
feat(ch04): add practice lab for systemd timer units
fix(ch02): correct tar command syntax for preserving SELinux contexts
```

---

## Community & Questions

- 📺 **YouTube Channel**: [DevOps ni Diary](https://youtube.com/@DevOpsniDiary)
- 💬 **GitHub Issues**: [Ask a Question](https://github.com/Jani-shiv/rhcsa-study-guide/issues)

