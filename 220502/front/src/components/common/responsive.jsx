import styled from 'styled-components'

const ResponsiveTemplate = styled.div`
    padding:  0 1rem;
    width: 1024px;
    margin: 0 auto;

    /* 반응형 */
    @media (max-width: 1024px) {
        width: 768px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`
// 12px = 0.75rem;
// 16px = 1rem

// 받아온 프롭스에서 children이랑 나머지를 구분해서 나머지는 다 템플릿컴포넌트에 때려박기
const Responsive = ({ children, ...rest }) => {
    return (
        <ResponsiveTemplate {...rest}>
            {children}
        </ResponsiveTemplate>
    )
}

export default Responsive