import PropTypes from 'prop-types';

const Component = ({name, number, children}) =>{
    return(
        <>
            안녕하세요 제 이름은 {name} 입니다. <br/>
            저의 직업은 {children} 입니다.
            제가 제일 좋아하는 숫자는 {number}입니다.
        </>
    )
    };
Component.defaultProps = {
    name: '재혁'
};
Component.propTypes ={
    name: PropTypes.string,
    number: PropTypes.number.isRequired
};

export default Component;
<test>
