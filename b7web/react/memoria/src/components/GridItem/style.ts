import styled from "styled-components";

type ContainerProps = {
  showBackground: boolean
}
export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.showBackground === true ? '#1550FF' : '#E3E3E2'};
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

type ItemProps = {
  opacity?: number
}
export const Icon = styled.img<ItemProps>`
  width: 40px;
  height: 40px;
  opacity: ${props => props.opacity ? props.opacity : 1};
`
