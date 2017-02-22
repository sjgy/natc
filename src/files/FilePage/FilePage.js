import React from 'react';
import {connect} from 'dva';


const FilePage = ({file}) => {


  return (<h2>{file.name}</h2>);
}

// const  = require('');

const mapStateToProps = ({file}) => {
    return {file: file}
}

export default connect(mapStateToProps)(FilePage);
