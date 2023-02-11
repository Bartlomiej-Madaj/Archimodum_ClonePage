import { ProjectInterface, CurrentProjectInterface } from '../ts/interfaces/app_interfaces';

  export const architectureProjects: ProjectInterface[] = [
      {
        rootPath: 'pl-architecture',
        title: 'Koncepcja stacji metra Orizont',
        image: '/images/architecture/metro/35961d_740614170f3048cdae96c6c4c25d5824_mv2_d_1600_1200_s_2.webp'
      },
      {
        rootPath: 'pl-architecture',
        title: 'HOTEL & BUDYNKI MIESZKALNE PARATICO',
        image: '/images/architecture/hotel/35961d_ce0b15828ed6446eb2613e0667798995_mv2_d_4000_3000_s_4_2.webp',
      },
      {
        rootPath: 'pl-architecture',
        title: 'PORT TURYSTYCZNY MANGALIA',
        image: '/images/architecture/port/35961d_87eff8b55a894a6f9e5f4f5d8fca71dc_mv2_d_2400_1903_s_2.webp',
      },
      {
        rootPath: 'pl-architecture',
        title: 'CENTRUM HANDLOWE W LECCE',
        image: '/images/architecture/galeria/c1275e_1f789ba1e979452d82093ab8bd304034_mv2_d_4000_2816_s_4_2.webp',
      },
    ]
  
    export const interiorProjects: ProjectInterface[] = [
      {
        rootPath: 'pl-interiors',
        title: 'BUDYNEK BIUROWY ITALROM',
        image: '/images/interiors/biuro/c1275e_3e916e672d85495697007fddb4e463f6_mv2_d_2400_1800_s_2.webp'
      },
      {
        rootPath: 'pl-interiors',
        title: 'APARTAMENT W POZNANIU',
        image: '/images/interiors/apartament_poznan/35961d_2f74c6b74e864c97a6cfd6d1dffa8f4f_mv2_d_1600_1200_s_2.webp',
      },
      {
        rootPath: 'pl-interiors',
        title: 'NOWOCZESNE PRZEDSZKOLE',
        image: '/images/interiors/przedszkole/c1275e_f58437c738bc49e3b4951a756a2c5ac3_mv2_d_1600_1200_s_2.webp',
      },
    ]
  
    export const designProjects: ProjectInterface[] = [
      {
        rootPath: 'pl-design',
        title: 'ARCHITEKTURA PRZESTRZENI PUBLICZNYCH',
        image: '/images/design/ławka/35961d_69646eb050a646c8a2e16df52a4bc73f_mv2_d_2000_1333_s_2.webp'
      },
      {
        rootPath: 'pl-design',
        title: 'PROJEKTY LAMP',
        image: '/images/design/lampy/c1275e_ae27419894b043c782315d3ff02ce076_mv2_d_2560_1920_s_2.webp',
      },
      {
        rootPath: 'pl-design',
        title: 'STOŁY KONFERENCYJNE',
        image: '/images/design/stół/35961d_b13acffdff594bdcbe6d0eb8274c3e8b_mv2_d_4592_3056_s_4_2.webp',
      },
    ];

    export const projectsList = [
        {name: 'ARCHITEKTURA',
         description: '\"Architektura jest mądrą, skoordynowaną grą brył w świetle.\" ',
         author: 'Le Corbusier',
         image: '/images/architektura.webp',
         path: '/pl-architecture'
        },
        {name: 'WNĘTRZA',
         description: 'Projekt wnętrz jest naturalnym odbiciem duszy. Kluczem do dobrego projektu jest uchwycenie osobowości klienta oraz istoty tworzonej przestrzeni.',
         image: '/images/wnętrza.webp',
         path: '/pl-interiors'
        },
        {name: 'DESIGN',
         description: 'Dobry projekt zaczyna się od jeszcze lepszej opowieści.',
         image: '/images/design.webp',
         path: '/pl-design'
        },
      ];

    export const Projects: CurrentProjectInterface[] = [
        {
          country: "Bukareszt",
          title: "Koncepcja stacji metra orizont",
          year: "2016",
          description: `Projekt stacji metra Orizont w Bukareszcie. To nowy sposób podejścia do projektowania architektonicznego przestrzeni komunikacji publicznej. Specjalnie zaprojektowane oświetlenie oraz dobrana kolorystyka dają efekt przestronnych i pełnych światła wnętrz. Użyte materiały, w tym hartowane szkło ze specjalną anty-olśnieniową powłoką, zostały dobrane w taki sposób by ułatwić utrzymanie czystości i obsługę stacji bez negatywnego wpływu na jakość wizualną przestrzeni. 
              
              Przy współpracy z Italrom Inginerie Internationala, Bukareszt`,
          image: [
            "/images/architecture/metro/35961d_b4eec7c9d7f04946b8a1c1607768e630_mv2_d_1600_1200_s_2.webp",
            "/images/architecture/metro/35961d_740614170f3048cdae96c6c4c25d5824_mv2_d_1600_1200_s_2.webp",
            "/images/architecture/metro/35961d_ea49345219a44846a2f507c608a44c97_mv2_d_1600_1200_s_2.webp",
          ],
        },
        {
          country: "PARATICO, ITALIA",
          title: "HOTEL & BUDYNKI MIESZKALNE PARATICO",
          year: "2012",
          description: `Projekt hotelu oraz budynków mieszkaniowych nad jeziorem Iseo, we włoskim mieście Paratico. Głównym celem inwestycji było zapewnienie zrównoważonego rozwoju pomiędzy nowo projektowanymi, luksusowymi rezydencjami a istniejącym parkiem naturalnym „Taxodi”. Zmieszczenie dużej powierzchni użytkowej (24 000 m2) na stosunkowo małej działce (12 000 m2) wymagało zastosowania wielkopoziomowej konstrukcji. Prawie 60% budowli zostało przekrytych zielonym dachem z możliwością sadzenia roślin wysokich. Rozwiązanie to pozwoliło na umieszczenie powierzchni handlowych oraz parkingów na poziomie terenu, tworząc jednocześnie wysokiej jakości tereny zielone i ogrody prywatne na poziomie pierwszego piętra. Budynek hotelowy został umieszczony w pobliżu istniejącego parku, jego kształt i lokalizacja pozwoliło stworzyć spektakularny punkt widokowy na jezioro.
      
              Przy współpracy z Cargo11 Architetti, Włochy.`,
          image: [
            "/images/architecture/hotel/35961d_9079cfe0cceb4f478dafb36d10f64c5c_mv2_d_4000_1776_s_2.webp",
            "/images/architecture/hotel/35961d_ce0b15828ed6446eb2613e0667798995_mv2_d_4000_3000_s_4_2.webp",
            "/images/architecture/hotel/35961d_e53b82f839e944f183ee52be90180863_mv2_d_4000_3000_s_4_2.webp",
          ],
        },
        {
          country: "LECCE, ITALY",
          title: "CENTRUM HANDLOWE W LECCE",
          year: "2012",
          description: `Budynek objęty projektem mieści się w Lecce w południowych Włoszech, w ścisłym centrum miasta, przy jednej z głównych ulic. Obiekt, objęty ochroną konserwatora zabytków, pełnił wcześniej funkcję szkoły publicznej.  Ze względu na bardzo ograniczone możliwości ingerencji w istniejącą konstrukcję, nowe elementy architektoniczne oraz ciągi komunikacyjne zostały zaprojektowane bez naruszania oryginalnego budynku. Inspiracją dla koncepcji architektonicznej tego centrum handlowego były słynne lokalne twory skalne, powstałe przez erodującą wodę.  Ten prosty pomysł pomógł w dopasowaniu istniejącego, klasycznego budynku do nowej funkcji, poprzez wprowadzenie nowych chodów oraz ciągów komunikacyjnych jako silnych elementów architektonicznych, symbolizujących płynącą wodę.
              Przy współpracy z Studio Blast Architetti, Włochy.`,
          image: [
            "/images/architecture/galeria/c1275e_1f789ba1e979452d82093ab8bd304034_mv2_d_4000_2816_s_4_2.webp",
            "/images/architecture/galeria/c1275e_7e4bfeb0c8a6432cb5e08c978472d760_mv2_d_4000_2693_s_4_2.webp",
            "/images/architecture/galeria/c1275e_77c2d8ad66d441b288cc844abb0926f9_mv2_d_4000_3402_s_4_2.webp",
          ],
        },
        {
          country: "MANGALIA, ROMANIA",
          title: "PORT TURYSTYCZNY MANGALIA",
          year: "2013",
          description: `Projekt Portu Turystycznego w mieście Mangalia nad Morzem Czarnym był dużym wyzwaniem architektoniczno-urbanistycznym. Koncepcja zakładała stworzenie długiego bulwaru, składającego sie z prostych i czystych brył, które dałyby architektoniczną spójność i tchnęłyby życie w tą zaniedbaną przestrzeń. Teren projektu znajduje się w pobliżu dużej stoczni morskiej, która stwarzała poważne problemy logistyczne, związane z potrzebą częstego przerywania budowy. Najlepszym rozwiązaniem dla tego typu inwestycji okazała się koncepcja modularnych elementów, które mogą być łatwo transportowane i stawiane na docelowym miejscu bez fundamentów. Rozwiązanie takie dało możliwość etapowania procesu budowlanego, co zapewniło ciągłość produkcji elementów, elastyczność oraz niezależność od warunków ekonomicznych lokalnego rynku. Każdy budynek ma minimum dwa piętra. Na poziomie terenu, usytuowane są moduły o funkcji handlowo-usługowej dla mariny: restauracje, kawiarnie, wypożyczalnie łodzi i sprzętu do nurkowania itp. Na poziomie piętra znajdują się pokoje hotelowe w systemie “diffused” z widokiem na morze.
      
              Przy współpracy z Studio Blast Architetti, Włochy.`,
          image: [
            "/images/architecture/port/35961d_01b8d2f394b944adbfa08ede6633f0ed_mv2_d_2394_1536_s_2.webp",
            "/images/architecture/port/35961d_87eff8b55a894a6f9e5f4f5d8fca71dc_mv2_d_2400_1903_s_2.webp",
            "/images/architecture/port/35961d_9482a6447c5a45b29600fdbab362fa8e_mv2_d_2400_1564_s_2.webp",
          ],
        },
        {
          country: "BUCAREST, ROMANIA",
          title: "BUDYNEK BIUROWY ITALROM",
          year: "2015",
          description: `Projekt wnętrz budynku biurowego Italrom w Bukareszcie został wykonany dla firmy zajmującej się projektowaniem konstrukcji mostowych i podziemnych. Ze względu na bardzo wąską działkę, nowo powstały budynek ma 6 pięter i jest wyższy od sąsiedniej zabudowy. W projekcie wnętrz wykorzystano surowe i podstawowe materiały (jak beton, stal i szkło), które odwołują się bezpośrednio do branży w której działa Inwestor, dodając charakterystyczne akcenty kolorystyczne, nawiązujące do koloru loga firmy. Ideą projektu było podkreślenie prostoty i funkcjonalności, które są głównymi cechami branży konstrukcyjnej Inwestora. Każde piętro budynku ma inną funkcję. Na parterze zlokalizowano recepcję i przestrzenie wspólne dla pracowników (kuchnia i jadalnia). Drugie i trzecie piętro to przestrzenie przeznaczone do pracy typu open-space oraz pomieszczenia pomocnicze, takie jak sale spotkań, sale projekcyjne, serwerownia i ploterownia. Na czwartym i piątym piętrze znajdują się biura zarządu spółki, administracja oraz sale konferencyjne. Szóste piętro mieści ogólnodostępną przestrzeń wypoczynkową z tarasem z którego rozpościera sie widok na miasto.
          Zaprojektowano dla IRP Biuro Projektów sp. z o.o.`,
          image: [
            "/images/interiors/biuro/c1275e_3e916e672d85495697007fddb4e463f6_mv2_d_2400_1800_s_2.webp",
            "/images/interiors/biuro/c1275e_ca9635c793ea48788e27c5f00b166c93_mv2_d_2400_1800_s_1.webp",
            "/images/interiors/biuro/c1275e_ca9635c793ea48788e27c5f00b166c93_mv2_d_2400_1800_s_2.webp",
          ],
        },
        {
          country: "PONTECAGNANO, ITALY",
          title: "NOWOCZESNE PRZEDSZKOLE",
          year: "2009",
          description: `Projekt przedszkola o powierzchni 350 mkw, mieszczącego się w centrum handlowym powstał dla klienta prywatnego. Główną ideą projektu było stworzenie innowacyjnej przestrzeni edukacyjnej, która stymulowałaby kreatywność  i nieograniczoną wyobraźnię u dzieci. Przestrzeń przedszkola została podzielona na wiele pomieszczeń o różnych funkcjach dydaktycznych, takich jak: teatr, malowanie, gotowanie, rozwój zmysłów i zajęcia sportowe. Każde z pomieszczeń zostało odpowiednio zaprojektowane przy współpracy z wyspecjalizowanym psychologiem dziecięcym, czego rezultatem jest przemyślany dobór odcieni kolorów, materiałów i wyposażenia wnętrz. Rezultatem jest układ przestrzeni, które oddziałują na dziecko w sposób odpowiedni do funkcji pomieszczenia i celu dydaktycznego.
      
          Przy współpracy z Studio Blast Architetti, Włochy.`,
          image: [
            "/images/interiors/przedszkole/c1275e_ac7c57b5fe3146d1be66e616383f38a0_mv2_d_1600_1200_s_2.webp",
            "/images/interiors/przedszkole/c1275e_e4259c66637742cc9c52305076c7a0ad_mv2_d_1600_1200_s_2.webp",
            "/images/interiors/przedszkole/c1275e_f58437c738bc49e3b4951a756a2c5ac3_mv2_d_1600_1200_s_2.webp",
          ],
        },
        {
          country: "POZNAN, POLAND",
          title: "APARTAMENT W POZNANIU",
          year: "2012",
          description: `Projekt wnętrz apartamentu mieszczącego się w zabytkowym budynku był bardzo trudnym zadaniem ze względu na wiele technicznych problemów związanych z wiekiem budynku i rozmieszczeniem instalacji. Koncepcją projektową było stworzenie eleganckiej, lecz jednocześnie prostej i funkcjonalnej przestrzeni mieszkalnej. Celem poprawienia jakości przestrzeni, wykorzystano naturalne i rustykalne materiały, takie jak dębowe podłogi i ręcznie robione płytki. Stonowana kolorystyka w pomieszczeniach, doskonale łączący klasykę z nowoczesnością.`,
          image: [
            "/images/interiors/apartament_poznan/35961d_2f74c6b74e864c97a6cfd6d1dffa8f4f_mv2_d_1600_1200_s_2.webp",
            "/images/interiors/apartament_poznan/c1275e_a7d5cb5a8da1499dac179b02af25d56f.webp",
            "/images/interiors/apartament_poznan/c1275e_ff6e03f44d4744fcbba5c013cc6e86fd_mv2_d_1600_1200_s_2.webp",
          ],
        },
        {
          country: "MILAN, ITALY",
          title: "ARCHITEKTURA PRZESTRZENI PUBLICZNYCH",
          year: "2010",
          description: `Ławka DISTESA to projekt małej architektury, wykonany dla firmy LAB23. Powierzchnia do siedzenia została wykonana z napiętych kabli stalowych, które tworzą lekką i jednocześnie agresywną formę. Efekt sprężynowania sprawia, że ławka jest wyjątkowo wygodna do siedzenia. Szczególne rozwiązanie konstrukcyjne tej ławki sprawia, że zajmuje ona bardzo mało miejsca podczas transportu.
          Ławka NET to nowe spojrzenie na małą architekturę przestrzeni publicznych. Została zaprojektowana w szczególności z myślą o placach zabaw oraz prywatnych ogrodach. Ławka jest bardzo ergonomiczna i wygodna.`,
          image: [
            "/images/design/ławka/35961d_69646eb050a646c8a2e16df52a4bc73f_mv2_d_2000_1333_s_2.webp",
            "/images/design/ławka/c1275e_c42de3fe49524963b66f4c4698fc370c_mv2_d_1600_1200_s_2.webp",
            "/images/design/ławka/c1275e_ec813aecbe364bc58012eb61b16b55b0_mv2_d_1600_1200_s_2.webp",
          ],
        },
        {
          country: "WARSAW, POLAND",
          title: "PROJEKTY LAMP",
          year: "2015",
          description: `Jest to wybór projektów lamp dla prywatnych klientów. Formy te narodziły się z potrzeby wprowadzenia silnego kontrastu do nowoczesnych, minimalistycznych przestrzeni.
          Lampa GRU jest nowoczesnym rozwiązaniem dla przestrzeni biurowych, zainspirowaną formą dźwigu budowlanego.
          Lampy CABLE to wytrzymałe, stalowe konstrukcje, które dają wrażenie lekkości i transparentności. Po zapaleniu, lampa CABLE rzuca na ściany i sufit losowe liniowe cienie, które tworzą fantastyczny efekt w pomieszczeniu.
          Lampa STEALTH, to prosta forma, powstała tylko z niezbędnych płaszczyzn. Nowoczesna technologia oświetleniowa oraz wycinanie metalu technologią CNC pozwoliły na stworzenie tej nietuzinkowej formy.
          Wszystkie lampy zostały wykonane z materiałów pochodzących z recyklingu lub podlegających recyklingowi.`,
          image: [
            "/images/design/lampy/c1275e_61ada668d87c43eda1284943614e290e_mv2_d_1920_2560_s_2.webp",
            "/images/design/lampy/c1275e_abf8adeb333a45c3be81bd587df2d835_mv2_d_2560_1920_s_2.webp",
            "/images/design/lampy/c1275e_ae27419894b043c782315d3ff02ce076_mv2_d_2560_1920_s_2.webp",
          ],
        },
        {
          country: "WARSAW, POLAND",
          title: "STOŁY KONFERENCYJNE",
          year: "2015",
          description: `Stół konferencyjny projektu Archimodum to bardzo szczególna konstrukcja, w której duża tafla szkła (wymiary: 1,20 x 2,40 m) w sposób zintegrowany współdziała statycznie ze stalowymi nogami. Głównym celem projektu było stworzenie solidnego mebla, który przy swoich dużych wymiarach zachowałby jednocześnie lekka i niematerialną formę. Stół został zaprojektowany na potrzeby powierzchni biurowych,  jednak może również być wykorzystany w mieszkaniach.`,
          image: [
            "/images/design/stół/35961d_b13acffdff594bdcbe6d0eb8274c3e8b_mv2_d_4592_3056_s_4_2.webp",
            "/images/design/stół/c1275e_2f22049662f84282aae92ad0db7816ef_mv2_d_4592_3056_s_4_2.webp",
            "/images/design/stół/c1275e_5d036f0b340e44168969c5f921ef613c_mv2_d_4592_3056_s_4_2.webp",
          ],
        },
      ];