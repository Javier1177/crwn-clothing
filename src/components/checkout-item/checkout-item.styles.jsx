import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const ImgElement = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemInfo = styled.span`
  width: 23%;
`;

export const ArrowElement = styled.span`
  cursor: pointer;
`;

export const ValueElement = styled.span`
  margin: 0 10px;
`;

export const RemoveButtonElement = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
