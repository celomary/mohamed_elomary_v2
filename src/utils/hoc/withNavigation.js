import { useNavigate } from 'react-router-dom';

export const withNavigation = (Component) => {
    return (props) => {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
};
