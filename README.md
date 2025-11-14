# 🎓 RHCSA Study Guide - DevOps ni Diary

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/Jani-shiv/rhcsa-study-guide?style=social)](https://github.com/Jani-shiv/rhcsa-study-guide/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Jani-shiv/rhcsa-study-guide?style=social)](https://github.com/Jani-shiv/rhcsa-study-guide/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

**Interactive web-based study guide for Red Hat Certified System Administrator (RHCSA) EX200 exam preparation**

[📖 Read the Guide](https://jani-shiv.github.io/rhcsa-study-guide/) • [📺 Watch on YouTube](https://youtube.com/@DevOpsniDiary) • [🐛 Report Bug](https://github.com/Jani-shiv/rhcsa-study-guide/issues) • [💡 Request Feature](https://github.com/Jani-shiv/rhcsa-study-guide/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Course Chapters](#course-chapters)
- [Getting Started](#getting-started)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

This comprehensive study guide is designed to help aspiring system administrators master the **Red Hat Certified System Administrator (RHCSA)** certification exam objectives. Based on the **RH199 curriculum for RHEL 9.3**, this interactive web resource covers all 17 essential chapters with detailed explanations, practical examples, and hands-on commands.

### Why RHCSA?

The RHCSA certification demonstrates your ability to perform core system administration tasks in Red Hat Enterprise Linux environments. It's one of the most respected certifications in the Linux ecosystem and opens doors to exciting DevOps and cloud infrastructure careers.

---

## ✨ Features

- **📚 17 Comprehensive Chapters** - Complete coverage of all RHCSA exam objectives
- **💻 Interactive Web Interface** - Clean, modern, and responsive design
- **🌙 Dark/Light Mode** - Toggle between themes for comfortable reading
- **🔍 Search Functionality** - Quickly find specific chapters and topics
- **📱 Mobile Responsive** - Access from any device, anywhere
- **🎨 Syntax Highlighting** - Easy-to-read code examples and commands
- **🚀 Fast & Lightweight** - Pure HTML, CSS, and JavaScript (no framework bloat)
- **🎬 Video Support** - Links to DevOps ni Diary YouTube channel for visual learning
- **📖 Offline Access** - Download and use locally without internet

---

## 📚 Course Chapters

### Chapter 1: Access Systems and Get Support
Learn to access and interact with Linux systems using local and remote terminals
- SSH connections
- Terminal basics
- Man pages and documentation

### Chapter 2: Manage Files from the Command Line
Master file system navigation and file manipulation
- File operations (ls, cp, mv, rm)
- Directory management
- Path navigation

### Chapter 3: Manage Local Users and Groups
Create and manage user accounts and groups
- useradd, usermod, userdel
- groupadd, groupmod, groupdel
- Password management

### Chapter 4: Control Access to Files
Configure file permissions and ownership
- chmod, chown, chgrp
- Special permissions (SUID, SGID, Sticky bit)
- Access Control Lists (ACLs)

### Chapter 5: Manage SELinux Security
Understand and configure SELinux
- SELinux modes and contexts
- setenforce, getenforce
- SELinux booleans and troubleshooting

### Chapter 6: Tune System Performance
Monitor and optimize system performance
- tuned profiles
- Process priority (nice, renice)
- Performance monitoring

### Chapter 7: Schedule Future Tasks
Automate tasks using scheduling tools
- cron and crontab
- at command
- systemd timers

### Chapter 8: Install and Update Software Packages
Manage software using package managers
- DNF package manager
- RPM queries
- AppStream modules

### Chapter 9: Manage Basic Storage
Create and manage partitions and file systems
- fdisk, parted
- mkfs commands
- Mount operations and /etc/fstab

### Chapter 10: Manage Storage Stack
Configure advanced storage solutions
- Logical Volume Manager (LVM)
- Stratis storage
- VDO compression

### Chapter 11: Control Services and Boot Process
Manage systemd services and boot
- systemctl commands
- Service targets
- GRUB configuration

### Chapter 12: Analyze and Store Logs
Monitor and manage system logs
- journalctl
- rsyslog configuration
- Log rotation

### Chapter 13: Manage Networking
Configure network interfaces and services
- nmcli (NetworkManager)
- IP configuration
- DNS and hostname resolution

### Chapter 14: Access Network-Attached Storage
Mount and configure network shares
- NFS configuration
- SMB/CIFS mounts
- autofs automation

### Chapter 15: Manage Network Security
Configure firewall and network security
- firewalld zones and rules
- Rich rules
- Port forwarding

### Chapter 16: Run Containers
Deploy and manage containers
- Podman basics
- Container images
- Rootless containers

### Chapter 17: Comprehensive Review
Practice scenarios and exam preparation
- Review exercises
- Practice labs
- Exam tips and strategies

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of Linux concepts (helpful but not required)

### Live Demo

🌐 **Visit the live site:** [https://jani-shiv.github.io/rhcsa-study-guide/](https://jani-shiv.github.io/rhcsa-study-guide/)

---

## 💾 Installation

### Option 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/Jani-shiv/rhcsa-study-guide.git

# Navigate to the directory
cd rhcsa-study-guide

# Open in your browser
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Download ZIP

1. Click the green **Code** button on GitHub
2. Select **Download ZIP**
3. Extract the files
4. Open `index.html` in your browser

---

## 📖 Usage

### Navigation

- **Home Page**: Overview and chapter navigation
- **Chapter Pages**: Click any chapter card to dive into detailed content
- **Search**: Use the search bar to find specific topics
- **Theme Toggle**: Click the 🌙/☀️ button to switch between dark and light modes

### Study Tips

1. **Start Sequential**: Begin with Chapter 1 and progress in order
2. **Hands-On Practice**: Set up a RHEL/CentOS/Rocky Linux VM and practice commands
3. **Take Notes**: Keep a personal lab notebook
4. **Watch Videos**: Check out the [DevOps ni Diary YouTube channel](https://youtube.com/@DevOpsniDiary) for visual explanations
5. **Review Regularly**: Revisit chapters and practice commands regularly

---

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Interactivity and theme switching
- **Google Fonts** - Inter font family
- **GitHub Pages** - Hosting (optional)

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and create! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

### Contribution Ideas

- 📝 Fix typos or improve explanations
- 🎨 Enhance UI/UX design
- 🐛 Report and fix bugs
- 💡 Add more practical examples
- 🌐 Translate content to other languages
- 📹 Create tutorial videos
- 📚 Add practice quizzes

---

## 💬 Support

### Get Help

- 📺 **YouTube**: [DevOps ni Diary](https://youtube.com/@DevOpsniDiary)
- 🐛 **Issues**: [GitHub Issues](https://github.com/Jani-shiv/rhcsa-study-guide/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Jani-shiv/rhcsa-study-guide/discussions)

### Give a Star ⭐

If you find this study guide helpful, please consider giving it a ⭐ star on GitHub! It helps others discover the resource and motivates continued development.

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 DevOps ni Diary

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Contact

**DevOps ni Diary**

- 📺 YouTube: [@DevOpsniDiary](https://youtube.com/@DevOpsniDiary)
- 💻 GitHub: [@Jani-shiv](https://github.com/Jani-shiv)
- 🌐 Website: [Study Guide](https://jani-shiv.github.io/rhcsa-study-guide/)

---

## 🙏 Acknowledgments

- Red Hat for the excellent RHCSA certification program
- The open-source community for inspiration and support
- All contributors who help improve this resource
- Students and professionals working towards RHCSA certification

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Jani-shiv/rhcsa-study-guide)
![GitHub contributors](https://img.shields.io/github/contributors/Jani-shiv/rhcsa-study-guide)
![GitHub last commit](https://img.shields.io/github/last-commit/Jani-shiv/rhcsa-study-guide)
![GitHub issues](https://img.shields.io/github/issues/Jani-shiv/rhcsa-study-guide)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Jani-shiv/rhcsa-study-guide)

---

<div align="center">

**Made with ❤️ for the DevOps Community**

[⬆ Back to Top](#-rhcsa-study-guide---devops-ni-diary)

</div>
