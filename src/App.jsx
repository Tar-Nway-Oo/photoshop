import React, { useState } from 'react'
import './index.css'
import Filter from './Components/Filter.jsx'
import Image from './Components/Image.jsx'
import Slider from './Components/Slider.jsx'
import Form from './Components/Form.jsx'

const defaultOptions = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
];

function App() {

  const [options, setOptions] = useState(defaultOptions);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [image, setImage] = useState("https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg");
  const [input, setInput] = useState("");
  const selectedOption = options[selectedOptionIndex];

  function handleInput({target}) {
    setInput(target.value)
  }

  function changeImage() {
    setImage(input);
    setInput("");
   }
 
  function handleChange({target}) {
    setOptions(prev => {
      return prev.map((option, index) => {
        if (option !== selectedOption) return option;
        return {...option, value: target.value}
      });
    });
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    
    return {filter: filters.join(" ")};
  }

  return(
    <div className='container'>
      <div className="filter">
      {options.map((option, index) => (
        <Filter
        key={index}
        name={option.name}
        active={index === selectedOptionIndex}
        handleClick={() => setSelectedOptionIndex(index)}
        />
      ))}
      </div>
      <Image
         image={image}
         style={getImageStyle()}
      />
      <Slider
        value={selectedOption.value}
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        handleChange={handleChange}
      />
      <Form 
        input={input}
        handleInput={handleInput}
        changeImage={changeImage}
      />
    </div>
  );
  
}

export default App
