import Nav from '../components/lib/Nav';
/*import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';*/

const Interface = () => {
  /*const [prompt, setPrompt] = useState('');
  const [outputs, setOutputs] = useState<string[]>([]);

  const generateImage = () => {
    // Simulate image generation
    const newImage = `https://via.placeholder.com/400x300?text=${encodeURIComponent(prompt)}`;
    setOutputs([newImage, ...outputs]);
    setPrompt('');
  };*/

  return (
    <>
    <Nav />
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Interface</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-gray-300">Link</a>
          <a href="#" className="hover:text-gray-300">Link</a>
          <a href="#" className="hover:text-gray-300">Link</a>
        </nav>
      </header>

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Side Panel */}
        <aside className="w-64 bg-white border-r p-4">
          <h2 className="text-lg font-semibold mb-4">Heading</h2>
          <div className="space-y-2 text-sm">
            <div>
              <label className="block mb-1 font-medium">Dropdown</label>
              <select className="w-full border rounded px-2 py-1">
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Dropdown</label>
              <select className="w-full border rounded px-2 py-1">
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Prompt input */}
          <div className="flex items-center gap-4 mb-6">
            {/*<Input
              type="text"
              placeholder="Enter your prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1"
            />
            <Button onClick={generateImage} disabled={!prompt}>
              Generate
            </Button>*/}
          </div>

          {/* Output gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/*{outputs.map((imgUrl, idx) => (
              <Card key={idx}>
                <CardContent className="p-0">
                  <img src={imgUrl} alt={`Generated ${idx}`} className="w-full h-auto" />
                </CardContent>
              </Card>
            ))}*/}
          </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default Interface;
