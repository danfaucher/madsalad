import Ingredients from '../components/lib/Ingredients';
import Nav from '../components/lib/Nav';

const Base = () => {
  return (
    <div className="base-container">
        <Nav />
      <h1 className="text-3xl font-bold underline">MadSalad</h1>
      <Ingredients />
    </div>
  );
}

export default Base;