<script>
fetch(`/photos/${photoId}`)
  .then(response => response.json()) 
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
</script>