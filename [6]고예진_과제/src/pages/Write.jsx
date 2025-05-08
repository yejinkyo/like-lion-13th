import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as W from "../styles/styledWrite";

const Write = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };

    // Title
    const [title, setTitle] = useState('');

    // Content
    const [content, setContent] = useState('');

    // 현재 날짜
    const today = new Date()
    const formatDate = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`

    // 저장
    const contentSave = () => {
        console.log("title: ", title);
        console.log("date:", formatDate);
        console.log("content: ", content)
    };
    
    return (
        <W.Container>
            <W.Box>
                <W.BackBtn onClick={goBack}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
                        alt="back"
                        width="30px"
                    />
                </W.BackBtn>
                <W.Content>
                    <W.Title
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <W.ContentBox>
                        <W.Date>
                            {formatDate}
                        </W.Date>
                        <W.Write  value={content} onChange={(e) => setContent(e.target.value)}/>
                    </W.ContentBox>
                    <W.WriteBtn onClick={contentSave}>작성하기</W.WriteBtn>
                </W.Content>
            </W.Box>
        </W.Container>
    )
}

export default Write;