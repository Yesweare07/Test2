/// LokaLingo App JavaScript

// App Data
const appData = {
    // Translation Data
    translations: {
        // English to Kapampangan translations
        englishToKapampangan: {
            "hello": "Kamusta",
            "good morning": "Mayap a abak",
            "good afternoon": "Mayap a ugtu",
            "good evening": "Mayap a bengi",
            "thank you": "Salamat / Dakal a Salamat",
            "you're welcome": "Alang nanu man / Alang Anuman",
            "yes": "Wa",
            "no": "Ali",
            "excuse me": "Makisabi ku / Paumanhin",
            "sorry": "Pasensya na / Pakilub",
            "goodbye": "Pamagsabi",
            "please": "Pakisuyo",
            "how are you?": "Komusta ka?",
            "I'm fine": "Mayap ku",
            "what is your name?": "Nanu ya ing lagyu mu?",
            "my name is": "Ing lagyu ku",
            "where is": "Nokarin ya ing",
            "how much is this?": "Magkanu ini?",
            "too expensive": "Masyadu yang makamal",
            "can you help me?": "Pwedi mu ku bang sopan?",
            "I don't understand": "Eku antindyan",
            "I'm lost": "Mewala ku",
            "bathroom": "Paliguan",
            "water": "Danum",
            "food": "Pamangan",
            "restaurant": "Kainan",
            "hospital": "Ospital",
            "police": "Polis",
            "taxi": "Taxi",
            "bus": "Bus",
            "train": "Tren",
            "airport": "Paliparan",
            "i'm here": "Atchu ku keni",
            "where is the store?": "Nokarin ya itang tindahan?",
            "what happens to you?": "Nanung milyari keka?",
            "it's sweet": "Mayumu ya",
            "a little": "Ditak",
            "many": "Dakal i",
            "soup": "Sabo",
            "ugly": "Matsura",
            "greedy": "Matako",
            "see you again": "Mikit tamu pasibayu",
            "i'm from another country": "Ibat ku king aliwang bansa",
            "i love this food": "Buri ku ing pamangan",
            "this place is beautiful": "Masanting ya ing lugar",
            "where can i eat this?": "Nokarin ku apangan ini?",
            "do you speak english?": "Magsalita ko pung ingles?",
            "where can i exchange money?": "Nokarin ku pweding mamalit kwarta?",
            "where is the comfort room?": "Nokarin ya ing banyu?",
            "where is the bus terminal?": "Nokarin ya ing bus terminal?",
            "where can i get a taxi?": "Nokarin ku makasake taxi?",
            "stop here please": "Mintu ka keni.",
            "how far is it?": "Ganu ya ka laut ini?",
            "i'm full": "Mabsi naku.",
            "i have a reservation": "Atin kung booking.",
            "what's the best place to visit here in angeles city?": "Nanu ing masanting a pasyalan kening Angeles City?",
            "i like this one": "Buri ke ini",
            "where is the fitting room?": "Nokarin ya ing fitting room?",
            "this is too small": "Masyadu yang malati ini",
            "this is too big": "Masyadu yang madagul ini",
            "where can i buy this?": "Nokarin makasaling makanini?",
            "you're so kind": "Kabait mo naman.",
            "how can i get there?": "Makananung makapunta keni?",
            "thank you so much": "Dakal a salamat",
            "welcome": "Malaus ko pu",
            "can you give me a discount?": "Malyari mu kung dinan makasadyang presyu?"
        },
        englishToTagalog: {
            "hello": "Kamusta",
            "good morning": "Magandang umaga",
            "good afternoon": "Magandang hapon",
            "good evening": "Magandang gabi",
            "thank you": "Salamat",
            "you're welcome": "Walang anuman",
            "yes": "Oo",
            "no": "Hindi",
            "excuse me": "Makisabi ku / Paumanhin",
            "sorry": "Pasensya na",
            "how are you?": "Kumusta ka?",
            "I'm fine": "Mabuti naman",
            "what is your name?": "Ano ang pangalan mo?",
            "my name is": "Ang pangalan ko ay",
            "where is": "Nasaan ang",
            "how much is this?": "Magkano ito?",
            "too expensive": "Masyadong mahal",
            "can you help me?": "Pwede mo ba akong tulungan?",
            "I don't understand": "Hindi ko naiintindihan",
            "I'm lost": "Nawawala ako",
            "bathroom": "Banyo",
            "water": "Tubig",
            "food": "Pagkain",
            "restaurant": "Restawran",
            "hospital": "Ospital",
            "police": "Pulis",
            "taxi": "Taxi",
            "bus": "Bus",
            "train": "Tren",
            "airport": "Paliparan"
        },
        tagalogToKapampangan: {
            "kamusta": "Komusta",
            "magandang umaga": "Mayap a abak",
            "magandang hapon": "Mayap a gatpanapun",
            "magandang gabi": "Mayap a bengi",
            "salamat": "Salamat",
            "walang anuman": "Alang nanu man",
            "oo": "Wa",
            "hindi": "Ali",
            "excuse me": "Makisabi ku / Paumanhin",
            "pasensya na": "Pasensya na",
            "kumusta ka?": "Komusta ka?",
            "mabuti naman": "Mayap ku",
            "ano ang pangalan mo?": "Nanu ing lagyu mu?",
            "ang pangalan ko ay": "Ing lagyu ku",
            "nasaan ang": "Nokarin ya ing",
            "magkano ito?": "Magkanu ini?",
            "masyadong mahal": "Masyadung mal",
            "pwede mo ba akong tulungan?": "Malyari mu kung saupan?",
            "hindi ko naiintindihan": "E ku aintindihan",
            "nawawala ako": "Mewala ku",
            "banyo": "Paliguan",
            "tubig": "Danum",
            "pagkain": "Pamangan",
            "restawran": "Kainan",
            "ospital": "Ospital",
            "pulis": "Polis",
            "taxi": "Taxi",
            "bus": "Bus",
            "tren": "Tren",
            "paliparan": "Paliparan"
        }
    },
    
    // Common phrases
    commonPhrases: {
        english: [
            { phrase: "Hello", translation: "Kumusta" },
            { phrase: "Thank you very much", translation: "Dakal a salamat" },
            { phrase: "How are you?", translation: "Komusta ka?" },
            { phrase: "Where is the bathroom?", translation: "Nokarin ya ing banyu?" },
            { phrase: "How much is this?", translation: "Magkanu  ya ini?" },
            { phrase: "I don't understand", translation: "E ku Antindiyan" }
        ],
        tagalog: [
            { phrase: "Kumusta", translation: "Komusta" },
            { phrase: "maraming salamat", translation: " dakal a Salamat" },
            { phrase: "Kumusta ka?", translation: "Komusta ka?" },
            { phrase: "Nasaan ang banyo?", translation: "Nokarin ya ing banyu?" },
            { phrase: "Magkano ito?", translation: "Magkanu  ya ini?" },
            { phrase: "Hindi ko naiintindihan", translation: "E ku Antindiyan" }
        ]
    },
    
    // Food places in Angeles City
    foodPlaces: [
        {
            id: 1,
            name: "Aling Lucing Sisig",
            description: "Home of the original Kapampangan sisig, a sizzling dish made from parts of a pig's head and liver, seasoned with calamansi and chili peppers.",
            address: "L-463 Glaciano Valdez St, Angeles City",
            image: "https://images.squarespace-cdn.com/content/v1/5d7f2d797a64971f017f10ff/1578929893577-QW5D1ADDMDK8QAG1LYZC/Sisig+at+Angeles+1.png",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.6990318670473!2d120.58956931484453!3d15.13376898947092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAling%20Lucing%20Sisig!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 2,
            name: "Cabalen",
            description: "Famous Filipino buffet offering authentic Kapampangan dishes with a cozy family-style dining experience.",
            address: "SM City Clark, Angeles City",
            image: "https://cabalengroup.ph/wp-content/uploads/2024/09/cabalenstore_3.png",
            mapEmbed: '<iframe src="https://www.google.com/maps?q=Cabalen+Clark&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
        },  
        {
            id: 3,
            name: "Matam-ih Authentic Kapampangan Cuisine",
            description: "A cultural dining experience featuring traditional Kapampangan dishes served in native-style huts.",
            address: "MWG6+3Q7, Clark Freeport, Angeles City",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b2/a0/69/looking-for-authentic.jpg?w=900&h=500&s=1",
            mapEmbed: '<iframe src="https://www.google.com/maps?q=Matam-ih+Restaurant+Clark&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
        },
        {
            id: 4,
            name: "Bale Dutung",
            description: "Chef Claude Tayag's private dining restaurant offering Kapampangan specialties like kare-kare, sisig, and lechon.",
            address: "Villa Gloria Subdivision, Angeles City",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/47/86/aa/20180812-122509-largejpg.jpg?w=800&h=500&s=1",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.9!1d120.58!3d15.135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sBale%20Dutung!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 5,
            name: "19 Copung-Copung Grill",
            description: "A lively grill and restaurant known for its barbecue and native Filipino dishes.",
            address: "Friendship Highway, Angeles City",
            image: "https://lh3.googleusercontent.com/p/AF1QipMIyesEzZ7h5SNDNJJHud1lHwBfJFsHrFTP1K7g=w1024-k",
            mapEmbed: '<iframe src="https://www.google.com/maps?q=19+Copung+Copung+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
        }
    ],
    
    // Attractions in Angeles City
    attractions: [
        {
            id: 1,
            name: "Clark Museum and 4D Theater",
            description: "Museum showcasing the rich history of Clark from the American period to the present day, with a 4D theater experience.",
            address: "Clark Freeport Zone, Angeles City",
            image: "https://southluzon.politiko.com.ph/wp-content/uploads/2015/08/politiko_clarkFreePort.jpg",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.5!1d120.52!3d15.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sClark%20Museum!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 2,
            name: "Nayong Pilipino Clark",
            description: "Cultural theme park featuring replicas of famous Philippine landmarks and showcasing Filipino culture and heritage.",
            address: "Clark Freeport Zone, Angeles City",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/4f/da/9c/nayong-pilipino.jpg?w=1200&h=-1&s=1",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.4!1d120.53!3d15.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sNayong%20Pilipino!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 3,
            name: "Holy Rosary Parish Church",
            description: "Historic church built in 1877, also known as Santo Rosario Church, featuring Spanish colonial architecture.",
            address: "Santo Rosario St, Angeles City",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/37/79/4a/photo5jpg.jpg?w=1200&h=-1&s=1",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.7!1d120.59!3d15.133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sHoly%20Rosary%20Parish%20Church!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 4,
            name: "Aqua Planet",
            description: "One of the largest water theme parks in Southeast Asia with various water slides and attractions.",
            address: "Clark Freeport Zone, Mabalacat, Pampanga",
            image: "https://i0.wp.com/awesome.blog/wp-content/uploads/2018/04/Aqua-Park-1.jpg?fit=2000%2C1500",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.3!1d120.54!3d15.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAqua%20Planet!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        }
    ],
    
    // shopping places in Angeles City
    shoppingPlaces: [       
        {
            id: 157,
            name: "Jhona’s Pasalubong Center",
            description: "Local pasalubong center offering classic Pampanga sweets, souvenirs, and gift items.",
            address: "Angeles City, Pampanga",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80yXLzsHZLZTG3ldMOQyPPS-IBIsw_f3l-A&s",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_JHONAS" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
        },
        {
            id: 166,
            name: "Kultura Filipino - Clark, The SM Store",
            description: "Kultura Filipino boutique inside SM Store in Clark selling locally made crafts, apparel, and Filipino-themed souvenirs.",
            address: "SM Clark / The SM Store - Clark Freeport Zone",
            image: "https://cdn.shopify.com/s/files/1/0286/9438/0653/files/Kultura_landscape.jpg?v=1751627689?height=628&pad_color=fff&v=1614369365&width=1200",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_KULTURA_CLARK" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
        }
    ],

        
    
    // Emergency information
    emergencyInfo: [
        {
            id: 1,
            name: "Angeles City Police Station",
            description: "Main police station serving Angeles City for emergency assistance and security concerns.",
            contact: "045-322-2560",
            address: "Jesus St, Angeles City",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVB1p94DX3vKvjJzEGTkAdeHOgaM_wQ7DbQ&s",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.7!1d120.59!3d15.133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAngeles%20City%20Police%20Station!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 153,
            name: "Angeles City Disaster Risk Reduction",
            description: "The official office responsible for coordinating disaster preparedness, emergency response, and recovery operations.",
            address: "Pulung Maragul, Angeles City, Pampanga",
            contact: "911", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpMbZVFFVCKFqXltRJBCvdY69a7DHGeegJg&s",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 166,
            name: "Rafael L. Lazatin Memorial Medical Center",
            description: "The primary public hospital of Angeles City providing affordable healthcare and emergency services for residents.",
            contact: "045-625-2999",  
            address: "Pampang, Angeles City, Pampanga",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAS8b6XjVGhfxVGcVbOYLnThqxRGmeweDXg&s",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 4,
            name: "Tourist Police Unit",
            description: "Specialized police unit assisting tourists with safety concerns and emergency situations.",
            contact: "045-892-2222",
            address: "Clark Freeport Zone, Angeles City",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2PJHQu2rh-pos0SHRpcRi4ff5OG49YcaBQ&s",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.5!1d120.52!3d15.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sTourist%20Police%20Unit!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        }
    ],
    // Transportation options
    transportation: [       
        {
            id: 1,
            name: "C’POINT - BALIBAGO - H’WAY (GREY)",
            description: "Runs from Checkpoint to Balibago and Highway, providing access through major Angeles City roads.",
            fare: "₱11-12 (PWD/Student/Senior) | ₱13 Regular",
            image: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/584376938_1130516655906573_3350673000795791760_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqdTx5hjkYhyu7w0oTjik5GH4k623UploYfiTrbdSmWrhGHl5hhEciIA_txXbcGxOwT2KDBbYNqqI3u9gbWpPU&_nc_ohc=VfaVJC3NX8UQ7kNvwHD-Bwm&_nc_oc=AdmTOvJhB9tXAxM7hXZJ56yUzxB8_I1rpd3-UXi2wrCqH2xNdsHv1UsD5uRhXK1UZy4&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=4vEkQ3Dac6Me3qbcbn17uw&oh=00_AfhiircOe3u8HW4JECq7mgPYIDfI6GaWVVL_lwPdka9dKg&oe=6923B846",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAngeles%20City!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 3,
            name: "Grab",
            description: "Ride-hailing service available in Angeles City. Convenient for direct travel to specific destinations.",
            fare: "Varies by distance (₱100-300 for most city trips)",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/92/1a/47/921a4768-28b4-597c-7b12-b9c4cfc47b3b/GrabIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/1200x630wa.png",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAngeles%20City%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        }
    ]
};

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Translator elements
    const fromLanguage = document.getElementById('from-language');
    const toLanguage = document.getElementById('to-language');
    const inputText = document.getElementById('input-text');
    const translateBtn = document.getElementById('translate-btn');
    const outputText = document.getElementById('output-text');
    const speakBtn = document.getElementById('speak-btn');
    const copyBtn = document.getElementById('copy-btn');
    const swapBtn = document.querySelector('.swap-btn');
    const phraseList = document.querySelector('.phrase-list');
    
    // Modal elements
    const modal = document.getElementById('detail-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Initialize the app
    initApp();
    
    function initApp() {
        // Set up navigation
        setupNavigation();
        
        // Set up translator
        setupTranslator();
        
        // Populate content sections
        populateFoodSection();
        populateAttractionsSection();
        populateShoppingSection();
        populateEmergencySection();
        populateTransportationSection();
        
        // Set up modal
        setupModal();
    }
    
    function setupNavigation() {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all nav items
                navItems.forEach(nav => nav.classList.remove('active'));
                
                // Add active class to clicked nav item
                item.classList.add('active');
                
                // Show corresponding content section
                const tabId = item.getAttribute('data-tab');
                contentSections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === tabId) {
                        section.classList.add('active');
                    }
                });
            });
        });
    }
    
    function setupTranslator() {
        // Populate common phrases
        updatePhraseList();
        
        // Handle language change
        fromLanguage.addEventListener('change', () => {
            updatePhraseList();
            // Ensure a supported target when Tagalog is the source
            if (fromLanguage.value === 'tagalog' && toLanguage.value === 'tagalog') {
                toLanguage.value = 'kapampangan';
            }
        });
        
        // Handle translate button click
        translateBtn.addEventListener('click', translateText);
        
        // Handle swap button click
        swapBtn.addEventListener('click', swapLanguages);
        
        // Handle speak button click
        speakBtn.addEventListener('click', speakTranslation);
        
        // Handle copy button click
        copyBtn.addEventListener('click', copyTranslation);
    }
    
    function updatePhraseList() {
        // Clear existing phrases
        phraseList.innerHTML = '';
        
        // Get phrases based on selected language
        const selectedLanguage = fromLanguage.value;
        const phrases = selectedLanguage === 'english' ? 
                        appData.commonPhrases.english : 
                        appData.commonPhrases.tagalog;
        
        // Add phrases to the list
        phrases.forEach(item => {
            const phraseItem = document.createElement('div');
            phraseItem.className = 'phrase-item';
            
            const phraseText = document.createElement('div');
            phraseText.className = 'phrase-text';
            
            const originalPhrase = document.createElement('p');
            originalPhrase.textContent = item.phrase;
            
            const translatedPhrase = document.createElement('p');
            translatedPhrase.textContent = item.translation;
            
            phraseText.appendChild(originalPhrase);
            phraseText.appendChild(translatedPhrase);
            
            const speakIcon = document.createElement('i');
            speakIcon.className = 'fas fa-volume-up';
            speakIcon.addEventListener('click', () => {
                speakText(item.translation);
            });
            
            phraseItem.appendChild(phraseText);
            phraseItem.appendChild(speakIcon);
            
            // Add click event to use this phrase
            phraseItem.addEventListener('click', () => {
                inputText.value = item.phrase;
                translateText();
            });
            
            phraseList.appendChild(phraseItem);
        });
    }

    // More forgiving matching: case-insensitive, punctuation-insensitive
    function normalizeKey(str) {
        return (str || '')
            .toLowerCase()
            .replace(/[\u2018\u2019\u201C\u201D]/g, '') // curly quotes
            .replace(/[.,!?;:()"'`]/g, '') // punctuation
            .replace(/\s+/g, ' ')
            .trim();
    }

    const normalizedCache = {
        englishToKapampangan: null,
        englishToTagalog: null,
        tagalogToKapampangan: null
    };

    function buildNormalizedMap(dict) {
        const map = {};
        Object.keys(dict).forEach(k => {
            const nk = normalizeKey(k);
            if (!map[nk]) {
                map[nk] = dict[k];
            }
        });
        return map;
    }

    function getNormalizedTranslation(dictName, rawKey) {
        const dict = appData.translations[dictName];
        // Try direct match first (exact key)
        const direct = dict[rawKey];
        if (direct) return direct;

        // Fallback to normalized match
        const nk = normalizeKey(rawKey);
        if (!normalizedCache[dictName]) {
            normalizedCache[dictName] = buildNormalizedMap(dict);
        }
        return normalizedCache[dictName][nk] || 'Translation not available';
    }
    
    function translateText() {
        const raw = inputText.value;
        const fromLang = fromLanguage.value;
        const toLang = toLanguage.value;
        
        const text = (raw || '').trim();
        if (!text) {
            outputText.textContent = 'Please enter text to translate';
            return;
        }
        
        // Guard unsupported language pairs
        const supported = (fromLang === 'english' && (toLang === 'kapampangan' || toLang === 'tagalog')) ||
                          (fromLang === 'tagalog' && toLang === 'kapampangan');
        if (!supported) {
            outputText.textContent = 'Language pair not supported. Choose a different target.';
            return;
        }
        
        let translation = 'Translation not available';
        
        // Determine which translation dictionary to use
        if (fromLang === 'english' && toLang === 'kapampangan') {
            translation = getNormalizedTranslation('englishToKapampangan', text);
        } else if (fromLang === 'english' && toLang === 'tagalog') {
            translation = getNormalizedTranslation('englishToTagalog', text);
        } else if (fromLang === 'tagalog' && toLang === 'kapampangan') {
            translation = getNormalizedTranslation('tagalogToKapampangan', text);
        }
        
        outputText.textContent = translation;
    }
    
    function swapLanguages() {
        // Toggle destination language only; keep source unchanged
        toLanguage.value = (toLanguage.value === 'kapampangan') ? 'tagalog' : 'kapampangan';
        updatePhraseList();
        translateText();
    }
    
    function speakTranslation() {
        const text = outputText.textContent;
        speakText(text);
    }
    
    function speakText(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'fil-PH'; // Filipino/Tagalog voice as approximation
            speechSynthesis.speak(utterance);
        } else {
            alert('Text-to-speech is not supported in your browser');
        }
    }
    
    function copyTranslation() {
        const text = outputText.textContent;
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Translation copied to clipboard');
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    }
    
    function populateFoodSection() {
        const foodList = document.querySelector('.food-list');
        
        appData.foodPlaces.forEach(place => {
            const itemCard = createItemCard(place, 'food');
            foodList.appendChild(itemCard);
        });
    }
    
    function populateAttractionsSection() {
        const attractionsList = document.querySelector('.attractions-list');
        
        appData.attractions.forEach(attraction => {
            const itemCard = createItemCard(attraction, 'attractions');
            attractionsList.appendChild(itemCard);
        });
    }
    
    function populateShoppingSection() {
        const shoppingList = document.querySelector('.shopping-list');
        
        appData.shoppingPlaces.forEach(shop => {
            const itemCard = createItemCard(shop, 'shopping');
            shoppingList.appendChild(itemCard);
        });
    }
    
    function populateEmergencySection() {
        const emergencyList = document.querySelector('.emergency-list');
        
        appData.emergencyInfo.forEach(info => {
            const itemCard = createItemCard(info, 'emergency');
            emergencyList.appendChild(itemCard);
        });
    }
    
    function populateTransportationSection() {
        const transportationList = document.querySelector('.transportation-list');
        
        appData.transportation.forEach(transport => {
            const itemCard = createItemCard(transport, 'transportation');
            transportationList.appendChild(itemCard);
        });
    }
    
    function createItemCard(item, type) {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        
        const itemImage = document.createElement('div');
        itemImage.className = 'item-image';
        itemImage.style.backgroundImage = `url(${item.image})`;
        
        const itemDetails = document.createElement('div');
        itemDetails.className = 'item-details';
        
        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        
        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        
        const itemAddress = document.createElement('div');
        itemAddress.className = 'address';
        
        const addressIcon = document.createElement('i');
        addressIcon.className = 'fas fa-map-marker-alt';
        
        const addressText = document.createElement('span');
        addressText.textContent = item.address;
        
        itemAddress.appendChild(addressIcon);
        itemAddress.appendChild(addressText);
        
        // 1. Append Name, Description, and Address first
        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemDescription);
        itemDetails.appendChild(itemAddress);

        // 2. Create a container for the buttons to sit side-by-side
        const actionContainer = document.createElement('div');
        actionContainer.className = 'card-actions';

        // 3. Create Call Button (Only if type is emergency)
        if (type === 'emergency' && item.contact) {
            const callBtn = document.createElement('a');
            callBtn.href = `tel:${item.contact}`;
            callBtn.className = 'btn-call'; // Uses the brown style now
            callBtn.innerHTML = '<i class="fas fa-phone"></i> Call';
            
            // Prevent card click when clicking button
            callBtn.addEventListener('click', (e) => e.stopPropagation());
            
            actionContainer.appendChild(callBtn);
        }

        // 4. Create View Map Button
        const quickMapBtn = document.createElement('button');
        quickMapBtn.className = 'btn-view-map';
        quickMapBtn.textContent = 'View Map';
        const quickQuery = [item.name, item.address || 'Angeles City, Pampanga'].filter(Boolean).join(', ');
        quickMapBtn.setAttribute('data-map-title', item.name);
        quickMapBtn.setAttribute('data-embed-url', buildGoogleEmbedUrl(quickQuery));
        
        actionContainer.appendChild(quickMapBtn);

        // 5. Append the button container to details
        itemDetails.appendChild(actionContainer);
        
        // 6. Add the "View Details" text link at the bottom
        const viewDetails = document.createElement('div');
        viewDetails.className = 'view-details';
        viewDetails.textContent = 'View Details';
        itemDetails.appendChild(viewDetails);
        
        itemCard.appendChild(itemImage);
        itemCard.appendChild(itemDetails);
        
        // Add click event to show details modal
        itemCard.addEventListener('click', () => {
            showItemDetails(item, type);
        });
        
        return itemCard;
    }
    
    function showItemDetails(item, type) {
        // Create modal content
        let content = `
            <div class="modal-image" style="background-image: url(${item.image})"></div>
            <div class="modal-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
        `;
        
        // Add type-specific details
        if (type === 'food') {
            content += `<p><strong>Address:</strong> ${item.address}</p>`;
        } else if (type === 'emergency') {
            content += `
                <p><strong>Contact:</strong> <a href="tel:${item.contact}" class="phone-link">${item.contact}</a></p>
                <p><strong>Address:</strong> ${item.address}</p>
                <br>
                <a href="tel:${item.contact}" class="btn-call" style="width:100%; text-align:center; box-sizing:border-box;">
                    <i class="fas fa-phone"></i> Call Now
                </a>
            `;
        } else if (type === 'transportation') {
            content += `<p><strong>Fare:</strong> ${item.fare}</p>`;
        } else {
            content += `<p><strong>Address:</strong> ${item.address}</p>`;
        }
        
        // Add map using accurate address-based embed
        const mapQuery = [item.name, item.address || 'Angeles City, Pampanga'].filter(Boolean).join(', ');
        const embedUrlForBtn = buildGoogleEmbedUrl(mapQuery);
        content += `
            <div class="modal-map">
                <iframe src="${embedUrlForBtn}" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="map-actions">
              <button class="btn-view-map" data-map-title="${item.name}" data-embed-url="${embedUrlForBtn}">View Map</button>
            </div>
        `;
        
        content += `</div>`;
        
        // Set modal content
        modalContent.innerHTML = content;
        
        // Show modal
        modal.style.display = 'block';
    }
    
    function setupModal() {
        // Close modal when clicking the close button
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside the modal content
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// Utility: extract embed src URL from iframe HTML
function extractEmbedUrl(html) {
  try {
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    const iframe = div.querySelector('iframe');
    return iframe ? iframe.src : '';
  } catch (_) {
    return '';
  }
}

// Build a reliable Google Maps embed URL from a text query (name + address)
function buildGoogleEmbedUrl(query) {
  const q = encodeURIComponent(query || '');
  if (!q) return '';
  return `http://googleusercontent.com/maps.google.com/maps?q=${q}&output=embed`;
}

// Opening animation on app load
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('app-enter');
  setTimeout(() => document.body.classList.remove('app-enter'), 900);
});

// In-app Map Modal logic
const mapModal = document.getElementById('map-modal');
const mapFrame = document.getElementById('map-frame');
const closeMapBtn = document.getElementById('close-map');

function openMapInModal({ title = 'Map', embedUrl, embedHtml }) {
  let url = embedUrl;
  if (!url && embedHtml) url = extractEmbedUrl(embedHtml);
  if (!url) return;
  document.getElementById('map-title').textContent = title;
  mapFrame.src = url;
  mapModal.style.display = 'block';
}

function closeMapModal() {
  mapModal.style.display = 'none';
  mapFrame.src = '';
}

closeMapBtn?.addEventListener('click', closeMapModal);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMapModal();
});

mapModal?.addEventListener('click', (e) => {
  if (e.target === mapModal) closeMapModal();
});

// Global handler for elements carrying data-embed-url
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-embed-url], [data-embed-html]');
  if (!trigger) return;
  e.preventDefault();
  const title = trigger.getAttribute('data-map-title') || 'Map';
  const embedUrl = trigger.getAttribute('data-embed-url');
  const embedHtml = trigger.getAttribute('data-embed-html');
  openMapInModal({ title, embedUrl, embedHtml });
});