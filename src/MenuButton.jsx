import React from 'react';

const MenuButton = () => {
  return (
    <svg className="menu" width="51" height="42" viewBox="0 0 51 42" xmlns="http://www.w3.org/2000/svg" >
      <title>Header Menu</title>
      <defs>
        <filter x="-37.1%" y="-38.5%" width="174.3%" height="200%" filterUnits="objectBoundingBox" id="a">
        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/>
        <feMerge>
        <feMergeNode in="shadowMatrixOuter1"/>
        <feMergeNode in="SourceGraphic"/>
        </feMerge>
        </filter>
        <path d="M0 1h35" id="c"/>
        <filter x="-24.3%" y="-375%" width="148.6%" height="950%" filterUnits="objectBoundingBox" id="b">
        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
        <feOffset dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
        <feMorphology radius="2" in="SourceAlpha" result="shadowInner"/>
        <feOffset dy="1" in="shadowInner" result="shadowInner"/>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/>
        </filter>
        <path d="M0 25h35" id="e"/>
        <filter x="-24.3%" y="-375%" width="148.6%" height="950%" filterUnits="objectBoundingBox" id="d">
        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
        <feOffset dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
        <feMorphology radius="2" in="SourceAlpha" result="shadowInner"/>
        <feOffset dy="1" in="shadowInner" result="shadowInner"/>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/>
        </filter>
        <path d="M0 13h35" id="g"/>
        <filter x="-24.3%" y="-375%" width="148.6%" height="950%" filterUnits="objectBoundingBox" id="f">
        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
        <feOffset dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
        <feMorphology radius="2" in="SourceAlpha" result="shadowInner"/>
        <feOffset dy="1" in="shadowInner" result="shadowInner"/>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/>
        </filter>
      </defs>
      <g filter="url(#a)" transform="translate(8 5)" fill="none" fillRule="evenodd" strokeLinecap="square">
        <use fill="#000" filter="url(#b)" xlinkHref="#c"/>
        <use stroke="#6E6B6B" strokeWidth="4" xlinkHref="#c"/>
        <use fill="#000" filter="url(#d)" xlinkHref="#e"/>
        <use stroke="#6E6B6B" strokeWidth="4" xlinkHref="#e"/>
        <g>
          <use fill="#000" filter="url(#f)" xlinkHref="#g"/>
          <use stroke="#6E6B6B" strokeWidth="4" xlinkHref="#g"/>
        </g>
      </g>
    </svg>
  );
}

export default MenuButton;