<?php
// Função para escanear diretórios e extrair metadados dos arquivos index.html
function getBiblicalReadings() {
    $readings = [];
    $dirs = array_filter(glob('*'), 'is_dir');

    foreach ($dirs as $dir) {
        $indexPath = $dir . '/index.html';
        if (file_exists($indexPath)) {
            $content = file_get_contents($indexPath);
            
            // Extrai o <title>
            $title = $dir;
            if (preg_match('/<title>(.*?)<\/title>/is', $content, $matches)) {
                $title = trim(strip_tags($matches[1]));
            }

            // Extrai o <h1> para usar como título do card
            $h1Text = '';
            if (preg_match('/<h1>(.*?)<\/h1>/is', $content, $matches)) {
                $cleanH1 = str_replace(['<br>', '<br/>', '<br />'], ' ', $matches[1]);
                $h1Text = trim(preg_replace('/\s+/', ' ', strip_tags($cleanH1)));
            }

            // Extrai a descrição/subtítulo
            $subtitle = '';
            if (preg_match('/<p class="subtitle">(.*?)<\/p>/is', $content, $matches)) {
                $subtitle = trim(strip_tags($matches[1]));
            }

            // Extrai a referência bíblica
            $reference = '';
            if (preg_match('/<p class="reference">(.*?)<\/p>/is', $content, $matches)) {
                $reference = trim(strip_tags($matches[1]));
            }

            // Verifica se existe uma imagem representativa
            $image = null;
            $possibleImages = glob($dir . '/*.{jpg,jpeg,png,webp,gif}', GLOB_BRACE);
            if (!empty($possibleImages)) {
                $image = $possibleImages[0];
            }

            $readings[] = [
                'folder' => $dir,
                'title' => $h1Text ?: ucfirst($dir),
                'pageTitle' => $title,
                'subtitle' => $subtitle,
                'reference' => $reference,
                'image' => $image,
                'url' => $dir . '/'
            ];
        }
    }

    return $readings;
}

$readings = getBiblicalReadings();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planos de Leitura Bíblica</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --card-hover-bg: #334155;
            --text-color: #f8fafc;
            --text-muted: #94a3b8;
            --accent-color: #38bdf8;
            --accent-gradient: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        header {
            text-align: center;
            padding: 60px 20px 40px;
            background: radial-gradient(circle at top, #1e293b 0%, var(--bg-color) 70%);
        }

        header h1 {
            font-size: 2.8rem;
            font-weight: 700;
            background: var(--accent-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        header p {
            color: var(--text-muted);
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
        }

        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 20px 60px;
            width: 100%;
            flex: 1;
        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 30px;
            margin-top: 20px;
        }

        .card {
            background-color: var(--card-bg);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .card:hover {
            transform: translateY(-8px);
            background-color: var(--card-hover-bg);
            box-shadow: 0 20px 35px -10px rgba(56, 189, 248, 0.15);
            border-color: rgba(56, 189, 248, 0.4);
        }

        .card-image-wrapper {
            width: 100%;
            height: 200px;
            overflow: hidden;
            background-color: #090d16;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            transition: transform 0.5s ease;
        }

        .card:hover .card-image {
            transform: scale(1.05);
        }

        .card-placeholder-icon {
            font-size: 3rem;
            color: var(--accent-color);
            opacity: 0.5;
        }

        .card-content {
            padding: 24px;
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        .card-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--text-color);
            line-height: 1.3;
        }

        .card-subtitle {
            font-size: 0.95rem;
            color: var(--text-muted);
            line-height: 1.5;
            margin-bottom: 16px;
            flex: 1;
        }

        .card-reference {
            display: inline-block;
            align-self: flex-start;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--accent-color);
            background: rgba(56, 189, 248, 0.1);
            padding: 4px 12px;
            border-radius: 20px;
            border: 1px solid rgba(56, 189, 248, 0.2);
            margin-bottom: 20px;
        }

        .card-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            padding: 12px;
            background: var(--accent-gradient);
            color: #0f172a;
            font-weight: 700;
            font-size: 0.95rem;
            border-radius: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: opacity 0.2s;
        }

        .card:hover .card-button {
            opacity: 0.9;
        }

        footer {
            text-align: center;
            padding: 25px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        @media (max-width: 600px) {
            header h1 {
                font-size: 2rem;
            }
            .grid-container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

    <header>
        <h1>Planos de Leitura Bíblica</h1>
        <p>Selecione um plano abaixo para acompanhar suas leituras e edificar seu dia a dia.</p>
    </header>

    <main>
        <div class="grid-container">
            <?php foreach ($readings as $reading): ?>
                <a href="<?php echo htmlspecialchars($reading['url']); ?>" class="card">
                    <div class="card-image-wrapper">
                        <?php if ($reading['image']): ?>
                            <img src="<?php echo htmlspecialchars($reading['image']); ?>" alt="<?php echo htmlspecialchars($reading['title']); ?>" class="card-image">
                        <?php else: ?>
                            <span class="card-placeholder-icon">📖</span>
                        <?php endif; ?>
                    </div>
                    <div class="card-content">
                        <h2 class="card-title"><?php echo htmlspecialchars($reading['title']); ?></h2>
                        <?php if ($reading['subtitle']): ?>
                            <p class="card-subtitle"><?php echo htmlspecialchars($reading['subtitle']); ?></p>
                        <?php endif; ?>
                        <?php if ($reading['reference']): ?>
                            <span class="card-reference"><?php echo htmlspecialchars($reading['reference']); ?></span>
                        <?php endif; ?>
                        <div class="card-button">
                            Acessar Plano ➔
                        </div>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>
    </main>

    <footer>
        &copy; <?php echo date('Y'); ?> Leitura Bíblica. Todos os direitos reservados.
    </footer>

</body>
</html>
