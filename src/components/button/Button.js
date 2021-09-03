import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Button = (props) => {

    const dispatch = useDispatch();

    const { url, action, button_id, title } = props;
    return (
        <div>
            {
                url ? <Link to={url}><button type='button' id={button_id}
                >{title}<i className="arrow right"></i></button></Link>
                    : <button type='button' id={button_id}
                        onClick={() => dispatch(action)}
                    >{title}<i className="arrow right"></i></button>
            }
        </div>
    )
}

export default Button;