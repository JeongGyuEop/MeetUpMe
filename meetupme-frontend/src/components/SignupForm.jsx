// React로 작성된 사용자 회원가입 컴포넌트,
// 프론트엔드에서 사용자가 입력한 정보를 백엔드 API로 전송해 회원가입 수행하는 구조

import React, { useState } from "react"; // useState: React의 상태(state) 관리 훅으로, 폼 데이터를 담기 위해 사용
import axios from 'axios'; // axios: HTTP 요청을 위한 라이브러리, POST 요청으로 회원가입 API 호출

function SignupForm() {

    const  [formData, setFormData] = useState({ // 컴포넌트 내부 상태 선언
        email: '',
        password: '',
        nickname: ''
    }); // formData: 사용자가 입력한 값을 담는 상태 객체
        // 초기값은 모두 빈 문자열
        // 이 객체는 나중에 그대로 서버에 전달

    const handleChange = (e) => { // 입력값 변경 핸들링
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };  // 사용자가 어떤 input 필드에 값을 입력하면 onChange 이벤트가 발생
        // 해당 name 속성(email, password, nickname)을 키로 하여 formData 갱신

    const handleSubmit = async (e) => { // 폼 제출 처리
        e.preventDefault(); // 폼의 기본 동작(새로고침) 막음
        try {
            await axios.post('http://localhost:8080/users/signup', formData); // POST 요청 전송
            alert('회원가입 성공!');
        } catch (error) {
            alert('회원가입 실패: ' + (error.response?.data?.message || '서버 오류'));
        }
    }; // axios.post() 를 통해 Spring Boot 서버의 /users/signup API로 데이터를 전송

    return ( // 화면 렌더링 부분
        <form onSubmit={handleSubmit}>
            <h2>회원가입</h2>
            <input type="email" name="email" placeholder="이메일" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="비밀번호" value={formData.password} onChange={handleChange} required />
            <input type="text" name="nickname" placeholder="닉네임" value={formData.nickname} onChange={handleChange} required />
            <button type="submit">가입하기</button>
        </form>
    );  // input 태그마다 value는 formData의 상태에 연결되어 있고,
        // 사용자가 입력할 때마다 handleChange()가 동작해 상태를 업데이트
        // <form onSubmit={handleSubmit}>은 버튼 클릭시 handleSubmit 함수 호출.
}

export default SignupForm; // 이 컴포넌트를 다른 파일(App.js 등)에서 사용할 수 있도록 export

/*

전체 흐름 요약
1) 사용자가 에메일, 비밀번호, 닉네임 입력
2) 입력값이 formData에 저장
3) "가입하기" 클릭 시 handleSubmit() 실행
4) axios.post()로 백엔드 API에 요청
5) 백엔드 처리 후 결과에 따라 알림 출력

 */