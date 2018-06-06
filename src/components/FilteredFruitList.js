import React from 'react';

<<<<<<< HEAD
const FilteredFruitList = ({ fruit, filter }) => {
  const fruitList = !filter ?  fruit : fruit.filter(item => item.fruit_type === filter);

  return (
    <ul className="fruit-list">
      {fruitList.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
};

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};
=======
const FilteredFruitList = ({list}) => (
     <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
)
>>>>>>> 8640bb45e5389dd3356f4cf6feb8f9729fc19a55

export default FilteredFruitList;
