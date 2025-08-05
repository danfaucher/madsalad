import Ingredients from '../components/lib/Ingredients';
import IngredientsDropdown from '../components/lib/IngredientsDropdown';
import Nav from '../components/lib/Nav';

const Base = () => {
  return (
    <div className="base-container">
        <Nav />
      <h1 className="text-3xl font-bold underline">MadSalad</h1>
      <IngredientsDropdown />
      <Ingredients />
      
    </div>
  );
}

export default Base;