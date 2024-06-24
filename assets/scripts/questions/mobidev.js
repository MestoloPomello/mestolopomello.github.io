const questionsData = [
    {
        "question": "Quale dei seguenti sensori è utilizzato per comprendere l'ambiente circostante nell'Augmented Reality (AR)?",
        "correctAnswer": "Sensori di profondità",
        "otherAnswers": [
            "Sensori di temperatura",
            "Sensori di pressione",
            "Sensori di umidità"
        ]
    },
    {
        "question": "Quale sistema di riferimento è necessario per la conversione delle coordinate nel processo di 'registration'?",
        "correctAnswer": "Sistema di coordinate del mondo reale e sistema di coordinate schermo",
        "otherAnswers": [
            "Sistema di coordinate locali e sistema di coordinate geografiche",
            "Sistema di coordinate polari e sistema di coordinate cilindriche",
            "Sistema di coordinate 3D e sistema di coordinate 2D"
        ]
    },
    {
        "question": "Quale approccio base alla registration utilizza segnali radio come GNSS, WiFi o Bluetooth?",
        "correctAnswer": "Approccio basato su segnale radio",
        "otherAnswers": [
            "Approccio basato su visione",
            "Approccio basato su sensori termici",
            "Approccio basato su marcatori espliciti"
        ]
    },
    {
        "question": "Cosa rappresenta la matrice di roto-traslazione nel contesto della registrazione di realtà aumentata?",
        "correctAnswer": "La posizione della camera nello spazio 3D",
        "otherAnswers": [
            "La posizione degli oggetti virtuali nello schermo",
            "La scala dei parametri della fotocamera",
            "La risoluzione delle immagini acquisite"
        ]
    },
    {
        "question": "Qual è il principale vantaggio dei marcatori espliciti nell'AR?",
        "correctAnswer": "Permettono di calcolare posizione ed orientamento con buona precisione",
        "otherAnswers": [
            "Possono essere facilmente modificati dall'utente",
            "Non richiedono la calibrazione della fotocamera",
            "Sono meno visibili nell'ambiente reale"
        ]
    },
    {
        "question": "Cosa rappresenta un’omografia nel contesto della realtà aumentata?",
        "correctAnswer": "Una relazione tra punti di due spazi in cui ogni punto di uno spazio corrisponde a uno ed uno solo dell’altro spazio",
        "otherAnswers": [
            "La trasformazione di immagini da colori a bianco e nero",
            "Il calcolo della risoluzione delle immagini",
            "Una tecnica per migliorare la qualità dell'immagine"
        ]
    },
    {
        "question": "Qual è uno dei problemi principali delle tecniche inerziali per il tracking in realtà aumentata?",
        "correctAnswer": "L’accumulo di errori nel tempo, noto come drift",
        "otherAnswers": [
            "La necessità di marcatori visibili",
            "L’uso di segnale radio per la registrazione",
            "La difficoltà nel riconoscere oggetti in movimento"
        ]
    },
    {
        "question": "Qual è uno degli obiettivi principali della realtà aumentata (AR)?",
        "correctAnswer": "Integrare elementi virtuali con il mondo reale in tempo reale",
        "otherAnswers": [
            "Sostituire completamente il mondo reale con uno virtuale",
            "Creare giochi interattivi completamente virtuali",
            "Migliorare esclusivamente l'industria cinematografica"
        ]
    },
    {
        "question": "Quale tecnologia è comunemente utilizzata per il riconoscimento di immagini in AR?",
        "correctAnswer": "Computer vision",
        "otherAnswers": [
            "Intelligenza artificiale",
            "Sensori di temperatura",
            "Fotocamere a infrarossi"
        ]
    },
    {
        "question": "Cosa significa 'tracking' nel contesto della realtà aumentata?",
        "correctAnswer": "Il processo di rilevamento della posizione e dell'orientamento di un oggetto o utente",
        "otherAnswers": [
            "La memorizzazione dei dati dell'utente",
            "La visualizzazione di contenuti virtuali",
            "La calibrazione dei sensori"
        ]
    },
    {
        "question": "Qual è una delle sfide principali nel creare esperienze AR accurate e realistiche?",
        "correctAnswer": "Sincronizzare perfettamente gli oggetti virtuali con l'ambiente reale",
        "otherAnswers": [
            "Creare contenuti 3D",
            "Distribuire l'applicazione su vari dispositivi",
            "Utilizzare sensori di alta qualità"
        ]
    },
    {
        "question": "Quale dei seguenti è un componente essenziale per un sistema di realtà aumentata?",
        "correctAnswer": "Un dispositivo di visualizzazione come uno smartphone o un visore AR",
        "otherAnswers": [
            "Un telecomando",
            "Un proiettore",
            "Un sistema di raffreddamento"
        ]
    },
    {
        "question": "Qual è la funzione dei sensori inerziali in un sistema AR?",
        "correctAnswer": "Rilevare il movimento e l'orientamento del dispositivo",
        "otherAnswers": [
            "Misurare la temperatura dell'ambiente",
            "Calcolare la profondità delle immagini",
            "Rilevare il colore degli oggetti"
        ]
    },
    {
        "question": "Come viene comunemente utilizzata la tecnologia GPS in applicazioni AR?",
        "correctAnswer": "Per fornire dati di localizzazione geografica",
        "otherAnswers": [
            "Per migliorare la qualità delle immagini",
            "Per rilevare oggetti in movimento",
            "Per calibrare i sensori"
        ]
    },
    {
        "question": "Quale metodo è spesso utilizzato per migliorare la precisione del tracking in AR?",
        "correctAnswer": "L'utilizzo di marker visivi",
        "otherAnswers": [
            "Aumentare la risoluzione della fotocamera",
            "Ridurre la velocità di elaborazione",
            "Utilizzare sensori di temperatura"
        ]
    },
    {
        "question": "Quale tipo di interazione è tipicamente supportata dalle applicazioni di realtà aumentata?",
        "correctAnswer": "Interazione basata su gesti",
        "otherAnswers": [
            "Interazione vocale unicamente",
            "Interazione tramite tastiera",
            "Interazione mediante impulsi elettrici"
        ]
    },
    {
        "question": "Qual è un vantaggio dell'uso della realtà aumentata nel campo dell'istruzione?",
        "correctAnswer": "Fornire esperienze di apprendimento immersive e interattive",
        "otherAnswers": [
            "Ridurre i costi di produzione di materiali didattici",
            "Eliminare completamente l'uso di libri di testo",
            "Permettere agli studenti di giocare durante le lezioni"
        ]
    },
    {
        "question": "Come vengono utilizzati i dati della fotocamera nelle applicazioni AR?",
        "correctAnswer": "Per rilevare e tracciare oggetti e ambienti reali",
        "otherAnswers": [
            "Per aumentare la memoria del dispositivo",
            "Per migliorare la velocità di calcolo",
            "Per ridurre il consumo energetico"
        ]
    },
    {
        "question": "Qual è un esempio di applicazione pratica della realtà aumentata nel settore sanitario?",
        "correctAnswer": "Fornire assistenza durante interventi chirurgici",
        "otherAnswers": [
            "Creare giochi terapeutici",
            "Monitorare la dieta dei pazienti",
            "Gestire le cartelle cliniche"
        ]
    },
    {
        "question": "Quale dei seguenti non è un uso comune della realtà aumentata (AR)?",
        "correctAnswer": "Aumentare il calore generato dai dispositivi elettronici",
        "otherAnswers": [
            "Migliorare l'istruzione con contenuti interattivi",
            "Fornire assistenza tecnica remota",
            "Creare esperienze di marketing coinvolgenti"
        ]
    },
    {
        "question": "Cosa rappresenta il termine 'registration' nel contesto dell'AR?",
        "correctAnswer": "L'allineamento preciso di oggetti virtuali con l'ambiente reale",
        "otherAnswers": [
            "La registrazione di nuovi utenti nell'applicazione",
            "La memorizzazione dei dati di tracciamento",
            "L'aggiornamento del software di AR"
        ]
    },
    {
        "question": "Quale dei seguenti è un esempio di sensore di profondità utilizzato in AR?",
        "correctAnswer": "Lidar",
        "otherAnswers": [
            "Microfono",
            "Termometro",
            "Accelerometro"
        ]
    },
    {
        "question": "Perché è importante la calibrazione dei sensori in un sistema di AR?",
        "correctAnswer": "Per garantire la precisione dei dati di tracciamento e l'allineamento degli oggetti virtuali",
        "otherAnswers": [
            "Per migliorare la qualità audio dell'applicazione",
            "Per aumentare la durata della batteria del dispositivo",
            "Per ridurre le dimensioni dell'applicazione"
        ]
    },
    {
        "question": "Qual è una delle principali sfide nella realizzazione di esperienze AR per dispositivi mobili?",
        "correctAnswer": "Limitazioni delle risorse di calcolo e della durata della batteria",
        "otherAnswers": [
            "La mancanza di fotocamere sui dispositivi mobili",
            "L'impossibilità di connettersi a internet",
            "L'assenza di schermi a colori"
        ]
    },
    {
        "question": "Quale tecnica di AR utilizza punti caratteristici dell'ambiente per il tracciamento?",
        "correctAnswer": "Feature-based tracking",
        "otherAnswers": [
            "Markerless tracking",
            "Template matching",
            "Optical flow"
        ]
    },
    {
        "question": "Come può la realtà aumentata migliorare le operazioni di manutenzione industriale?",
        "correctAnswer": "Fornendo istruzioni visive in tempo reale sovrapposte agli impianti",
        "otherAnswers": [
            "Riducendo il numero di tecnici necessari",
            "Eliminando completamente la necessità di formazione",
            "Automatizzando tutti i processi di manutenzione"
        ]
    },
    {
        "question": "Qual è uno degli obiettivi del 'marker-based tracking' in AR?",
        "correctAnswer": "Utilizzare marcatori fisici per aiutare il sistema a rilevare la posizione della fotocamera",
        "otherAnswers": [
            "Rilevare automaticamente oggetti senza l'uso di marcatori",
            "Monitorare la salute degli utenti",
            "Fornire contenuti audio di alta qualità"
        ]
    },
    {
        "question": "Cosa si intende per 'drift' nelle tecniche di tracciamento inerziale?",
        "correctAnswer": "L'accumulo di errori nel tempo che porta a una perdita di precisione",
        "otherAnswers": [
            "L'instabilità del segnale GPS",
            "L'incoerenza nei dati delle fotocamere",
            "La mancanza di calibrazione dei sensori"
        ]
    },
    {
        "question": "Quale è un'applicazione comune della realtà aumentata nel settore retail?",
        "correctAnswer": "Visualizzazione di prodotti virtuali nel contesto reale del cliente",
        "otherAnswers": [
            "Misurazione della temperatura degli acquirenti",
            "Miglioramento della sicurezza del negozio",
            "Gestione automatica delle scorte"
        ]
    },
    {
        "question": "Qual è il ruolo della computer vision nelle applicazioni di realtà aumentata?",
        "correctAnswer": "Analizzare e interpretare le immagini catturate per sovrapporre gli oggetti virtuali",
        "otherAnswers": [
            "Aumentare la velocità del processore del dispositivo",
            "Ridurre il consumo di energia",
            "Memorizzare i dati degli utenti"
        ]
    },
    {
        "question": "Quale approccio AR non richiede marcatori fisici per funzionare?",
        "correctAnswer": "Markerless tracking",
        "otherAnswers": [
            "Marker-based tracking",
            "Template-based tracking",
            "Projection-based tracking"
        ]
    },
    {
        "question": "In che modo la realtà aumentata può essere utilizzata nell'educazione medica?",
        "correctAnswer": "Simulando procedure chirurgiche complesse per l'addestramento degli studenti",
        "otherAnswers": [
            "Fornendo ricette per una dieta sana",
            "Monitorando i segni vitali dei pazienti",
            "Progettando nuovi dispositivi medici"
        ]
    },
    {
        "question": "Quale dei seguenti problemi potrebbe essere risolto utilizzando l'AR per la manutenzione industriale?",
        "correctAnswer": "Ridurre i tempi di inattività fornendo istruzioni dettagliate in tempo reale",
        "otherAnswers": [
            "Aumentare il numero di tecnici necessari",
            "Diminuire l'efficienza energetica delle macchine",
            "Incrementare la complessità delle operazioni di manutenzione"
        ]
    },
    {
        "question": "Come potrebbe la realtà aumentata migliorare l'esperienza di un cliente in un museo?",
        "correctAnswer": "Fornendo contenuti aggiuntivi interattivi sovrapposti alle esposizioni reali",
        "otherAnswers": [
            "Aumentando il prezzo del biglietto",
            "Riducendo il numero di mostre disponibili",
            "Eliminando la necessità di guide umane"
        ]
    },
    {
        "question": "Quale sarebbe un potenziale svantaggio dell'utilizzo della realtà aumentata nella formazione medica?",
        "correctAnswer": "Possibile dipendenza dalle tecnologie AR a scapito delle abilità pratiche tradizionali",
        "otherAnswers": [
            "Riduzione dei costi di formazione",
            "Aumento dell'interesse degli studenti",
            "Miglioramento della precisione delle diagnosi"
        ]
    },
    {
        "question": "In un'applicazione AR basata sulla posizione, quale sarebbe l'impatto di un segnale GPS debole?",
        "correctAnswer": "Errori significativi nella posizione degli oggetti virtuali rispetto all'ambiente reale",
        "otherAnswers": [
            "Miglioramento della precisione del tracciamento",
            "Riduzione del consumo energetico",
            "Aumento della risoluzione grafica"
        ]
    },
    {
        "question": "Se un'applicazione AR richiede una calibrazione frequente dei sensori, quale potrebbe essere una conseguenza negativa?",
        "correctAnswer": "Riduzione dell'usabilità dell'applicazione a causa delle interruzioni frequenti",
        "otherAnswers": [
            "Miglioramento dell'accuratezza del tracciamento",
            "Aumento dell'interesse degli utenti",
            "Riduzione dei costi di sviluppo"
        ]
    },
    {
        "question": "Quale scenario evidenzierebbe la limitazione delle risorse di calcolo nei dispositivi mobili utilizzati per AR?",
        "correctAnswer": "Rallentamento delle prestazioni dell'applicazione durante l'elaborazione di scene complesse",
        "otherAnswers": [
            "Aumento della durata della batteria",
            "Miglioramento della qualità delle immagini",
            "Riduzione della memoria necessaria"
        ]
    },
    {
        "question": "Come potrebbe un'applicazione AR sfruttare la computer vision per migliorare l'interazione dell'utente?",
        "correctAnswer": "Riconoscendo gesti dell'utente per consentire controlli senza tocco",
        "otherAnswers": [
            "Aumentando la luminosità dello schermo",
            "Memorizzando dati personali dell'utente",
            "Riducendo il numero di sensori necessari"
        ]
    },
    {
        "question": "Quale potrebbe essere un rischio legato all'uso di AR nelle operazioni militari?",
        "correctAnswer": "La possibilità di interferenze elettroniche che compromettono il funzionamento dell'AR",
        "otherAnswers": [
            "Miglioramento delle capacità di navigazione",
            "Aumento della consapevolezza situazionale",
            "Riduzione del peso dell'attrezzatura"
        ]
    },
    {
        "question": "Quale sarebbe un modo efficace per mitigare il problema del 'drift' nei sistemi di tracciamento inerziale in AR?",
        "correctAnswer": "Combinare il tracciamento inerziale con altri sistemi di tracciamento, come i marker visivi",
        "otherAnswers": [
            "Aumentare la risoluzione della fotocamera",
            "Ridurre la frequenza di aggiornamento dei sensori",
            "Utilizzare esclusivamente segnali radio"
        ]
    },
    {
        "question": "In che modo l'AR può contribuire a migliorare le vendite online?",
        "correctAnswer": "Permettendo ai clienti di visualizzare i prodotti nel loro contesto reale prima dell'acquisto",
        "otherAnswers": [
            "Aumentando il costo dei prodotti",
            "Eliminando la necessità di descrizioni dei prodotti",
            "Riducendo il numero di recensioni dei clienti"
        ]
    },
    {
        "question": "Quale tecnica di AR sarebbe più adatta per un'applicazione che necessita di riconoscere e tracciare oggetti specifici in tempo reale?",
        "correctAnswer": "Object recognition",
        "otherAnswers": [
            "Template matching",
            "Proiezione di ombre",
            "Calibrazione dei sensori"
        ]
    },
    {
        "question": "Quale sfida potrebbe presentarsi nell'integrazione di AR con i sistemi di assistenza alla guida?",
        "correctAnswer": "Mantenere l'accuratezza del tracciamento a velocità elevate",
        "otherAnswers": [
            "Ridurre il numero di sensori nel veicolo",
            "Aumentare il costo della manutenzione del veicolo",
            "Diminuire la qualità delle informazioni visive fornite al conducente"
        ]
    },
    {
        "question": "Come può la realtà aumentata supportare i lavoratori nel settore della logistica?",
        "correctAnswer": "Fornendo indicazioni visive per ottimizzare i percorsi di picking",
        "otherAnswers": [
            "Rendendo i magazzini completamente automatizzati",
            "Riducendo il numero di dipendenti necessari",
            "Aumentando i tempi di consegna"
        ]
    },
    {
        "question": "Quale sarebbe un beneficio dell'uso dell'AR per la collaborazione remota?",
        "correctAnswer": "Consentire ai team di lavorare insieme su oggetti virtuali come se fossero nello stesso luogo",
        "otherAnswers": [
            "Eliminare la necessità di una connessione internet",
            "Aumentare il numero di riunioni necessarie",
            "Ridurre la qualità della comunicazione visiva"
        ]
    },
    {
        "question": "Qual è il ruolo del giroscopio in un dispositivo AR?",
        "correctAnswer": "Rilevare la rotazione del dispositivo",
        "otherAnswers": [
            "Misurare la temperatura dell'ambiente",
            "Calcolare la distanza tra oggetti",
            "Riconoscere immagini"
        ]
    },
    {
        "question": "Qual è la funzione del 'SLAM' (Simultaneous Localization and Mapping) nei sistemi di realtà aumentata?",
        "correctAnswer": "Mappare l'ambiente circostante mentre traccia la posizione del dispositivo",
        "otherAnswers": [
            "Riprodurre suoni 3D",
            "Migliorare la risoluzione dello schermo",
            "Gestire la memoria del dispositivo"
        ]
    },
    {
        "question": "Quale tecnica di AR utilizza la 'feature extraction' per identificare oggetti nell'ambiente?",
        "correctAnswer": "Feature-based tracking",
        "otherAnswers": [
            "Markerless tracking",
            "Template matching",
            "Projection-based tracking"
        ]
    },
    {
        "question": "Che cosa rappresenta un 'marker' in un'applicazione AR?",
        "correctAnswer": "Un'immagine o un oggetto utilizzato come punto di riferimento per il tracciamento",
        "otherAnswers": [
            "Un sensore di movimento",
            "Un tipo di visore AR",
            "Un'applicazione software"
        ]
    },
    {
        "question": "Quale componente hardware è essenziale per il tracciamento della posizione in AR?",
        "correctAnswer": "GPS",
        "otherAnswers": [
            "Altoparlante",
            "Microfono",
            "Schermo OLED"
        ]
    },
    {
        "question": "Qual è il principale vantaggio del 'markerless tracking' rispetto al 'marker-based tracking'?",
        "correctAnswer": "Non richiede l'uso di marcatori fisici per funzionare",
        "otherAnswers": [
            "Migliora la qualità grafica",
            "Riduce il consumo energetico",
            "Aumenta la velocità di calcolo"
        ]
    },
    {
        "question": "Perché è importante la 'camera calibration' nei sistemi di AR?",
        "correctAnswer": "Per garantire che le immagini catturate siano geometricamente accurate",
        "otherAnswers": [
            "Per aumentare il volume dell'audio",
            "Per migliorare la qualità del display",
            "Per ridurre il consumo della batteria"
        ]
    },
    {
        "question": "Come viene utilizzato il 'depth sensor' nelle applicazioni di AR?",
        "correctAnswer": "Per misurare la distanza tra la fotocamera e gli oggetti nell'ambiente",
        "otherAnswers": [
            "Per rilevare il colore degli oggetti",
            "Per amplificare il segnale audio",
            "Per memorizzare i dati dell'utente"
        ]
    },
    {
        "question": "Qual è la funzione del 'augmented reality SDK' (Software Development Kit)?",
        "correctAnswer": "Fornire strumenti e librerie per sviluppare applicazioni AR",
        "otherAnswers": [
            "Gestire le connessioni di rete",
            "Migliorare la qualità delle immagini",
            "Ottimizzare l'uso della batteria"
        ]
    },
    {
        "question": "Che cosa si intende per 'occlusion' in AR?",
        "correctAnswer": "Il processo di nascondere parti di oggetti virtuali dietro oggetti reali",
        "otherAnswers": [
            "La tecnica di miglioramento della qualità dell'immagine",
            "Un tipo di sensore di profondità",
            "Un metodo di compressione dei dati"
        ]
    },
    {
        "question": "Quale tecnologia è spesso utilizzata per creare effetti di AR basati sul riconoscimento facciale?",
        "correctAnswer": "Computer vision",
        "otherAnswers": [
            "Giroscopio",
            "Bluetooth",
            "GPS"
        ]
    },
    {
        "question": "Quale è il principale obiettivo del 'environment understanding' nelle applicazioni AR?",
        "correctAnswer": "Riconoscere e comprendere le caratteristiche dell'ambiente circostante",
        "otherAnswers": [
            "Aumentare la memoria del dispositivo",
            "Migliorare la qualità del suono",
            "Ottimizzare la velocità della rete"
        ]
    },
    {
        "question": "Qual è il vantaggio dell'utilizzo di 'cloud anchors' nelle applicazioni AR collaborative?",
        "correctAnswer": "Consentire a più utenti di condividere e interagire con gli stessi oggetti virtuali",
        "otherAnswers": [
            "Aumentare la durata della batteria",
            "Migliorare la risoluzione dello schermo",
            "Ridurre il costo dell'applicazione"
        ]
    },
    {
        "question": "Che cosa rappresenta il termine 'latency' in un sistema di AR?",
        "correctAnswer": "Il ritardo tra il movimento del dispositivo e l'aggiornamento dell'immagine visualizzata",
        "otherAnswers": [
            "La durata della batteria del dispositivo",
            "La qualità del suono riprodotto",
            "Il numero di utenti supportati dall'applicazione"
        ]
    },
    {
        "question": "Qual è l'obiettivo principale del 'particle filtering' nei sistemi di localizzazione AR?",
        "correctAnswer": "Stima della posizione e orientamento del dispositivo mediante un insieme di ipotesi probabilistiche",
        "otherAnswers": [
            "Aumentare la risoluzione delle immagini",
            "Migliorare la qualità del suono",
            "Ridurre il consumo energetico"
        ]
    },
    {
        "question": "Quale dei seguenti è un vantaggio dell'utilizzo del 'Kalman filter' rispetto al 'particle filter'?",
        "correctAnswer": "Maggiore efficienza computazionale per sistemi lineari",
        "otherAnswers": [
            "Migliore gestione delle non linearità",
            "Maggiore precisione con pochi dati",
            "Riduzione della latenza"
        ]
    },
    {
        "question": "In un contesto AR, perché è importante la 'sensor fusion'?",
        "correctAnswer": "Combina dati da diversi sensori per migliorare l'accuratezza del tracciamento e della localizzazione",
        "otherAnswers": [
            "Aumenta la velocità di rendering grafico",
            "Riduce il consumo di memoria",
            "Elimina la necessità di calibrazione"
        ]
    },
    {
        "question": "Cosa rappresenta il 'feature vector' in un sistema di computer vision?",
        "correctAnswer": "Una rappresentazione numerica delle caratteristiche rilevanti di un'immagine",
        "otherAnswers": [
            "Un tipo di sensore di profondità",
            "Un algoritmo di compressione video",
            "Un metodo di calibrazione delle fotocamere"
        ]
    },
    {
        "question": "Quale dei seguenti è un uso comune della segmentazione delle immagini in AR?",
        "correctAnswer": "Separare gli oggetti di interesse dallo sfondo per un tracciamento più preciso",
        "otherAnswers": [
            "Aumentare la luminosità delle immagini",
            "Ridurre il rumore audio",
            "Migliorare la connessione di rete"
        ]
    },
    {
        "question": "Come viene utilizzato il 'histogram of oriented gradients' (HOG) nella computer vision?",
        "correctAnswer": "Per descrivere l'aspetto e la forma degli oggetti mediante la distribuzione dei gradienti di intensità",
        "otherAnswers": [
            "Per aumentare la risoluzione delle immagini",
            "Per ridurre il consumo di energia",
            "Per migliorare la qualità del suono"
        ]
    },
    {
        "question": "Qual è lo scopo della 'normalization' dei feature vectors?",
        "correctAnswer": "Assicurare che tutte le caratteristiche abbiano lo stesso peso nei calcoli successivi",
        "otherAnswers": [
            "Aumentare la dimensione delle immagini",
            "Ridurre il tempo di elaborazione",
            "Migliorare la qualità delle immagini"
        ]
    },
    {
        "question": "In un sistema di AR, perché potrebbe essere utilizzato il metodo di 'random sample consensus' (RANSAC)?",
        "correctAnswer": "Per identificare e rimuovere gli outliers dai dati di tracciamento",
        "otherAnswers": [
            "Per migliorare la risoluzione delle immagini",
            "Per ridurre il consumo di memoria",
            "Per aumentare la durata della batteria"
        ]
    },
    {
        "question": "Come può essere descritto il processo di 'image segmentation'?",
        "correctAnswer": "Dividere un'immagine in parti significative per facilitarne l'analisi",
        "otherAnswers": [
            "Aumentare la luminosità di un'immagine",
            "Ridurre la risoluzione di un'immagine",
            "Migliorare la qualità dell'audio"
        ]
    },
    {
        "question": "Quale metodo probabilistico viene spesso utilizzato per stimare la posizione in sistemi di navigazione indoor?",
        "correctAnswer": "Filtro di particelle (Particle Filter)",
        "otherAnswers": [
            "Interferometria",
            "Histogram equalization",
            "Compressione JPEG"
        ]
    },
    {
        "question": "Quale algoritmo è comunemente usato per il riconoscimento degli oggetti nelle immagini in AR?",
        "correctAnswer": "Support Vector Machines (SVM)",
        "otherAnswers": [
            "A* Search Algorithm",
            "Dijkstra's Algorithm",
            "QuickSort"
        ]
    },
    {
        "question": "Perché è importante la 'background subtraction' nei sistemi di AR?",
        "correctAnswer": "Per identificare e isolare oggetti in movimento dal resto dell'immagine",
        "otherAnswers": [
            "Per aumentare la risoluzione delle immagini",
            "Per migliorare la qualità del suono",
            "Per ridurre il consumo di energia"
        ]
    },
    {
        "question": "Quale tecnica di calcolo della posizione utilizza misurazioni relative piuttosto che assolute?",
        "correctAnswer": "Dead Reckoning",
        "otherAnswers": [
            "GPS",
            "Bluetooth Beacons",
            "WiFi Triangulation"
        ]
    },
    {
        "question": "Qual è il vantaggio principale dell'utilizzo di metodi probabilistici nel tracciamento AR?",
        "correctAnswer": "Gestione robusta dell'incertezza e del rumore nei dati di tracciamento",
        "otherAnswers": [
            "Aumento della risoluzione grafica",
            "Riduzione della latenza di rete",
            "Miglioramento della qualità audio"
        ]
    },
    {
        "question": "In che modo la segmentazione basata sui contorni può essere utile nelle applicazioni di AR?",
        "correctAnswer": "Identificare e delineare chiaramente gli oggetti nell'immagine per un tracciamento più accurato",
        "otherAnswers": [
            "Aumentare la dimensione dei file di immagine",
            "Ridurre il consumo di batteria",
            "Migliorare la qualità del suono"
        ]
    },
    {
        "question": "Qual è lo scopo principale del filtraggio particellare (particle filtering) in un sistema di AR?",
        "correctAnswer": "Stimare la posizione e l'orientamento del dispositivo in modo probabilistico",
        "otherAnswers": [
            "Aumentare la risoluzione delle immagini",
            "Ridurre il consumo energetico",
            "Migliorare la qualità del suono"
        ]
    },
    {
        "question": "In che modo il calcolo della posizione può essere migliorato utilizzando metodi probabilistici?",
        "correctAnswer": "Combinando più fonti di dati per ridurre l'incertezza della posizione",
        "otherAnswers": [
            "Aumentando la velocità della fotocamera",
            "Diminuendo la risoluzione grafica",
            "Utilizzando solo dati GPS"
        ]
    },
    {
        "question": "Quale dei seguenti è un esempio di metodo probabilistico utilizzato per il tracciamento della posizione?",
        "correctAnswer": "Kalman filter",
        "otherAnswers": [
            "Linear regression",
            "K-means clustering",
            "Decision tree"
        ]
    },
    {
        "question": "Perché il particle filtering è adatto per il tracciamento non lineare?",
        "correctAnswer": "Perché può gestire distribuzioni di probabilità complesse e non gaussiane",
        "otherAnswers": [
            "Perché è veloce da calcolare",
            "Perché utilizza meno memoria",
            "Perché è più semplice da implementare"
        ]
    },
    {
        "question": "Cos'è un feature vector in computer vision?",
        "correctAnswer": "Una rappresentazione numerica di caratteristiche significative di un oggetto",
        "otherAnswers": [
            "Un tipo di sensore",
            "Una tecnica di compressione delle immagini",
            "Una procedura di calibrazione"
        ]
    },
    {
        "question": "Qual è lo scopo della segmentazione nelle immagini?",
        "correctAnswer": "Dividere un'immagine in parti significative o oggetti",
        "otherAnswers": [
            "Aumentare la risoluzione dell'immagine",
            "Rendere l'immagine più luminosa",
            "Ridurre il rumore dell'immagine"
        ]
    },
    {
        "question": "Quale tecnica è comunemente usata per la segmentazione delle immagini?",
        "correctAnswer": "Thresholding",
        "otherAnswers": [
            "Fourier transform",
            "Gaussian blur",
            "Histogram equalization"
        ]
    },
    {
        "question": "Cosa rappresenta un 'keypoint' in un'immagine?",
        "correctAnswer": "Un punto distintivo che può essere utilizzato per il matching tra immagini",
        "otherAnswers": [
            "Un'area sfocata",
            "Un colore predominante",
            "Un bordo dell'immagine"
        ]
    },
    {
        "question": "Perché i metodi probabilistici sono importanti nel tracciamento della posizione in AR?",
        "correctAnswer": "Perché aiutano a gestire l'incertezza e il rumore nei dati di tracciamento",
        "otherAnswers": [
            "Perché riducono il consumo di batteria",
            "Perché migliorano la qualità grafica",
            "Perché aumentano la velocità del processore"
        ]
    },
    {
        "question": "Qual è il vantaggio dell'uso di feature vectors per il riconoscimento di oggetti?",
        "correctAnswer": "Permettono un confronto efficiente tra immagini per identificare oggetti simili",
        "otherAnswers": [
            "Ridurre la memoria richiesta per l'immagine",
            "Aumentare la risoluzione dell'immagine",
            "Eliminare il rumore dall'immagine"
        ]
    },
    {
        "question": "Che cosa si intende per 'data association' nei metodi probabilistici di tracciamento?",
        "correctAnswer": "Il processo di collegare misurazioni osservate con stime dello stato",
        "otherAnswers": [
            "L'archiviazione dei dati di tracciamento",
            "La calibrazione dei sensori",
            "L'aggiornamento del firmware"
        ]
    },
    {
        "question": "Quale tecnica di segmentazione utilizza la similarità di colore per dividere un'immagine?",
        "correctAnswer": "Region growing",
        "otherAnswers": [
            "Edge detection",
            "Morphological operations",
            "Image sharpening"
        ]
    },
    {
        "question": "Perché è importante la 'feature extraction' nelle applicazioni di computer vision?",
        "correctAnswer": "Per ridurre la dimensione dei dati mantenendo le informazioni rilevanti",
        "otherAnswers": [
            "Per aumentare la qualità dell'immagine",
            "Per migliorare la risoluzione",
            "Per ridurre il consumo energetico"
        ]
    },
    {
        "question": "Quale dei seguenti algoritmi è comunemente usato per la 'feature matching' tra due immagini?",
        "correctAnswer": "SIFT (Scale-Invariant Feature Transform)",
        "otherAnswers": [
            "JPEG compression",
            "Gaussian blur",
            "Dijkstra's algorithm"
        ]
    }
]