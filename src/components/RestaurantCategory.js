import List from "./List";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  }


    return (
    <div>
      {/* accordian header */}
<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 " onClick ={ handleClick}>
<div className="flex justify-between cursor-pointer" >
<span className="font-bold text-lg">
    {data.title} ({data.itemCards.length})</span>
    {showItems ? <span>▲</span> : <span>▼</span>}
    </div>
      {showItems && <List items={data.itemCards}/>}
    </div>

    </div>
    );
};

export default RestaurantCategory;

// import List from './List';

// const RestaurantCategory = ({ data}) => {
//   const handleClick = () => {
//     console.group("clicked")
//   };

//   return (
//     <div>
//       {/* Accordion Header */}
//       <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
//         <div
//           className="flex justify-between cursor-pointer"
//           onClick={handleClick}
//         >
//           <span className="font-bold text-lg">
//             {data.title} ({data.itemCards.length})
//           </span>
//           <span>🔽</span>
//         </div>
//         {/* Accordion Body */}
//         {/* {showItems && <List items={data.itemCards} dummy={dummy} />} */}
//       </div>
//     </div>
//   );
// };

// export default RestaurantCategory;
