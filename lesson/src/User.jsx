import PropTypes from "prop-types"
function User(props){


    return(

        props.issLoged ?<h1 className="welcome">welcome {props.name} </h1> : <h1 className="login">please log in </h1> 
    )
}

User.propTypes={
    issLoged: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}

User.defaultProps={
    issLoged:false,
    name:"guest",

}

export default User