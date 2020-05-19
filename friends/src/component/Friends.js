import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchFriend} from '../store/action/index';
import FriendsList from './FriendsList';

const Friends = props => {
    // console.log({props})
    useEffect(() => {
        props.fetchFriend();
    }, [props.fetchFriend])
// console.log(props.person)
    return (
        <div>
            <FriendsList />
            <h1>hello</h1>
            {props.isFetching && <h3>Fetching data...</h3>}
    {props.person.map( card => (<div> <h2>{card.name}</h2>  
    <h3>{card.age}</h3>
    <h3>{card.email}</h3>
</div>
  ))}
  
        </div>
    );
};

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    person: state.person,
    error: state.error,
})

export default connect(mapStateToProps, {fetchFriend}) (Friends);