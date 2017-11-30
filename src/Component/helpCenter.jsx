/**
 * Created by zoudonghui on 17/11/28.
 */
import React, {Component, PropTypes} from 'react';
import Header from  './common/header.jsx';
import indexStyle from '../Style/index.css';
class HelpCenter extends Component {

    render() {

        return (
            <div className={indexStyle.indexModule}>
                <Header titleName = "帮助中心" Goback/>
                <div>

                </div>
            </div>
        )
    }
}

export default HelpCenter;
