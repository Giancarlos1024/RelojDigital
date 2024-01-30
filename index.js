let is24HourFormat = true;
        let selectedTimezone = 'local';

        function updateTime() {
            const now = selectedTimezone === 'local' ? new Date() : new Date().toLocaleString('en-US', { timeZone: selectedTimezone });
            const hours = is24HourFormat ? now.getHours() : (now.getHours() % 12 || 12);
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            const timeString = `${hours}:${minutes}:${seconds}`;
            document.getElementById('clock').textContent = timeString;

            // Cambia el color del reloj según la hora del día
            const currentHour = now.getHours();
            const clockElement = document.getElementById('clock');

            if (currentHour < 12) {
                // Mañana: color azul
                clockElement.style.color = 'blue';
            } else if (currentHour < 18) {
                // Tarde: color naranja
                clockElement.style.color = 'orange';
            } else {
                // Noche: color morado
                clockElement.style.color = 'purple';
            }
        }

        function toggleTimeFormat() {
            is24HourFormat = !is24HourFormat;
            updateTime();
        }

        function changeTimezone(newTimezone) {
            selectedTimezone = newTimezone;
            updateTime();
        }

        setInterval(updateTime, 1000);
        updateTime();