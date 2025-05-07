// src/components/MeetupPreview.jsx
import React from 'react';
import MeetupCard from './MeetupCard';

// 더미 데이터: 백엔드 연결 전 테스트용 모임 목록
const  dummyMeetups = [
    { id: 1, title: '헬스 동호회', location: '서울 강남', members: 12 },
    { id: 2, title: '스터디 모임(Java)', location: '부산 해운대', members: 8 },
    { id: 3, title: '등산 같이 가요', location: '대구 수성', members: 15 },
    { id: 4, title: '카페 탐방 모임', location: '광주 동구', members: 9 }
];

// MeetupPreview 컴포넌트 : 인기 모임들을 카드 형태로 미리 보여줌
function MeetupPreview() {
    return(
        <section style={styles.section}>
            <h2 style={styles.heading}>인기 모임 둘러보기</h2>

            {/* 모임 목록 렌더링 */}
            <div style={styles.listContainer}>
                {dummyMeetups.map(meetup =>(
                    <MeetupCard key={meetup.id} meetup={meetup} />
                ))}
            </div>
        </section>
    );
}

// 스타일 객체
const styles = {
    section: {
        padding: '2rem',
        backgroundColor: '#f9f9f9'
    },
    heading: {
        fontSize: '1.5rem',
        marginBottom: '1.5rem',
        textAlign: 'center'
    },
    listContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem'
    }
};

export default MeetupPreview;
