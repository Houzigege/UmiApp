import React, { useState, useEffect } from 'react';


interface HelloProps {
  compiler?: string;
  framework?: string;
  [name: string]: any;
}


const TextInput = (props: HelloProps): any => {

  const [value, setValue] = useState<string>('');
  const [controlledValue, setControlledValue] = useState('');
  let num = 1;
  useEffect(() => {
    console.log(num);
    setControlledValue(props.value);
    num ++;
    return () => {
      console.log(num);
      document.title = '蓝猫' + num;
    }
  }, [props.value]);

  const handleChange = (e: any): void => {
    setValue(e.target.value);
  };

  return (
    [
      <p key="p">{controlledValue}</p>,
      <input key="input" type="text" placeholder="Hello forwardRef" onChange={handleChange} value={value} ref={props.MyCai} />
    ]
  )
};

export default TextInput;
