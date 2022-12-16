import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
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

export default SearchBox;