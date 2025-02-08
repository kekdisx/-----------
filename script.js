document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const comment = document.querySelector('textarea[name="comment"]').value;
    document.getElementById('comments').innerHTML += `<p>${comment}</p>`;
  });