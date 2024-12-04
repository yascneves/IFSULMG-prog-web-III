<?php
if (!isset($_POST['email']) && !isset($_POST['senha']) && !isset($_POST['tipo_calculadora'])) {
    $tipo_calculadora = $_POST;
    require_once 'pagina_login.php';
    exit;
}

// Configurações do banco de dados
$host = 'localhost';
$dbname = 'calculadora';
$user = 'root';
$password = '';

// Tenta conectar ao banco de dados usando PDO
try{
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e){
    // Retorna o erro caso a conexão falhe
    echo "erro ao conectar com o banco";
    exit;
}

// Recebe os dados do formulário via POST
$email = $_POST['email'];
$tipo_calculadora = $_POST['tipo_calculadora'];
$senha = hash('sha256', $_POST["senha"]); // Gera um hash seguro para a senha fornecida pelo usuário


// Verifica se o email já existe
$stmt = $pdo->prepare("SELECT * FROM usuarios where email = :email and senha = :senha and tipo_calculadora = :tipo_calculadora");
$stmt->bindParam(':email', $email);
$stmt->bindParam(':senha', $senha);
$stmt->bindParam(':tipo_calculadora', $tipo_calculadora);
$stmt->execute();
$usuario = $stmt->fetch(PDO::FETCH_ASSOC);

if (!empty($usuario)) {
    if ($usuario["tipo_calculadora"] == 1) {
        header('Location: /aulaProgWeb/calculadoraTrabalho/index_comum.html');
    } elseif ($usuario["tipo_calculadora"] == 2) {
        header('Location: /aulaProgWeb/calculadoraTrabalho/index_programador.html');
    } else {
        header('Location: /aulaProgWeb/calculadoraTrabalho/index_cientifica.html');
    }
} else {
    echo "Login e senha errado para essa calculadora<br/>";
    require_once 'pagina_login.php';
    exit;
}
?>