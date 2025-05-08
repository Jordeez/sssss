// JavaScript for closing notifications
document.addEventListener('DOMContentLoaded', function() {
    // Get all delete buttons for notifications
    const deleteButtons = document.querySelectorAll('.notification-delete');
    
    // Add click event listener to each delete button
    deleteButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Find the parent notification card and remove it
        const notificationCard = this.closest('.notification-card');
        if (notificationCard) {
          notificationCard.style.opacity = '0';
          setTimeout(() => {
            notificationCard.remove();
          }, 300); // Match this with the CSS transition duration in styles.css
        }
      });
    });
  });