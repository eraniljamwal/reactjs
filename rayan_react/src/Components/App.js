import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';

function mapStateToProps(state){
    return{
        posts:state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch);
}

const Apps = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
export default Apps;