
function loadFooter() {
  fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
}

document.addEventListener('DOMContentLoaded', loadFooter);
