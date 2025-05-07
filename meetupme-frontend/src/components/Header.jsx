// src/components/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // 추가

// Header 컴포넌트: 상단 로고 및 로그인/회원가입 버튼이 있는 영역
function Header() {
    const navigate = useNavigate(); // 라우팅을 위한 함수

    return (
      <header style={styles.header}>
          {/* 로고 */}
          <div style={styles.logo}>MeetUpMe</div>

          {/* 로그인/회원가입 버튼 영역 */}
          <nav>
              <button style={styles.button}>로그인</button>
              <button style={styles.button} onClick={() => navigate("/signup")}>회원가입</button>
          </nav>
      </header>
    );
}

// 인라인 스타일 정의 (CSS를 따로 만들지 않고 JS 안에서 스타일 적용)
const styles = {
    header: {
        display: 'flex', // 가로 배치
        justifyContent: 'space-between', // 양쪽 정렬
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd'
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#333'
    },
    button: {
        marginLeft: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: "#007bff",
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
}

export default Header;