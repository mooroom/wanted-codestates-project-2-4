import React, { useState, useEffect } from "react";
import * as S from "./style";

import { FiHeart, FiShare } from "react-icons/fi";

function Card({ cardContetnt }) {
  const [isLiked, setIsLiked] = useState(0);
  const [likeCount, setLikeCount] = useState(cardContetnt.like_cnt);
  const expressLike = () => {
    if (isLiked) {
      setIsLiked(0);
      setLikeCount(likeCount - 1);
      document.querySelector(`.like-${cardContetnt.id}`).style.color =
        "#8d8d8e";
    } else {
      setIsLiked(1);
      setLikeCount(likeCount + 1);
      document.querySelector(`.like-${cardContetnt.id}`).style.color = "red";
    }
  };

  return (
    <>
      <S.Card>
        <S.CardThumbnail src={cardContetnt.image} alt="card-thumbnail" />
        <S.CardInfo>
          <div>{cardContetnt.upload_date}</div>
          <S.CardControl>
            <S.CardButton onClick={() => expressLike()}>
              <FiHeart className={`like-${cardContetnt.id}`} />
              <p>{likeCount}</p>
            </S.CardButton>
            <S.CardButton
              onClick={() => {
                window.open(cardContetnt.link, "_blank");
              }}
            >
              <FiShare />
              <p>공유하기</p>
            </S.CardButton>
          </S.CardControl>
        </S.CardInfo>
      </S.Card>
    </>
  );
}

export default Card;
