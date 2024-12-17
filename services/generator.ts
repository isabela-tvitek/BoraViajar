const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: 'GROQ_API_KEY'});

export async function geradorDeViagem(viagem: string) {
  try{
    const chatCompletion = await groq.chat.completions.create({
        "messages": [
            {
                "role": "user",
                "content": "estou fazendo um aplicativo onde um usuário entrara com um destino de viagem e breves informações e quero responder um planejamento ou dicas de coisas interessantes para se fazer lá com sugestões, sugestões que não coloquem ninguem em perigo, mas seja criativo"
            },
            {
                "role": "assistant",
                "content": "Que projeto interessante!\n\nParece que você está buscando criar um sistema de recomendação de atividades e dicas para os usuários do seu aplicativo de viagens. Aqui estão algumas sugestões de como você pode fazer isso:\n\n1. **Banco de dados de atividades**: Crie um banco de dados com informações sobre as atividades e atrações turísticas de cada destino. Isso pode incluir:\n * Nome da atividade\n * Descrição\n * Categoria (ex: aventura, cultura, gastronomia, etc.)\n * Nível de dificuldade\n * Preço aproximado\n * Fotos e vídeos\n2. **Algoritmo de recomendação**: Desenvolva um algoritmo que considere os seguintes fatores para sugerir atividades para os usuários:\n * Interesses e preferências do usuário (coletados através de um formulário ou perfil)\n * Tempo de estadia no destino\n * Orçamento do usuário\n * Avaliações e comentários de outros usuários que já realizaram a atividade\n3. **Dicas e sugestões**: Além de sugerir atividades específicas, você pode fornecer dicas e sugestões gerais para cada destino, como:\n * Melhores épocas do ano para visitar\n * Como se deslocar pelo destino (transporte público, táxi, etc.)\n * O que levar e o que não levar\n * Comida e bebida local recomendada\n4. **Integração com APIs**: Considere integrar seu aplicativo com APIs de fornecedores de atividades e serviços, como:\n * APIs de reservas de restaurantes e hotéis\n * APIs de fornecedores de atividades (ex: passeios em barco, aulas de culinária, etc.)\n5. **Filtro e classificação**: Crie filtros e classificações para que os usuários possam encontrar facilmente as atividades que mais se adequam às suas necessidades e preferências.\n\n Algumas dicas criativas que você pode incluir no seu aplicativo:\n\n* **\"Conheça os locais\"**: forneça informações sobre os locais mais autênticos e menos turísticos do destino.\n* **\"Experiências únicas\"**: sugira atividades que ofereçam experiências únicas e inesquecíveis, como um jantar em um restaurante com vista para a cidade.\n* **\"Aventuras ao ar livre\"**: sugira atividades ao ar livre, como caminhadas, ciclismo ou passeios de barco.\n* **\"Cultura e história\"**: forneça informações sobre a cultura e história do destino, incluindo museus, monumentos e landmarks.\n* **\"Gastronomia local\"**: sugira restaurantes e mercados que servem comida local e autêntica.\n\nLembre-se de que a segurança é fundamental. Certifique-se de que as atividades sugeridas sejam seguras e não coloquem os usuários em risco.\n\nEspero que essas sugestões tenham ajudado! Se tiver mais alguma dúvida, não hesite em perguntar."
            },
            {
                "role": "user",
                "content": "quero te enviar informações da viagem e você ira me responder somente as dicas e sugestões\n"
            },
            {
                "role": "assistant",
                "content": "Estou preparado! Por favor, envie as informações da viagem, como:\n\n* Destino (cidade ou país)\n* Duração da viagem (número de dias)\n* Interesses ou atividades que o usuário gosta (ex: aventura, cultura, gastronomia, etc.)\n* Orçamento aproximado\n* Outras informações relevantes (ex: época do ano, tipo de viagem, etc.)\n\nEu responderei com dicas e sugestões personalizadas para o usuário!"
            },
            {
                "role": "user",
                "content": "Viagem para o chile no inverno com orçamento médio"
            },
            {
                "role": "assistant",
                "content": "O Chile no inverno é uma excelente escolha! Aqui estão algumas dicas e sugestões para você:\n\n**Conheça os locais**\n\n* Visite o Mercado Central de Santiago, um local autêntico e repleto de sabores e cores.\n* Explore o Barrio Lastarria, um bairro boêmio e artístico de Santiago.\n* Desfrute do esqui em uma das mais de 10 estações de esqui do Chile, como Portillo ou Valle Nevado.\n\n**Experiências únicas**\n\n* Faça um passeio de barco pelo Rio Mapocho, que corta a cidade de Santiago.\n* Visite o castelo de Bordeos, um castelo medieval localizado em uma vinícola.\n* Desfrute de um jantar em um restaurante com vista para a cidade em uma das colinas de Santiago.\n\n**Aventuras ao ar livre**\n\n* Faça uma caminhada pelas trilhas do Parque Nacional La Campana, com vistas incríveis da Cordilheira dos Andes.\n* Visite o deserto de Atacama, um local único e impressionante.\n* Desfrute de um passeio de bicicleta pelas vinícolas da região de Maipo.\n\n**Cultura e história**\n\n* Visite o Museu Nacional de Belas Artes do Chile, que exibe obras de arte do século XIX e XX.\n* Explore o Museu Histórico Nacional, que conta a história do Chile desde a pré-história até o século XX.\n* Visite a Catedral Metropolitana de Santiago, um ícone da cidade.\n\n**Gastronomia local**\n\n* Desfrute de um banho de picles (um banho de vinho e picles) em um restaurante local.\n* Prove o Chupe de Mariscos, um prato de frutos do mar cozido em vinho branco.\n* Visite o Mercado de San Fernando, um local repleto de frutas e verduras frescas.\n\nEssas são apenas algumas das muitas opções que o Chile tem a oferecer. Lembre-se de se adaptar ao clima chileno no inverno e de se manter aquecido!\n\nOrçamento médio é de aproximadamente $50.000 - $100.000 CLP (aproximadamente R$ 750 - R$ 1.500) por pessoa, dependendo do tipo de atividade e do local."
            },
            {
                "role": "user",
                "content": viagem
            },
        ],
        "model": "llama-3.1-70b-versatile",
        "temperature": 1,
        "max_tokens": 1024,
      });
    
      return chatCompletion.choices[0]?.message?.content;
  } catch (error) {
    const viagemDefault = [
        "teste",
        ]
    return viagemDefault[Math.floor(Math.random() * viagemDefault.length)]
  }
}
