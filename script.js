// JavaScript for Interactive Web Page
        // Event Handling
        let clickCount = 0;
        const handleClick = () => {
            const btn = document.querySelector('.magic-button');
            clickCount++;
            btn.textContent = `Clicked ${clickCount} times! 🎯`;
            btn.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        };

        // Secret double-click handler
        document.body.addEventListener('dblclick', () => {
            document.getElementById('secretMessage').style.display = 'block';
        });

        // Keypress detection
        document.getElementById('keyInput').addEventListener('keypress', (e) => {
            console.log(`Key pressed: ${e.key}`);
        });

        // Tab System
        function openTab(evt, tabName) {
            const tabContents = document.querySelectorAll('.tab-content');
            const tabButtons = document.querySelectorAll('.tab-buttons button');
            
            tabContents.forEach(tab => tab.classList.remove('active'));
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            document.getElementById(tabName).classList.add('active');
            evt.currentTarget.classList.add('active');
        }

        // Form Validation
        function validateForm() {
            const password = document.getElementById('password').value;
            const error = document.getElementById('error');
            
            if(password.length < 8) {
                error.textContent = 'Password must be at least 8 characters!';
                return false;
            }
            error.textContent = '';
            alert('Form submitted successfully! 🎉');
            return true;
        }

        // Real-time validation
        document.getElementById('password').addEventListener('input', (e) => {
            e.target.style.borderColor = e.target.value.length >= 8 ? 'green' : 'red';
        });
