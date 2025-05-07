// src/components/HeroSection.jsx
import React from "react";

// HeroSection 컴포넌트 : 메인 페이지 중앙의 소개 문구와 Call-to-Action 버튼
function HeroSection() {
    return (
        <section style={styles.section}>
            {/* 큰 제목 */}
            <h1 style={styles.title}>지금, 당신만의 모임을 시작해보세요.</h1>

            {/* 부제목 */}
            <p style={styles.subtitle}>같은 관심사를 가진 사람들과 함께하는 연결의 시작</p>

            {/* 모임 만들기 버튼 */}
            <button style={styles.button}>모임 만들기</button>
        </section>
    );
}

// 스타일 객체
const styles = {
    section: {
        height: '60vh',               // 화면의 60% 높이
        display: 'flex',             // 내부 요소들을 수직 정렬하기 위해 flex 사용
        flexDirection: 'column',
        justifyContent: 'center',    // 수직 가운데 정렬
        alignItems: 'center',        // 수평 가운데 정렬
        textAlign: 'center',
        backgroundColor: '#ffffff',
        padding: '2rem'
    },
    title: {
        fontsize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '2rem'
    },
    button: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer'
    }
};

export default HeroSection;