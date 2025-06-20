import React, { useState } from 'react';

const EmojiWithText = () => {
  const emojis = ['❌', '👎', '👍', '🤔', '😎', '🍕'];
  const [text, setText] = useState("");

  const addEmoji = (emoji) => {
    setText((prevText) => prevText + emoji);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Emoji With Text Picker</h2>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '300px', padding: '8px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '10px' }}>
        {emojis.map((emoji, i) => (
          <button
            key={i}
            onClick={() => addEmoji(emoji)}
            style={{ fontSize: '20px', margin: '5px', padding: '5px 10px' }}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiWithText;
