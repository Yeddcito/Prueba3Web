<!doctype html>
<html lang="es">
<link rel="stylesheet" href="estilo.css">
<script src="rut.js"></script>
<head>
    <meta charset="UTF-8">
    <title>Validador de RUT</title>
</head>
<body>
<header>
<nav class="navbar navbar-dark bg-dark">
  <span class="navbar-text">
  <h1>Validar RUT</h1>
  </span>
</nav>
</header>
  <content>
    <div id="container">
      <p>&nbsp;</p>
      <div class="input-group input-group-lg">
        <form action="prueba.php" method="GET" onsubmit="return checkRut(this.rut.value, this.digverif.value)">
        <input type="text" id="rut" name="rut"  required> <a>-</a>
        <input type="text" id="digitoVerificador" name="digitoVerificador"  required >
        <input type="submit" value="validar">
    </form>
  </content>
</body> 