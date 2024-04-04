import React, { useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'

export const Filter = () => {
  const [range, setRange] = useState({ min: 1000, max: 50000 }); 
  const handleRangeChange = (event, type) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setRange(prevRange => ({
        ...prevRange,
        [type]: newValue,
      }));
    }
  };

  return (
    <div className="bg-gray-200 w-72 text-left p-4">
      <div>
        <h1 className="text-xl font-bold mb-4">Filters</h1>
        <p className="mb-2">Popular locations in <br/> Kathmandu, Bagmati, Nepal</p>
        <h2 className="text-lg font-bold ">Prices</h2>
        <p>Estimated Cost (Nightly)</p>
        <div className="flex items-center space-x-36">
          <p className="w-1/3 rounded-md bg-gray-200 p-2">{range.min}</p>
          <p className="w-1/3 rounded-md bg-gray-200 p-2">{range.max}</p>
        </div>
        <RangeSlider
          defaultValue={[range.min, range.max]}
          min={1000}
          max={50000}
          step={1000}
          onChange={(value) => setRange({ min: value[0], max: value[1] })}
        >
          <RangeSliderTrack bg='gray.600'>
            <RangeSliderFilledTrack bg='green.500' />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
        <h2 className="text-lg font-bold mb-2">Facilities</h2>
        <div className="space-y-2 flex flex-col">
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>Spa</Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>TV</Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>Swimming Pool</Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>Open Mic</Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>Kitchen</Checkbox>
        </div>
        <h2 className="text-lg font-bold mb-2">Reviews</h2>
        <div className="space-y-2 flex flex-col">
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>5 </Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>4+</Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>3+</Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>2+</Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>1+</Checkbox>
        </div>
        <h2 className="text-lg font-bold mb-2">Popular Filter</h2>
        <div className="space-y-2 flex flex-col">
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>5 Stars</Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>Breakfast Included</Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>Parking</Checkbox>
          <Checkbox name="type" colorScheme='green' borderColor='gray.400'>Free Wi-Fi</Checkbox>
          
        </div>
        
      </div>
    </div>
  );
};
