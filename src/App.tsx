import React, { useEffect, useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
] as any;

const App = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState(initialValue);
  //const [value, setValue] = useState<Descendant[]>([]);

  useEffect(()=>console.log(value), [value]);

  return (
    <div>
      <Slate
        editor={editor}
        value={value}
        // onChange={(opts) => {
        //   /**  eslint-disable-next-line no-lone-blocks
        //   {opts.values === undefined || null ? setValue(opts.values) : setValue(opts.values.toString())}  **/
        //   setValue(opts);
        //   console.log(value);
        // }}
        onChange={
          setValue
        }
      >
        <Editable />
      </Slate>
    </div>
  );
};

export default App;
