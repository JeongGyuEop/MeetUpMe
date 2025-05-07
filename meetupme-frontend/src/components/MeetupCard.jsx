// src/components/MeetupCard.jsx
import React from 'react';

// MeetupCard 컴포넌트는 각각의 모임 정보를 카드처럼 보여주는 역할
function MeetupCard({ meetup }) {
    // 구조 분해 할당: meetup 객체에서 title, location, members 값을 추출
    const { title, location, members } = meetup;

    return (
        <div style={styles.card}>
            {/* 모임 제목 */}
            <h3 style={styles.title}>{title}</h3>

            {/* 위치 정보 */}
            <p style={styles.info}>📍 {location}</p>

            {/* 참여 인원 수 */}
            <p style={styles.info}>👥 {members}명 참가 중</p>
        </div>
    );
}

// 컴포넌트 내 인라인 스타일 정의
const styles = {
    card: {
        border: '1px solid #ccc',                 // 테두리
        borderRadius: '8px',                      // 둥근 모서리
        padding: '1rem',                          // 내부 여백
        backgroundColor: '#fff',                  // 배경색
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'     // 그림자 효과
    },
    title: {
        fontSize: '1.2rem',
        marginBottom: '0.5rem'
    },
    info: {
        fontSize: '0.95rem',
        color: '#555'
    }
};

export default MeetupCard;
