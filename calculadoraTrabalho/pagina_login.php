<form method="POST">
    <label>
        Email
        <input type="email" placeholder="email" name="email" />
    </label>
    <br />
    <label>
        Senha:
        <input type="password" placeholder="senha" name="senha" />
    </label>
    <br />
    <label>
        <input type="radio" placeholder="senha" name="tipo_calculadora" value="1" <?= isset($_GET["tipo_calculadora"]) && $_GET["tipo_calculadora"] == '1' ? "checked" : "" ?> />
        Comum
    </label>
    <label>
        <input type="radio" placeholder="senha" name="tipo_calculadora" value="2" <?= isset($_GET["tipo_calculadora"]) && $_GET["tipo_calculadora"] == '2' ? "checked" : "" ?> />
        Programador
    </label>
    <label>
        <input type="radio" placeholder="senha" name="tipo_calculadora" value="3" <?= isset($_GET["tipo_calculadora"]) &&  $_GET["tipo_calculadora"] == '3' ? "checked" : "" ?> />
        Cientifica
    </label>
    <br />
    <br />
    <a href="/aulaProgWeb/calculadoraTrabalho/registrar.php">Registrar</a>
    <button>Login</button>
    <br />
</form>