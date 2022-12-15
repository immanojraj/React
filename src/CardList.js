import React from 'react';
import Card from './Card';

//receving and destructing props name,email,id
const CardList = ({robots}) => {
  return (
    <div>
      {
        //looping
        robots.map((user, i) => {
          return (
            <Card
              // add key to set the properties for index like unique id
              key= {i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
}
    //looping
    // const cardComponent = robots.map((user, i) => {
    //     // add key to set the properties for index like unique id
    //    return (
    //       <Card
    //       key= {i}
    //       id={robots[i].id}
    //       name={robots[i].name}
    //       email={robots[i].email}/>
    //    );
    // });
    //const Card = (props) => {
    //Destructor
    //const {name, email, id} =props;
    // return (
    //   // javascript components
    //     <div>
    //     {cardComponent}
    //     </div>
    // );
//}
export default CardList;