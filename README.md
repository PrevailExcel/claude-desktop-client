# Claude Desktop

Claude Desktop is an **unofficial, lightweight, Electron-based desktop app** for interacting with Claude AI. Enjoy a fast, smooth, and distraction-free AI experience directly on your Linux desktop.

[![Get it from the Snap Store](https://snapcraft.io/en/dark/install.svg)](https://snapcraft.io/claude-desktop-client)

![Claude Desktop Screenshot](https://github.com/prevailexcel/claude-desktop-client/blob/main/screenshots/image1.png)

## Features

- **Lightweight & Fast** – Optimized for performance without unnecessary bloat.  
- **Clean Interface** – Simple, intuitive UI for focused AI conversations.  
- **Desktop Notifications** – Stay updated with AI responses instantly.  
- **Cross-Platform Support** – Works seamlessly on Linux desktops.  
- **Secure & Private** – No personal data is stored by the app.  

## 📦 Installation

Install the latest version from Snap:

```bash
sudo snap install claudeai-desktop
```

### Build From Source

1. Clone the repository:

```bash
git clone https://github.com/prevailexcel/claude-desktop-client.git
cd claude-desktop-client
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm start
```

4. Build the Snap package:

```bash
npm run dist
cd dist
sudo snap install --dangerous ./claude-desktop_1.0.0_amd64.snap
```

## ❌ Uninstallation

```bash
sudo snap remove claude-desktop
```

## 🚀 Usage

Launch Claude Desktop:

```bash
claude-desktop
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📜 License

MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- **Electron** – Framework used to build the application.
