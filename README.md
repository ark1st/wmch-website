# 세계선교교회 (WMCH) 웹사이트

> 하나님 나라의 망대를 세우는 교회

정적 HTML 기반의 모던 교회 랜딩페이지

## 🎨 디자인 특징

### 모던 랜딩페이지 요소
- **대형 히어로 섹션**: 그라디언트 애니메이션 + 대담한 타이포그래피
- **세 가지 망대 시각화**: 아이콘 카드 + 호버 효과
- **유튜브 중심 콘텐츠**: 영상 임베드 + 큰 채널 링크
- **글라스모피즘**: 투명도 + 블러 효과
- **마이크로 인터랙션**: 부드러운 애니메이션 + 호버 효과

### 기술 스택
- **HTML5**: 시맨틱 마크업
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **Custom CSS**: 모던 애니메이션 + 효과
- **Vanilla JavaScript**: 가벼운 인터랙션

## 🎯 핵심 메시지

### 2026 송구영신예배: 하나님 나라의 망대

**본문**: 마태복음 6:33-34
> "너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라"

**세 가지 망대:**
1. **'오늘'의 망대**: 오늘의 말씀, 오늘의 기도, 오늘의 전도
2. **'구원의 길' 망대**: 매일 구원의 길을 그리고 묵상하며 내 안에 망대를 세워야
3. **'3 뜰'의 망대**: 현장에서 응답과 증거를 가지고 증인으로

## 📁 파일 구조

```
wmch-website/
├── index.html          # 메인 페이지 (모던 랜딩페이지)
├── css/
│   └── style.css       # 커스텀 애니메이션 + 효과
├── js/
│   └── main.js         # 인터랙티브 기능
├── images/             # 이미지 폴더
├── pages/              # 추가 페이지 (필요시)
└── README.md
```

## 🚀 로컬 테스트

### Python 서버
```bash
cd wmch-website
python3 -m http.server 8000
```

### Node.js 서버
```bash
npx http-server -p 8000
```

### PHP 서버
```bash
php -S localhost:8000
```

브라우저에서 `http://localhost:8000` 접속

## 🌐 배포 방법

### 옵션 1: GitHub Pages (권장)

1. GitHub 저장소 생성
2. 파일 업로드
```bash
git init
git add .
git commit -m "Initial commit: Modern landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wmch-website.git
git push -u origin main
```
3. Settings → Pages → Source: main branch 선택
4. 커스텀 도메인 설정: `wmch.or.kr`

**장점:**
- ✅ 무료 호스팅
- ✅ 자동 HTTPS (Let's Encrypt)
- ✅ Git 기반 버전 관리
- ✅ 자동 배포 (push 시 즉시 반영)

### 옵션 2: Vercel

1. [Vercel](https://vercel.com) 계정 생성
2. GitHub 저장소 연결
3. 프로젝트 임포트
4. 자동 배포 완료
5. Settings → Domains → 커스텀 도메인 추가

**장점:**
- ✅ 초고속 CDN
- ✅ 자동 배포 (Git push → 즉시 배포)
- ✅ 무료 SSL
- ✅ 성능 최적화 자동

### 옵션 3: Netlify

1. [Netlify](https://netlify.com) 계정 생성
2. "Add new site" → "Import an existing project"
3. GitHub 연결 + 저장소 선택
4. 배포 설정 (기본값 사용)
5. Domain settings → 커스텀 도메인 추가

### 도메인 연결 (wmch.or.kr)

도메인 등록 업체(가비아, 후이즈 등)에서 DNS 설정:

**GitHub Pages:**
```
A 레코드: 185.199.108.153
A 레코드: 185.199.109.153
A 레코드: 185.199.110.153
A 레코드: 185.199.111.153
CNAME (www): username.github.io
```

**Vercel/Netlify:**
- 플랫폼에서 제공하는 DNS 설정 안내 따르기
- CNAME 레코드 추가 (플랫폼이 자동 제공)

## 📝 콘텐츠 수정 가이드

### 예배 시간 변경
`index.html` → 예배 안내 섹션 (`#worship`)

### 주소/연락처 변경
`index.html` → 오시는 길 섹션 (`#contact`)

### 지도 변경
1. Google Maps에서 교회 위치 검색
2. 공유 → 지도 삽입 → HTML 복사
3. `index.html`의 iframe 코드 교체

### 송구영신 메시지 업데이트
`index.html` → `#message2026` 섹션 수정

### 색상 변경
`index.html`의 Tailwind 클래스 수정:
- `bg-blue-600` → `bg-purple-600` (배경색)
- `text-blue-600` → `text-purple-600` (텍스트색)
- `from-blue-600 to-indigo-700` → 원하는 그라디언트

## 🎨 디자인 커스터마이징

### 애니메이션 속도 조정
`css/style.css`:
```css
.fade-in {
    animation: fadeIn 0.8s ease-out; /* 0.8s를 원하는 속도로 */
}
```

### 호버 효과 변경
`css/style.css`:
```css
.hover-lift:hover {
    transform: translateY(-8px); /* 이동 거리 조정 */
}
```

### 폰트 변경
`index.html` head 섹션:
```html
<link href="https://fonts.googleapis.com/css2?family=다른폰트&display=swap" rel="stylesheet">
```

## 📊 성능 최적화

### 이미지 최적화
- WebP 형식 사용 권장
- 압축 도구: [TinyPNG](https://tinypng.com)
- Lazy loading 적용 (자동 포함)

### CSS 최적화
프로덕션 배포 시 Tailwind CSS 빌드:
```bash
npx tailwindcss -i ./css/style.css -o ./css/output.css --minify
```

### JavaScript 최적화
- 이미 경량화되어 있음 (Vanilla JS)
- 필요 없는 기능 주석 처리

## 🔒 보안

- ✅ HTTPS 필수 (호스팅 플랫폼 자동 제공)
- ✅ CSP 헤더 (Vercel/Netlify 자동)
- ✅ 정적 사이트 (서버 취약점 없음)
- ✅ XSS 방지 (입력 폼 없음)

## 📱 반응형 디자인

모든 기기에서 최적화:
- 📱 모바일 (320px~)
- 📱 태블릿 (768px~)
- 💻 데스크톱 (1024px~)
- 🖥️ 대형 화면 (1920px~)

## 🌐 브라우저 지원

- ✅ Chrome/Edge (최신)
- ✅ Safari (최신)
- ✅ Firefox (최신)
- ✅ Samsung Internet
- ✅ iOS Safari
- ✅ Android Chrome

## 🎬 주요 기능

### 인터랙티브 요소
- ✨ 스크롤 애니메이션
- ✨ 호버 효과 (카드, 버튼)
- ✨ 부드러운 스크롤
- ✨ 모바일 메뉴
- ✨ 유튜브 레이지 로딩

### 접근성
- ♿ 시맨틱 HTML
- ♿ 키보드 네비게이션
- ♿ ARIA 라벨
- ♿ 반응형 디자인

## 📞 유튜브 채널

**메인 채널**: [https://youtube.com/@wmch1979](https://youtube.com/@wmch1979)

## 🛠️ 유지보수

### 정기 점검 항목
- [ ] 유튜브 임베드 링크 확인
- [ ] 예배 시간 정보 업데이트
- [ ] 연락처 정보 확인
- [ ] 지도 위치 확인
- [ ] 브라우저 호환성 테스트

### Git 커밋 가이드
```bash
git add .
git commit -m "타입: 변경 내용"
git push
```

**타입 예시:**
- `feat`: 새 기능
- `fix`: 버그 수정
- `style`: 디자인 변경
- `content`: 콘텐츠 수정
- `docs`: 문서 수정

## 📈 향후 개선 사항

- [ ] 실시간 예배 일정 API 연동
- [ ] YouTube Data API로 최신 영상 자동 로드
- [ ] 다국어 지원 (영어, 중국어)
- [ ] 다크 모드 지원
- [ ] 온라인 헌금 시스템 (필요시)
- [ ] 주보 PDF 다운로드
- [ ] 교회 소식 게시판

## 📄 라이선스

© 2026 세계선교교회 (World Mission Church). All rights reserved.

---

**제작**: Ark (OpenClaw)  
**업데이트**: 2026-02-01  
**디자인**: 모던 랜딩페이지  
**기술**: HTML5 + Tailwind CSS + Vanilla JS

### 문의
- YouTube: [@wmch1979](https://youtube.com/@wmch1979)
- 전화: 031-384-6494
