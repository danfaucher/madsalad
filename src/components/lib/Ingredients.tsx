import { useState, useEffect } from 'react';

interface Ingredient {
  id: string;
  name: string;
  calories: number;
  glycemicIndex: number;
  glycemicLoad: number;
  vegan: boolean;
  tags: string[];
  images: string[];
}

const Ingredients: React.FC = () => {
  const [data, setData] = useState<Ingredient[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/ingredients.json');
        const json: Ingredient[] = await response.json();
        setData(json);
      } catch (error) {
        console.error('Errorino fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Salad Ingredients</h1>
      {data ? (
        <div className="grid gap-6">
          {data.map((ingredient) => (
            <div
              key={ingredient.id}
              className="border p-4 rounded shadow bg-white"
            >
              <h2 className="text-xl font-semibold">{ingredient.name}</h2>
              <p>
                <strong>Calories:</strong> {ingredient.calories} kcal / 100g
              </p>
              <p>
                <strong>Glycemic Index:</strong> {ingredient.glycemicIndex}
              </p>
               <p>
                <strong>Glycemic Load:</strong> {ingredient.glycemicLoad}
              </p>
              <p>
                <strong>Vegan:</strong> {ingredient.vegan ? 'Yes' : 'No'}
              </p>
              <p>
                <strong>Tags:</strong>{' '}
                {ingredient.tags && ingredient.tags.length > 0
                  ? ingredient.tags.join(', ')
                  : 'None'}
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {ingredient.images.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`${ingredient.name} image ${idx + 1}`}
                    className="w-24 h-24 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading ingredients...</p>
      )}
    </div>
  );
};

export default Ingredients;
