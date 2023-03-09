<script>
  fetch('/comments?_limit=350') .then(response => response.json()) .then(data =>
  console.log(data)) .catch(error => console.error(error));
</script>;
