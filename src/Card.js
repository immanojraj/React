import React from 'react';

//receving and destructing props name,email,id
const Card = ({id, name, email}) => {
    //const Card = (props) => {
    //Destructor
    //const {name, email, id} =props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200*200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}


// class Hello extends Component {
//     render() {
//         return (
//             <div className="f1 tc">
//                 <h1>Hello world</h1>
//                 <p>{this.props.greeting}</p>
//             </div>
//         )
//     }
// }

export default Card;