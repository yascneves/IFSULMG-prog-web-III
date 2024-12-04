<?php
if (!isset($_POST['nome']) && !isset($_POST['email']) && !isset($_POST['senha']) && !isset($_POST['tipo_calculadora'])) {
    require_once 'pagina_registrar.html';
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
$nome = $_POST['nome'];
$email = $_POST['email'];
$tipo_calculadora = $_POST['tipo_calculadora'];
$senha = hash('sha256', $_POST["senha"]); // Gera um hash seguro para a senha fornecida pelo usuário

// Verifica se o email já existe
$stmt = $pdo->prepare("SELECT COUNT(*) FROM usuarios where email = :email and tipo_calculadora = :tipo_calculadora");
$stmt->bindParam(':email', $email);
$stmt->bindParam(':tipo_calculadora', $tipo_calculadora);
$stmt->execute();
$count = $stmt->fetchColumn();
// Insere novo usuário na tabela
if ($count > 0) {
    echo "Email já cadastrado <br />";
    require_once 'pagina_registrar.html';
    exit;
}

// Tenta conectar ao banco de dados usando PDO
try{
        
    $stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, senha, tipo_calculadora) VALUES (:nome, :email, :senha, :tipo_calculadora)");
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':senha', $senha);
    $stmt->bindParam(':tipo_calculadora', $tipo_calculadora);
    $stmt->execute();
    echo "Registrado com sucesso... <a href='/aulaProgWeb/calculadoraTrabalho/login.php'>Fazer login</a>";
} catch (PDOException $e){
    // Retorna o erro caso a conexão falhe
    // echo json_encode(['status' => 'error', 'message'] => 'Erro ao inserir no banco de dados');
    exit;
}
?>