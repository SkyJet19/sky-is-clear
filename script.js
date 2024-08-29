// webpage1.js
document.addEventListener('DOMContentLoaded', function() {
    const selector = document.getElementById('textSelector');
  
    selector.addEventListener('change', function() {
      const selectedFile = this.value;
      if (selectedFile) {
        fetch(selectedFile)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.text();
          })
          .then(text => {
            // Open a new window and write the content
            const newWindow = window.open('', '_blank');
            newWindow.document.write(`
              <html>
                <head>
                  <title>${selectedFile}</title>
                  <style>
                    body {
                      background-image: url('./hah.jpg');
                      background-size: cover;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-attachment: fixed;
                      font-family: 'Times New Roman', Times, serif;
                      line-height: 1.8; /* deze adjust box size */
                      color: white;
                    }
                    pre {
                      background: ${getBackgroundStyle(selectedFile)};
                      font-family: 'Times New Roman', Times, serif;
                      line-height: 1.8;
                      font-size: 16px;
                      text-align: left;
                      margin: 20px;
                      padding: 10px;
                      border-radius: 5px;
                      color: white;
                    }
                  </style>
                  <div> Hello World print. </div>
                </head>
                <body>
                  <pre>${text}</pre>
                </body>
              </html>
            `);
            newWindow.document.close();
          })
          .catch(error => {
            console.error('Error loading the file:', error);
            alert('Error loading the file. Please check the console for more details.');
        });
      }
    });
  });
  

  
  function getBackgroundStyle(selectedFile) {
    if (selectedFile === './omega.txt') {
      return 'linear-gradient(to bottom, #ff69b4, #ffe6cc)';      
    } else if (selectedFile === './humbledum.txt') {
      return 'linear-gradient(to bottom, #4CAF50, #8BC34A)';
    } else if (selectedFile === './ohyeah.txt') {
      return 'linear-gradient(to bottom, #03A9F4, #2196F3)';
    } else {
      return ''; // default background style
    }
  }
  
  const selector2 = document.getElementById('textSelector');
  const textBoxes = document.querySelectorAll('.text-box1');
  
  selector2.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    textBoxes.forEach((textBox) => {
     if (selectedValue === './omega.txt') {
        textBox.style.background = 'linear-gradient(to bottom, #ff69b4, #ffe6cc)';        
      } else if (selectedValue === './humbledum.txt') {
        textBox.style.background = 'linear-gradient(to bottom, #4CAF50, #8BC34A)';
      } else if (selectedValue === './ohyeah.txt') {
        textBox.style.background = 'linear-gradient(to bottom, #03A9F4, #2196F3)';
      }
    });
  });


  const file299Button = document.getElementById('file299Button');
  const file299Contents = document.getElementById('file299Contents');
  
  file299Button.addEventListener('click', () => {
    if (file299Contents.style.display === 'none' || file299Contents.style.display === '') {
      fetch('./file299.txt') // assuming you have a text file named file299.txt
        .then(response => response.text())
        .then(text => {
          file299Contents.innerText = text;
        })
        .catch(error => console.error('Error reading file:', error));
      file299Button.innerText = 'Hide File 299 contents v'; // Change button text to indicate hiding
      file299Contents.style.display = 'block'; // Show the content
    } else {
      file299Contents.style.display = 'none'; // Hide the content
      file299Button.innerText = 'Show File 299 contents ^'; // Change button text to indicate showing
    }
  });
