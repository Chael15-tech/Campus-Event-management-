$(document).ready(function() {
        $('#registrationForm').on('submit', function(event) {
            event.preventDefault();

            const studentName = $('#studentName').val().trim();
            if (studentName) {
                // URL that includes the event list page
                const eventListURL = 'eventlist.html'; // Change this if necessary for hosting

                // Generate QR Code with the URL to the event list
                $('#qrcode').empty().qrcode({
                    width: 128,
                    height: 128,
                    text: eventListURL // The URL encoded in QR code
                });

                $('#qrCodeDisplay').removeClass('hidden');
            } else {
                alert("Please enter your name.");
            }
        });
    });