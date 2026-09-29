# CUK밥 포털 (cukbab.github.io)

가톨릭대학교 비공식 학식 안내 서비스 **CUK밥**의 공식 센트럴 포털 웹페이지입니다.  
웹 버전 바로가기 및 Android, Windows, macOS, Linux 등 모든 플랫폼 클라이언트 다운로드를 제공합니다.

## 제공 기능

- **웹 버전 바로가기**: 별도 설치 없이 브라우저에서 바로 학식 메뉴 확인 ([CUK_Web](https://cukbab.github.io/CUK_Web))
- **클라이언트 다운로드**:
  - **Android**: Google Play 스토어 앱
  - **Windows**: Windows 64-bit 실행 파일
  - **macOS**: Apple Silicon (arm64) 및 Intel (x64) DMG 패키지 (아키텍처 자동 감지 및 권장 표시)
  - **Linux**: Linux x64 tar.gz 패키지
- **운영체제 자동 감지**: 접속한 기기의 OS를 자동 판별하여 최적의 다운로드를 상단에 권장(Recommended)으로 추천
- **다국어 지원**: 한국어(KO), English(EN), 日本語(JA), 中文(ZH) 지원

## 개발 및 빌드

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 관련 저장소

- [CUK_Web](https://github.com/CUKbab/CUK_Web) - 웹 애플리케이션
- [CUK_PC](https://github.com/CUKbab/CUK_PC) - 데스크톱(PC) 클라이언트
- [CUK_Android](https://github.com/CUKbab/CUK_Android) - Android 애플리케이션
- [CUK_Menu](https://github.com/CUKbab/CUK_Menu) - 학식 데이터 파서 및 API

## 라이선스

MIT License
