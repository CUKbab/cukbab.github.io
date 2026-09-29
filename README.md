# CUK밥 Portal (cukbab.github.io)

This is the official central portal page for **CUK밥**, an unofficial meal information service for Catholic University of Korea.  
It provides direct access to the web version and download links for all platform clients: Android, Windows, macOS, and Linux.

## Features

- **Web Version Access**: Check meal menus instantly in your browser without installation ([CUK_Web](https://cukbab.github.io/CUK_Web))
- **Client Downloads**:
  - **Android**: Google Play Store app
  - **Windows**: Windows 64-bit executable
  - **macOS**: Apple Silicon (arm64) and Intel (x64) DMG packages (auto-detects architecture and highlights recommended option)
  - **Linux**: Linux x64 tar.gz package
- **Auto OS Detection**: Automatically detects the visitor's operating system and recommends the optimal download at the top
- **Multi-language Support**: Korean (KO), English (EN), Japanese (JA), Chinese (ZH)

## Development & Build

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Production build
npm run build

# Preview build output
npm run preview
```

## Related Repositories

- [CUK_Web](https://github.com/CUKbab/CUK_Web) - Web application
- [CUK_PC](https://github.com/CUKbab/CUK_PC) - Desktop (PC) client
- [CUK_Android](https://github.com/CUKbab/CUK_Android) - Android application
- [CUK_Menu](https://github.com/CUKbab/CUK_Menu) - Meal data parser & API

## License

MIT License