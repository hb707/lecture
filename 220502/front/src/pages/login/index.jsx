import styled from 'styled-components'

const StyledForm = styled.form`
    display: block;
    width: 300px;
    height: 100px;
    margin: 40vh auto 0 auto;
    border: 1px solid red;
`

const Login = () => {
    return (
        <>
            Login Page
            <StyledForm>
                <input type="text" placeholder='아이디를 입력하세요' />
                <input type="password" />
                <input type="submit" value="로그인" />
            </StyledForm>
        </>
    )
}

export default Login;