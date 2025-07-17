 async function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (!file) return alert('Please select a file');

  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch('http://localhost:5000/upload', {
    method: 'POST',
    body: formData
  });

  const result = await res.json();
  alert(result.message);
}

