import React , {useState} from 'react'

export default function TextForm() {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');
  return (
    <div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>

        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label"><h2>Enter Your Text to Analyze</h2></label>
        <textarea className="form-control"value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary'onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
