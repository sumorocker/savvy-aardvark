import React from 'react';
import {Link} from 'react-router';

var MoreInfo = React.createClass({

    render: function () {
        return (
            <div className="main">
                <h1>More Info</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis doloribus ea
                    ipsum non praesentium qui! A aspernatur aut debitis dolores, esse excepturi, facere,
                    nisi nostrum perferendis provident sint voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis doloribus ea
                    ipsum non praesentium qui! A aspernatur aut debitis dolores, esse excepturi, facere,
                    nisi nostrum perferendis provident sint voluptatibus.</p>

                <Link to="/signup">Sign Up!</Link>
            </div>
        )
    }
});

export default MoreInfo;