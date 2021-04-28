import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false); //initially false for checked input
  const [favLanguage, setfavLanguage] = useState('Ruby')
  const handleSubmit = (e) => {
    e.preventDefault(); //cancels default behaviour of form (ex: submit or post data on same page and refresh it )
    console.log("Form submitted with value:", { name, isChecked, favLanguage }); //passing name as object
  };

  return (
    <div>
      <hr />
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="checkbox">Are you learning React?</label>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        {/*We use is as checkbox same as label for attributes*/}
        <br />
        <label htmlFor="favLanguage">Favorite Language</label>
        <select id="favLanguage" value={favLanguage}  onChange={(e)=>setfavLanguage(e.target.value)} >
            <option value="ruby">RUBY</option>
            <option value="php">PHP</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="csharp">C#</option>
        </select>
        <br />
        <input type="submit" value="Submit form" />
      </form>
    </div>
  );
};

export default SimpleForm;
