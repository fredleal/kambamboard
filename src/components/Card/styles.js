import styled from "styled-components";

export const Container = styled.div `
    position: relative;
    background: #FFF;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 15px;
    border-top: 40px solid rgba(255, 255, 204);
    cursor: grab;

    header {
        position: absolute;
        top: -22px;
        left: 15px;
    
        svg{
            position: absolute;
            right: -270px;
            top: -14px;
    }
    }

    p{
        font-weight: 500;
        line-height: 20px;
    }
    h3
    {
        position: absolute;
        margin-left: 5px;
        top: -10px;
        left: 20px;
    }

    img{
        width: 22px;
        height: 22px;
        border-radius: 12px;
        margin-top: 5px;
    }
    svg{
            position: absolute;
            bottom: 10px;
            right: 0;
    }
`;

export const Label = styled.span `
    position: absolute;
    top: -8px;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    display: inline-block;
    background: #EEB111 ;
`;