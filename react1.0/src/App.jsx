import { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonPosition, setButtonPosition] = useState({ top: '1%', left: '1%' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleMouseOver = () => {
    if (!name || !email || !password) {
      const formRect = document.querySelector('.btn-container').getBoundingClientRect();
      const maxTop = formRect.height - 50; // 50 is the button height
      const maxLeft = formRect.width - 100; // 100 is the button width

      const randomTop = Math.floor(Math.random() * (maxTop - 10)) + 10; // Random position within form height
      const randomLeft = Math.floor(Math.random() * (maxLeft - 10)) + 10; // Random position within form width

      setButtonPosition({ top: `${randomTop}px`, left: `${randomLeft}px` });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
        <h1>REGISTER HERE</h1>
        <div>
          <input placeholder='Enter Your Name' type="text" name="name" value={name} onChange={handleInputChange} />
        </div>
        <div>
          <input placeholder='Enter Your Email' type="email" name="email" value={email} onChange={handleInputChange} />
        </div>
        <div>
          <input placeholder='Enter Your Password' type="password" name="password" value={password} onChange={handleInputChange} />
        </div>
        <br />
        <div className='btn-container' style={{ position: 'relative', width: '300px', height: '300px' }}>
          <button
            type="submit"
            onMouseOver={handleMouseOver}
            style={{ position: 'absolute', top: buttonPosition.top, left: buttonPosition.left }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
