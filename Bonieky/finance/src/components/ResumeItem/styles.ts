import styled from "styled-components"

export const Container = styled.div`
    flex: 1;    
    align-items: center;
    text-align: center;
`
export const Title = styled.div`
    align-items: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`
export const Info = styled.div<{color?: string}>`
    align-items: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};   
`



