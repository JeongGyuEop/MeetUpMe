import React from 'react'; // React를 임포트 해서 JSX 문법을 사용할 수 있게 한다.
import MainPage from "./pages/MainPage";

function App() { // App 컴포넌트 정의
    return (
        <div>
            <MainPage />
        </div>
    );
} // 리턴되는 JSX 안에서 <SignupForm />을 렌더링하고 있다.
  // 따라서 브라우저에서 이 앱을 실행하면 바로 회원가입 폼이 표시된다.

export default App; // App 컴포넌트를 내보내서 다른 파일에서 사용할 수 있게 한다.(index.js에서 불러옴)
