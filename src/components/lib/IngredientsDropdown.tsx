import React, { useState, useEffect, useRef } from 'react';

interface Ingredient {
  id: number;
  name: string;
}

const IngredientDropdown: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/ingredients.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data: Ingredient[] = await response.json();
        const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
        setIngredients(sorted);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNames = Array.from(event.target.selectedOptions).map((option) => option.value);
    const selected = ingredients.filter((i) => selectedNames.includes(i.name));
    setSelectedIngredients(selected);
    drawSvgsToCanvas(selected);
  };

  const drawSvgsToCanvas = (selected: Ingredient[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set dimensions for each image
    const itemHeight = 100;
    const itemWidth = 100;

    selected.forEach((ingredient, index) => {
      const image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0, index * itemHeight, itemWidth, itemHeight);
      };
      image.onerror = () => {
        console.error(`Image not found for "${ingredient.name}"`);
      };
      image.src = `/img/ingredients/${ingredient.id}_${ingredient.name.toLowerCase()}_1.svg`;
    });
  };

  return (
    <div>
      <label htmlFor="ingredient">Ingredients:</label>
      <select
        id="ingredient"
        multiple
        size={ingredients.length}
        onChange={handleChange}
        style={{ height: '200px', width: '200px' }}
      >
        {ingredients.map((ingredient) => (
          <option key={ingredient.id} value={ingredient.name}>
            {ingredient.name}
          </option>
        ))}
      </select>

      <canvas
        ref={canvasRef}
        width={300}
        height={selectedIngredients.length * 100}
        style={{ border: '1px solid #ccc', marginTop: '20px', display: 'block' }}
      />

      <div style={{ marginTop: '20px' }}>
        {selectedIngredients.map((ingredient) => (
          <button
            key={ingredient.id}
            style={{
              margin: '5px',
              padding: '10px 16px',
              fontSize: '14px',
              display: 'inline-block',
            }}
            onClick={() => alert(`You clicked ${ingredient.name}`)}
          >
            {ingredient.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IngredientDropdown;
