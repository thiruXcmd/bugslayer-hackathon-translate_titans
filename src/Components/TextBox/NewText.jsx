import "./NewText.css"; // Import custom CSS for styling
import React, { useState } from "react";


const NewText = ({result,input, setInput,handleSubmit}) => {

  return (
    <div className="translator"> 
    <div>
    <div style={{display:'flex',justifyContent:'center',gap:'10px'}}>
    <textarea data-testid="rt-input-component" lang="en" placeholder="Type your text here to Translate...." aria-label="You can choose your suggestion using Arrow Keys or Scroll using the mouse and then either use Space or Click on the word suggestion to apply that word." value={input} onChange={(e) => setInput(e.target.value)} style={{direction: 'ltr', backgroundColor: 'black', border: '3.4px solid rgb(245, 245, 245)', borderRadius: '22px', color: 'white', fontSize: '20.8px', height: '243.663px', marginBottom: '20px', padding: '6px', width: '50%'}}></textarea>
    <textarea data-testid="rt-input-component" lang="en" placeholder="Output" aria-label="You can choose your suggestion using Arrow Keys or Scroll using the mouse and then either use Space or Click on the word suggestion to apply that word." value={result} style={{direction: 'ltr', backgroundColor: 'black', border: '3.4px solid rgb(245, 245, 245)', borderRadius: '22px', color: 'white', fontSize: '20.8px', height: '243.663px', marginBottom: '20px', padding: '6px', width: '50%'}}></textarea>
    </div>
        <div className="but">
         <button class="button-19" role="button" onClick={handleSubmit}>Translate</button>
         </div>

    </div>
    </div>
  );
};

export default NewText;