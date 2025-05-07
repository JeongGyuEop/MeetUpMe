// src/components/Footer.jsx
import React from 'react';

// Footer 컴포넌트: 사이트 하단에 표시되는 정보 영역
function Footer() {
    return (
        <footer style={styles.footer}>
            {/* 저작권 표시 */}
            <p>© 2025 MeetUpMe. All rights reserved.</p>

            {/* 깃허브 링크 */}
            <p>
                <a
                    href="https://github.com/JeongGyuEop/MeetUpMe"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    GitHub 저장소 ↗
                </a>
            </p>
        </footer>
    );
}

// Footer 스타일 정의
const styles = {
    footer: {
        marginTop: '3rem',             // 위쪽 여백
        padding: '2rem',               // 내부 여백
        textAlign: 'center',           // 가운데 정렬
        fontSize: '0.9rem',            // 글자 크기
        color: '#777',                 // 회색 글자
        borderTop: '1px solid #e0e0e0',// 위쪽 테두리
        backgroundColor: '#fafafa'     // 연한 회색 배경
    },
    link: {
        color: '#007bff',              // 파란색 링크
        textDecoration: 'none'         // 밑줄 제거
    }
};

export default Footer;
