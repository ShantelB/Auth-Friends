import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addFriend, fetchFriend} from '../store/action/index';

const FriendsList = props => {
    console.log({props})


    const [friend, setFriend] = useState({
        name: '',
        age:'',
        email:'',
    })

    const change = event => {
        setFriend({...friend, [event.target.name]: event.target.value});
    };

   const submitFriend = event => {
        event.preventDefault();
        props.addFriend(friend);
        setFriend({
            name: '',
            email:'',
            age:'',
        });
        props.fetchFriend()
    };
  
  return (
      <div>
          
          <form onSubmit={submitFriend}>
               <label>Name</label>
          <input onChange= {change} type= 'text' name= 'name' value={friend.name} />
          <label>Age</label>
          <input onChange= {change} type= 'text' name= 'age' value={friend.age} />
          <label>Email</label>
          <input onChange= {change} type= 'text' name= 'email' value={friend.email} />
        
          <button>Add</button>
        </form>

      </div>
  )
};

export default connect(null, {addFriend, fetchFriend}) (FriendsList);

// class GasPrices extends React.Component {
//   state = {
//     gasPrices: []
//   };

//   componentDidMount() {
//     this.getData();
//   }

//   getData = () => {
//     // make a GET request to fetch the data
//     // pass the token with the request on the Authorization request header

//     axiosWithAuth()
//       .get("/api/data")
//       .then(res => {
//         // res.data.data
//         this.setState({
//           gasPrices: res.data.data.filter(
//             price =>
//               price.type === "Gasoline - Regular" &&
//               (price.location === "US" || price.location === "State of Hawaii")
//           )
//         });

//         // this.setState({
//         //   gasPrices: res.data.data
//         //     .filter(price => price.type === "Gasoline - Regular")
//         //     .filter(
//         //       price =>
//         //         price.location === "US" || price.location === 
// From Ashley Harrison to Everyone:  01:50 PM
// "State of Hawaii"
//         //     )
//         // });
//       })
//       .catch(err => console.log(err.response));
//   };

//   formatData = () => {
//     const formattedData = [];
//     console.log(this.state.gasPrices);
//     this.state.gasPrices.forEach((price, index, arr) => {
//       if (price.location === "US") {
//         formattedData.push({
//           date: moment(price.date).format("MMM"),
//           USPrice: price.price,
//           HawaiiPrice: arr[index + 1].price
//         });
//       }
//     });
//     return formattedData;
//   };

//   render()
