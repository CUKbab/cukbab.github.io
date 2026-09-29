export type Language = 'ko' | 'en' | 'ja' | 'zh';

export const translations = {
  ko: {
    app_title: 'CUK밥',
    app_badge: '가톨릭대학교 학식 포털',
    app_subtitle: '가톨릭대학교 학식 정보 서비스',
    hero_description: '모바일 앱, PC 클라이언트, 웹 브라우저 어디서나 빠르고 편리하게 오늘의 학식 메뉴와 운영 정보를 확인하세요.',
    
    // Go to Web
    go_to_web_section_title: '웹 버전',
    go_to_web_title: 'CUK밥 웹 버전 바로가기',
    go_to_web_desc: '별도 프로그램 설치 없이 웹 브라우저에서 바로 오늘의 학식 메뉴, 시간표, 식단 피드백을 이용할 수 있습니다.',
    go_to_web_btn: '웹 버전 바로가기',
    go_to_web_tag: '설치 불필요',
    go_to_web_url: 'cukbab.github.io/CUK_Web',

    // Clients
    clients_title: '클라이언트 다운로드',
    clients_desc: '사용하시는 기기에 최적화된 CUK밥 전용 앱과 데스크톱 프로그램을 다운로드하세요.',
    download_now: '지금 다운로드',
    recommended: '권장',
    
    android_name: 'Android',
    android_desc: 'Google Play 스토어',
    windows_name: 'Windows',
    windows_desc: 'Windows 10 / 11 (64-bit)',
    macos_name: 'macOS',
    macos_desc: 'Apple Silicon & Intel',
    linux_name: 'Linux',
    linux_desc: 'Linux x64 (.tar.gz)',

    // macOS modal
    macos_download_title: 'macOS 다운로드',
    macos_download_desc: '사용 중이신 Mac의 프로세서에 맞는 버전을 선택해 주세요.',
    mac_arm64_title: 'Apple Silicon',
    mac_arm64_desc: 'Apple M1, M2, M3, M4 및 이후 모델',
    mac_x64_title: 'Intel',
    mac_x64_desc: 'Intel 프로세서 탑재 Mac',
    close: '닫기',

    // Highlights
    features_title: '주요 특징',
    feat_realtime_title: '실시간 학식 정보',
    feat_realtime_desc: '부온프란조, 카페보나 등 교내 학생식당의 조식, 중식, 석식 메뉴를 실시간으로 제공합니다.',
    feat_crossplatform_title: '모든 환경 지원',
    feat_crossplatform_desc: 'Android 앱, Windows, macOS, Linux 데스크톱 프로그램 및 웹 브라우저까지 완벽히 지원합니다.',
    feat_multilingual_title: '다국어 지원',
    feat_multilingual_desc: '한국어, English, 日本語, 中文(간체)를 지원하여 외국인 유학생도 쉽게 학식을 확인할 수 있습니다.',

    // Footer
    footer_text: '가톨릭대학교 비공식 학식 안내 서비스 • CUK밥',
    all_rights_reserved: 'All rights reserved.',
    open_source: '오픈소스 프로젝트',
    github: 'GitHub'
  },
  en: {
    app_title: 'CUK밥',
    app_badge: 'Catholic Univ. Cafeteria Portal',
    app_subtitle: 'Catholic University of Korea Cafeteria Guide',
    hero_description: 'Quickly and conveniently check cafeteria menus and hours across mobile apps, desktop software, and web browsers.',
    
    // Go to Web
    go_to_web_section_title: 'Web Version',
    go_to_web_title: 'Launch CUK밥 Web App',
    go_to_web_desc: 'Access today’s menu, meal categories, and feedback tools directly in your browser without any installation.',
    go_to_web_btn: 'Open Web App',
    go_to_web_tag: 'No Install Needed',
    go_to_web_url: 'cukbab.github.io/CUK_Web',

    // Clients
    clients_title: 'Download Clients',
    clients_desc: 'Download dedicated CUK밥 native applications optimized for your operating system and devices.',
    download_now: 'Download Now',
    recommended: 'Recommended',

    android_name: 'Android',
    android_desc: 'Google Play Store',
    windows_name: 'Windows',
    windows_desc: 'Windows 10 / 11 (64-bit)',
    macos_name: 'macOS',
    macos_desc: 'Apple Silicon & Intel',
    linux_name: 'Linux',
    linux_desc: 'Linux x64 (.tar.gz)',

    // macOS modal
    macos_download_title: 'Download for macOS',
    macos_download_desc: 'Select the package that matches your Mac architecture.',
    mac_arm64_title: 'Apple Silicon',
    mac_arm64_desc: 'Apple M1, M2, M3, M4 or later',
    mac_x64_title: 'Intel',
    mac_x64_desc: 'Intel-based Mac processors',
    close: 'Close',

    // Highlights
    features_title: 'Key Features',
    feat_realtime_title: 'Real-time Cafeteria Menus',
    feat_realtime_desc: 'Breakfast, lunch, and dinner menus for Buon Pranzo and Cafe Bona available instantly.',
    feat_crossplatform_title: 'Cross-Platform',
    feat_crossplatform_desc: 'Available on Android, Windows, macOS, Linux, and modern Web browsers.',
    feat_multilingual_title: 'Multilingual Support',
    feat_multilingual_desc: 'Full localization for Korean, English, Japanese, and Simplified Chinese.',

    // Footer
    footer_text: 'Unofficial Cafeteria Service for Catholic University of Korea • CUK밥',
    all_rights_reserved: 'All rights reserved.',
    open_source: 'Open Source Project',
    github: 'GitHub'
  },
  ja: {
    app_title: 'CUK밥',
    app_badge: 'カトリック大学校 学食ポータル',
    app_subtitle: 'カトリック大学校 学食情報サービス',
    hero_description: 'モバイルアプリ、PCソフト、Webブラウザのどこからでも、本日の学食メニューや営業時間を素早く便利に確認できます。',
    
    // Go to Web
    go_to_web_section_title: 'Web版',
    go_to_web_title: 'CUK밥 Web版へアクセス',
    go_to_web_desc: 'インストール不要！ブラウザから直接本日のメニューや営業時間を簡単にチェックできます。',
    go_to_web_btn: 'Web版を開く',
    go_to_web_tag: 'インストール不要',
    go_to_web_url: 'cukbab.github.io/CUK_Web',

    // Clients
    clients_title: 'クライアント ダウンロード',
    clients_desc: 'お使いの端末に最適化されたCUK밥専用アプリ・デスクトップ版をダウンロードしてください。',
    download_now: '今すぐダウンロード',
    recommended: 'おすすめ',

    android_name: 'Android',
    android_desc: 'Google Playストア',
    windows_name: 'Windows',
    windows_desc: 'Windows 10 / 11 (64ビット)',
    macos_name: 'macOS',
    macos_desc: 'Apple Silicon & Intel',
    linux_name: 'Linux',
    linux_desc: 'Linux x64 (.tar.gz)',

    // macOS modal
    macos_download_title: 'macOS版ダウンロード',
    macos_download_desc: 'お使いのMacのプロセッサに合わせたバージョンを選択してください。',
    mac_arm64_title: 'Apple Silicon',
    mac_arm64_desc: 'Apple M1、M2、M3、M4以降',
    mac_x64_title: 'Intel',
    mac_x64_desc: 'Intelプロセッサ搭載Mac',
    close: '閉じる',

    // Highlights
    features_title: '主な特徴',
    feat_realtime_title: 'リアルタイム学食情報',
    feat_realtime_desc: 'ボンプランゾやカフェボナの朝食・昼食・夕食メニューをリアルタイムで案内します。',
    feat_crossplatform_title: '全プラットフォーム対応',
    feat_crossplatform_desc: 'Android、Windows、macOS、Linux、Webブラウザに対応しています。',
    feat_multilingual_title: '多言語サポート',
    feat_multilingual_desc: '韓国語、英語、日本語、中国語に対応しており、留学生も安心して利用できます。',

    // Footer
    footer_text: 'カトリック大学校 非公式学食案内サービス • CUK밥',
    all_rights_reserved: 'All rights reserved.',
    open_source: 'オープンソースプロジェクト',
    github: 'GitHub'
  },
  zh: {
    app_title: 'CUK밥',
    app_badge: '韩国天主教大学 食堂门户',
    app_subtitle: '韩国天主教大学 食堂菜单指南',
    hero_description: '随时随地通过手机App、电脑客户端或网页端快速便捷地查看今日食堂菜单与营业时间。',
    
    // Go to Web
    go_to_web_section_title: '网页版',
    go_to_web_title: '进入 CUK밥 网页版',
    go_to_web_desc: '无需安装任何应用，直接在网页浏览器中查看今日菜单、就餐时间及反馈。',
    go_to_web_btn: '打开网页版',
    go_to_web_tag: '无需安装',
    go_to_web_url: 'cukbab.github.io/CUK_Web',

    // Clients
    clients_title: '客户端下载',
    clients_desc: '下载适用于您设备操作系统的 CUK밥 客户端与专属应用程序。',
    download_now: '立即下载',
    recommended: '推荐',

    android_name: 'Android',
    android_desc: 'Google Play 商店',
    windows_name: 'Windows',
    windows_desc: 'Windows 10 / 11 (64位)',
    macos_name: 'macOS',
    macos_desc: 'Apple Silicon & Intel',
    linux_name: 'Linux',
    linux_desc: 'Linux x64 (.tar.gz)',

    // macOS modal
    macos_download_title: 'macOS 下载',
    macos_download_desc: '请选择适合您 Mac 处理器的版本。',
    mac_arm64_title: 'Apple Silicon',
    mac_arm64_desc: '适用于 Apple M1、M2、M3、M4 及更新机型',
    mac_x64_title: 'Intel',
    mac_x64_desc: '适用于搭载 Intel 处理器的 Mac',
    close: '关闭',

    // Highlights
    features_title: '核心特色',
    feat_realtime_title: '实时食堂菜单',
    feat_realtime_desc: '实时查看 Buon Pranzo 与 Cafe Bona 等校内食堂的早、中、晚餐菜单。',
    feat_crossplatform_title: '全平台覆盖',
    feat_crossplatform_desc: '支持 Android、Windows、macOS、Linux 及现代网页浏览器。',
    feat_multilingual_title: '多语言全面支持',
    feat_multilingual_desc: '支持韩语、英语、日语和简体中文，方便留学生随时就餐。',

    // Footer
    footer_text: '韩国天主教大学 非官方食堂信息服务 • CUK밥',
    all_rights_reserved: 'All rights reserved.',
    open_source: '开源项目',
    github: 'GitHub'
  }
};
