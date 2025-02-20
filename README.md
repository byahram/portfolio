# 포트폴리오 프로젝트

이 프로젝트는 **Next.js**를 기반으로 한 포트폴리오 웹사이트입니다. 다크 모드 지원, 다국어 기능 및 애니메이션 효과를 포함하여 직관적인 디자인을 제공합니다.

- [Demo](https://ahramkim-nextjs-portfolio.vercel.app/)

```bash
npm run dev
```

### 4️⃣ 프로덕션 빌드 및 실행

```sh
npm run build
npm run start
```

<br>

## 🚀 주요 기능

### 1. **반응형 디자인**

- 모바일, 태블릿, 데스크톱 등 다양한 기기에서 UI가 자연스럽게 변환됩니다. `Tailwind CSS` 덕분에 빠르고 효율적으로 반응형 디자인을 구현했고, 화면 크기에 따라 글자 크기, 레이아웃, 이미지 크기까지 모두 자동으로 조정됩니다. 모바일에서는 메뉴와 네비게이션이 간편하게 접근 가능하도록 헤더를 간결하게 디자인했습니다.

| Desktop                                                        | Tablet                                            | Mobile                                             |
| -------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------- |
| ![Desktop Image](/public/images/readme/light_desktop_main.png) | ![Tablet Image](/public/images/readme/tablet.png) | ![Mobile Image](/public/images/readme/mobile1.png) |

### 2. **다크 모드 지원**

- `next-themes`를 이용해 다크 모드와 라이트 모드를 손쉽게 전환이 가능합니다. `ThemeProvider`로 전역적으로 테마를 관리하고, 페이지가 렌더링될 때마다 선택된 테마에 맞게 콘텐츠가 업데이트됩니다. 다크 모드에서는 배경, 텍스트, 링크 색상 등이 자동으로 변경돼서 눈에 편안한 느낌을 줍니다.

| Light Mode                                                     | Dark Mode                                             |
| -------------------------------------------------------------- | ----------------------------------------------------- |
| ![Desktop Image](/public/images/readme/light_desktop_main.png) | ![Desktop Image](/public/images/readme/dark_mode.png) |

### 3. **다국어 지원** (개발 진행중)

- `next-intl`을 사용해 다국어 사이트 구현을 진행 중입니다. 현재는 한국어와 영어를 지원 준비 중입니다. 언어 선택 기능을 통해 사용자가 편하게 원하는 언어로 페이지를 바꿀 수 있도록 개발하고 있습니다.

### 4. **Notion API 연동**

- `Notion API`를 이용해 Notion에서 관리하는 콘텐츠를 실시간으로 불러와 사이트에 표시합니다. 커리어나 사이드 프로젝트 등 다양한 콘텐츠를 손쉽게 관리할 수 있습니다. `@notionhq/client`로 데이터를 받아오고 있습니다.

| Page                                                                  | Notion DB                                                     |
| --------------------------------------------------------------------- | ------------------------------------------------------------- |
| ![CareerList](/public/images/readme/CareerScreen.png)                 | ![CareerList](/public/images/readme/CareerDB.png)             |
| ![CareerProjectScreen](/public/images/readme/CareerProjectScreen.png) | ![CareerProjectDB](/public/images/readme/CareerProjectDB.PNG) |
| ![SideProjectScreen](/public/images/readme/SideProjectScreen.png)     | ![SideProjectDB](/public/images/readme/SideProjectDB.PNG)     |

### 5. **애니메이션 효과**

- `Framer Motion`을 활용해 부드럽고 자연스러운 애니메이션 효과를 추가했습니다. 예를 들어, 메인 페이지에서 사진을 클릭하면 이미지가 팝업처럼 등장하는 효과를 적용해서 웹사이트를 좀 더 인터랙티브하게 만들었습니다. 페이지 로딩 시에는 `Skeleton` 화면을 보여줘서 로딩 중에도 사용자 경험을 끊김 없이 제공합니다.

<br>

## 📝 코드 스타일

- `ESLint` 및 `Prettier` 적용
- `TypeScript` 사용
- `Tailwind CSS` 로 스타일 관리

<br>

## 🏗 디렉토리 구조

```sh
portfolio/
├── public/          # 정적 파일 보관
├── src/
│   ├── app/         # Next.js 페이지 라우트
│   ├── components/  # 재사용 가능한 UI 컴포넌트
│   ├── lib/         # API 통신 및 데이터 관리 (apiList.ts, notionhq.ts 등)
│   ├── provider/    # 전역 상태 및 테마 관리 (ThemeProvider 등)
│   ├── store/       # API 데이터 외의 전역 상태 관리
│   ├── types/       # TypeScript 타입 정의 파일 보관
│   ├── utils/       # 공통 유틸리티 함수 (common.ts, error.ts 등)
├── eslint.config.mjs   # ESLint 설정 파일
├── next.config.ts      # Next.js 환경설정 파일
├── package.json        # 프로젝트 종속성 및 스크립트 관리
├── tailwind.config.ts  # Tailwind CSS 설정 파일
└── tsconfig.json       # TypeScript 설정 파일
```

<br>

## 🚀 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자유롭게 사용하고 개선할 수 있습니다!
